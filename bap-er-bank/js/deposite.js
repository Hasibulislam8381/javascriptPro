document.getElementById("btn-deposite").addEventListener("click", function () {
	var depositeInput = document.getElementById("deposite");
	var depositeValue = parseFloat(depositeInput.value);

	var getDeposite = document.getElementById("total-deposite");
	var depositeTotal = parseFloat(getDeposite.innerText);

	var totalDeposite = depositeValue + depositeTotal;
	getDeposite.innerText = totalDeposite;
	depositeInput.value = "";

	//Mail balance
	var getBalance = document.getElementById("balance");
	var BalanceValue = parseFloat(getBalance.innerText);
	var total = BalanceValue + depositeValue;
	getBalance.innerText = total;
});
