/*
	Объекты
*/

let firstName = 'Bill',
		lastName = 'Gates',
		email = 'billgates@microsoft.com';

// Упрощенный синтаксис для создания свойств при совпадении с названием значения
let person = {
	firstName,
	lastName,
	email,

	// Можно создавать методы таким образом без function
	sayHello() {
		console.log(`Hi my name is ${this.firstName}`)
	},

	// Геттер и сеттер

	get fullName() {
		return this.firstName + ' ' + this.lastName;
	},

	set fullName(value) {
		this.firstName = value;
	},
};

person.sayHello();

// Динамическое создание свойств
function createCar(prop, val) {
	return {
		[prop]: val,
	}
}

console.log(createCar('vin', 1));
