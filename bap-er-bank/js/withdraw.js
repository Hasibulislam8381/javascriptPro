document.getElementById("btn-withdraw").addEventListener("click", function () {
	var withdrawInput = document.getElementById("withdraw");
	var withdrawValue = parseFloat(withdrawInput.value);

	var totalWithdraw = document.getElementById("total-withdraw");
	var withdrawValue2 = parseFloat(totalWithdraw.innerText);
	var result = withdrawValue + withdrawValue2;
	totalWithdraw.innerText = result;
	withdrawInput.value = "";
	// balance
	var balanceInput = document.getElementById("balance");
	var BalanceValue = parseFloat(balanceInput.innerText);
	var total = BalanceValue - withdrawValue;
	balanceInput.innerText = total;

	//
});
