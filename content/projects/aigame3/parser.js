const MAX_STACK = 40;

class Node {
    constructor(type, value) {
        this.type = type;
        this.value = value;
        this.eval = this;
        this.children = [];
    }
}

class Context {
    constructor() {
        this.stack = [globals, {}];
    }
}

function isNonSpace(c) {
    return c !== " " && c !== "\n";
}

function parse(code) {
    code = "(do " + code.trim() + ")";
    function _parse() {
        code = code.trimLeft();
        c = code[0];
        code = code.slice(1);
        if (code.length == 0) {
            return null;
        } else if (c === "(") {
            var toRet = new Node("function", "function");
            while (code[0] !== ")" && code[0]) {
                var n = _parse();
                if (n) {
                    toRet.children.push(n);
                }
            }
            code = code.slice(1);
            return toRet;
        } else if ((c >= "0" && c <= "9") || c == "." || c == "-") {
            num = c;
            while (isNonSpace(code[0]) && code[0] !== ")" && code[0]) {
                num += code[0];
                if (code[0] !== ")") {
                    code = code.slice(1);
                }
            }
            if (num === "-") {
                return new Node("identifer", num);
            } else {
                return new Node("float", parseFloat(num));
            }
        } else if (c === "'" && code[0] === "(") {
            var toRet = new Node("list", "");
            code = code.slice(1);
            while (code[0] !== ")" && code[0]) {
                var n = _parse();
                if (n) {
                    toRet.children.push(n);
                }
            }
            code = code.slice(1);
            return toRet;
        } else if (c === '#') {
            var toRet = new Node("boolean", (code[0] === "t"));
            code = code.slice(1);
            return toRet;
        } else if (c === "\"") {
            var str = "";
            while (code[0] !== "\"" && code[0]) {
                if (code[0] === "\\") {
                    if (code[1] === "\"") {
                        str += "\"";
                        code = code.slice(2);
                    }
                } else {
                    str += code[0];
                    code = code.slice(1);
                }
            }
            code = code.slice(1);
            return new Node("string", str);
        } else if (c === ")") {
            code = ")" + code;
            return null;  
        } else if (c === ";") {
            while (code[0] !== "\n" && code[0]) {
                code = code.slice(1);
            }
            code = code.slice(1);
            return _parse();
        } else {
            var id = c;
            while (isNonSpace(code[0]) && code[0] !== ")" && code[0]) {
                id += code[0];
                if (code[0] !== ")") {
                    code = code.slice(1);
                }
            }
            return new Node("identifier", id);
        }
    }
    return _parse();
}

var globals = {"nil": new Node("list","")};
var gFunMap = {
    ""       : _user,
    "def"    : _def,
    "isdef?" : _isdef,
    "+"      : _add,
    "-"      : _sub,
    "/"      : _div,
    "*"      : _mul,
    "if"     : _if,
    "do"     : _do,
    "cons"   : _cons,
    "cdr"    : _cdr,
    "car"    : _car,
    "scar"   : _scar,
    "scdr"   : _scdr,
    "|"      : _or,
    "&"      : _and,
    "fun"    : _fun,
    "="      : _equals,
    "let"    : _let,
    "d"      : function(c, n){console.log(_eval(c, n.children[1]).eval);}
};

function eval(root) {
    var context = new Context();
    return _eval(context, root);
}

function _eval(c, n) {
    if (c.stack.length > MAX_STACK) {
        console.log("STACK OVERFLOW!");
        return null;
    }
    switch (n.type) {
        case "string":
        case "float":
        case "boolean":
        case "code":
            n.eval = n;
            return n;
        case "list":
            for (var i = 0; i < n.children.length; i++) {
                _eval(c, n.children[i]);
            }
            n.eval = n;
            return n;
        case "identifier":
            for (var i = c.stack.length - 1; i >= 0; i--) {
                if (c.stack[i] && (n.value in c.stack[i])) {
                    n.eval = c.stack[i][n.value];
                    return n;
                }
            }
            return n;
        case "function":
            if (n.children[0].type === "function") {
                _call(c, n);
            } else {
                (gFunMap[n.children[0].value] || _named)(c, n);
            }
        return n;
    }
}

function setCallVars(c, frame, vars, vals) {
    for (var i = 0; i < vars.children.length - 1; i += 1) {
        frame[vars.children[i].value] = _eval(c, vals[i]).eval;
    }
    if (vars.children.length > 0) {
        var lastVar = vars.children[vars.children.length - 1].value;
        if (lastVar.endsWith('...')) {
            lastVar = lastVar.slice(0, -3);
            var last = new Node("list", "");
            last.children = vals.slice(vars.children.length - 1);
            frame[lastVar] = _eval(c, last).eval;
        } else {
            frame[lastVar] = _eval(c, vals[vars.children.length - 1]).eval;
        }
    }
}

function _call(c, n) {
    n.eval = _eval(c, n.children[0]).eval;
    //if (n.children[0].type === "code" ||
    //    n.children[0].type === "function") {
        var vars = _eval(c, n.eval.children[0]).eval;
        var vals = n.children.slice(1);
        var frame = n.eval.context;

        setCallVars(c, frame, vars, vals);

        c.stack.push(frame);
        n.eval = _eval(c, n.eval.children[1]).eval;
        c.stack.pop();
    //}
}
function _named(c, n) {
    var fn = null;
    for (var i = c.stack.length - 1; i >= 0; i--) {
        if (n.children[0].value in c.stack[i]) {
            fn = c.stack[i][n.children[0].value];
            break;
        }
    }
    _user(c, n, fn);
}
function _user(c, n, r) {
    if (!r) {
        r = n.children[0];
    }
    n.eval = _eval(c, r).eval;
    var vars = _eval(c, r.children[0]).eval;
    var vals = n.children.slice(1);
    var frame = r.context || {};

    setCallVars(c, frame, vars, vals);

    c.stack.push(frame);
    n.eval = _eval(c, r.children[1]).eval;
    c.stack.pop();
}
function _fun(c, n) {
    _eval(c, n.children[1]);
    n.eval = new Node("code", "");
    n.eval.context = c.stack.slice()[c.stack.length - 2];
    n.eval.children = n.children.slice(1);
    n.eval.eval = n.eval;
}
function _let(c, n) {
    var pairs = _eval(c, n.children[1]).eval.children;
    for (var i = 1; i < pairs.length; i+=2) {
        _eval(c, pairs[i]);
    }
    var frame = {};
    for (var i = 0; i < pairs.length; i+=2) {
        frame[pairs[i].value] = pairs[i+1].eval;
    }
    c.stack.push(frame);
    n.eval = _eval(c, n.children[2]).eval;
    c.stack.pop();
}
function _isdef(c, n) {
    n.eval = new Node("boolean", false);
    for (var i = c.stack.length - 1; i >= 0; i--) {
        if (n.children[1].value in c.stack[i]) {
            n.eval.value = true;
            break;
        }
    }
}
function _def(c, n) {
    for (var i = 1; i < n.children.length; i+=2) {
        globals[n.children[i].value] = _eval(c, n.children[i+1]).eval;
    }
}
function _or(c, n) {
    for (var i = 1; i < n.children.length; i++) {
        n.eval = _eval(c, n.children[i]).eval;
        if (n.eval.value && n.eval.type === "boolean") break;
    }
}
function _and(c, n) {
    for (var i = 1; i < n.children.length; i++) {
        n.eval = _eval(c, n.children[i]).eval;
        if (!n.eval.value && n.eval.type === "boolean") break;
    }
}
function _sub(c, n) {
    n.eval = _eval(c, n.children[1]).eval.value;
    for (var i = 2; i < n.children.length; i++) {
        n.eval -= _eval(c, n.children[i]).eval.value;
    }
    n.eval = new Node("float", n.eval);
}
function _div(c, n) {
    n.eval = _eval(c, n.children[1]).eval.value;
    for (var i = 2; i < n.children.length; i++) {
        n.eval /= _eval(c, n.children[i]).eval.value;
    }
    n.eval = new Node(n.children[1].type, n.eval);
}
function _mul(c, n) {
    n.eval = _eval(c, n.children[1]).eval.value;
    for (var i = 2; i < n.children.length; i++) {
        n.eval *= _eval(c, n.children[i]).eval.value;
    }
    n.eval = new Node(n.children[1].type, n.eval);
}
function _add(c, n) {
    n.eval = _eval(c, n.children[1]).eval.value;
    for (var i = 2; i < n.children.length; i++) {
        n.eval += _eval(c, n.children[i]).eval.value;
    }
    n.eval = new Node(n.children[1].type, n.eval);
}
function _equals(c, n) {
    var a = _eval(c, n.children[1]).eval;
    var b = _eval(c, n.children[2]).eval;

    n.eval = new Node("boolean", a.value === b.value && a.type === b.type);

    if (n.children[1].eval.type === "list" &&
        n.children[2].eval.type === "list") {
        n.eval.value = true;
        if (n.children[1].eval.children.length != 
            n.children[2].eval.children.length) {
            n.eval.value = false;
        } else {
            for (var i=n.children[1].eval.children.length;i--;) {
                if (n.children[1].eval.children[i].eval.value !==
                    n.children[2].eval.children[i].eval.value) {
                    n.eval.value = false; break;
                }
            }
        }
    }
}
function _do(c, n) {
    for (var i = 1; i < n.children.length; i++) {
        n.eval = _eval(c, n.children[i]).eval;
    }
}
function _if(c, n) {
    var cond = _eval(c, n.children[1]).eval.value;
    if (cond === false) {
        n.eval = _eval(c, n.children[3]).eval;
    } else {
        n.eval = _eval(c, n.children[2]).eval;
    }
}
function _type(c, n) {
    n.eval = new Node("string", _eval(c, n.children[1]).eval.type);
}
function _scar(c, n) {
    n.eval = new Node("string", _eval(c, n.children[1]).eval.value[0]);
}
function _scdr(c, n) {
    n.eval = new Node("string", _eval(c, n.children[1]).eval.value.slice(1));
}
function _car(c, n) {
    n.eval = _eval(c, n.children[1]).eval.children[0].eval;
}
function _cdr(c, n) {
    n.eval = new Node("list", "");
    n.eval.children = _eval(c, n.children[1]).eval.children.slice(1);
    n.eval.eval = n.eval;
}
function _cons(c, n) {
    n.eval = new Node("list", "");
    var b = _eval(c, n.children[n.children.length - 1]).eval;
    n.eval.children = b.children.slice(); //copy array
    for (var i = n.children.length - 1; i-- - 1;) {
        n.eval.children.unshift(_eval(c, n.children[i]).eval);
    }
    n.eval.eval = n.eval;
}

function stringify(node) {
    function _stringify(n) {
        switch (n.eval.type) {
            case "list":
                var toRet = "'(";
                for (var i = 0; i < n.eval.children.length; i++) {
                    if (i > 0) toRet += " ";
                    toRet += _stringify(n.eval.children[i]);
                }
                return toRet + ")";
            case "code":
                var toRet = "&ltfunction over '(";
                for (var i = 0; i < n.eval.children[0].children.length; i++) {
                    if (i > 0) toRet += " ";
                    toRet += n.eval.children[0].children[i].value;
                }
                return toRet + ")&gt";
            default:
                return "" + n.eval.value;
        }
    }
    return _stringify(node);
}
