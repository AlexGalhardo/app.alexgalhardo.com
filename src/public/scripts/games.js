/* eslint-disable no-undef */
// const user_id = document.querySelector('#user_id').value || null;
const app_url = document.querySelector('#app_url').value;

async function recommendOtherGame() {
    const response = await fetch(`${app_url}/api/public/games/random`);
    const object = await response.json();

    Object.entries(object).forEach(([key, value]) => {
        document.querySelector('#game_id').value = object[0].id;
        document.querySelector('#game_image').src = object[0].image;
        document.querySelector('#game_title').innerHTML = object[0].title;
        document.querySelector('#game_price_value').value = parseFloat(
            object[0].price / 100
        ).toFixed(2);
        document.querySelector('#game_price').innerHTML = parseFloat(
            object[0].price / 100
        ).toFixed(2);
        document.querySelector('#game_year_release').innerHTML =
            object[0].year_release;
        document.querySelector('#game_resume').innerHTML = object[0].resume;
        document.querySelector('#game_genres').innerHTML = object[0].genres;
        document.querySelector('#game_platforms').innerHTML =
            object[0].platforms;
        document.querySelector('#game_developer').innerHTML =
            object[0].developer;
        document.querySelector('#game_igdb_link').href = object[0].igdb_link;
        document.querySelector('#game_igdb_rating').innerHTML =
            object[0].igdb_rating;
        document.querySelector(
            '#game_admin_update_link'
        ).href = `/admin/update/game/${object[0].id}`;
    });
}

async function addGameToCart() {
    const gameId = document.querySelector('#game_id').value;
    const gamePriceValue = document.querySelector('#game_price_value').value;
    const response = await fetch(`${app_url}/api/addCart/game/${gameId}`);
    const object = await response.json();

    const buttonAddGameToCart = document.querySelector(
        '#button_add_game_to_cart'
    );

    if (object.added_game_to_shop_cart) {
        buttonAddGameToCart.classList.remove('btn-outline-success');
        buttonAddGameToCart.classList.add('btn-success');
        buttonAddGameToCart.innerHTML = `Added To Cart!`;
    } else {
        buttonAddGameToCart.classList.add('btn-outline-success');
        buttonAddGameToCart.classList.remove('btn-success');
        buttonAddGameToCart.innerHTML = `<i class="bi bi-cart-plus"></i> Add To Cart [$ <span id="game_price">${gamePriceValue}</span>]`;
    }
}
