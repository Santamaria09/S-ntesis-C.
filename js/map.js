document.addEventListener("DOMContentLoaded", function () {

  const svg = document.getElementById("mapa");
  const group = document.getElementById("mapageneral");
  const departamentos = group.querySelectorAll("path");

  departamentos.forEach(dep => {

    dep.addEventListener("click", function () {

      departamentos.forEach(d => d.style.fill = "");
      dep.style.fill = "#198087";

      const bbox = dep.getBBox();
      const svgRect = svg.getBoundingClientRect();

      const svgWidth = svgRect.width;
      const svgHeight = svgRect.height;

      const scale = Math.min(
        svgWidth / bbox.width,
        svgHeight / bbox.height
      ) * 0.4;

      const centerX = bbox.x + bbox.width / 2;
      const centerY = bbox.y + bbox.height / 2;

      const translateX = (svgWidth / 2) - (centerX * scale);
      const translateY = (svgHeight / 2) - (centerY * scale);

      group.style.transform =
        `translate(${translateX}px, ${translateY}px) scale(${scale})`;

    });

  });

  svg.addEventListener("dblclick", function () {

    group.style.transform = "translate(0px, 0px) scale(1)";
    departamentos.forEach(d => d.style.fill = "");

  });

});