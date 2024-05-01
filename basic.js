// console.log("hello world !");
// console.log(5);

// variable

// var x = 5;
// x = 10;

// console.log(x)

// variable naming

// valid name
// var x = 5
// var age = 25
// var my_name = "mehedy"
// var name1 = "dhfao"
// var $hello = "dosf a"

// invalid name
// var 1hello;
// var my-age;
// var if ;

// // data types
// var age = 15; //Number
// var name = 'Mehedy' //string
// var x = true; //boolean

// var x = 25.4565;
// var y = parseInt(x);
// console.log(y);

// var num = "15.36";
// var num1 = parseFloat(num);
// console.log(parseInt(num1));

// var numder = "25.43254";
// console.log(typeof numder);

// var floating = parseFloat(numder);
// var integer = parseInt(floating);
// var fixed = floating.toFixed(2);

// console.log(floating);
// console.log(parseFloat(fixed));

// var x = 5;
// var y = 10;
// var z = x + y;

// x = x + 5;
// console.log(x)

// console.log(z);

// var x = 5;
// x = x + 1
// x += 1
// x++ //post increment
// ++x // pre increment

// var x = 5;
// console.log(x++); //print hocce 5 tarpor bartece 1 = 6
// console.log(x++); //print hocca 6 tar bartece 1 = 7

// var y = 10;
// console.log(++y); // pre increment
// console.log(++y); // pre increment

// Array
// Array
// var arr = [10, 15, 20, 30];
// console.log(arr.length); //lenght index same na !

// var num1 = arr[0];
// console.log(num1);

// var orpon = ["mita", "puspita", "mowmita"];
// orpon.push("diya");
// orpon.push("pakhi");

// console.log(orpon);
// var ex = orpon.pop();
// orpon.pop();
// orpon.push("rakhi");
// console.log(orpon);
// console.log(ex);

// if else
// are you adult or not ?
// var age = 25;

// if (age > 18) {
//   console.log("you are adult");
// } else {
//   console.log("tumi bacca aco");
// }

// else if
// var mark = 57;
// if (mark > 80) {
//   console.log("you got A+");
// } else if (mark > 70) {
//   console.log("you got A");
// } else if (mark > 60) {
//   console.log("you got B");
// } else if (mark > 50) {
//   console.log("you got C");
// } else {
//   console.log("tumi faill.. text");
// }

// var temperature = 25;
// var isRaining = true;

// if (temperature > 30) {
//   console.log("it is a hot day");
//   if (isRaining == true) {
//     console.log("but it is not raining");
//   } else {
//     console.log("and it is not raining");
//   }
// } else {
//   console.log("it is a cold day");
//   if (isRainin == true) {
//     console.log("but is is raining");
//   } else {
//     console.log("and it is not raining");
//   }
// }

// while loop
// var i = 1;
// while (i < 100) {
//   console.log("im sorry...", i);
//   i++;
// }

// // for loop
// for (var x = 1; x < 10; x++) {
//   console.log("im sorry...", x);
// }

// loop breaking condison
// var arr = [10, 20, 30, 40, 50];

// console.log(arr.indexOf(40))
// console.log(arr.indexOf(100))

// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// var x = 0;
// while (x < arr.length) {
//   console.log(arr[x]);
//   x++;
// }

// break
// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
//   if (arr[i] == 30) {
//     break;
//   }
// }
// // pogishon skip korbe
// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] == 30) {
//     continue;
//   }
//   console.log(arr[i]);
// }

// comper

// var x = 5;

// if ((x = 5)) {
//   console.log("equal to 5");
// } else {
//   console.log("not equal to 5");
// }

// multipul condishon comper
// dui tar vitor akta tik hote hobe
// var raining = true;
// var umbrella = true;

// if (raining == true && umbrella == true) {
//   console.log("baire jabo");
// } else {
//   console.log("jabo na baire");
// }

// doi tar vitor akta tik hoyta hobe
// var raining = true;
// var umbrella = false;

// if (raining === false || umbrella === true) {
//   console.log("baire jabo");
// } else {
//   console.log("jabona baire");
// }

// Math
// var x = 10;
// var y = 4;
// var remain = x % y;
// console.log(remain);

// abul vai biye korbe, per bus 50, per car 11, badbaki jabe rikshaw per person 70

// var peoples = 213;

// var peopleForCar = peoples % 50;
// var peopleForRickshaw = peopleForCar % 11;

// var totalVara = peopleForRickshaw * 70;
// console.log(totalVara);

//ternary operator

// var raining = true;

// if (raining === true) {
//   console.log("baire jabona");
// } else {
//   console.log("baire jabo");
// }

// raining === true ? console.log("baire jabona") : console.log("baire jabo");

// var age = 25;
// var hasLicence = true;

// if (age > 18) {
//   if (hasLicence === true) {
//     console.log("adult with licence");
//   } else {
//     console.log("adult but has no licence");
//   }
// } else {
//   console.log("you are not adult");
// }

// age > 18
//   ? hasLicence === true
//     ? console.log("adult with licence")
//     : console.log("adult but has no licence")
//   : console.log("you are not adult");
