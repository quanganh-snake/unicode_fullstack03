/**
 * Bài 1: Cho trước cả họ và tên
 * var fullname = "Tống Bá Quang Anh";
 * Yêu cầu: Lấy tên => Quang Anh
 */

var fullname = "Tạ Hoàng An";
// Cách 1
var getFirstName = function (name) {
	var nameArr = name.split(" ");
	return nameArr[nameArr.length - 1];
};
console.log(getFirstName(fullname));

//Cách 2
var getFirstName2 = function (name) {
	return name.split(" ").slice(-1).join();
};
console.log(getFirstName2(fullname));

/**
 * Bài 2: Cho 1 danh sách khách hàng
 *
 * Yêu cầu: Sắp xếp danh sách khách hàng theo tên
 */

var customers = ["Nguyễn Thị Yến", "Nguyễn Văn Anh", "Tạ Hoàng An", "Phạm Văn Dũng"];
customers.sort((a, b) => {
	var nameA = getFirstName(a);
	var nameB = getFirstName(b);
	if (nameA < nameB) return -1;
});
console.log(customers);

var keyword = "An";

var resultFilter = customers.filter(function (customer) {
	return customer.toLowerCase().includes(keyword.toLowerCase());
});

console.log(resultFilter);

var numbers = [3, 5, 9, 2, 1];
var check = !numbers.some(function (number) {
	return number % 2 === 0;
});

console.log(check);

if (check) {
	console.log("Tất cả là số lẻ");
} else {
	console.log("Mảng có số chẵn");
}

var max = numbers.reduce(function (prev, current) {
	// if (prev > current) {
	// 	return prev;
	// } else {
	// 	return current;
	// }
	return prev < current ? current : prev;
}, 0);
console.log(`Max: ${max}`);

var numbers2 = [...numbers];

console.log(numbers2.pop());
console.log(numbers2);
console.log(numbers);
