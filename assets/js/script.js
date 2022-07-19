// // ----------------Task-1----------------------------

// let question = confirm('Хотите посчитать числа в диапазоне от и до?');
// let result = 0;

// while (question === true) {
// 	start = +prompt('Введите начало диапазона :');
// 	end = +prompt('Введите конец диапазона :');
// 	result = 0;

// 	for (; start <= end; start++) {
// 		result = result + start;
// 	}

// 	alert(result);
// 	question = confirm('Хотите посчитать числа в диапазоне от и до?');
// }

// alert('До свидания!');



// // ----------------Task-2----------------------------

// let numOne = +prompt('Введите первое число :');
// let numTwo = +prompt('Введите второе число :');
// let i = 1;
// let a;

// firstFor:
// for (i; (Math.min(numOne, numTwo)) >= i; i++) {
// 	if (numOne % i == 0 && numTwo % i == 0) {
// 		alert(Math.max(i))
// 	} else { continue }
// }



// // ----------------Task-3----------------------------

// let number = +prompt('Введите число :');

// for (let i = 1; number >= i; i++) {
// 	if (number % i == 0) {
// 		alert(i);
// 	}
// 	else {
// 		continue;
// 	}
// }



// // ----------------Task-4----------------------------

// let number = prompt('Введите чило :');

// alert(number.length);



// // ----------------Task-5----------------------------

// let numberPlus = 0;
// let numberMinus = 0;
// let numberNull = 0;
// let numberEven = 0;
// let numberNotEven = 0;

// for (let i = 1; i <= 10; i++) {
// 	numbers = prompt('Введите число :');
// 	if (numbers === '' || numbers === null) {
// 		alert('До свидания!');
// 		break;
// 	}
// 	else if (numbers > 0) {
// 		numberPlus = numberPlus + 1;
// 		if (numbers % 2 == 0) {
// 			numberEven = numberEven + 1;
// 		}
// 		else if (numbers % 2 != 0) {
// 			numberNotEven = numberNotEven + 1;
// 		}
// 	}
// 	else if (numbers < 0) {
// 		numberMinus = numberMinus + 1;
// 		if (numbers % 2 == 0) {
// 			numberEven = numberEven + 1;
// 		}
// 		else if (numbers % 2 != 0) {
// 			numberNotEven = numberNotEven + 1;
// 		}
// 	}
// 	else if (numbers == 0) {
// 		numberNull = numberNull + 1;
// 	}
// }
// alert(
// 	`Колличество положительных цифр : ${numberPlus}
// Колличество отрицательных цифр : ${numberMinus}
// Колличество нулей : ${numberNull}
// Колличество четных цифр : ${numberEven}
// Колличество нечетных цифр : ${numberNotEven}`);



// // ----------------Task-6----------------------------

// let result;
// let question = confirm('Порешаем?');

// while (question === true) {
// 	numberOne = prompt('Введите число :');
// 	sign = prompt('Введите знак');
// 	numberTwo = prompt('Введите число :');

// 	if (sign == '+') {
// 		result = numberOne + numberTwo;
// 		alert(result);
// 	}
// 	else if (sign == '-') {
// 		result = numberOne - numberTwo;
// 		alert(result);
// 	}
// 	else if (sign == '*') {
// 		result = numberOne * numberTwo;
// 		alert(result);
// 	}
// 	else if (sign == '/') {
// 		result = numberOne / numberTwo;
// 		alert(result);
// 	}

// 	question = confirm('Хотите продолжить?');
// }
// alert('До свидания!');



// // ----------------Task-7----------------------------

// let number = prompt('Введите число:');
// let numberShift = +prompt('Ввеите колличество позиций для сдвига');

// let shift = number.slice(0, numberShift);
// let cut = number.slice(numberShift);
// let result = cut + shift;

// alert(result);



// // ----------------Task-8----------------------------

// let now = 'Сейчас :';
// let day;

// let question = confirm('Хотите узнать какой день недели?')

// Cycle:
// while (question === true) {
// 	day = confirm(now + ' ' + 'Понедельник!' + ' ' + 'Хотите увидеть следуйщий день?');
// 	if (day === true) {
// 	}
// 	else if (day === false) {
// 		break Cycle;
// 	}
// 	day = confirm(now + ' ' + 'Вторник!' + ' ' + 'Хотите увидеть следуйщий день?');
// 	if (day === true) {
// 	}
// 	else if (day === false) {
// 		break Cycle;
// 	}
// 	day = confirm(now + ' ' + 'Среда!' + ' ' + 'Хотите увидеть следуйщий день?');
// 	if (day === true) {
// 	}
// 	else if (day === false) {
// 		break Cycle;
// 	}
// 	day = confirm(now + ' ' + 'Четверг!' + ' ' + 'Хотите увидеть следуйщий день?');
// 	if (day === true) {
// 	}
// 	else if (day === false) {
// 		break Cycle;
// 	}
// 	day = confirm(now + ' ' + 'Пятница!' + ' ' + 'Хотите увидеть следуйщий день?');
// 	if (day === true) {
// 	}
// 	else if (day === false) {
// 		break Cycle;
// 	}
// 	day = confirm(now + ' ' + 'Суббота!' + ' ' + 'Хотите увидеть следуйщий день?');
// 	if (day === true) {
// 	}
// 	else if (day === false) {
// 		break Cycle;
// 	}
// 	day = confirm(now + ' ' + 'Воскресенье!' + ' ' + 'Хотите увидеть следуйщий день?');
// 	if (day === true) {
// 	}
// 	else if (day === false) {
// 		break Cycle;
// 	}
// }
// alert('До свидания!');



// // ----------------Task-9----------------------------

// let question = confirm('Хотите посмотреть таблицу умножения?');

// firstCycle:
// while (question === true) {
// 	i = prompt('Введите число, таблицу которого хотите посмотреть')
// 	for (i; i <= 10;) {
// 		for (let j = 1; j <= 10; j++) {
// 			answer = confirm(`${i} x ${j}` + ' ' + '=' + ' ' + i * j);
// 			if (answer === true) { }
// 			else if (answer === false) {
// 				break firstCycle;
// 			}
// 		}
// 		question = confirm('Другое число?');
// 		if (question === true) {
// 			continue firstCycle;
// 		}
// 		else if (question === false) {
// 			break firstCycle;
// 		}
// 	}
// }
// alert('До свидания!');



// // ----------------Task-10---------------------------

// let question = confirm('Сыграем в угадай число?');
// let n = 100;

// firstWhile:
// while (question === true) {
// 	userNumber = +prompt('Загадайте число от 0 до 100');

// 	secondWhile:
// 	while (userNumber != n) {
// 		if ((userNumber === null || userNumber === "")) {
// 			break firstWhile;
// 		}
// 		else if (Math.ceil(n) == userNumber) {
// 			break secondWhile;
// 		}
// 		else if (Math.ceil(n) > userNumber) {
// 			n = n / 2;
// 			continue secondWhile;
// 		}
// 		else if (Math.ceil(n) < userNumber) {
// 			n = n * 1.5;
// 			continue secondWhile;
// 		}
// 	}
// 	alert('Ваше число' + ' ' + Math.ceil(+n))
// 	n = 100;
// 	question = confirm('Сыграем еще раз?');
// }

// alert('До свидания!');