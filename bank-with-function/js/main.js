function getInputValue(depositeId) {
	var depositeField = document.getElementById(depositeId);
	var previousDepositeValue = parseFloat(depositeField.value);
	depositeField.value = "";
	return previousDepositeValue;
}

function getBoxValue(depositeId) {
	var depositeBox = document.getElementById(depositeId);
	var currentDeposite = parseFloat(depositeBox.innerText);
	return currentDeposite;
}
function setValue(elementId, value) {
	var element = document.getElementById(elementId);
	element.innerText = value;
}