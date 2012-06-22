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
  var controlNav = document.createElement('ul'),
      controlNavLinks;

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
  }

  controlNavLinks = controlNav.getElementsByTagName('a');

  // Set current link active in control nav
  controlNavLinks[vars.currentSlide].className = 'active';

  for (var i = 0; i < controlNavLinks.length; i++) {
    var control = controlNavLinks[i];

    // Set event to control nav links
    control.onclick = function(event) {
      event.preventDefault();

      // Show slide
      children[this.rel].style.opacity = 1;

      // Hide current slide
      children[vars.currentSlide].style.opacity = 0;

      // Update active link in control nav
      controlNavLinks[this.rel].className = 'active';
      controlNavLinks[vars.currentSlide].className = '';

      // Update current slide
      vars.currentSlide = this.rel;
    };
  }

  // Increases total slides
  vars.totalSlides++;

};
