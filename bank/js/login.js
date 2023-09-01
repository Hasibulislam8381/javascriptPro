document.getElementById("btn-submit").addEventListener("click", function () {
	// get email field data
	const emailInput = document.getElementById("user-email");
	const email = emailInput.value;
	//    get  password field data
	const passInput = document.getElementById("user-password");
	const password = passInput.value;

	if (email == "hasibul@gmail.com" && password == 123) {
		window.location.href = "bank.html";
	} else {
		alert("Invalid email or password");
	}
});
