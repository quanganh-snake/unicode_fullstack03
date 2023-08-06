/*
- Kiểm tra độ mạnh yếu mật khẩu
var password = "Quanganh@123";

Ràng buộc: 
- Từ 8 ký tự trở lên
- Có ít nhất 1 ký tự viết HOA
- Có ít nhất 1 ký tự viết thường
- Có ít nhất 1 ký tự số
- Có ít nhất 1 ký tự đặc biệt: !@#$^&*()

*/

var password = "Quanganh@123";
var checkLength = false,
	checkUpper = false,
	checkLower = false,
	checkNumber = false,
	checkSymbol = false;

if (password.length >= 8) {
	checkLength = true;

	var number = "0123456789";
	var symbol = "!@#$^&*()";
	for (var i = 0; i < password.length; i++) {
		var char = password.charAt(i);

		//Kiểm tra chữ hoa
		if (char === char.toUpperCase()) {
			checkUpper = true;
		}
		//Kiểm tra chữ thường
		if (char === char.toLowerCase()) {
			checkLower = true;
		}
		//Kiểm tra số
		if (number.includes(char)) {
			checkNumber = true;
		}
		//Kiểm tra ký tự đặc biệt
		if (symbol.includes(char)) {
			checkSymbol = true;
		}
	}
}

if (checkLength && checkLower && checkUpper && checkNumber && checkSymbol) {
	console.log("Mật khẩu mạnh");
} else {
	console.log("Mật khẩu yếu");
}
