/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */

const app_url = document.querySelector('#app_url').value;

const bookPriceValue = document.querySelector('#book_price_value').value;

const buttonAddBookToCart = document.querySelector('#button_add_book_to_cart');

const totalShopCartItens = document.querySelector('#total_shopCart_itens');

async function recommendOtherBook() {
    const response = await fetch(`${app_url}/api/public/books/random`);
    const object = await response.json();

    Object.entries(object).forEach(([key, value]) => {
        document.getElementById('book_id').value = object.id;
        document.getElementById('book_image').src = object.image;
        document.getElementById('book_title').innerHTML = object.title;
        document.getElementById('book_price_value').value = parseFloat(
            object.price / 100
        ).toFixed(2);
        document.getElementById('book_year_release').innerHTML =
            object.year_release;
        document.getElementById('book_resume').innerHTML = object.resume;
        document.getElementById('book_author').innerHTML = object.author;
        document.getElementById('book_genres').innerHTML = object.genres;
        document.getElementById('book_pages').innerHTML = object.pages;
    });

    if (object.inLoggedUserCart) {
        buttonAddBookToCart.classList.remove('btn-outline-success');
        buttonAddBookToCart.classList.add('btn-success');
        buttonAddBookToCart.innerHTML = `Added To Cart!`;
    } else {
        buttonAddBookToCart.classList.add('btn-outline-success');
        buttonAddBookToCart.classList.remove('btn-success');
        buttonAddBookToCart.innerHTML = `<i class="bi bi-cart-plus"></i> Add To Cart [$ <span id="book_price">${bookPriceValue}</span>]`;
    }

    document.querySelector(
        '#link_pagarme_checkout'
    ).href = `/checkout/pagarme/book/${object.id}`;

    document.querySelector('#book_price').innerHTML = parseFloat(
        object.price / 100
    ).toFixed(2);

    document.querySelector(
        '#book_admin_update_link'
    ).href = `/admin/update/book/${object.id}`;
}

async function addBookToCart() {
    const bookId = document.querySelector('#book_id').value;
    const response = await fetch(`${app_url}/api/addCart/book/${bookId}`);
    const object = await response.json();

    buttonAddBookToCart.classList.add('btn-outline-success');
    buttonAddBookToCart.classList.remove('btn-success');
    buttonAddBookToCart.innerHTML = `<i class="bi bi-cart-plus"></i> Add To Cart [$ <span id="book_price">${bookPriceValue}</span>]`;

    if (object.inLoggedUserCart) {
        buttonAddBookToCart.classList.remove('btn-outline-success');
        buttonAddBookToCart.classList.add('btn-success');
        buttonAddBookToCart.innerHTML = `Added To Cart!`;
        totalShopCartItens.innerHTML =
            parseInt(totalShopCartItens.innerHTML) + 1;
    } else {
        totalShopCartItens.innerHTML =
            parseInt(totalShopCartItens.innerHTML) - 1;
    }
}
