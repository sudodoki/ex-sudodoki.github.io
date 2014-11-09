(ns twitter-flock.core
  (:use
   [Math :only [ceil abs cos sin PI atan sqrt]])
  (:require
    [twitter-flock.image-data-helper]))

(enable-console-print!)


; ============ vector stuff
(defn add-vector
  "Adding two or more vectors"
  [& vectors]
  (apply #(apply mapv + %&) vectors))

(defn substract-vector
  "Substract vectors from the initial one"
  [& vectors]
  (apply #(apply mapv - %&) vectors))

(defn rotate
  "Rotate point relative to the center"
  [center point angle]
  (let [[x y] (substract-vector point center)]
    (add-vector center (array (- (* x (cos angle)) (* y (sin angle))) (+ (* y (cos angle)) (* x (sin angle)))))))


; ============ canvas stuff
(defn- attr [e a]
  (.getAttribute e a))

(def canvas  (.getElementById js/document "canvas-area"))
(def ctx (.getContext canvas "2d"))
(def canvas-width (.-width canvas))
(def canvas-height (.-height canvas))
(def canvas-size [canvas-width canvas-height])
(def canvas-center (map #(/ % 2) canvas-size))

; (def canvas-twin (.createElement js/document "canvas"))
(def canvas-twin (.getElementById js/document "canvas-area-2"))
(aset "width" canvas-twin canvas-width)
(aset "height" canvas-twin canvas-height)
(def ctx-twin (.getContext canvas-twin "2d"))

(defn clear []
  "Clear ctx"
  (.clearRect ctx 0 0 canvas-width canvas-height))

(defn moveTo
  "Call ctx.moveTo(x,y)"
  [ctx point]
  (let [[x y] point]
    (.moveTo ctx x y)))

(defn lineTo
  "Call ctx.lineTo(x,y)"
  [ctx point]
  (let [[x y] point]
    (.lineTo ctx x y)))

(defn drawBird
  "Draw so called 'bird' which is 2x2 rectangle"
  [bird]
  (let [
    {x :x y :y} bird
    [speed-x speed-y] (first (:vectors bird))
    ]
    (.fillRect ctx x y 2 2)))


;============= bird stuff
(let [
  canvas-center-x (nth canvas-center 0)
  canvas-center-y (nth canvas-center 1)
  ]
  (defn create-bird
    ([]    (create-bird (+ (- (rand-int 80) 40) canvas-center-x) (+ (- (rand-int 80) 40) canvas-center-y)))
    ([x y] {:x x :y y :vectors [[(- (rand-int 10) 5) (- (rand-int 10) 5)]]})))


(def init-birds (repeatedly 1500 create-bird))

(defonce all-birds (atom init-birds))

(add-watch all-birds nil (fn [_ _ _ birds] (request-render birds)))


;============= loop stuff
(let [render-pending? (atom false)]
  (defn request-render [birds]
    (when (compare-and-set! render-pending? false true)
      (.requestAnimationFrame js/window
        (fn []
          (clear)
          #_(println "request-render called with " birds)
          (.beginPath ctx)
          (aset ctx "fillStyle" "#55acee")
          (doall (map drawBird birds))
          (.stroke ctx)
          (reset! render-pending? false))))))


;============= image manipulation stuff
(defn get-twin-state
  [x y]
  (nth (nth @twin-data (+ (* canvas-width  (- y 1)) x)) 0))

(defn check-for-boundaries
  [speed bird]
  (let [
    [speed-x speed-y] speed
    {x :x y :y} bird
    new-x (+ x speed-x)
    new-y (+ y speed-y)
    center-x (nth canvas-center 0)
    center-y (nth canvas-center 1)
    current-state (get-twin-state x y)
    ]
    (cond
      ; 255 - white - image edge, should move to center
      (> current-state 230 ) (map #(+ (/ % 10) (- (rand-int 3) 2)) (substract-vector canvas-center [x y]))
      (= current-state nil) '(0 0)
      :else speed)
    ))

(defn normalize
  "Cap value by max-abs-value"
  [max-abs-value value]
  (let
    [
    real-abs-value (abs value)
    sign (ceil (/ value real-abs-value))
    ]
    (if (< real-abs-value max-abs-value) value (* sign max-abs-value))))

(defn update-coord
  "Update birds x, y & speed"
  [bird]
  (let [
    normalize-speed (partial normalize 2)
    [speed-x speed-y] (map normalize-speed (check-for-boundaries (first (:vectors bird)) bird))
    ]
    (assoc bird :x (ceil (+ (:x bird) speed-x)) :y (ceil (+ (:y bird) speed-y)) :vectors [[speed-x speed-y]])))

(defn next-tick
  "Updating :x :y & vectors of all birds"
  [birds]
  (doall (map update-coord @all-birds)))

(def twin-data (atom {}))

(defn loadMask
  []
  (let [
    image (js/Image.)
    padding 20
    ]
    (do
      (aset image "onload" (fn []
       (do
         (.drawImage ctx-twin image (+ 0 padding) (+ 0 padding) (- canvas-width (* 2 padding)) (- canvas-height (* 2 padding)))
         (reset! twin-data (.getImageData ctx-twin 0 0 canvas-width canvas-height))
         (start)
         )))
      (aset image "src" "/resources/public/images/twitter-mask.jpg"))))

(defn start
  []
  (request-render @all-birds)
  (js/setInterval
    #(swap! all-birds next-tick)
    20))

(defonce app (loadMask))
