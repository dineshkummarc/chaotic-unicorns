/*
var min = function (s1,s2) {if(s2>s1) return s1; else return s2};
var max = function (s1,s2) {if(s1>s2) return s1; else return s2};

var vmag = function (vec) {return Math.sqrt(vec.x*vec.x+vec.y*vec.y);};
var vmul = function (vec,a) {return {x: vec.x*a, y: vec.y*a}};
var vnorm = function (vec) {return vmul(vec, 1 / vmag(vec));};
var vadd = function (a,b) {return {x:a.x+b.x, y:a.y+b.y};};
var vsub = function (a,b) {return {x:a.x-b.x, y:a.y-b.y};};
*/
// canvas
var initSprings = function () {}
var updateSprings = function () {}
var updateCanvas = function () {
/*    var obj = $("#canvas");
    var canvas = obj[0];
    canvas.height = obj.height();
    canvas.width  = obj.width();
    var offset = obj.offset();
    var g = canvas.getContext("2d");
    g.clearRect(0, 0, canvas.width, canvas.height);
    g.beginPath();
    var cache = {};
    $(".node").each(function () {
        var current = $(this);
        var src_offset = current.offset();
        var src_mid = {top:  current.height() / 2,
                       left: current.width() / 2};
        $.each(current.attr("relation").split(","),function (_,relation) {
            if(relation != "") {
                var target = $("#"+relation);
                if(target.length) {
                    var hash = min(current[0].id,target[0].id) + "," + max(current[0].id,target[0].id);
                    if(!(hash in cache)) {
                        cache[hash] = 5;
                        var trg_offset = target.offset();
                        var trg_mid = {top:  target.height() / 2,
                                       left: target.width() / 2};
                        // finally drawing ...
                        g.moveTo(src_offset.left - offset.left + src_mid.left, src_offset.top - offset.top + src_mid.top);
                        g.lineTo(trg_offset.left - offset.left + trg_mid.left, trg_offset.top - offset.top + trg_mid.top);
                  }
              }
            }
        });
    });
    g.stroke();
    g.closePath();
};

var updateSprings = function () {
    var obj = $("#canvas");
    var offset = obj.offset();
    // get all springs
    var cache = {};
    $(".node").each(function () {
        var current = $(this);
        var src_offset = current.offset();
        var src_mid = {top:  current.height() / 2,
                       left: current.width() / 2};
        $.each(current.attr("relation").split(","),function (_,relation) {
            if(relation != "") {
                var target = $("#"+relation);
                if(target.length) {
                    var hash = min(current[0].id,target[0].id) + "," + max(current[0].id,target[0].id);
                    if(!(hash in cache)) {
                        var trg_offset = target.offset();
                        var trg_mid = {top:  target.height() / 2,
                                       left: target.width() / 2};
                        var srcpos = {x:src_offset.left - offset.left + src_mid.left,
                                      y:src_offset.top - offset.top + src_mid.top};
                        var trgpos = {x:trg_offset.left - offset.left + trg_mid.left,
                                      y:trg_offset.top - offset.top + trg_mid.top};
                        // some accel cal
                        var diff = vsub(trgpos, srcpos);
                        cache[hash] = {source:current,
                                       target:target,
                                       srcpos: ,
                                       trgpos: 
                                      };
                    }
                }
            }
        });
  */
}
    // update
  //  $(".node").each(function () {
//};
