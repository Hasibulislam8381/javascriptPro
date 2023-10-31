function updateCaseNumber(isIncrease) {
	var caseInput = document.getElementById("case-input");
	var caseInputValue = parseInt(caseInput.value);
	if (isIncrease) {
		var newValue = caseInputValue + 1;
	} else {
		var newValue = caseInputValue - 1;
	}

	caseInput.value = newValue;
	return newValue;
}
function updatePrice(newValue) {
	var newCount = newValue * 59;
	var totalAmount = document.getElementById("case-total");
	// var totalAmountValue = parseInt(totalAmount.innerText);
	totalAmount.innerText = newCount;
}

document.getElementById("btn-case-plus").addEventListener("click", function () {
	var newValue = updateCaseNumber(true);
	updatePrice(newValue);
	calculateSubtotal();
});
document
	.getElementById("btn-case-minus")
	.addEventListener("click", function () {
		var newValue2 = updateCaseNumber(false);
		updatePrice(newValue2);
		calculateSubtotal();
	});
