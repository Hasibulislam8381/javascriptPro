function getNum(num) {
	var fact = 1;
	for (i = 1; i <= num; i++) {
		fact *= i;
	}
	return fact;
}
console.log(getNum(10));
