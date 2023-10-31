document.getElementById("btn-withdraw").addEventListener("click", function () {
	var withdrawInput = document.getElementById("withdraw");
	var withdrawValue = parseFloat(withdrawInput.value);

	// get the withdraw amount value
	var withdrawAmount = document.getElementById("total-withdraw");
	var withdrawAmountvalue = parseFloat(withdrawAmount.innerText);
	var total = withdrawAmountvalue + withdrawValue;
	withdrawAmount.innerText = total;
	withdrawInput.value = "";

	//reduce total amount
	var mainBalance = document.getElementById("balance");
	var balanceValue = parseFloat(mainBalance.innerText);
	var totalMainBalance = balanceValue - withdrawValue;
	mainBalance.innerText = totalMainBalance;
});
