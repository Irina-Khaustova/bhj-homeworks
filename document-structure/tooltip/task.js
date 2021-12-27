const tooltips = Array.from(document.querySelectorAll(".has-tooltip"));

tooltips.forEach(element => {

    let tooltipElement = document.createElement("div");
    tooltipElement.classList.add("tooltip");
    const tooltip = element.getAttribute("title");
    tooltipElement.textContent = tooltip;
    element.after(tooltipElement);
    tooltipElement.style = "left: 0; top: 0";
    element.style.position = "relative";

    element.onclick = function () {
      
      tooltipElement.classList.add("tooltip_active");
      //element.textContent
      console.log(element.classList)
      return false;

    }


});