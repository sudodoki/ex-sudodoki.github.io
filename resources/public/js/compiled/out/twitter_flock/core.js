// Compiled by ClojureScript 0.0-2202
goog.provide('twitter_flock.core');
goog.require('cljs.core');
goog.require('Math');
goog.require('twitter_flock.image_data_helper');
goog.require('Math');
cljs.core.enable_console_print_BANG_.call(null);
/**
* Adding two or more vectors
* @param {...*} var_args
*/
twitter_flock.core.add_vector = (function() { 
var add_vector__delegate = function (vectors){return cljs.core.apply.call(null,(function() { 
var G__4861__delegate = function (rest__4860_SHARP_){return cljs.core.apply.call(null,cljs.core.mapv,cljs.core._PLUS_,rest__4860_SHARP_);
};
var G__4861 = function (var_args){
var rest__4860_SHARP_ = null;if (arguments.length > 0) {
  rest__4860_SHARP_ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__4861__delegate.call(this,rest__4860_SHARP_);};
G__4861.cljs$lang$maxFixedArity = 0;
G__4861.cljs$lang$applyTo = (function (arglist__4862){
var rest__4860_SHARP_ = cljs.core.seq(arglist__4862);
return G__4861__delegate(rest__4860_SHARP_);
});
G__4861.cljs$core$IFn$_invoke$arity$variadic = G__4861__delegate;
return G__4861;
})()
,vectors);
};
var add_vector = function (var_args){
var vectors = null;if (arguments.length > 0) {
  vectors = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return add_vector__delegate.call(this,vectors);};
add_vector.cljs$lang$maxFixedArity = 0;
add_vector.cljs$lang$applyTo = (function (arglist__4863){
var vectors = cljs.core.seq(arglist__4863);
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
var substract_vector__delegate = function (vectors){return cljs.core.apply.call(null,(function() { 
var G__4865__delegate = function (rest__4864_SHARP_){return cljs.core.apply.call(null,cljs.core.mapv,cljs.core._,rest__4864_SHARP_);
};
var G__4865 = function (var_args){
var rest__4864_SHARP_ = null;if (arguments.length > 0) {
  rest__4864_SHARP_ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__4865__delegate.call(this,rest__4864_SHARP_);};
G__4865.cljs$lang$maxFixedArity = 0;
G__4865.cljs$lang$applyTo = (function (arglist__4866){
var rest__4864_SHARP_ = cljs.core.seq(arglist__4866);
return G__4865__delegate(rest__4864_SHARP_);
});
G__4865.cljs$core$IFn$_invoke$arity$variadic = G__4865__delegate;
return G__4865;
})()
,vectors);
};
var substract_vector = function (var_args){
var vectors = null;if (arguments.length > 0) {
  vectors = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return substract_vector__delegate.call(this,vectors);};
substract_vector.cljs$lang$maxFixedArity = 0;
substract_vector.cljs$lang$applyTo = (function (arglist__4867){
var vectors = cljs.core.seq(arglist__4867);
return substract_vector__delegate(vectors);
});
substract_vector.cljs$core$IFn$_invoke$arity$variadic = substract_vector__delegate;
return substract_vector;
})()
;
/**
* Rotate point relative to the center
*/
twitter_flock.core.rotate = (function rotate(center,point,angle){var vec__4869 = twitter_flock.core.substract_vector.call(null,point,center);var x = cljs.core.nth.call(null,vec__4869,0,null);var y = cljs.core.nth.call(null,vec__4869,1,null);return twitter_flock.core.add_vector.call(null,center,[((x * Math.cos.call(null,angle)) - (y * Math.sin.call(null,angle))),((y * Math.cos.call(null,angle)) + (x * Math.sin.call(null,angle)))]);
});
twitter_flock.core.attr = (function attr(e,a){return e.getAttribute(a);
});
twitter_flock.core.canvas = document.getElementById("canvas-area");
twitter_flock.core.ctx = twitter_flock.core.canvas.getContext("2d");
twitter_flock.core.canvas_width = twitter_flock.core.canvas.width;
twitter_flock.core.canvas_height = twitter_flock.core.canvas.height;
twitter_flock.core.canvas_size = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [twitter_flock.core.canvas_width,twitter_flock.core.canvas_height], null);
twitter_flock.core.canvas_center = cljs.core.map.call(null,(function (p1__4870_SHARP_){return (p1__4870_SHARP_ / 2);
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
twitter_flock.core.moveTo = (function moveTo(ctx,point){var vec__4872 = point;var x = cljs.core.nth.call(null,vec__4872,0,null);var y = cljs.core.nth.call(null,vec__4872,1,null);return ctx.moveTo(x,y);
});
/**
* Call ctx.lineTo(x,y)
*/
twitter_flock.core.lineTo = (function lineTo(ctx,point){var vec__4874 = point;var x = cljs.core.nth.call(null,vec__4874,0,null);var y = cljs.core.nth.call(null,vec__4874,1,null);return ctx.lineTo(x,y);
});
/**
* Draw so called 'bird' which is 2x2 rectangle
*/
twitter_flock.core.drawBird = (function drawBird(bird){var map__4877 = bird;var map__4877__$1 = ((cljs.core.seq_QMARK_.call(null,map__4877))?cljs.core.apply.call(null,cljs.core.hash_map,map__4877):map__4877);var x = cljs.core.get.call(null,map__4877__$1,new cljs.core.Keyword(null,"x","x",1013904362));var y = cljs.core.get.call(null,map__4877__$1,new cljs.core.Keyword(null,"y","y",1013904363));var vec__4878 = cljs.core.first.call(null,new cljs.core.Keyword(null,"vectors","vectors",1351695106).cljs$core$IFn$_invoke$arity$1(bird));var speed_x = cljs.core.nth.call(null,vec__4878,0,null);var speed_y = cljs.core.nth.call(null,vec__4878,1,null);return twitter_flock.core.ctx.fillRect(x,y,2,2);
});
var canvas_center_x_4879 = cljs.core.nth.call(null,twitter_flock.core.canvas_center,0);var canvas_center_y_4880 = cljs.core.nth.call(null,twitter_flock.core.canvas_center,1);twitter_flock.core.create_bird = ((function (canvas_center_x_4879,canvas_center_y_4880){
return (function() {
var create_bird = null;
var create_bird__0 = (function (){return create_bird.call(null,((cljs.core.rand_int.call(null,80) - 40) + canvas_center_x_4879),((cljs.core.rand_int.call(null,80) - 40) + canvas_center_y_4880));
});
var create_bird__2 = (function (x,y){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",1013904362),x,new cljs.core.Keyword(null,"y","y",1013904363),y,new cljs.core.Keyword(null,"vectors","vectors",1351695106),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.rand_int.call(null,10) - 5),(cljs.core.rand_int.call(null,10) - 5)], null)], null)], null);
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
;})(canvas_center_x_4879,canvas_center_y_4880))
;
twitter_flock.core.init_birds = cljs.core.repeatedly.call(null,1500,twitter_flock.core.create_bird);
if(typeof twitter_flock.core.all_birds !== 'undefined')
{} else
{twitter_flock.core.all_birds = cljs.core.atom.call(null,twitter_flock.core.init_birds);
}
cljs.core.add_watch.call(null,twitter_flock.core.all_birds,null,(function (_,___$1,___$2,birds){return twitter_flock.core.request_render.call(null,birds);
}));
var render_pending_QMARK__4881 = cljs.core.atom.call(null,false);twitter_flock.core.request_render = ((function (render_pending_QMARK__4881){
return (function request_render(birds){if(cljs.core.compare_and_set_BANG_.call(null,render_pending_QMARK__4881,false,true))
{return window.requestAnimationFrame(((function (render_pending_QMARK__4881){
return (function (){twitter_flock.core.clear.call(null);
twitter_flock.core.ctx.beginPath();
(twitter_flock.core.ctx["fillStyle"] = "#55acee");
cljs.core.doall.call(null,cljs.core.map.call(null,twitter_flock.core.drawBird,birds));
twitter_flock.core.ctx.stroke();
return cljs.core.reset_BANG_.call(null,render_pending_QMARK__4881,false);
});})(render_pending_QMARK__4881))
);
} else
{return null;
}
});})(render_pending_QMARK__4881))
;
twitter_flock.core.get_twin_state = (function get_twin_state(x,y){return cljs.core.nth.call(null,cljs.core.nth.call(null,cljs.core.deref.call(null,twitter_flock.core.twin_data),((twitter_flock.core.canvas_width * (y - 1)) + x)),0);
});
twitter_flock.core.check_for_boundaries = (function check_for_boundaries(speed,bird){var vec__4885 = speed;var speed_x = cljs.core.nth.call(null,vec__4885,0,null);var speed_y = cljs.core.nth.call(null,vec__4885,1,null);var map__4886 = bird;var map__4886__$1 = ((cljs.core.seq_QMARK_.call(null,map__4886))?cljs.core.apply.call(null,cljs.core.hash_map,map__4886):map__4886);var x = cljs.core.get.call(null,map__4886__$1,new cljs.core.Keyword(null,"x","x",1013904362));var y = cljs.core.get.call(null,map__4886__$1,new cljs.core.Keyword(null,"y","y",1013904363));var new_x = (x + speed_x);var new_y = (y + speed_y);var center_x = cljs.core.nth.call(null,twitter_flock.core.canvas_center,0);var center_y = cljs.core.nth.call(null,twitter_flock.core.canvas_center,1);var current_state = twitter_flock.core.get_twin_state.call(null,x,y);if((current_state > 230))
{return cljs.core.map.call(null,((function (vec__4885,speed_x,speed_y,map__4886,map__4886__$1,x,y,new_x,new_y,center_x,center_y,current_state){
return (function (p1__4882_SHARP_){return ((p1__4882_SHARP_ / 10) + (cljs.core.rand_int.call(null,3) - 2));
});})(vec__4885,speed_x,speed_y,map__4886,map__4886__$1,x,y,new_x,new_y,center_x,center_y,current_state))
,twitter_flock.core.substract_vector.call(null,twitter_flock.core.canvas_center,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));
} else
{if(cljs.core._EQ_.call(null,current_state,null))
{return cljs.core.list(0,0);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
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
twitter_flock.core.normalize = (function normalize(max_abs_value,value){var real_abs_value = Math.abs.call(null,value);var sign = Math.ceil.call(null,(value / real_abs_value));if((real_abs_value < max_abs_value))
{return value;
} else
{return (sign * max_abs_value);
}
});
/**
* Update birds x, y & speed
*/
twitter_flock.core.update_coord = (function update_coord(bird){var normalize_speed = cljs.core.partial.call(null,twitter_flock.core.normalize,2);var vec__4888 = cljs.core.map.call(null,normalize_speed,twitter_flock.core.check_for_boundaries.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"vectors","vectors",1351695106).cljs$core$IFn$_invoke$arity$1(bird)),bird));var speed_x = cljs.core.nth.call(null,vec__4888,0,null);var speed_y = cljs.core.nth.call(null,vec__4888,1,null);return cljs.core.assoc.call(null,bird,new cljs.core.Keyword(null,"x","x",1013904362),Math.ceil.call(null,(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(bird) + speed_x)),new cljs.core.Keyword(null,"y","y",1013904363),Math.ceil.call(null,(new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(bird) + speed_y)),new cljs.core.Keyword(null,"vectors","vectors",1351695106),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [speed_x,speed_y], null)], null));
});
/**
* Updating :x :y & vectors of all birds
*/
twitter_flock.core.next_tick = (function next_tick(birds){return cljs.core.doall.call(null,cljs.core.map.call(null,twitter_flock.core.update_coord,cljs.core.deref.call(null,twitter_flock.core.all_birds)));
});
twitter_flock.core.twin_data = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
twitter_flock.core.loadMask = (function loadMask(){var image = (new Image());var padding = 20;(image["onload"] = ((function (image,padding){
return (function (){twitter_flock.core.ctx_twin.drawImage(image,(0 + padding),(0 + padding),(twitter_flock.core.canvas_width - (2 * padding)),(twitter_flock.core.canvas_height - (2 * padding)));
cljs.core.reset_BANG_.call(null,twitter_flock.core.twin_data,twitter_flock.core.ctx_twin.getImageData(0,0,twitter_flock.core.canvas_width,twitter_flock.core.canvas_height));
return twitter_flock.core.start.call(null);
});})(image,padding))
);
return (image["src"] = "/resources/public/images/twitter-mask.jpg");
});
twitter_flock.core.start = (function start(){twitter_flock.core.request_render.call(null,cljs.core.deref.call(null,twitter_flock.core.all_birds));
return setInterval((function (){return cljs.core.swap_BANG_.call(null,twitter_flock.core.all_birds,twitter_flock.core.next_tick);
}),20);
});
if(typeof twitter_flock.core.app !== 'undefined')
{} else
{twitter_flock.core.app = twitter_flock.core.loadMask.call(null);
}

//# sourceMappingURL=core.js.map