const IN3_TO_FLOZ = 0.55411255411255;

function area(n, s) {
    var p = s*n;
    var a = s/(2 * Math.tan(Math.PI/n));
    return a*p/2;
}

function inner(n, s, t) {
    var atan = Math.atan(Math.PI/n);
    var cut = atan * t;
    return s - 2*cut;
}

function cup(n, s, t, h) {
    //n: number of sides
    //s: width of each side (thickness of wood)
    //t: depth of each side (thickness of cut)
    //h: height of cut (length of each side)
    var inside = inner(n, s, t);
    var base = area(n, inside);
    return base*h;
}

var c = cup(8, 1.5, 0.25, 6);
console.log(c*IN3_TO_FLOZ);

var c = cup(12, 0.75, 0.25, 6);
console.log(c);
