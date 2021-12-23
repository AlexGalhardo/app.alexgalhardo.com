const app_url = document.querySelector('#app_url').value;

async function recommendOtherBook() {
    const response = await fetch(`${app_url}/api/public/books/random`);
    const object = await response.json();

    Object.entries(object).forEach(([key, value]) => {
        document.getElementById('book_id').value = object[0].id;
        document.getElementById('book_image').src = object[0].image;
        document.getElementById('book_title').innerHTML = object[0].title;
        document.getElementById('book_year_release').innerHTML =
            object[0].year_release;
        document.getElementById('book_resume').innerHTML = object[0].resume;
        document.getElementById('book_author').innerHTML = object[0].author;
        document.getElementById('book_genres').innerHTML = object[0].genres;
        document.getElementById('book_pages').innerHTML = object[0].pages;
    });
}
