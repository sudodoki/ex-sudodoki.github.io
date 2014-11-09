// Compiled by ClojureScript 0.0-2202
goog.provide('twitter_flock.core');
goog.require('cljs.core');
goog.require('Math');
goog.require('twitter_flock.image_data_helper');
goog.require('Math');
cljs.core.enable_console_print_BANG_();
/**
* Adding two or more vectors
* @param {...*} var_args
*/
twitter_flock.core.add_vector = (function() { 
var add_vector__delegate = function (vectors){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function() { 
var G__6384__delegate = function (rest__6383_SHARP_){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.mapv,cljs.core._PLUS_,rest__6383_SHARP_);
};
var G__6384 = function (var_args){
var rest__6383_SHARP_ = null;if (arguments.length > 0) {
  rest__6383_SHARP_ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__6384__delegate.call(this,rest__6383_SHARP_);};
G__6384.cljs$lang$maxFixedArity = 0;
G__6384.cljs$lang$applyTo = (function (arglist__6385){
var rest__6383_SHARP_ = cljs.core.seq(arglist__6385);
return G__6384__delegate(rest__6383_SHARP_);
});
G__6384.cljs$core$IFn$_invoke$arity$variadic = G__6384__delegate;
return G__6384;
})()
,vectors);
};
var add_vector = function (var_args){
var vectors = null;if (arguments.length > 0) {
  vectors = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return add_vector__delegate.call(this,vectors);};
add_vector.cljs$lang$maxFixedArity = 0;
add_vector.cljs$lang$applyTo = (function (arglist__6386){
var vectors = cljs.core.seq(arglist__6386);
return add_vector__delegate(vectors);
});
add_vector.cljs$core$IFn$_invoke$arity$variadic = add_vector__delegate;
return add_vector;
})()
;
/**
* Substract vectors from the initial one
* @param {...*} var_args
*/
twitter_flock.core.substract_vector = (function() { 
var substract_vector__delegate = function (vectors){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function() { 
var G__6388__delegate = function (rest__6387_SHARP_){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.mapv,cljs.core._,rest__6387_SHARP_);
};
var G__6388 = function (var_args){
var rest__6387_SHARP_ = null;if (arguments.length > 0) {
  rest__6387_SHARP_ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__6388__delegate.call(this,rest__6387_SHARP_);};
G__6388.cljs$lang$maxFixedArity = 0;
G__6388.cljs$lang$applyTo = (function (arglist__6389){
var rest__6387_SHARP_ = cljs.core.seq(arglist__6389);
return G__6388__delegate(rest__6387_SHARP_);
});
G__6388.cljs$core$IFn$_invoke$arity$variadic = G__6388__delegate;
return G__6388;
})()
,vectors);
};
var substract_vector = function (var_args){
var vectors = null;if (arguments.length > 0) {
  vectors = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return substract_vector__delegate.call(this,vectors);};
substract_vector.cljs$lang$maxFixedArity = 0;
substract_vector.cljs$lang$applyTo = (function (arglist__6390){
var vectors = cljs.core.seq(arglist__6390);
return substract_vector__delegate(vectors);
});
substract_vector.cljs$core$IFn$_invoke$arity$variadic = substract_vector__delegate;
return substract_vector;
})()
;
/**
* Rotate point relative to the center
*/
twitter_flock.core.rotate = (function rotate(center,point,angle){var vec__6392 = twitter_flock.core.substract_vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([point,center], 0));var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6392,0,null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6392,1,null);return twitter_flock.core.add_vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([center,[((x * (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(angle) : Math.cos.call(null,angle))) - (y * (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(angle) : Math.sin.call(null,angle)))),((y * (Math.cos.cljs$core$IFn$_invoke$arity$1 ? Math.cos.cljs$core$IFn$_invoke$arity$1(angle) : Math.cos.call(null,angle))) + (x * (Math.sin.cljs$core$IFn$_invoke$arity$1 ? Math.sin.cljs$core$IFn$_invoke$arity$1(angle) : Math.sin.call(null,angle))))]], 0));
});
twitter_flock.core.attr = (function attr(e,a){return e.getAttribute(a);
});
twitter_flock.core.canvas = document.getElementById("canvas-area");
twitter_flock.core.ctx = twitter_flock.core.canvas.getContext("2d");
twitter_flock.core.canvas_width = twitter_flock.core.canvas.width;
twitter_flock.core.canvas_height = twitter_flock.core.canvas.height;
twitter_flock.core.canvas_size = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [twitter_flock.core.canvas_width,twitter_flock.core.canvas_height], null);
twitter_flock.core.canvas_center = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6393_SHARP_){return (p1__6393_SHARP_ / 2);
}),twitter_flock.core.canvas_size);
twitter_flock.core.canvas_twin = document.getElementById("canvas-area-2");
("width"[twitter_flock.core.canvas_twin] = twitter_flock.core.canvas_width);
("height"[twitter_flock.core.canvas_twin] = twitter_flock.core.canvas_height);
twitter_flock.core.ctx_twin = twitter_flock.core.canvas_twin.getContext("2d");
twitter_flock.core.clear = (function clear(){return twitter_flock.core.ctx.clearRect(0,0,twitter_flock.core.canvas_width,twitter_flock.core.canvas_height);
});
/**
* Call ctx.moveTo(x,y)
*/
twitter_flock.core.moveTo = (function moveTo(ctx,point){var vec__6395 = point;var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6395,0,null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6395,1,null);return ctx.moveTo(x,y);
});
/**
* Call ctx.lineTo(x,y)
*/
twitter_flock.core.lineTo = (function lineTo(ctx,point){var vec__6397 = point;var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6397,0,null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6397,1,null);return ctx.lineTo(x,y);
});
/**
* Draw so called 'bird' which is 2x2 rectangle
*/
twitter_flock.core.drawBird = (function drawBird(bird){var map__6400 = bird;var map__6400__$1 = ((cljs.core.seq_QMARK_(map__6400))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6400):map__6400);var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6400__$1,cljs.core.constant$keyword$34);var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6400__$1,cljs.core.constant$keyword$35);var vec__6401 = cljs.core.first(cljs.core.constant$keyword$36.cljs$core$IFn$_invoke$arity$1(bird));var speed_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6401,0,null);var speed_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6401,1,null);return twitter_flock.core.ctx.fillRect(x,y,2,2);
});
var canvas_center_x_6402 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(twitter_flock.core.canvas_center,0);var canvas_center_y_6403 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(twitter_flock.core.canvas_center,1);twitter_flock.core.create_bird = ((function (canvas_center_x_6402,canvas_center_y_6403){
return (function() {
var create_bird = null;
var create_bird__0 = (function (){return create_bird.cljs$core$IFn$_invoke$arity$2(((cljs.core.rand_int(80) - 40) + canvas_center_x_6402),((cljs.core.rand_int(80) - 40) + canvas_center_y_6403));
});
var create_bird__2 = (function (x,y){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$34,x,cljs.core.constant$keyword$35,y,cljs.core.constant$keyword$36,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.rand_int(10) - 5),(cljs.core.rand_int(10) - 5)], null)], null)], null);
});
create_bird = function(x,y){
switch(arguments.length){
case 0:
return create_bird__0.call(this);
case 2:
return create_bird__2.call(this,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_bird.cljs$core$IFn$_invoke$arity$0 = create_bird__0;
create_bird.cljs$core$IFn$_invoke$arity$2 = create_bird__2;
return create_bird;
})()
;})(canvas_center_x_6402,canvas_center_y_6403))
;
twitter_flock.core.init_birds = cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(1500,twitter_flock.core.create_bird);
if(typeof twitter_flock.core.all_birds !== 'undefined')
{} else
{twitter_flock.core.all_birds = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(twitter_flock.core.init_birds);
}
cljs.core.add_watch(twitter_flock.core.all_birds,null,(function (_,___$1,___$2,birds){return (twitter_flock.core.request_render.cljs$core$IFn$_invoke$arity$1 ? twitter_flock.core.request_render.cljs$core$IFn$_invoke$arity$1(birds) : twitter_flock.core.request_render.call(null,birds));
}));
var render_pending_QMARK__6404 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);twitter_flock.core.request_render = ((function (render_pending_QMARK__6404){
return (function request_render(birds){if(cljs.core.compare_and_set_BANG_(render_pending_QMARK__6404,false,true))
{return window.requestAnimationFrame(((function (render_pending_QMARK__6404){
return (function (){twitter_flock.core.clear();
twitter_flock.core.ctx.beginPath();
(twitter_flock.core.ctx["fillStyle"] = "#55acee");
cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(twitter_flock.core.drawBird,birds));
twitter_flock.core.ctx.stroke();
return cljs.core.reset_BANG_(render_pending_QMARK__6404,false);
});})(render_pending_QMARK__6404))
);
} else
{return null;
}
});})(render_pending_QMARK__6404))
;
twitter_flock.core.get_twin_state = (function get_twin_state(x,y){return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(twitter_flock.core.twin_data),((twitter_flock.core.canvas_width * (y - 1)) + x)),0);
});
twitter_flock.core.check_for_boundaries = (function check_for_boundaries(speed,bird){var vec__6408 = speed;var speed_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6408,0,null);var speed_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6408,1,null);var map__6409 = bird;var map__6409__$1 = ((cljs.core.seq_QMARK_(map__6409))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6409):map__6409);var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6409__$1,cljs.core.constant$keyword$34);var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6409__$1,cljs.core.constant$keyword$35);var new_x = (x + speed_x);var new_y = (y + speed_y);var center_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(twitter_flock.core.canvas_center,0);var center_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(twitter_flock.core.canvas_center,1);var current_state = twitter_flock.core.get_twin_state(x,y);if((current_state > 230))
{return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__6408,speed_x,speed_y,map__6409,map__6409__$1,x,y,new_x,new_y,center_x,center_y,current_state){
return (function (p1__6405_SHARP_){return ((p1__6405_SHARP_ / 10) + (cljs.core.rand_int(3) - 2));
});})(vec__6408,speed_x,speed_y,map__6409,map__6409__$1,x,y,new_x,new_y,center_x,center_y,current_state))
,twitter_flock.core.substract_vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([twitter_flock.core.canvas_center,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], 0)));
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_state,null))
{return cljs.core.list(0,0);
} else
{if(cljs.core.constant$keyword$24)
{return speed;
} else
{return null;
}
}
}
});
/**
* Cap value by max-abs-value
*/
twitter_flock.core.normalize = (function normalize(max_abs_value,value){var real_abs_value = (Math.abs.cljs$core$IFn$_invoke$arity$1 ? Math.abs.cljs$core$IFn$_invoke$arity$1(value) : Math.abs.call(null,value));var sign = (Math.ceil.cljs$core$IFn$_invoke$arity$1 ? Math.ceil.cljs$core$IFn$_invoke$arity$1((value / real_abs_value)) : Math.ceil.call(null,(value / real_abs_value)));if((real_abs_value < max_abs_value))
{return value;
} else
{return (sign * max_abs_value);
}
});
/**
* Update birds x, y & speed
*/
twitter_flock.core.update_coord = (function update_coord(bird){var normalize_speed = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(twitter_flock.core.normalize,2);var vec__6411 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(normalize_speed,twitter_flock.core.check_for_boundaries(cljs.core.first(cljs.core.constant$keyword$36.cljs$core$IFn$_invoke$arity$1(bird)),bird));var speed_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6411,0,null);var speed_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6411,1,null);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(bird,cljs.core.constant$keyword$34,(Math.ceil.cljs$core$IFn$_invoke$arity$1 ? Math.ceil.cljs$core$IFn$_invoke$arity$1((cljs.core.constant$keyword$34.cljs$core$IFn$_invoke$arity$1(bird) + speed_x)) : Math.ceil.call(null,(cljs.core.constant$keyword$34.cljs$core$IFn$_invoke$arity$1(bird) + speed_x))),cljs.core.array_seq([cljs.core.constant$keyword$35,(Math.ceil.cljs$core$IFn$_invoke$arity$1 ? Math.ceil.cljs$core$IFn$_invoke$arity$1((cljs.core.constant$keyword$35.cljs$core$IFn$_invoke$arity$1(bird) + speed_y)) : Math.ceil.call(null,(cljs.core.constant$keyword$35.cljs$core$IFn$_invoke$arity$1(bird) + speed_y))),cljs.core.constant$keyword$36,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [speed_x,speed_y], null)], null)], 0));
});
/**
* Updating :x :y & vectors of all birds
*/
twitter_flock.core.next_tick = (function next_tick(birds){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(twitter_flock.core.update_coord,cljs.core.deref(twitter_flock.core.all_birds)));
});
twitter_flock.core.twin_data = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
twitter_flock.core.loadMask = (function loadMask(){var image = (new Image());var padding = 20;(image["onload"] = ((function (image,padding){
return (function (){twitter_flock.core.ctx_twin.drawImage(image,(0 + padding),(0 + padding),(twitter_flock.core.canvas_width - (2 * padding)),(twitter_flock.core.canvas_height - (2 * padding)));
cljs.core.reset_BANG_(twitter_flock.core.twin_data,twitter_flock.core.ctx_twin.getImageData(0,0,twitter_flock.core.canvas_width,twitter_flock.core.canvas_height));
return (twitter_flock.core.start.cljs$core$IFn$_invoke$arity$0 ? twitter_flock.core.start.cljs$core$IFn$_invoke$arity$0() : twitter_flock.core.start.call(null));
});})(image,padding))
);
return (image["src"] = "/resources/public/images/twitter-mask.jpg");
});
twitter_flock.core.start = (function start(){twitter_flock.core.request_render(cljs.core.deref(twitter_flock.core.all_birds));
return setInterval((function (){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(twitter_flock.core.all_birds,twitter_flock.core.next_tick);
}),20);
});
if(typeof twitter_flock.core.app !== 'undefined')
{} else
{twitter_flock.core.app = twitter_flock.core.loadMask();
}
