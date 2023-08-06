var number = 10;
if (number >= 10) {
	console.log(`Thoả mãn điều kiện`);
} else {
	console.log(`Không thoả mãn điều kiện`);
}

/*
Bài tập: Tính lương thực nhận của 1 nhân viên:

var total = 10000000;

Hiển thị lương thực nhận dựa vào công thức sau:
1. Tổng lương < 5tr => Thuế 3%
2. Tổng lương từ 5tr đến 15tr => Thuể 5%
3. Tổng lương từ 15tr trở lếnz => Thuế 10%

Lương thực nhận = tổng - thuế;
*/

var total = 25000000;

var tax;
var salary;
if (parseInt(total) < 5000000) {
	tax = 3;
} else if (5000000 <= parseInt(total) && parseInt(total) <= 15000000) {
	tax = 5;
} else {
	tax = 10;
}
salary = total - (total * tax) / 100;
console.log('tax: ',tax, '% - salary: ', salary);
