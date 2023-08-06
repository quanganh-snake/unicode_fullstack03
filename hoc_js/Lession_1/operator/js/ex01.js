/*
Toán tử trong JavaScript

1. Toán tử số học: 
+, -, *, /, % (chia lấy dư), ** (luỹ thừa), ++ (phép tăng), -- (phép giảm)

*/

//Toán tử cộng
var a = "10";
var b = 20;
// var c = parseInt(a) + parseInt(b); //Cách 1
var c = +a + +b; // Cách 2 - Mẹo

//Mẹo: Trong tính toán dấu cộng ở trước 1 biến -> Tự ép thành kiểu số nguyên
console.log(c);

//Phép tăng ++

var count = 0;
// ++count: Lấy giá trị sau khi được tăng
// count++: Lấy giá trị trước khi được tăng
var total;
total = count++ + ++count; // 1 + 3
console.log(total);

/*
2. Toán tử logic:
>, <, >=, <=, ==, ===, !=, !==

Toán tử logic: Trả về kết quả của kiểu dữ liệu Boolean (true/false)
*/

var check = parseInt(a) > parseInt(b);
console.log(check);

/*
3. Toán tử kết hợp: &&, ||, ! dùng kết hợp nhiều toán tử logic
*/

var a = 10;
var check = a >= 5 && a <= 10;
console.log(check);

/*
4. Toán tử gán
*/

var a = 10;
a += 10; //tương tự a  = a + 10

/*
5. Toán tử 3 ngôi: dieukien ? giatridung : giatrisai
*/

var a = 10;
var b = 5 + 2 + 3 + a >= 10 ? "Đúng" : "Sai";
console.log(b);

/*

6.Toán tử nullish: ??
Kiểm tra giá trị trước dấu ?? có khác 'null' và 'undified' hay không?

=> Nếu khác gán giá trị trước dấu ??
=> Ngược lại, gán giá trị sau dấu ??
*/

/*
Bài tập: Viết lại toán tử nullish dưới dạng toán tử 3 ngôi
*/

var mm = null;

var checkNullish = mm !== undefined && mm !== null ? mm : "nullish";

console.log(checkNullish);

var checkNullisValue = (mm !== undefined ? mm : undefined) || (mm !== null ? mm : null);
console.log(checkNullisValue);


/*
7. Toán tử &&

Truthy
=> Tự động chuyển về true nếu ngữ cảnh cần sử dụng kiểu logic

Falsy
=> Tự động chuyển về false nếu ngữ cảnh cần sử dụng kiểu logic false, 0, null, "", undefined, NaN
*/