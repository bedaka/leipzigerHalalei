<<<<<<< HEAD
var bar = new ProgressBar.Path('#heart-path', {
  easing: 'easeInOut',
  duration: 5000,
});

bar.set(0);
bar.animate(1.0);

var loadFile = function(event,id) {
  var output = document.getElementById(id);
  output.src = URL.createObjectURL(event.target.files[0]);
};
=======
function matchHeart(){
  var bar = new ProgressBar.Path('#heart-path', {
    easing: 'easeInOut',
    duration: 1400
  });

  bar.set(0);
  var random = Math.random()*(1.01-0.0)+0.0;
  bar.animate(random);
};
>>>>>>> e404fb22ace9e9ec4e4741006a5d2bb9fce8fc1a
