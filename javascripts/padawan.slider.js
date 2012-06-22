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

  // Add control nav
  var controlNav = document.createElement('ul');
  controlNav.className = 'padawan-control-nav';
  slider.appendChild(controlNav);

  for (var i = 0; i < children.length; i++) {
    var child = children[i];

    // Show initial child
    if (vars.currentSlide == i) {
      child.style.opacity = 1;
    }

    // Set height to slider
    if (slider.offsetHeight < child.height) {
      slider.style.height = child.height + 'px';
    }

    // Populate control nav
    controlNav.innerHTML += '<li><a rel="' + i + '">' + (i + 1) + '</a></li>';
    controlNav.getElementsByTagName('a')[vars.currentSlide].className = 'active';
  }

  // Increases total slides
  vars.totalSlides++;

};
