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
