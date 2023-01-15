// Set your publishable key: remember to change this to your live publishable key in production
// See your keys here: https://dashboard.stripe.com/apikeys
const stripe = Stripe("pk_test_AZCFnyz1yZ03aC5tPwlshPct");
const elements = stripe.elements();

// Custom styling can be passed to options when creating an Element.
const style = {
    base: {
        // Add your base input styles here. For example:
        fontSize: "16px",
        color: "#32325d",
    },
};

// Create an instance of the card Element.
const card = elements.create("card", { style });

// Add an instance of the card Element into the `card-element` <div>.
card.mount("#card-element");

// Create a token or display an error when the form is submitted.
const form = document.getElementById("payment-form");
form.addEventListener("submit", function (event) {
    event.preventDefault();

    stripe.createToken(card).then(function (result) {
        if (result.error) {
            // Inform the customer that there was an error.
            const errorElement = document.getElementById("card-errors");
            errorElement.textContent = result.error.message;
        } else {
            // Send the token to your server.
            stripeTokenHandler(result.token);
        }
    });
});

function stripeTokenHandler(token) {
    // Insert the token ID into the form so it gets submitted to the server
    const form = document.getElementById("payment-form");
    const hiddenInput = document.createElement("input");
    hiddenInput.setAttribute("type", "hidden");
    hiddenInput.setAttribute("name", "stripeToken");
    hiddenInput.setAttribute("value", token.id);
    form.appendChild(hiddenInput);

    // Submit the form
    form.submit();
}
