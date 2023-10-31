document.getElementById("btn-deposite").addEventListener("click", function () {
	var depositeAmountget = document.getElementById("deposite");
	var PreviousdepositeAmount = depositeAmountget.value;
	var depositeAmount = parseFloat(PreviousdepositeAmount);

	var totalDeposite = document.getElementById("total-deposite");
	var currentDeposite = parseFloat(totalDeposite.innerText);
	var total = depositeAmount + currentDeposite;
	totalDeposite.innerText = total;
	depositeAmountget.value = "";

	// Balance
	var getBalane = document.getElementById("balance");
	var preBalance = parseFloat(getBalane.innerText);
	var newBalance = preBalance + depositeAmount;
	getBalane.innerText = newBalance;
});
