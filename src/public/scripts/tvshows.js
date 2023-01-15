const app_url = document.querySelector("#app_url").value;

async function recommendOtherTVShow() {
    const response = await fetch(`${app_url}/api/public/tvshows/random`);
    const object = await response.json();

    Object.entries(object).forEach(([key, value]) => {
        document.getElementById("tvshow_id").value = object[0].id;
        document.getElementById("tvshow_image").src = object[0].image;
        document.getElementById("tvshow_title").innerHTML = object[0].title;
        document.getElementById("tvshow_year_release").innerHTML = object[0].year_release;
        document.getElementById("tvshow_tmdb_link").href = object[0].tmdb_link;
        document.getElementById("tvshow_tmdb_rating").innerHTML = object[0].tmdb_rating;
        document.getElementById("tvshow_resume").innerHTML = object[0].resume;
        document.getElementById("tvshow_duration").innerHTML = object[0].duration;
        document.getElementById("tvshow_genres").innerHTML = object[0].genres;
    });
}
