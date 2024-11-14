document.addEventListener("DOMContentLoaded", function() {
// ---------------MOSTRAR CATEGORIA MOUSE ENTER/LEAVE--------------
    
    
    
    const opcCategorias = document.getElementById("opcCategorias");
    const menuCategorias = document.getElementById("menuCategorias");

    // Función para mostrar el menú
    function mostrarMenuCategorias() {
        menuCategorias.style.display = "block";
    }

    // Función para ocultar el menú
    function ocultarMenuCategorias() {
        menuCategorias.style.display = "none";
    }

    // Mostrar el menú al pasar el mouse sobre el botón
    opcCategorias.addEventListener("mouseenter", mostrarMenuCategorias);

    // Ocultar el menú al sacar el mouse del botón y del menú
    opcCategorias.addEventListener("mouseleave", function() {
        setTimeout(() => {
            if (!menuCategorias.matches(":hover") && !opcCategorias.matches(":hover")) {
                ocultarMenuCategorias();
            }
        }, 200); // Ajusta el tiempo si es necesario
    });

    menuCategorias.addEventListener("mouseleave", ocultarMenuCategorias);
    menuCategorias.addEventListener("mouseenter", mostrarMenuCategorias);

});







