var random = 0;
function matchHeart(){
  var bar = new ProgressBar.Path('#heart-path', {
    easing: 'easeInOut',
    duration: 1400
  });

  bar.set(0);
  random = Math.random()*(1.01-0.0)+0.0;
  bar.animate(random);
};

var loadFile = function(event,id) {
  var output = document.getElementById(id);
  output.src = URL.createObjectURL(event.target.files[0]);
};

function showPercentage(){
  var percentage = 100 * random;
  document.getElementById("matchLove").innerHTML = percentage.toFixed(2) + "%";
  if(percentage < 50){
  window.alert("Hui das schaut nicht gut aus. Vielleicht solltest du lieber etwas anderes bestellen");
}
  else{ window.alert("Das ist der Döners fürs Leben!");}
}
