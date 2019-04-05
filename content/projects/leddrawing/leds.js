const CELL_PREFIX = 'cell_'
const NUMPIXELS = 32;
const FPS = 50;
const MIN = 0;
const MAX = 255;

function parse(code) {
    var error = console.error;
    var log = console.log;
    var msg = [];
    console.error = function(e) {
        msg.push('<code>' + e + '</code>');
    }
    console.log = function(e) {
        msg.push(e);
    }
    try {
        eval(code);
        msg.push('Success');
    }
    catch(err) {
        msg.push('<code>' + err + '</code>');
    }
    console.error = error;
    console.log = log;
    return msg.join('<br>');
}

step = function(t) {

};

$(function() {
    var gTime = 0;
    var gColors = [];

    var palette = $('ul#ledstrip');
    for (var i = 0; i < NUMPIXELS; i++) {
        var n = $('<li />').css('background-color', '#000000').css('width', 100/NUMPIXELS + "%");
        n.attr('id', CELL_PREFIX + i);
        palette.append(n);
        gColors.push({'r': 0, 'g': 0, 'b': 0});
    }

    function import_math() {
        var l = Object.getOwnPropertyNames(Math);
        for(var m in l) {
            window[l[m]] = Math[l[m]];
        }
    }

    function cap(s) {
        var gamma = [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
                     0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  1,  1,  1,
                     1,  1,  1,  1,  1,  1,  1,  1,  1,  2,  2,  2,  2,  2,  2,  2,
                     2,  3,  3,  3,  3,  3,  3,  3,  4,  4,  4,  4,  4,  5,  5,  5,
                     5,  6,  6,  6,  6,  7,  7,  7,  7,  8,  8,  8,  9,  9,  9, 10,
                     10, 10, 11, 11, 11, 12, 12, 13, 13, 13, 14, 14, 15, 15, 16, 16,
                     17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 24, 24, 25,
                     25, 26, 27, 27, 28, 29, 29, 30, 31, 32, 32, 33, 34, 35, 35, 36,
                     37, 38, 39, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 50,
                     51, 52, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 66, 67, 68,
                     69, 70, 72, 73, 74, 75, 77, 78, 79, 81, 82, 83, 85, 86, 87, 89,
                     90, 92, 93, 95, 96, 98, 99,101,102,104,105,107,109,110,112,114,
                     115,117,119,120,122,124,126,127,129,131,133,135,137,138,140,142,
                     144,146,148,150,152,154,156,158,160,162,164,167,169,171,173,175,
                     177,180,182,184,186,189,191,193,196,198,200,203,205,208,210,213,
                     215,218,220,223,225,228,231,233,236,239,241,244,247,249,252,255];
        if (s < MIN) return MIN;
        if (s > MAX) return MAX;
        var t = ~~s;
        //force quantization
        for (var i = MIN; i < MAX; i++) {
            if (gamma[i] >= t) {
                return gamma[i];
            }
        }
        return MAX;
    }

    function set(index, r, g, b) {
        if (index >= 0 && index < NUMPIXELS) {
            pixel = gColors[index];
            if (pixel) {
                pixel.r = cap(r);
                pixel.g = cap(g);
                pixel.b = cap(b);
            }
        }
    }

    function get(index) {
        if (index >= 0 && index < NUMPIXELS) {
            return gColors[index];
        }
        return null;
    }

    function update() {
        for (var i = 0; i < NUMPIXELS; i++) {
            var pixel = gColors[i];
            if (pixel) {
                var color = 'rgb(' + pixel.r + ',' + pixel.g + ',' + pixel.b + ')';
                $('li#' + CELL_PREFIX + i).css('background-color', color);
            }
        }
    }

    setInterval(function (){
        step(gTime);
        update();
        gTime += 1;
    }, 1000/FPS);

    window.set = set;
    window.get = get;
    window.import_math = import_math;

});
