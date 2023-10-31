document.getElementById("btn-withdraw").addEventListener("click", function () {
	var inputWithdraw = getInputValue("withdraw");
	var boxValue = getBoxValue("total-withdraw");
	var totalWithdraw = inputWithdraw + boxValue;
	setValue("total-withdraw", totalWithdraw);
	// reduce main Balance
	var Mainbalance = getBoxValue("balance");
	var currentBalance = Mainbalance - inputWithdraw;
	setValue("balance", currentBalance);
});
