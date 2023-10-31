function getCaseTotal(caseId) {
	var total = document.getElementById(caseId);
	var totalValue = parseInt(total.innerText);
	return totalValue;
}

function setInnerValue(elementId, value) {
	var subtotal = document.getElementById(elementId);
	subtotal.innerText = value;
}

function calculateSubtotal() {
	// subtotal calculation
	var Casesubtotal = getCaseTotal("case-total");
	var Phonesubtotal = getCaseTotal("phone-price");
	var subtotalAmount = Casesubtotal + Phonesubtotal;
	setInnerValue("subtotal-amount", subtotalAmount);

	// calculate Tax
	const taxAmountString = (subtotalAmount * 0.1).toFixed(2);
	const taxAmount = parseFloat(taxAmountString);
	setInnerValue("tax-amount", taxAmount);

	// calculate Final Amount
	const finalAmount = subtotalAmount + taxAmount;
	setInnerValue("final-amount", finalAmount);
}
