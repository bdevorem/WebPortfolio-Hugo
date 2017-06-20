class Node {
    constructor(type, value) {
        this.type = type;
        this.value = value;
        this.eval = this;
        this.children = [];
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

function eval(root) {
    var stack = [globals, {}];
    function _eval(n) {
    switch (n.type) {
        case "string":
        case "float":
        case "boolean":
        case "code":
            n.eval = n;
            return n;
        case "list":
            for (var i = 0; i < n.children.length; i++) {
                _eval(n.children[i]);
            }
            n.eval = n;
            return n;
        case "identifier":
            for (var i = stack.length - 1; i >= 0; i--) {
                if (n.value in stack[i]) {
                    n.eval = stack[i][n.value];
                    return n;
                }
            }
            return n;
        case "function":
            if (n.children[0].type !== "function") {
            switch (n.children[0].value) {
            case "fun":
                _eval(n.children[1]);
                n.eval = new Node("code", "");
                n.eval.context = stack.slice()[stack.length - 1];
                console.log(stack);
                n.eval.children = n.children.slice(1);
                n.eval.eval = n.eval;
            break;
            case "let":
                var pairs = _eval(n.children[1]).eval.children;
                for (var i = 1; i < pairs.length; i+=2) {
                    _eval(pairs[i]);
                }
                var frame = {};
                for (var i = 0; i < pairs.length; i+=2) {
                    frame[pairs[i].value] = pairs[i+1].eval;
                }
                stack.push(frame);
                n.eval = _eval(n.children[2]).eval;
                stack.pop();
            break;
            case "isdef?":
                n.eval = new Node("boolean", false);
                for (var i = stack.length - 1; i >= 0; i--) {
                    if (n.children[1].value in stack[i]) {
                        n.eval.value = true;
                        break;
                    }
                }
            break;
            case "def":
                for (var i = 1; i < n.children.length; i+=2) {
                    globals[n.children[i].value] = 
                            _eval(n.children[i+1]).eval;
                }
            break;
            case "|":
                for (var i = 1; i < n.children.length; i++) {
                    n.eval = _eval(n.children[i]).eval;
                    if (n.eval.value && n.eval.type === "boolean") break;
                }
            break;
            case "&":
                for (var i = 1; i < n.children.length; i++) {
                    n.eval = _eval(n.children[i]).eval;
                    if (!n.eval.value && n.eval.type === "boolean") break;
                }
            break;
            case "-":
                n.eval = _eval(n.children[1]).eval.value;
                for (var i = 2; i < n.children.length; i++) {
                    n.eval -= _eval(n.children[i]).eval.value;
                }
                n.eval = new Node("float", n.eval);
            break;
            case "/":
                n.eval = _eval(n.children[1]).eval.value;
                for (var i = 2; i < n.children.length; i++) {
                    n.eval /= _eval(n.children[i]).eval.value;
                }
                n.eval = new Node(n.children[1].type, n.eval);
            break;
            case "*":
                n.eval = _eval(n.children[1]).eval.value;
                for (var i = 2; i < n.children.length; i++) {
                    n.eval *= _eval(n.children[i]).eval.value;
                }
                n.eval = new Node(n.children[1].type, n.eval);
            break;
            case "+":
                n.eval = _eval(n.children[1]).eval.value;
                for (var i = 2; i < n.children.length; i++) {
                    n.eval += _eval(n.children[i]).eval.value;
                }
                n.eval = new Node(n.children[1].type, n.eval);
            break;
            case "=":
                n.eval = new Node("boolean", 
                    _eval(n.children[2]).eval.value === 
                    _eval(n.children[1]).eval.value);
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
            break;
            case "do":
                for (var i = 1; i < n.children.length; i++) {
                    n.eval = _eval(n.children[i]).eval;
                }
            break;
            case "if":
                var cond = _eval(n.children[1]).eval.value;
                if (cond === false) {
                    n.eval = _eval(n.children[3]).eval;
                } else {
                    n.eval = _eval(n.children[2]).eval;
                }
            break;
            case "type":
                n.eval = new Node("string",
                                  _eval(n.children[1]).eval.type);
            break;
            case "scar":
                n.eval = new Node("string",
                                 _eval(n.children[1]).eval.value[0]);
            break;
            case "scdr":
                n.eval = new Node("string",
                                 _eval(n.children[1]).eval.value.slice(1));
            break;
            case "car":
                n.eval = _eval(n.children[1]).eval.children[0].eval;
            break;
            case "cdr":
                n.eval = new Node("list", "");
                n.eval.children = _eval(n.children[1]).
                                  eval.children.slice(1);
                n.eval.eval = n.eval;
            break;
            case "cons":
                n.eval = new Node("list", "");
                var b = _eval(n.children[n.children.length - 1]).eval;
                n.eval.children = b.children.slice(); //copy array
                for (var i = n.children.length-1;i-- - 1;) {
                    n.eval.children.unshift(_eval(n.children[i]).eval);
                }
                n.eval.eval = n.eval;
            break;
            default:
                for (var i = stack.length - 1; i >= 0; i--) {
                    if (n.children[0].value in stack[i]) {
                        n.children[0] = stack[i][n.children[0].value];
                        break;
                    }
                }
            case "":
                n.eval = _eval(n.children[0]).eval;
                var vars = _eval(n.children[0].children[0]).eval;
                var vals = n.children.slice(1);
                var frame = {};
                for (var i = 0; i < vals.length; i += 1) {
                    frame[vars.children[i].value] = _eval(vals[i]).eval;
                }
                stack.push(frame);
                stack.push(n.children[0].context);
                n.eval = _eval(n.children[0].children[1]).eval;
                stack.pop();
            break;
            }} else {
                n.eval = _eval(n.children[0]).eval;
                if (n.children[0].type === "code" ||
                    n.children[0].type === "function") {
                    console.log(n);
                    var vars = _eval(n.eval.children[0]).eval;
                    var vals = n.children.slice(1);
                    var frame = n.eval.context;
                    console.log(frame);
                    for (var i = 0; i < vals.length; i += 1) {
                        frame[vars.children[i].value] = _eval(vals[i]).eval;
                    }
                    stack.push(frame);
                    n.eval = _eval(n.eval.children[1]).eval;
                    stack.pop();
                }
            }
        return n;
    }
    }
    return _eval(root);
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
