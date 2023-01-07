/* eslint-disable no-undef */
document.querySelector("#zipcode").addEventListener("change", async function (e) {
    const zipcode = e.target.value;

    // CEP DATA
    const responseCEP = await fetch(`http://localhost:3000/api/cep/${zipcode}`);
    const cepJson = await responseCEP.json();

    const { logradouro, bairro, localidade, uf } = cepJson;

    document.querySelector("#customer_street").value = logradouro;
    document.querySelector("#customer_neighborhood").value = bairro;
    document.querySelector("#customer_city").value = localidade;
    document.querySelector("#customer_state").value = uf;
    document.querySelector("#customer_country").value = "Brazil";

    // SHIPPING DATA
    const responseShipping = await fetch(`http://localhost:3000/api/shipping/${zipcode}`);
    const shippingJson = await responseShipping.json();

    const shipping_fee = parseFloat(shippingJson[0].Valor);
    const shipping_deadline = shippingJson[0].PrazoEntrega;

    document.querySelector("#shipping_carrier").value = "Correios";
    document.querySelector("#shipping_fee").value = shipping_fee || 20;
    document.querySelector("#shipping_deadline").value = shipping_deadline || 3;

    const total_shop_amount = document.querySelector("#total_shop_amount").value;

    document.querySelector("#button_pay_price").innerHTML = parseFloat(
        parseFloat(total_shop_amount) + parseFloat(shipping_fee),
    ).toFixed(2);
});
