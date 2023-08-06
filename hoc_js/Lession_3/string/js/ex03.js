var keywords = "Lorem";

var content =
	"abcd Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur atque nam, porro beatae aliquam deleniti incidunt in dolore dolores! Dolorem eum fugit, sit eos corrupti tempora ipsa similique explicabo illo!";

/*
Kiểm tra keywords có trong content thì đổi thành chữ đỏ - nền vàng
*/

var position = content.toLowerCase().indexOf(keywords.toLowerCase());

var result = "";
var count = 0;

while (position !== 1) {
	result += content.slice(0, position) + `<span>${content.slice(position + keywords.length)}</span>`;
	content = content.slice(position + keywords.length);
	position = content.toLocaleLowerCase().indexOf(keywords.toLocaleLowerCase());
	count++;
}

result += content;

if (count > 0) {
	var showCount = `<p>Đã tìm thấy: <b>${count}</b> lần với từ khoá ${keywords}</p>`;
}
var title = `<p>Từ khoá tìm kiếm: <b>${keywords}</b></p>`;
document.body.innerHTML = title + result + showCount;
