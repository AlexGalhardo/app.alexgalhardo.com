const lgpdURL = `https://jsonplaceholder.typicode.com/posts`;

const lgpdHTML = `
	<link rel="stylesheet" href="css/privacy.css">
	<div class="lgpd">
		<div class="lgpd--left">
			We use cookies to improve your experience on the site!<br>
			Our <a href="/privacy">Privacy Policy</a>
		</div>
		<div class="lgpd-right">
			<button id="lgpd_button_confirm">OK</button>
		</div>
	</div>
`;

const lsLGPD = localStorage.getItem("lgpd");
if (!lsLGPD) {
    document.body.innerHTML += lgpdHTML;

    const lgpdArea = document.querySelector(".lgpd");
    const lgpdButton = document.querySelector("#lgpd_button_confirm");

    lgpdButton.addEventListener("click", async () => {
        lgpdArea.remove();
        localStorage.setItem("lgpd", "123");

        const result = await fetch(lgpdURL);
        const response = await result.json();

        if (response.error != "") {
            const user_id = "456";
            localStorage.setItem("lgpd", user_id);
        }
    });
}
