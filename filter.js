const num = [12, 435, 65, 34, 3, 212, 434, 6];
const Big = num.filter((num) => num > 400);

const bigDouble = Big.map((big) => big * 2);
console.log(bigDouble);
