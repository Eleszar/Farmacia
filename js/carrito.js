document.addEventListener("DOMContentLoaded", function() {
    let cart = [];

    function addToCart(name, imgUrl, price) {
        cart.push({ name, imgUrl, price });
        renderCart();
    }

    function renderCart() {
        const cartList = document.getElementById('cart-list');
        cartList.innerHTML = '';
        cart.forEach((product, index) => {
            const li = document.createElement('li');
            const img = document.createElement('img');
            img.src = product.imgUrl;
            img.alt = product.name;
            const productInfo = document.createElement('div');
            productInfo.innerHTML = `<strong>${product.name}</strong><br>${product.price}`;
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Eliminar';
            removeButton.onclick = () => removeCartItem(index);
            li.appendChild(img);
            li.appendChild(productInfo);
            li.appendChild(removeButton);
            cartList.appendChild(li);
        });
    }

    function removeCartItem(index) {
        cart.splice(index, 1);
        renderCart();
    }

    window.addToCart = addToCart;
});
