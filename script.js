// obj = {
//     name: "John",
//     age: 24,
//     isMarried: false,
//  }
// console.log(obj["name"]);
//
// var arr = ['apple', 'orange', 'plum', 'la', 'cri', 'lo', 'jag']
// console.log(arr[5]);
//
// // confirm("Тут?");
// // var answer = prompt("что скажешь?", "42");
// console.log( typeof(arr));
let num = 50;

if (num < 49) {
	console.log('неверно')
} else if (num > 100) {
	console.log('неверно')
} else {
	console.log('да неужели!')
}

(num == 50) ? console.log('да неужели!'): console.log('неверно')

switch (num) {
	case 49:
		console.log('мало');
		break;
	case 100:
		console.log('много');
		break;
	case 80:
		console.log('теплее');
		break;
	case 50:
		console.log('верно!');
		break;
	default:
		console.log('не в этот раз');
		break;
}
// while (num < 55) {
//  console.log(num);
//  num++;
// }
// do {
//   console.log(num);
//   num++;
// }
// while (num < 53);

for (let i = 1; i < 5; i++) {
  console.log(i);
}
