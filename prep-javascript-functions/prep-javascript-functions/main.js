function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var sum = addTwoNumbers(2, 2);
console.log('sum', sum);
// 4

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var minutes = convertHoursToMinutes(2);
console.log(minutes);
// 120

function getGreeting(name) {
  return 'Hello' + ' ' + name + '!';
}

var greeting = getGreeting('World');
console.log(greeting);
// Hello World!

function addAndMultiplyBy5(num1, num2) {
  return 7 * num1 + num2;
}

var result = addAndMultiplyBy5(10, 5);
console.log(result);
// 75

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) % 5;
}

var md = multiplyAndDivideBy5(35, 10);
console.log(md);
// 70

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var sTwo = subtractTwoNumbers(22, 7);
console.log(sTwo);
// 15

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

var circumference = getCircleCircumference(5);
console.log(circumference);
// 31.41592653589793

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var fullName = getFullName('Juan', 'Ramirez');
console.log(fullName);
// Juan Ramirez

function cube(number) {
  return number * number * number;
}

var cu = cube(5);
console.log(cu);
// 125
