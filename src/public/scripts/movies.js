const app_url = document.querySelector('#app_url').value;

async function recommendOtherMovie() {
    const response = await fetch(`${app_url}/api/public/movies/random`);
    const object = await response.json();

    Object.entries(object).forEach(([key, value]) => {
        document.getElementById('movie_id').value = object[0].id;
        document.getElementById('movie_image').src = object[0].image;
        document.getElementById('movie_title').innerHTML = object[0].title;
        document.getElementById('movie_year_release').innerHTML =
            object[0].year_release;
        document.getElementById('movie_resume').innerHTML = object[0].resume;
        document.getElementById('movie_duration').innerHTML =
            object[0].duration;
        document.getElementById('movie_genres').innerHTML = object[0].genres;
    });
}
