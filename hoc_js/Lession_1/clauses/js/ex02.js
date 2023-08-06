var action = "edit";

switch (action) {
	case "add":
	case "insert":
	case "create":
		console.log("Thêm");
		break;

	case "edit":
	case "update":
		console.log("Sửa");
		break;

	case "delete":
	case "destroy":
	case "remove":
		console.log("Xoá");
		break;

	default:
		console.log("Hiển thị danh sách");
		break;
}

//SD switch-case khi có quá nhiều nhánh hoặc trường hợp hoặc

if (action === "add" || action === "insert" || action === "create") {
	console.log("Thêm");
} else if (action === "delete" || action === "destroy" || action === "remove") {
	console.log("Xoá");
} else if (action === "edit" || action === "update") {
	console.log("Sửa");
} else {
	console.log("Hiển thị danh sách");
}

/*
Hiển thị số ngày trong 1 tháng
31 ngày: 1,3,5,7,8,10,12
30 ngày: 4,6,9,11
29 ngày: 2

Yêu cầu:
-Kiểm tra tháng hợp lệ: Số nguyên, từ 1-12

Hiển thị ví dụ: Tháng 12 có 31 ngày

*/

var month = "11";

if (month % 1 === 0 && month > 0 && month <= 12) {
	month = +month;
	switch (month) {
		case 2:
			console.log(`Tháng ${month} có 29 ngày`);
			break;
		case 4:
		case 6:
		case 9:
		case 11:
			console.log(`Tháng ${month} có 30 ngày`);
			break;

		default:
			console.log(`Tháng ${month} có 31 ngày`);
			break;
	}
} else {
	console.log("Tháng không hợp lệ");
}
