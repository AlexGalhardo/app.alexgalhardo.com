const app_url = document.querySelector('#app_url').value

async function recommendOtherBook() {
    const response = await fetch(`${app_url}/api/public/books/random`)
    const object = await response.json()

    Object.entries(object).forEach(([key, value]) => {
        document.getElementById('book_id').value = object.book.id
        document.getElementById('book_image').src = object.book.image
        document.getElementById('book_title').innerHTML = object.book.title
        document.getElementById('book_year_release').innerHTML =
            object.book.year_release
        document.getElementById('book_resume').innerHTML = object.book.resume
        document.getElementById('book_author').innerHTML = object.book.author
        document.getElementById('book_genres').innerHTML = object.book.genres
        document.getElementById('book_pages').innerHTML = object.book.pages
    })
}
