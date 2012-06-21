function PadawanSlider(element) {

  // Useful variables
  var vars = {
    currentSlide: 0,
    totalSlide: 0
  };

  // Get this slider
  var slider = $(element);

  // Find slider children
  var children = slider.getElementsByTagName('img');

  for (var i = 0; i < children.length; i++) {
    var child = children[i];

    // Show initial child
    if (vars.currentSlide == i) {
      child.style.opacity = 1;
    }
  };

  // Increases total slides
  vars.totalSlides++;

};
