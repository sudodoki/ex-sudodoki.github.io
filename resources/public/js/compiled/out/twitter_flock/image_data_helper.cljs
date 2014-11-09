(ns twitter-flock.image-data-helper)
;; IPixel Protocol
;; A protocol for accessing the color channels from a pixel.

(defprotocol IPixel
  (red [pixel] "The red component of the pixel.")
  (green [pixel] "The green component of the pixel.")
  (blue [pixel] "The blue component of the pixel.")
  (alpha [pixel] "The alpha component of the pixel."))

(extend-protocol IPixel
  js/Array
  js/Uint8ClampedArray
  (red [a] (aget a 0))
  (green [a] (aget a 1))
  (blue [a] (aget a 2))
  (alpha [a] (aget a 3))

  PersistentVector
  (red [a] (nth a 0))
  (green [a] (nth a 1))
  (blue [a] (nth a 2))
  (alpha [a] (nth a 3)))

;; IBitmap Protocol
;; Provides a protocol for accessing dimensions and pixel data of an image.

(defprotocol IBitmap
  (width [bitmap] "The width of the bitmap in pixels.")
  (height [bitmap] "The height of the bitmap in pixels.")
  (data [bitmap] "The pixel data of the image." ))

;; ImageDataSeq
;; Allows seq functions to be called on an ImageData.

(deftype ImageDataSeq [w h arr i]

  ;Object
  ;(toString [this]
  ;  (pr-str this))

  ;IPrintWithWriter
  ;(-pr-writer [coll writer opts]
  ;  (pr-sequential-writer writer pr-writer "(" " " ")" opts coll))

  IPixel
  (red [_] (aget arr (* 4 i)))
  (green [_] (aget arr (+ 1 (* 4 i))))
  (blue [_] (aget arr (+ 2 (* 4 i))))
  (alpha [_] (aget arr (+ 3 (* 4 i))))

  IBitmap
  (width [_] w)
  (height [_] h)
  (data [_] arr)
  
  ISeqable
  (-seq [this] this)

  ASeq
  ISeq
  (-first [_] (let [offset (* 4 i)]
                [(aget arr offset)
                 (aget arr (+ 1 offset))
                 (aget arr (+ 2 offset))
                 (aget arr (+ 3 offset))]))
  (-rest [_] (if (< (* (inc i) 4) (alength arr))
                 (ImageDataSeq. w h arr (inc i))
                 (list)))

  INext
  (-next [_] (if (< (* (inc i) 4) (alength arr))
                 (ImageDataSeq. w h arr (inc i))
                 nil))

  ICounted
  (-count [_] (- (/ (alength arr) 4) i)) 

  IIndexed
  (-nth [coll n]
    (-nth coll n empty-pixel))
  (-nth [coll n not-found]
    (let [off (* 4 (+ n i))]
      (if (< off (alength arr))
        [(aget arr off)
         (aget arr (+ 1 off))
         (aget arr (+ 2 off))
         (aget arr (+ 3 off))]
        not-found)))

  ISequential
  IEquiv
  (-equiv [coll other] (equiv-sequential coll other))

  IEmptyableCollection
  (-empty [coll] cljs.core.List/EMPTY)

  IReduce
  (-reduce [coll f]
    (if (counted? arr)
      (ci-reduce arr f (aget arr i) (inc i))
      (ci-reduce coll f (aget arr i) 0)))
  (-reduce [coll f start]
    (if (counted? arr)
      (ci-reduce arr f start i)
      (ci-reduce coll f start 0)))

  IHash
  (-hash [coll] (hash-coll coll))

  IReversible
  (-rseq [coll]
    (let [c (-count coll)]
      (if (pos? c)
        (RSeq. coll (dec c) nil)
        ()))))

;; ImageData
;; Extend the native ImageData type with ClojureScript protocols so that it can
;; be operated on with standard collection functions.

(extend-type js/ImageData

  IBitmap
  (width [img] (.-width img))
  (height [img] (.-height img))
  (data [img] (.-data img))

  ICounted
  (-count [coll] (* (.-width coll) (.-height coll)))

  IIndexed
  (-nth [coll n]
    (-nth coll n empty-pixel))
  (-nth [coll n not-found]
    (let [pix (.-data coll)
          offset (* 4 n)]
      (if (and (>= n 0) (< n (count coll)))
        [(aget pix offset)        ; red
         (aget pix (+ 1 offset))  ; green
         (aget pix (+ 2 offset))  ; blue
         (aget pix (+ 3 offset))] ; alpha
        not-found)))

  ILookup
  (-lookup [coll k]
    (-lookup coll k empty-pixel))
  (-lookup [coll [x y] not-found]
    (if (and (>= x 0) (>= y 0)
             (< x (.-width coll)) (< y (.-height coll)))
      (-nth coll (+ x (* y (.-width coll))) not-found)
      not-found))

  IAssociative
  (-contains-key? [coll [x y]]
    (and (>= x 0)
         (>= y 0)
         (< x (.-width coll))
         (< y (.-height coll))))

  IFn
  (-invoke
    ([coll k]
     (-lookup coll k))
    ([coll k not-found]
     (-lookup coll k not-found)))

  ISeqable
  (-seq [coll]
    (ImageDataSeq. (.-width coll) (.-height coll) (.-data coll) 0))

)