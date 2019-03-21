const CELL_PREFIX = 'cell_'
const NUMPIXELS = 32;
const FPS = 50;
const MIN = 0;
const MAX = 255;

function parse(code) {
    eval(code);
}

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

    function cap(s) {
        if (s < MIN) return MIN;
        if (s > MAX) return MAX;
        return Math.floor(s);
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

});
