const app_url = document.querySelector("#app_url").value;

async function recommendOtherBook() {
    const response = await fetch(`${app_url}/api/public/books/random`);
    const object = await response.json();

    Object.entries(object).forEach(([key, value]) => {
        document.getElementById("book_id").value = object.id;
        document.getElementById("book_image").src = object.image;
        document.getElementById("book_title").innerHTML = object.title;
        document.getElementById("book_price_value").value = parseFloat(object.price / 100).toFixed(2);
        document.getElementById("book_year_release").innerHTML = object.year_release;
        document.getElementById("book_resume").innerHTML = object.resume;
        document.getElementById("book_author").innerHTML = object.author;
        document.getElementById("book_genres").innerHTML = object.genres;
        document.getElementById("book_pages").innerHTML = object.pages;
    });

    document.querySelector("#book_admin_update_link").href = `/admin/update/book/${object.id}`;
}
