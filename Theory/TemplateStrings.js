/*
 Шаблонный строки пишутся в обратных кавычках (``)
 В них можно использовать интерполяцию (${name})
*/

function greet(name) {
	console.log(`Hello ${name}`);
}

greet("Bill");


// Поддерживаются многострочные строки
function createEmail(to, from, subject, message) {
	console.log(`
		To: ${to}
		From: ${from}
		Subject: ${subject}
		Message: ${message}
		`);
}

createEmail("jonh@mail.com", "jane@mail.com", "Hello", "How are you doing?");

// Тегирование - изменение вывода шаблона с помощью функций

let name = 'Bill';

console.log(upperName`Hello ${name}`);

// Тег
function upperName(literals, name) {
	return literals[0] + name.toUpperCase();
}
