const blocks = Array.from(document.querySelectorAll(".reveal"));

function isInViewport() {

  blocks.forEach( (element) => {

    const blockCoordinates = element.getBoundingClientRect().top;
    if (150 < blockCoordinates && blockCoordinates < (1.5 * window.innerHeight)) {
      return element.classList.add("reveal_active");
    } else {
      return element.classList.remove("reveal_active");
    };
  });
};

document.addEventListener('scroll', isInViewport);

