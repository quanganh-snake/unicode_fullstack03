/*
var email = contact@unicode.vn

Yêu cầu: Lấy ra username của email
VD: 
*/

var email = "contact@unicode.vn";

var getPositionSlice = email.indexOf("@");
console.log(email.substring(0, getPositionSlice));

/*
Viết hàm kiểm tra 1 chuỗi có viết hoa hay khôNG?
*/

var isUpperCase = function (str) {
	if (str === str.toUpperCase()) {
		console.log("Chuỗi được viết hoa");
	} else if (str === str.toLowerCase()) {
		console.log("Chuỗi được viết thường");
	} else {
		console.log("Chuỗi lộn xộn");
	}
};

isUpperCase("QUANG ANH");

/*
Chuyển các ký tự đầu vào thành viết hoa
=> Quang Anh
*/

var text = "quang anh";


