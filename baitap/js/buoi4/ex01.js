/**
 * Bài 01
 * Cho trước 1 mảng số nguyên, yêu cầu tìm số lớn nhất, nhỏ nhất trong mảng và vị trí
 */

var numbers = [5, 1, 9, 8, 10, 3, 7];

function getMaxValue(array) {
	var max = array[0];
	var index = 0;
	for (var i = 0; i < array.length; i++) {
		if (max < array[i]) {
			max = array[i];
			index = i;
		}
	}
	return `Số LN: ${max} - vị trí: ${index}`;
}

function getMinValue(array) {
	var min = array[0];
	var index = 0;
	for (var i = 0; i < array.length; i++) {
		if (min > array[i]) {
			min = array[i];
			index = i;
		}
	}
	return `Số NN: ${min} - vị trí: ${index}`;
}

console.log(getMaxValue(numbers));
console.log(getMinValue(numbers));

/**
 * Bài 02
 * Cho trước 1 mảng số nguyên, tính trung bình các số nguyên tố trong mảng. Nếu trong mảng không có số nguyên tố thì hiển thị “Không có số nguyên tố”
 */

function isPrimes(number) {
	if (number < 2) {
		return false;
	}

	for (var j = 2; j < number; j++) {
		if (number % j == 0) {
			return false;
		}
	}

	return true;
}

function averageOfPrimes(array) {
	var sum = 0;
	var count = 0;

	for (var i = 0; i < array.length; i++) {
		if (isPrimes(array[i]) === true) {
			// console.log(array[i])
			sum += array[i];
			count++;
		}
	}

	if (count === 0) {
		return "Không có số nguyên tố";
	}

	return `TBC các SNT = ${sum / count}`;
}

console.log(averageOfPrimes(numbers));

/**
 *Bài 03
 *  Cho trước 1 mảng bất kỳ, nếu trong mảng có các phần tử trùng nhau thì chỉ giữ lại 1 (Gọi là lọc trùng). In ra mảng sau khi đã xử lý
 */

var array03 = [1, 2, 3, 4, 5, 1, 2, 3, 7, 8, 9, 2, 9, 8, 2, 3];

var result03 = array03.filter(function (item, index, arrLegacy) {
	return arrLegacy.indexOf(item) === index;
});

console.log(result03);

/**
 * Cho trước 1 mảng số nguyên và thực hiện các yêu cầu sau
 * Sắp xếp mảng theo thứ tự tăng dần
 * Chèn thêm 1 số vào bất kỳ vị trí nào trong mảng mà không làm thay đổi thứ tự sắp xếp của mảng
 */

var array04 = [5, 1, 9, 8, 10];

var newItem = 7;

function sortArrayUp(array, value) {
	array.push(value);
	return array.sort(function (a, b) {
		return a - b;
	});
}

console.log(sortArrayUp(array04, newItem));
