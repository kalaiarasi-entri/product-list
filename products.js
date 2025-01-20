//Get products from api and render it in grid using template
async function fetchAndDisplayProducts() {
    try {
        const products = await (await fetch('https://fakestoreapi.com/products')).json();
        //Get only 20 products
        products.slice(0, 20);
        const productGrid = document.getElementById('product-container');
        const template = document.getElementById('product-template').content;

        // Clear existing products
        productGrid.innerHTML = '';

        // Looping each product and show it in list
        products.forEach(({ image, title, category, price }) => {
            const clone = document.importNode(template, true);
            clone.querySelector('.product-image').src = image;
            clone.querySelector('.product-image').alt = title;
            clone.querySelector('.product-title').textContent = title;
            clone.querySelector('.product-category').textContent = category;
            clone.querySelector('.product-price').textContent = `$${price}`;
            productGrid.appendChild(clone);
        });
    } catch (error) {
        console.error('Error while get product details', error);
    }
}

// Fetch and display products on page load
fetchAndDisplayProducts();
