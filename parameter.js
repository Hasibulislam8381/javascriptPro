function Go(place) {
	console.log("Goto ", place);
}
Go("school");
function khata(money) {
	var price = 20;
	if (money >= 20) {
		var quantity = money / price;
		return quantity;
	}
	return "Khata price is 20tk";
}

var result = khata(40);
console.log(result);
