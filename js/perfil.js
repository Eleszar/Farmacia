document.addEventListener("DOMContentLoaded", function() {
  // Selecciona elementos necesarios
  const salirButton = document.getElementById("salir-btn");
  const sections = document.querySelectorAll(".caja-info");
  const buttons = document.querySelectorAll(".menu-perfil button");
  const tituloPerfil = document.querySelector(".titulo-perfil");
  const perfilSection = document.getElementById("perfil"); // Selecciona la sección "Perfil"
  
  // // Oculta todas las secciones inicialmente
  sections.forEach((section) => {
    if (section.id !== "perfil") { 
      section.style.display = "none";
    } else {
      section.style.display = "block";
      tituloPerfil.textContent = "Perfil"; // Actualiza el título
    }
  });

  
 

  // Añade el evento de clic a cada botón en el menú para cambiar de sección
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      // Oculta todas las secciones
      sections.forEach((section) => (section.style.display = "none"));

      // Muestra la sección correspondiente al botón presionado
      const sectionId = button.getAttribute("data-section");
      const sectionToShow = document.getElementById(sectionId);
      if (sectionToShow) sectionToShow.style.display = "block";

      // Cambia el contenido del título dinámicamente
      tituloPerfil.textContent = sectionId.charAt(0).toUpperCase() + sectionId.slice(1);
    });
  });

  // Añade evento de clic al botón "Salir" para redirigir a index.html
  if (salirButton) {
    salirButton.addEventListener("click", function () {
      window.location.href = "/Farmacia/html/index.html";
    });
  }
});
