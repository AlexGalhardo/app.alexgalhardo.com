/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
// const app_url = document.querySelector("#app_url").value;
// const gamePriceValue = document.querySelector("#game_price_value").value;

async function recommendOtherGame() {
    // const response = await fetch(`${app_url}/api/public/games/random`);
    const response = await fetch(`http://localhost:3000/api/public/games/random`);
    const object = await response.json();

    Object.entries(object).forEach(([key, value]) => {
        document.querySelector("#game_id").value = object.id;
        document.querySelector("#game_image").src = object.image;
        document.querySelector("#game_title").innerHTML = object.title;
        document.querySelector("#game_price_value").value = parseFloat(object.price / 100).toFixed(2);
        document.querySelector("#game_year_release").innerHTML = object.year_release;
        document.querySelector("#game_resume").innerHTML = object.resume;
        document.querySelector("#game_genres").innerHTML = object.genres;
        document.querySelector("#game_platforms").innerHTML = object.platforms;
        document.querySelector("#game_developer").innerHTML = object.developer;
        document.querySelector("#game_igdb_link").href = object.igdb_link;
        document.querySelector("#game_igdb_rating").innerHTML = object.igdb_rating;
    });

    document.querySelector("#game_price").innerHTML = parseFloat(object.price / 100).toFixed(2);

    document.querySelector("#game_admin_update_link").href = `/admin/update/game/${object.id}`;
}
