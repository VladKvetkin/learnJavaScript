/*
	Наследование
*/

class Task {
	constructor(title) {
		this._title = title;
		this.done = false;
		Task.count += 1;
		console.log("Создание задачи");
	}

	get title() {
		return this._title;
	}

	set title(value) {
		this._title = value;
	}

	static getDefaultTitle() {
		return 'Задача';
	}

	complete() {
		this.done = true;
		console.log(`Задача ${this._title} выполнена`);
	}
}

Task.count = 0;

// Реализация наследования
class SubTask extends Task {
	// Если у наследника нет конструктора, то он воспользуется конструктором родителя
	constructor(title, parent) {
		// Должен вызвать конструктор родительского класса через super первой строчкой
		super(title);
		this.parent = parent;
		console.log("Создание подзадачи");
	}

	// Полиморфизм
	complete() {
		// Вызываем complete родителя
		super.complete();
		console.log(`Подзадача ${this.title} выполнена`);

	}
}


let task = new Task("Изучить JavaScript");
let subTask = new SubTask("Изучить ES6", task);

console.log(SubTask.getDefaultTitle());
console.log(SubTask.count);


task.complete();
subTask.complete();

console.log(task);
console.log(subTask);
