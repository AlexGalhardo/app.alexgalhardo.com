/* eslint-disable no-undef */
/* eslint-disable func-names */
const buttonUpdateProfile = document.querySelector('#button_update_profile');
const formUpdateProfile = document.querySelector('#form_update_profile');

const nameValue = document.querySelector('#name').value;
const emailValue = document.querySelector('#email').value;
const newPassword = document.querySelector('#new_password').value;
const app_url = document.querySelector('#app_url').value;

let validName = true;
let validEmail = true;
let validPassword = true;

buttonUpdateProfile.addEventListener('click', async (e) => {
    e.preventDefault();

    if (nameValue.length < 4) {
        document.querySelector('#alert_name').innerHTML = 'Invalid name';
        validName = false;
    } else {
        document.querySelector('#alert_name').innerHTML = '';
        validName = true;
    }

    // verify email
    if (emailValue) {
        const response = await fetch(
            `${app_url}/api/public/email/${emailValue}`
        );
        const json = await response.json();

        const validEmailRegex =
            /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;

        if (emailValue.match(validEmailRegex) && !json.emailRegistred) {
            document.querySelector('#alert_email').innerHTML = '';
            validEmail = true;
        } else {
            document.querySelector('#alert_email').innerHTML = 'Invalid email!';
            validEmail = false;
        }
    }

    // verify password
    if (newPassword.value && newPassword.value.length < 6) {
        document.querySelector('#alert_password').innerHTML =
            'Password must have at least 6 characters!';
        validPassword = false;
    } else {
        document.querySelector('#alert_password').innerHTML = '';
        validPassword = true;
    }

    if (validName && validPassword) {
        formUpdateProfile.submit();
    }
});

document
    .querySelector('#zipcode')
    .addEventListener('change', async function (e) {
        const zipcode = e.target.value;

        const responseCEP = await fetch(
            `https://galhardo-correios.herokuapp.com/cep/${zipcode}`
        );
        const cepJson = await responseCEP.json();

        const { logradouro, bairro, localidade, uf } = cepJson;

        document.querySelector('#street').value = logradouro;
        document.querySelector('#neighborhood').value = bairro;
        document.querySelector('#city').value = localidade;
        document.querySelector('#state').value = uf;
    });

(async function () {
    document.getElementById('operation_system').value =
        window.navigator.platform;

    if (navigator.userAgent.indexOf('Chrome') != -1) {
        document.getElementById('browser').value = 'Google Chrome';
    } else {
        document.getElementById('browser').value = 'Firefox';
    }

    const response = await fetch('https://api.ipify.org/?format=json');
    const public_ip = await response.json();
    document.getElementById('public_ip').value = public_ip.ip;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            document.getElementById('latitude').value =
                position.coords.latitude.toFixed(6);
            document.getElementById('longitude').value =
                position.coords.longitude.toFixed(6);
        });
    }
})();
