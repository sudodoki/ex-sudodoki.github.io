// Compiled by ClojureScript 0.0-2202
goog.provide('twitter_flock.image_data_helper');
goog.require('cljs.core');
twitter_flock.image_data_helper.IPixel = (function (){var obj4851 = {};return obj4851;
})();
twitter_flock.image_data_helper.red = (function red(pixel){if((function (){var and__3467__auto__ = pixel;if(and__3467__auto__)
{return pixel.twitter_flock$image_data_helper$IPixel$red$arity$1;
} else
{return and__3467__auto__;
}
})())
{return pixel.twitter_flock$image_data_helper$IPixel$red$arity$1(pixel);
} else
{var x__4106__auto__ = (((pixel == null))?null:pixel);return (function (){var or__3479__auto__ = (twitter_flock.image_data_helper.red[goog.typeOf(x__4106__auto__)]);if(or__3479__auto__)
{return or__3479__auto__;
} else
{var or__3479__auto____$1 = (twitter_flock.image_data_helper.red["_"]);if(or__3479__auto____$1)
{return or__3479__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IPixel.red",pixel);
}
}
})().call(null,pixel);
}
});
twitter_flock.image_data_helper.green = (function green(pixel){if((function (){var and__3467__auto__ = pixel;if(and__3467__auto__)
{return pixel.twitter_flock$image_data_helper$IPixel$green$arity$1;
} else
{return and__3467__auto__;
}
})())
{return pixel.twitter_flock$image_data_helper$IPixel$green$arity$1(pixel);
} else
{var x__4106__auto__ = (((pixel == null))?null:pixel);return (function (){var or__3479__auto__ = (twitter_flock.image_data_helper.green[goog.typeOf(x__4106__auto__)]);if(or__3479__auto__)
{return or__3479__auto__;
} else
{var or__3479__auto____$1 = (twitter_flock.image_data_helper.green["_"]);if(or__3479__auto____$1)
{return or__3479__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IPixel.green",pixel);
}
}
})().call(null,pixel);
}
});
twitter_flock.image_data_helper.blue = (function blue(pixel){if((function (){var and__3467__auto__ = pixel;if(and__3467__auto__)
{return pixel.twitter_flock$image_data_helper$IPixel$blue$arity$1;
} else
{return and__3467__auto__;
}
})())
{return pixel.twitter_flock$image_data_helper$IPixel$blue$arity$1(pixel);
} else
{var x__4106__auto__ = (((pixel == null))?null:pixel);return (function (){var or__3479__auto__ = (twitter_flock.image_data_helper.blue[goog.typeOf(x__4106__auto__)]);if(or__3479__auto__)
{return or__3479__auto__;
} else
{var or__3479__auto____$1 = (twitter_flock.image_data_helper.blue["_"]);if(or__3479__auto____$1)
{return or__3479__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IPixel.blue",pixel);
}
}
})().call(null,pixel);
}
});
twitter_flock.image_data_helper.alpha = (function alpha(pixel){if((function (){var and__3467__auto__ = pixel;if(and__3467__auto__)
{return pixel.twitter_flock$image_data_helper$IPixel$alpha$arity$1;
} else
{return and__3467__auto__;
}
})())
{return pixel.twitter_flock$image_data_helper$IPixel$alpha$arity$1(pixel);
} else
{var x__4106__auto__ = (((pixel == null))?null:pixel);return (function (){var or__3479__auto__ = (twitter_flock.image_data_helper.alpha[goog.typeOf(x__4106__auto__)]);if(or__3479__auto__)
{return or__3479__auto__;
} else
{var or__3479__auto____$1 = (twitter_flock.image_data_helper.alpha["_"]);if(or__3479__auto____$1)
{return or__3479__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IPixel.alpha",pixel);
}
}
})().call(null,pixel);
}
});
cljs.core.PersistentVector.prototype.twitter_flock$image_data_helper$IPixel$ = true;
cljs.core.PersistentVector.prototype.twitter_flock$image_data_helper$IPixel$red$arity$1 = (function (a){var a__$1 = this;return cljs.core.nth.call(null,a__$1,0);
});
cljs.core.PersistentVector.prototype.twitter_flock$image_data_helper$IPixel$green$arity$1 = (function (a){var a__$1 = this;return cljs.core.nth.call(null,a__$1,1);
});
cljs.core.PersistentVector.prototype.twitter_flock$image_data_helper$IPixel$blue$arity$1 = (function (a){var a__$1 = this;return cljs.core.nth.call(null,a__$1,2);
});
cljs.core.PersistentVector.prototype.twitter_flock$image_data_helper$IPixel$alpha$arity$1 = (function (a){var a__$1 = this;return cljs.core.nth.call(null,a__$1,3);
});
Uint8ClampedArray.prototype.twitter_flock$image_data_helper$IPixel$ = true;
Uint8ClampedArray.prototype.twitter_flock$image_data_helper$IPixel$red$arity$1 = (function (a){var a__$1 = this;return (a__$1[0]);
});
Uint8ClampedArray.prototype.twitter_flock$image_data_helper$IPixel$green$arity$1 = (function (a){var a__$1 = this;return (a__$1[1]);
});
Uint8ClampedArray.prototype.twitter_flock$image_data_helper$IPixel$blue$arity$1 = (function (a){var a__$1 = this;return (a__$1[2]);
});
Uint8ClampedArray.prototype.twitter_flock$image_data_helper$IPixel$alpha$arity$1 = (function (a){var a__$1 = this;return (a__$1[3]);
});
Array.prototype.twitter_flock$image_data_helper$IPixel$ = true;
twitter_flock.image_data_helper.IBitmap = (function (){var obj4853 = {};return obj4853;
})();
twitter_flock.image_data_helper.width = (function width(bitmap){if((function (){var and__3467__auto__ = bitmap;if(and__3467__auto__)
{return bitmap.twitter_flock$image_data_helper$IBitmap$width$arity$1;
} else
{return and__3467__auto__;
}
})())
{return bitmap.twitter_flock$image_data_helper$IBitmap$width$arity$1(bitmap);
} else
{var x__4106__auto__ = (((bitmap == null))?null:bitmap);return (function (){var or__3479__auto__ = (twitter_flock.image_data_helper.width[goog.typeOf(x__4106__auto__)]);if(or__3479__auto__)
{return or__3479__auto__;
} else
{var or__3479__auto____$1 = (twitter_flock.image_data_helper.width["_"]);if(or__3479__auto____$1)
{return or__3479__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IBitmap.width",bitmap);
}
}
})().call(null,bitmap);
}
});
twitter_flock.image_data_helper.height = (function height(bitmap){if((function (){var and__3467__auto__ = bitmap;if(and__3467__auto__)
{return bitmap.twitter_flock$image_data_helper$IBitmap$height$arity$1;
} else
{return and__3467__auto__;
}
})())
{return bitmap.twitter_flock$image_data_helper$IBitmap$height$arity$1(bitmap);
} else
{var x__4106__auto__ = (((bitmap == null))?null:bitmap);return (function (){var or__3479__auto__ = (twitter_flock.image_data_helper.height[goog.typeOf(x__4106__auto__)]);if(or__3479__auto__)
{return or__3479__auto__;
} else
{var or__3479__auto____$1 = (twitter_flock.image_data_helper.height["_"]);if(or__3479__auto____$1)
{return or__3479__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IBitmap.height",bitmap);
}
}
})().call(null,bitmap);
}
});
twitter_flock.image_data_helper.data = (function data(bitmap){if((function (){var and__3467__auto__ = bitmap;if(and__3467__auto__)
{return bitmap.twitter_flock$image_data_helper$IBitmap$data$arity$1;
} else
{return and__3467__auto__;
}
})())
{return bitmap.twitter_flock$image_data_helper$IBitmap$data$arity$1(bitmap);
} else
{var x__4106__auto__ = (((bitmap == null))?null:bitmap);return (function (){var or__3479__auto__ = (twitter_flock.image_data_helper.data[goog.typeOf(x__4106__auto__)]);if(or__3479__auto__)
{return or__3479__auto__;
} else
{var or__3479__auto____$1 = (twitter_flock.image_data_helper.data["_"]);if(or__3479__auto____$1)
{return or__3479__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IBitmap.data",bitmap);
}
}
})().call(null,bitmap);
}
});

/**
* @constructor
*/
twitter_flock.image_data_helper.ImageDataSeq = (function (w,h,arr,i){
this.w = w;
this.h = h;
this.arr = arr;
this.i = i;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 166199542;
})
twitter_flock.image_data_helper.ImageDataSeq.cljs$lang$type = true;
twitter_flock.image_data_helper.ImageDataSeq.cljs$lang$ctorStr = "twitter-flock.image-data-helper/ImageDataSeq";
twitter_flock.image_data_helper.ImageDataSeq.cljs$lang$ctorPrWriter = (function (this__4046__auto__,writer__4047__auto__,opt__4048__auto__){return cljs.core._write.call(null,writer__4047__auto__,"twitter-flock.image-data-helper/ImageDataSeq");
});
twitter_flock.image_data_helper.ImageDataSeq.prototype.twitter_flock$image_data_helper$IBitmap$ = true;
twitter_flock.image_data_helper.ImageDataSeq.prototype.twitter_flock$image_data_helper$IBitmap$width$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.w;
});
twitter_flock.image_data_helper.ImageDataSeq.prototype.twitter_flock$image_data_helper$IBitmap$height$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.h;
});
twitter_flock.image_data_helper.ImageDataSeq.prototype.twitter_flock$image_data_helper$IBitmap$data$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.arr;
});
twitter_flock.image_data_helper.ImageDataSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var self__ = this;
var coll__$1 = this;return cljs.core._nth.call(null,coll__$1,n,twitter_flock.image_data_helper.empty_pixel);
});
twitter_flock.image_data_helper.ImageDataSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var self__ = this;
var coll__$1 = this;var off = (4 * (n + self__.i));if((off < self__.arr.length))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.arr[off]),(self__.arr[(1 + off)]),(self__.arr[(2 + off)]),(self__.arr[(3 + off)])], null);
} else
{return not_found;
}
});
twitter_flock.image_data_helper.ImageDataSeq.prototype.twitter_flock$image_data_helper$IPixel$ = true;
twitter_flock.image_data_helper.ImageDataSeq.prototype.twitter_flock$image_data_helper$IPixel$red$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (self__.arr[(4 * self__.i)]);
});
twitter_flock.image_data_helper.ImageDataSeq.prototype.twitter_flock$image_data_helper$IPixel$green$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (self__.arr[(1 + (4 * self__.i))]);
});
twitter_flock.image_data_helper.ImageDataSeq.prototype.twitter_flock$image_data_helper$IPixel$blue$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (self__.arr[(2 + (4 * self__.i))]);
});
twitter_flock.image_data_helper.ImageDataSeq.prototype.twitter_flock$image_data_helper$IPixel$alpha$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (self__.arr[(3 + (4 * self__.i))]);
});
twitter_flock.image_data_helper.ImageDataSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if((((self__.i + 1) * 4) < self__.arr.length))
{return (new twitter_flock.image_data_helper.ImageDataSeq(self__.w,self__.h,self__.arr,(self__.i + 1)));
} else
{return null;
}
});
twitter_flock.image_data_helper.ImageDataSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return ((self__.arr.length / 4) - self__.i);
});
twitter_flock.image_data_helper.ImageDataSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var c = cljs.core._count.call(null,coll__$1);if((c > 0))
{return (new cljs.core.RSeq(coll__$1,(c - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
twitter_flock.image_data_helper.ImageDataSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.hash_coll.call(null,coll__$1);
});
twitter_flock.image_data_helper.ImageDataSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential.call(null,coll__$1,other);
});
twitter_flock.image_data_helper.ImageDataSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.List.EMPTY;
});
twitter_flock.image_data_helper.ImageDataSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;if(cljs.core.counted_QMARK_.call(null,self__.arr))
{return cljs.core.ci_reduce.call(null,self__.arr,f,(self__.arr[self__.i]),(self__.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll__$1,f,(self__.arr[self__.i]),0);
}
});
twitter_flock.image_data_helper.ImageDataSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;if(cljs.core.counted_QMARK_.call(null,self__.arr))
{return cljs.core.ci_reduce.call(null,self__.arr,f,start,self__.i);
} else
{return cljs.core.ci_reduce.call(null,coll__$1,f,start,0);
}
});
twitter_flock.image_data_helper.ImageDataSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var offset = (4 * self__.i);return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.arr[offset]),(self__.arr[(1 + offset)]),(self__.arr[(2 + offset)]),(self__.arr[(3 + offset)])], null);
});
twitter_flock.image_data_helper.ImageDataSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if((((self__.i + 1) * 4) < self__.arr.length))
{return (new twitter_flock.image_data_helper.ImageDataSeq(self__.w,self__.h,self__.arr,(self__.i + 1)));
} else
{return cljs.core.List.EMPTY;
}
});
twitter_flock.image_data_helper.ImageDataSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return this$__$1;
});
twitter_flock.image_data_helper.__GT_ImageDataSeq = (function __GT_ImageDataSeq(w,h,arr,i){return (new twitter_flock.image_data_helper.ImageDataSeq(w,h,arr,i));
});
ImageData.prototype.cljs$core$ISeqable$ = true;
ImageData.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return (new twitter_flock.image_data_helper.ImageDataSeq(coll__$1.width,coll__$1.height,coll__$1.data,0));
});
ImageData.prototype.cljs$core$IFn$ = true;
ImageData.prototype.call = (function() {
var G__4859 = null;
var G__4859__2 = (function (self__,k){var self____$1 = this;var coll = self____$1;return cljs.core._lookup.call(null,coll,k);
});
var G__4859__3 = (function (self__,k,not_found){var self____$1 = this;var coll = self____$1;return cljs.core._lookup.call(null,coll,k,not_found);
});
G__4859 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__4859__2.call(this,self__,k);
case 3:
return G__4859__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__4859;
})()
;
ImageData.prototype.apply = (function (self__,args4854){var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args4854)));
});
ImageData.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var coll = this;return cljs.core._lookup.call(null,coll,k);
});
ImageData.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var coll = this;return cljs.core._lookup.call(null,coll,k,not_found);
});
ImageData.prototype.cljs$core$IAssociative$ = true;
ImageData.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,p__4855){var vec__4856 = p__4855;var x = cljs.core.nth.call(null,vec__4856,0,null);var y = cljs.core.nth.call(null,vec__4856,1,null);var coll__$1 = this;return ((x >= 0)) && ((y >= 0)) && ((x < coll__$1.width)) && ((y < coll__$1.height));
});
ImageData.prototype.cljs$core$ILookup$ = true;
ImageData.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){var coll__$1 = this;return cljs.core._lookup.call(null,coll__$1,k,twitter_flock.image_data_helper.empty_pixel);
});
ImageData.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,p__4857,not_found){var vec__4858 = p__4857;var x = cljs.core.nth.call(null,vec__4858,0,null);var y = cljs.core.nth.call(null,vec__4858,1,null);var coll__$1 = this;if(((x >= 0)) && ((y >= 0)) && ((x < coll__$1.width)) && ((y < coll__$1.height)))
{return cljs.core._nth.call(null,coll__$1,(x + (y * coll__$1.width)),not_found);
} else
{return not_found;
}
});
ImageData.prototype.cljs$core$IIndexed$ = true;
ImageData.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return cljs.core._nth.call(null,coll__$1,n,twitter_flock.image_data_helper.empty_pixel);
});
ImageData.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;var pix = coll__$1.data;var offset = (4 * n);if(((n >= 0)) && ((n < cljs.core.count.call(null,coll__$1))))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(pix[offset]),(pix[(1 + offset)]),(pix[(2 + offset)]),(pix[(3 + offset)])], null);
} else
{return not_found;
}
});
ImageData.prototype.cljs$core$ICounted$ = true;
ImageData.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return (coll__$1.width * coll__$1.height);
});
ImageData.prototype.twitter_flock$image_data_helper$IBitmap$ = true;
ImageData.prototype.twitter_flock$image_data_helper$IBitmap$width$arity$1 = (function (img){var img__$1 = this;return img__$1.width;
});
ImageData.prototype.twitter_flock$image_data_helper$IBitmap$height$arity$1 = (function (img){var img__$1 = this;return img__$1.height;
});
ImageData.prototype.twitter_flock$image_data_helper$IBitmap$data$arity$1 = (function (img){var img__$1 = this;return img__$1.data;
});

//# sourceMappingURL=image_data_helper.js.map