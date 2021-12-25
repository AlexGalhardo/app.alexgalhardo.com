const user_id = document.querySelector('#user_id').value || null;
const app_url = document.querySelector('#app_url').value;

async function recommendOtherGame() {
    const response = await fetch(`${app_url}/api/public/games/random`);
    const object = await response.json();

    Object.entries(object).forEach(([key, value]) => {
        document.querySelector('#game_id').value = object[0].id;
        document.querySelector('#game_image').src = object[0].image;
        document.querySelector('#game_title').innerHTML = object[0].title;
        /* document.querySelector('#game_price').innerHTML = parseFloat(
            object[0].price / 100
        ).toFixed(2); */
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
    });
}
