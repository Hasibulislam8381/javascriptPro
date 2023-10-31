document.getElementById("apply").addEventListener("click", function () {
	var cuponInput = document.getElementById("apply-cupon");
	var cuponValue = cuponInput.value;
	if (cuponValue == "DISC30") {
		var productValue = document.getElementById("product");
		var productPrice = parseFloat(productValue.innerText);
		var currentPrice = (productPrice * 30) / 100;
		productValue.innerText = currentPrice;
		alert("30% DIscount Applied");
	} else {
		alert("Cuppon Doesnot Match");
	}
});
