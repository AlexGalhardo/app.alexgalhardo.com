/* eslint-disable no-undef */
/* eslint-disable func-names */
const buttonUpdateProfile = document.querySelector("#button_update_profile");
const formUpdateProfile = document.querySelector("#form_update_profile");

const nameValue = document.querySelector("#name").value;
const emailValue = document.querySelector("#email").value;
const newPassword = document.querySelector("#new_password").value;
const app_url = document.querySelector("#app_url").value;

let validName = true;
let validEmail = true;
let validPassword = true;

buttonUpdateProfile.addEventListener("click", async (e) => {
    e.preventDefault();

    if (nameValue.length < 4) {
        document.querySelector("#alert_name").innerHTML = "Invalid name";
        validName = false;
    } else {
        document.querySelector("#alert_name").innerHTML = "";
        validName = true;
    }

    // verify email
    if (emailValue) {
        const response = await fetch(`${app_url}/api/public/email/${emailValue}`);
        const json = await response.json();

        const validEmailRegex =
            /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;

        if (emailValue.match(validEmailRegex) && !json.emailRegistred) {
            document.querySelector("#alert_email").innerHTML = "";
            validEmail = true;
        } else {
            document.querySelector("#alert_email").innerHTML = "Invalid email!";
            validEmail = false;
        }
    }

    // verify password
    if (newPassword.value && newPassword.value.length < 6) {
        document.querySelector("#alert_password").innerHTML = "Password must have at least 6 characters!";
        validPassword = false;
    } else {
        document.querySelector("#alert_password").innerHTML = "";
        validPassword = true;
    }

    if (validName && validPassword) {
        formUpdateProfile.submit();
    }
});
