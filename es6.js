//1. array destructure
const employee = ["Rahim", "Jamal", "Abbas"];

const [employee1, employee2, employee3] = employee;

//2. default parametre function
function getSalary(salary, tax = 0, bonus = 0) {
	const amount = salary - salary * tax;
	const result = amount + bonus;
	return result;
}

const salary = getSalary(20000, 0.1, 200);

//3. string templeting
const finalSalary = ` 
   <div>
    
     <h3>Name:${employee2}</h3>
     <h3>Employee_type:"Basic"</h3>
     <h3>Name:${getSalary(20000, 0.1, 200)}</h3>
    
   </div>
`;
// console.log(finalSalary);
//4. Arrow Function single parameter

const area = (a) => a * 2;

const cal = area(4);

console.log(cal);
//5. Arrow function 2 or more parameter

const CalculateSalary = (salary, tax, bonus) => salary - salary * tax + bonus;
const addSalary = CalculateSalary(15000, 0.2, 2000);
console.log("The salary is : " + addSalary);
//  spread operator

let array = [23, 434, 54, 23, 256];

let newArray = [...array, 4];
console.log("The arrray after spread:" + newArray);
