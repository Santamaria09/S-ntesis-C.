document.addEventListener("DOMContentLoaded", function () {

  const svg = document.getElementById("mapa");
  const group = document.getElementById("mapageneral");
  const departamentos = group.querySelectorAll("path");

  let currentScale = 1;
  let currentX = 0;
  let currentY = 0;

  departamentos.forEach(dep => {

    dep.addEventListener("click", function () {

      // Quitar selección previa
      departamentos.forEach(d => d.style.fill = "");
      dep.style.fill = "#198754";

      const bbox = dep.getBBox();

      const svgRect = svg.getBoundingClientRect();

      const width = svgRect.width;
      const height = svgRect.height;

      const scale = Math.min(
        width / bbox.width,
        height / bbox.height
      ) * 0.6; // 0.6 controla cuánto se acerca

      const x = bbox.x + bbox.width / 2;
      const y = bbox.y + bbox.height / 2;

      const translateX = width / 2 - scale * x;
      const translateY = height / 2 - scale * y;

      currentScale = scale;
      currentX = translateX;
      currentY = translateY;

      group.style.transition = "transform 0.6s ease";
      group.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;

    });

  });

});