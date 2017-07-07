//VERSION 2
const THRUST_VAL = 2000;
const MAX_FORCE = Infinity;

var editor = ace.edit("editor");
editor.setTheme("ace/theme/chrome");
editor.setAutoScrollEditorIntoView(true);
editor.setOption("maxLines", 30);
editor.getSession().setMode("ace/mode/lisp");

var game = game = new Phaser.Game(600, 600, Phaser.AUTO, 'game_div',
    {preload: preload, create: create, update: update, render: render,
     scaleMode:  Phaser.ScaleManager.SHOW_ALL,});
var robot_root = null;
var runner = null;
var all_parts = [];

function start() {
    var e = eval(parse(ace.edit('editor').getValue()));
    if (globals && 'run' in globals) {
        if (!runner) {
            $("#but").text("Reload Script");
        }
        runner = new Node("function", "");
        runner.children = [new Node("identifier", "run")];
    }
}

function preload() {
    game.load.image('block', 'block.png');
    game.load.image('wheel', 'wheel.png');
    game.time.advancedTiming = true;
    game.stage.disableVisibilityChange = true;
    game.input.enabled = false;
    game.input.touch.preventDefault = false;
    Phaser.Canvas.setTouchAction(game.canvas, "auto");
    game.scale.m
    game.scale.refresh();
}

function add_part(type, base, v, h) {
    var n = null;
    if (base) {
        n = game.add.sprite(base.x-(32*h), base.y-(32*v), type);
        game.physics.p2.enable(n);
        var a;
        if (h == 1 && v == 0) {
            a = 180;
        } else if (h == -1 && v == 0) {
            a = 0;
        } else if (h == 0 && v == 1) {
            a = 270;
        } else {
            a = 90;
        }
        n.body.angle = a;
        base.robot_children.push(n);
        game.physics.p2.createLockConstraint(base, n,
        [-32*Math.cos(n.body.rotation - base.body.rotation),
         -32*Math.sin(n.body.rotation - base.body.rotation)],
        (a - base.body.angle) * Math.PI/180,
        MAX_FORCE);
    } else {
        n = game.add.sprite(200, 200, type);
        game.physics.p2.enable(n);
    }
    n.body.damping = 0.9;
    n.robot_speed = 0;
    n.robot_children = [];
    n.type = type;
    n.id = all_parts.length;
    all_parts.push(n);
    return n;
}

function create() {

    game.physics.startSystem(Phaser.Physics.P2JS);

    game.stage.backgroundColor = '#21a2ec';

    robot_root = add_part('block');
    var front = add_part('block', robot_root, 1, 0); //1
    var back = add_part('block', robot_root, -1, 0); //2
    var lf = add_part('wheel', front, 0, -1);        //3
    var rf = add_part('wheel', front, 0, 1);         //4
    var lm = add_part('wheel', robot_root, 0, -1);   //5
    var rm = add_part('wheel', robot_root, 0, 1);    //6
    var lb = add_part('wheel', back, 0, -1);         //7
    var rb = add_part('wheel', back, 0, 1);          //8
}

function update() {
    if (runner) {
        eval(runner);
    }
    for (var i = 0; i < all_parts.length; i++) {
        if (all_parts[i].robot_speed != 0) {
            all_parts[i].body.thrust(all_parts[i].robot_speed * THRUST_VAL);
        }
    }
}

function render() {
    game.debug.text(game.time.fps || '--', 2, 14, "#00ff00");  
}

//Add function to parser
gFunMap['go'] = function(c, n) {
    var which = _eval(c, n.children[1]).eval.value;
    if (n.children.length > 2) {
        n.eval = _eval(c, n.children[2]).eval;
        var val = Math.min(Math.max(n.eval.value, -1), 1);
        n.eval = new Node("float", val);
        if (all_parts[which].type == "wheel") {
            all_parts[which].robot_speed = (val);
        }
    } else {
        n.eval = new Node("float", all_parts[which].robot_speed);
    }
}
gFunMap['part#'] = function(c, n) {
    var which = _eval(c, n.children[1]).eval.value;
    n.eval = new Node("part", all_parts[which]);
}
function part(c, n) {
    var which = n.children[0].eval.value;
    if (n.children.length > 1) {
        n.eval = _eval(c, n.children[1]).eval;
        var val = Math.min(Math.max(n.eval.value, -1), 1);
        n.eval = new Node("float", val);
        if (which.type == "wheel") {
            which.robot_speed = (val);
        }
    } else {
        n.eval = new Node("float", which.robot_speed);
    }
}
