/*
	Параметры функции:
		1. Параметры по умолчанию
		2. Оставшиеся параметры
*/

// 1. Параметры по умолчанию
function greet(greeting = 'Hello', name = 'freind') {
	console.log(`${greeting} ${name}`);
}

greet("Hi", "Bill");
greet("Hi");
greet(undefined,'Bill');
greet();


// 2. Оставшиеся параметры

function sum(...values) {

	let sum = values.reduce(function(prev,curr) {
		return prev + curr;
	})

	console.log(sum);
}

sum(1, 2, 3, 4, 5);
