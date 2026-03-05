document.addEventListener("DOMContentLoaded", function () {
  const depa = {
    SVSS: {
      nombre: "San Salvador",
      descripcion: "Es la capital, el principal centro urbano y la ciudad más poblada de la República de El Salvador.",
      imagen: "sansalvador1.jpeg",
      pagina: "san_salvador.html"
    },
    SVSA: {
      nombre: "Santa Ana",
      descripcion: "Es uno de los departamentos más importantes del país. Alberga el Volcán de Santa Ana (Ilamatepec), el hermoso Lago de Coatepeque y una de las catedrales más imponentes.",
      imagen: "san12.jpeg",
      pagina: "santa_ana.html"
    },
    SVCA: {
      nombre: "Cabañas",
      descripcion: "Famoso por la artesanía en barro de Ilobasco y por la represa Cerrón Grande.",
      imagen: "cabana.jpeg",
      pagina: "cabañas.html"
    },
    SVPA: {
      nombre: "La Paz",
      descripcion: "Famoso por la Costa del Sol y sus extensas playas ideales para el turismo.",
      imagen: "paz2.jpeg",
      pagina: "la_paz.html"
    },
    SVCU: {
      nombre: "Cuscatlán",
      descripcion: "Destaca por su tradición cultural y gastronómica, especialmente el famoso chorizo de Cojutepeque.",
      imagen: "cus.jpeg",
      pagina: "cuscatlan.html"
    },
    SVMO: {
      nombre: "Morazán",
      descripcion: "Rico en historia y naturaleza. Fue escenario importante durante el conflicto armado.",
      imagen: "morazan.jpeg",
      pagina: "morazan.html"
    },
    SVSV: {
      nombre: "San Vicente",
      descripcion: "Conocido como “La Ciudad de las Colinas”. Destaca por el Volcán Chinchontepec y su arquitectura colonial.",
      imagen: "sanvicente.jpeg",
      pagina: "san_vicente.html"
    },
    SVAH: {
      nombre: "Ahuachapán",
      descripcion: "Conocido por su clima fresco y Destaca por sus aguas termales, como Los Termales de Santa Teresa, y su producción de café.",
      imagen: "agua.jpeg",
      pagina: "ahuachapan.html"//
    },
    SVUN: {
      nombre: "La Unión",
      descripcion: "Ubicado en el extremo oriental, destaca por el Golfo de Fonseca y su puerto marítimo.",
      imagen: "union.jpeg",
      pagina: "la_union.html"
    },
    SVSM: {
      nombre: "San Miguel",
      descripcion: "Es uno de los departamentos más grandes. Destaca por el Carnaval de San Miguel y el Volcán Chaparrastique.",
      imagen: "sanmiguel1.jpeg",
      pagina: "san_miguel.html"
    },
    SVUS: {
      nombre: "Usulután",
      descripcion: "Conocido por la Bahía de Jiquilisco y la Laguna de Alegría. Tiene importantes zonas naturales protegidas.",
      imagen: "usulutan.jpeg",
      pagina: "usulutan.html"
    },
    SVCH: {
      nombre: "Chalatenango",
      descripcion: "Conocido por su clima fresco y montañoso. Aquí se encuentra El Pital, el punto más alto del país.",
      imagen: "nango.jpeg",
      pagina: "chalatenango.html"
    },
    SVSO: {
      nombre: "Sonsonate",
      descripcion: "Famoso por sus playas como los Cóbanos y por su tradición cultural. En Juayúa se celebra el popular festival gastronómico.",
      imagen: "sonsonate.jpeg",
      pagina: "sonsonate.html"
    },
    SVLI: {
      nombre: "La Libertad",
      descripcion: "Reconocido por sus playas ideales para surf, como El Tunco y El Zonte. Es uno de los principales destinos turísticos del país.",
      imagen: "libertad.jpeg",
      pagina: "la_libertad.htm"
    },
  };
  const circles = document.querySelectorAll("#label_points circle");

  const modalElement = document.getElementById("DepaI");
  const modal = new bootstrap.Modal(modalElement);

  circles.forEach(circle => {
    circle.addEventListener("click", function () {

      const id = this.id;
    

      if (depa[id]) {

        document.getElementById("nameDepo").textContent =
          depa[id].nombre;

        document.getElementById("contentDepo").textContent =
          depa[id].descripcion;

        document.getElementById("imagenDepo").src = "imagen/" +
          depa[id].imagen;

        document.getElementById("botonDepo").href =
        "Departamentos/" + depa[id].pagina;

          modal.show();

      }

    });
  });

});