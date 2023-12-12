// Дан массив, нужно проссумировать все числа и вернуть сумму. Сделать через рекурсию

const arr = [1, 10, 3, 40, 5, 6];

function sum(arr) {
	if (!arr.length) {
		return 0;
	}

	return arr[0] + sum(arr.slice(1));
}

console.log(sum(arr));

// Напишите рекурсивную функцию для подсчета элементов в списке

function count(arr) {
	if (!arr.length) {
		return 0;
	}

	return 1 + count(arr.slice(1));
}

console.log(count(arr));

// Найдите наибольшее число в списке использую рекурсию

function max(arr) {
	if (!arr.length) {
		return 0;
	}

	if (arr.length === 1) {
		return arr[0];
	}

	const el = arr[0];

	return el > max(arr.slice(1)) ? el : max(arr.slice(1));
}

console.log(max(arr));
