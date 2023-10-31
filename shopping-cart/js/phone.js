function updateCount(isPlus) {
	var input = document.getElementById("phone-input");
	var inputValue = parseInt(input.value);

	if (isPlus) {
		var newValue = inputValue + 1;
	} else {
		var newValue = inputValue - 1;
	}
	input.value = newValue;
	return newValue;
}
function updatePhonePrice(newValue) {
	var newPrice = newValue * 1219;
	var price = document.getElementById("phone-price");
	price.innerText = newPrice;
}

document
	.getElementById("phone-btn-plus")
	.addEventListener("click", function () {
		var newValue = updateCount(true);
		updatePhonePrice(newValue);
		// calculate Subtotal value
		calculateSubtotal();
	});

document
	.getElementById("phone-btn-minus")
	.addEventListener("click", function () {
		var newValue = updateCount(false);
		updatePhonePrice(newValue);
		// calculate subtotal value
		calculateSubtotal();
	});
