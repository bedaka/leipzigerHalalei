function matchHeart(){
  var bar = new ProgressBar.Path('#heart-path', {
    easing: 'easeInOut',
    duration: 1400
  });

  bar.set(0);
  var random = Math.random()*(1.01-0.0)+0.0;
  bar.animate(random);
};
