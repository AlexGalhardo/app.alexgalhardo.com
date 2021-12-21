const user_id = document.querySelector('#user_id').value || null;
const app_url = document.querySelector('#app_url').value;
const formStripeCheckoutEl = document.querySelector('#form_stripe_checkout');

async function recommendOtherGame() {
    const previousGameID = document.querySelector('#game_id').value;

    const response = await fetch(`${app_url}/api/public/games/random`);
    const object = await response.json();

    Object.entries(object).forEach(([key, value]) => {
        document.querySelector('#game_id').value = object.randomGame.id;
        document.querySelector('#game_image').src = object.randomGame.image;
        document.querySelector('#game_title').innerHTML =
            object.randomGame.title;
        document.querySelector('#game_year_release').innerHTML =
            object.randomGame.year_release;
        document.querySelector('#game_resume').innerHTML =
            object.randomGame.resume;
        document.querySelector('#game_genres').innerHTML =
            object.randomGame.genres;
        document.querySelector('#game_platforms').innerHTML =
            object.randomGame.platforms;
        document.querySelector('#game_developer').innerHTML =
            object.randomGame.developer;
        document.querySelector('#game_igdb_link').href =
            object.randomGame.igdb_link;
        document.querySelector('#game_igdb_rating').innerHTML =
            object.randomGame.igdb_rating;
    });
}
