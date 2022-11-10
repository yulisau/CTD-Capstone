/*first SVG: motion path 
"Animates an element relative to the x, y and angle values of an SVG path element.
The path function returns a new Function that returns the specified property."
*/


/*code example from codepen example*/ 
var path = anime.path('path');

var easings = ['linear', 'easeInCubic', 'easeOutCubic', 'easeInOutCubic'];

var motionPath = anime({
  targets: '.square',
  translateX: path('x'),
  translateY: path('y'),
  rotate: path('angle'),
  easing: function (el, i) {
    return easings[i];
  },
  duration: 10000,
  loop: true
});

