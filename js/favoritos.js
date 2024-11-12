document.addEventListener("DOMContentLoaded", function() {

let favorites = [];

function addToFavorites(name, imgUrl, price) {
    // Verificar si el producto ya está en favoritos
    const exists = favorites.some(fav => fav.name === name);
    if (exists) {
        alert('El producto ya está en favoritos.');
        return;
    }

    // Agregar producto a favoritos
    favorites.push({ name, imgUrl, price });
    renderFavorites();
}

function renderFavorites() {
    const favoritesList = document.getElementById('favorites-list');
    favoritesList.innerHTML = '';

    favorites.forEach((product, index) => {
        const li = document.createElement('li');

        // Imagen del producto
        const img = document.createElement('img');
        img.src = product.imgUrl;
        img.alt = product.name;

        // Información del producto
        const productInfo = document.createElement('div');
        productInfo.innerHTML = `<strong>${product.name}</strong><br>${product.price}`;
        
        // Botón para eliminar de favoritos
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Eliminar';
        removeButton.onclick = () => removeFavorite(index);

        li.appendChild(img);
        li.appendChild(productInfo);
        li.appendChild(removeButton);
        favoritesList.appendChild(li);
    });
}

function removeFavorite(index) {
    favorites.splice(index, 1);
    renderFavorites();
}

window.addToFavorites = addToFavorites;
});