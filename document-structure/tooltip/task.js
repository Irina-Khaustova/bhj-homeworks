const tooltips = Array.from(document.querySelectorAll(".has-tooltip"));
console.log(tooltips)
tooltips.forEach(element => {

  let tooltipElement = document.createElement("div");
  tooltipElement.classList.add("tooltip");
  const tooltip = element.getAttribute("title");
  tooltipElement.textContent = tooltip;
  element.append(tooltipElement);
  const coord = element.getBoundingClientRect();
  console.log(coord.top)

  element.onclick = function () {
      
     
    if (document.querySelector(".tooltip_active") && !tooltipElement.classList.contains("tooltip_active")) {
      document.querySelector(".tooltip_active").classList.remove("tooltip_active");
    }
      
    tooltipElement.classList.toggle("tooltip_active");
    tooltipElement.style.top = (coord.top) + 20 + "px";
    tooltipElement.style.left = coord.left + 20 + "px";
    return false;
  }
});