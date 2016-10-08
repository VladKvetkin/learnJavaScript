// Babel

// Транспиляция - конвертация кода c JS(ES6) на предыдущую версию JS(ES5)
npm init -y // команда для инициализации package.json (-y - все параметры по умолчанию)
npm install babel-cli babel-core babel-preset-es2015 --save-dev
babel-cli // интерфейс командной строки
babel-core // основной модуль babel
babel-preset-es2015 // модуль для транспиляции в es6

babel src -d dst --presets es2015 // команда для транскомпиляции es6 в es5 из папки src в dist
