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







// ----------MOSTAR CATEGORIA CON BOTON-----------


 // // Seleccionar el botón y el menú
    // const opcCategorias = document.getElementById("opcCategorias");
    // const menuCategorias = document.getElementById("menuCategorias");

    // // Función para mostrar/ocultar el menú de categorías
    

    // function toggleMenuCategorias() {
    //     // Cambiar entre 'block' y 'none' para mostrar/ocultar
    //     menuCategorias.style.display = menuCategorias.style.display === "none" ? "block" : "none";
    // }

    // // Asignar el evento al botón para mostrar/ocultar el menú
    // opcCategorias.addEventListener("click", toggleMenuCategorias);
    // // Asignar el evento de redirección a cada enlace de categoría
    // const categorias = document.querySelectorAll("#menuCategorias .categoria");
    // categorias.forEach(categoria => {
    //     categoria.addEventListener("click", (event) => {
    //         event.preventDefault(); // Evitar el comportamiento predeterminado
    //         window.location.href = categoria.href; // Redirigir a la página de la categoría
    //     });
    // });