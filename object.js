var Exr = {
	book: 32,
	khata: 12,
	pen: 14,
	pencil: 18,
};
var res = Exr.pen;
console.log(res);
Exr.pen = 26;
console.log(Exr);
Exr["pen"] = 45;
console.log(Exr);
var a = [1, 3, 5, 6, 7, 2];
a[3] = 12;
console.log(a);
var shoppingCart = {
	book: 3,
	shirt: 4,
	pant: 2,
	khata: 12,
};
const keys = Object.keys(shoppingCart);
const values = Object.values(shoppingCart);
console.log(keys);
console.log(values);

