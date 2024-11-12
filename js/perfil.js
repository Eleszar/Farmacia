document.addEventListener("DOMContentLoaded", function () {
  // Selecciona todos los cuadros y los botones en el menú
  const sections = document.querySelectorAll(".caja-info");
  const buttons = document.querySelectorAll(".menu-perfil button");
  const salirButton = document.getElementById("salir-btn");
  const likeButton = document.getElementById("like-button");

  // Oculta todos los cuadros inicialmente
  sections.forEach((section) => (section.style.display = "none"));

  // Añade el evento de clic a cada botón
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      // Oculta todos los cuadros
      sections.forEach((section) => (section.style.display = "none"));

      // Muestra el cuadro correspondiente al botón presionado
      const sectionId = button.getAttribute("data-section");
      const sectionToShow = document.getElementById(sectionId);
      sectionToShow.style.display = "block";
    });
  });

  // Redirige al hacer clic en el botón "Salir"
  salirButton.addEventListener("click", function () {
    window.location.href = "/Farmacia/html/index.html";
  });

  document.querySelector(".heart-icon .button").addEventListener("click", function () {
    window.location.href = "/Farmacia/html/perfil.html?section=favoritos";
  });

  likeButton.addEventListener("click", function () {
    window.location.href = "/Farmacia/html/perfil.html?section=favoritos";
  });
});
