var random = 0;
function matchHeart(){
  var bar = new ProgressBar.Path('#heart-path', {
    easing: 'easeInOut',
    duration: 1400
  });

  bar.set(0);
  random = Math.random()*(1.00-0.0)+0.0;
  bar.animate(random);
};

var loadFile = function(event,id) {
  var output = document.getElementById(id);
  output.src = URL.createObjectURL(event.target.files[0]);
};

function showPercentage(){
  var percentage = 100 * random;
  if(percentage < 50){
  document.getElementById("matchLove").innerHTML = percentage.toFixed(2) + "%";
  window.alert("Hui das schaut nicht gut aus. Ihr passt nur " + percentage.toFixed(2) + "% zueinander. Vielleicht solltest du lieber etwas anderes bestellen.");}
  else if(percentage >= 50){
  document.getElementById("matchLove").innerHTML = percentage.toFixed(2) + "%";
  window.alert("Wow. " + percentage.toFixed(2) + "%. Das ist der Döners fürs Leben!");}
}
