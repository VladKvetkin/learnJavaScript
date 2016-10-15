/*
	Классы
*/

class Task {
	// Свойства указываются исключительно в конструкторе
	constructor(title = Task.getDefaultTitle()) {
		this.title = title;
		this._done = false; // Личное свойство
		Task.count += 1;
		console.log('Создание задачи');
	}

	// Геттер
	get done() {
		return this._done === true ? 'Выполнена' : 'Не выполнена';
	}

	// Сеттер
	set done(value) {
		if (value !== undefined && typeof value === 'boolean')
			this._done = value;
		else
			console.log("Ошибка! Укажите значение true или false");
	}

	complete() {
		this.done = true;
		console.log(`Задача ${this.title} выполнена`)
	}

	// Статический метод
	static getDefaultTitle() {
		return 'Задача';
	}
}

// Статическая переменная класса Task
Task.count = 0;

// Классы - функции, создающие объекты
console.log(typeof Task);

// Создаем объект класса Task
let task = new Task("Убрать комнату");
task.complete();
console.log(task.done);

let task2 = new Task();
task2.complete();
console.log(Task.count);

// __proto__ - ссылка на Task
console.log(task);
// true
console.log(task instanceof Task);
