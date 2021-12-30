/* eslint-disable no-undef */
async function addEmailToNewsletter() {
    const emailToAddNewsletter = document.querySelector(
        '#email_to_add_newsletter'
    ).value;

    const validEmailRegex =
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;

    if (!emailToAddNewsletter.match(validEmailRegex)) {
        document.querySelector('#alert_success_newsletter').innerHTML = '';
        document.querySelector(
            '#alert_danger_newsletter'
        ).innerHTML = `<i class="bi bi-x-circle"></i> Invalid or Incorrect Email!`;
    } else {
        const response = await fetch(
            `http://localhost:3000/api/newsletter/${emailToAddNewsletter}`
        );
        const responseJson = await response.json();
        if (responseJson.added_email_to_newsletter) {
            document.querySelector('#alert_danger_newsletter').innerHTML = '';
            document.querySelector(
                '#alert_success_newsletter'
            ).innerHTML = `<i class="bi bi-check-circle"></i> Email added to newsletter!`;
        } else {
            document.querySelector('#alert_success_newsletter').innerHTML = '';
            document.querySelector(
                '#alert_danger_newsletter'
            ).innerHTML = `<i class="bi bi-x-circle"></i> Email removed from newsletter!`;
        }
    }
}
