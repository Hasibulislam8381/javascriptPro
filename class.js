class Instractor {
	name;
	designation = "Instractor";
	team = "Web Team";
	location;
	constructor(name, location) {
		this.name = name;
		this.location = location;
	}
	startSupportSession(time) {
		console.log(`Start The support session at ${time}`);
	}
	createQuiz(module) {
		console.log(`PLease Create quiz for Module ${module}`);
	}
}

const result = new Instractor("Rahul", "Dhaka");
console.log(result);
result.createQuiz(40);
result.startSupportSession("9 Am");
