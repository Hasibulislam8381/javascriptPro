const max = Math.max(23, 56, 78, 32, 2, 5, 767);
const number = [12, 45, 23, 56, 23, 1, 45];
const large = Math.max(...number);

const newArray = [...number];

number.push(12);
console.log("Number:" + number);
console.log("New Array:" + newArray);
