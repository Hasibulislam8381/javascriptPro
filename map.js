const numbers = [12, 3, 55, 34, 2, 25];
const res = numbers.map((n) => n / 2);

// String
const friends = ["Tom Haland", "Rujina", "Arifa", "Malek", "Rabu"];

const getLength = friends.map((friends) => friends.length);
// console.log(getLength);

// console.log(res);
// object

const primary = [
	{ id: 1, name: "Arif", gpa: 3.0 },
	{ id: 1, name: "Masud", gpa: 3.0 },
	{ id: 1, name: "Rana", gpa: 3.0 },
];

const getRes = primary.map((primary) => primary.name);

const getTotalGpa = primary.map((primary) => primary.gpa);
console.log(getTotalGpa);
