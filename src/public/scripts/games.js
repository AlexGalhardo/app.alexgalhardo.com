const user_id = document.querySelector('#user_id').value || null
const app_url = document.querySelector('#app_url').value
const formStripeCheckoutEl = document.querySelector('#form_stripe_checkout')

async function recommendOtherGame() {
    let previousGameID = document.querySelector('#game_id').value

    const response = await fetch(`${app_url}/api/public/games/random`)
    const object = await response.json()

    Object.entries(object).forEach(([key, value]) => {
        document.querySelector('#game_id').value = object.game.id
        document.querySelector('#game_image').src = object.game.image
        document.querySelector('#game_title').innerHTML = object.game.title
        document.querySelector('#game_year_release').innerHTML =
            object.game.year_release
        document.querySelector('#game_resume').innerHTML = object.game.resume
        document.querySelector('#game_genres').innerHTML = object.game.genres
        document.querySelector('#game_platforms').innerHTML =
            object.game.platforms
        document.querySelector('#game_developer').innerHTML =
            object.game.developer
        document.querySelector('#game_igdb_link').href = object.game.igdb_link
        document.querySelector('#game_igdb_rating').innerHTML =
            object.game.igdb_rating
    })
}