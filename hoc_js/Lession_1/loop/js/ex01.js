// for (i = 1; i <= 10; i += 0.5) {
// 	console.log(`Xin chào, số ${i}`);
// }

/*
Bài tập: Tính tổng biểu thức
total = 1 + 2 + 3 + ... + N
*/

var n = 10;
var total = 0;
for (var index = 1; index <= n; index++) {
	total += index;
}

console.log("Total: " + total);

/*
Bài tập 2: Tính
total = 1 + 1*2 + 1*2*3 +  1*2*3*4 + ... + 1*2*3*4*...*n;

*/

var n2 = 5;
var sub = 1;
var total2 = 0;
for (var i = 1; i <= n2; i++) {
	sub *= i;
	total2 += sub;
}

console.log("Total2 = ", total2);
