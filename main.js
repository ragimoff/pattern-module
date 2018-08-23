// Записываем функцию в переменную counter
var counter = (function(){
	// Приватная переменная
	var _number;

	// Приватный метод
	var setValueCounter = function(x){
		if (Number.isInteger(x)){
			_number = x;
		} else {
			console.log('Введите целое число');
		}
	}
	
	var increaseCounter = function(){
		_number++;
	}

	var decreaseCounter = function(){
		_number--;
	}

	var printCounter = function(){
		console.log(_number);
	}


	// Чтобы иметь доступ к внетренним переменным
	// Их нужно вернуть через return
	return {
		setValueCounter,
		increaseCounter,
		decreaseCounter,
		printCounter
	}
}());


counter.printCounter(); // вызов метода выводит значение счетчика в консоль
counter.setValueCounter(5); // принимает целое число, задает его в значение счетчика
counter.printCounter(); // вызов метода выводит значение счетчика в консоль
counter.increaseCounter(); // вызов метода увеличивает счетчик на 1
counter.increaseCounter(); // вызов метода увеличивает счетчик на 1
counter.printCounter(); // вызов метода выводит значение счетчика в консоль
counter.decreaseCounter();  // вызов метода уменьшает счетчик на 1
counter.printCounter();  // вызов метода выводит значение счетчика в консоль

