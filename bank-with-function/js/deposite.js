

document.getElementById("btn-deposite").addEventListener("click", function () {
	var Predeposite = getInputValue("deposite");
	var current_deposite = getBoxValue("total-deposite");
	var totalDeposite = Predeposite + current_deposite;
	setValue("total-deposite", totalDeposite);

	// set balance
	var preBalance = getBoxValue("balance");
	var totalBalance = Predeposite + preBalance;

	setValue("balance", totalBalance);

    
});
