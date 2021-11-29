// function makeNegative(num) {
//   // Code?
//
//   if (num < 0){
//     num = num
//   }else if (num > 0){
//     num = num * -
//   }else {
//     0
//   }
//   return num
// }
//
// console.log(makeNegative(42), -42);

//
// function solution(str){
//   arr = str.split("")
//   arr2 =[]
//   // let result = ""
// arr
// // for (let i = 0; i < arr.length; i++){
// for (let i = arr.length -1 ; i >= 0 ; i--){
//   console.log(arr[i]);
//   arr
//   arr2.push(arr[i])
//   var result = arr2.join("")
// }
//   return result
// }
//
// console.log(solution('world'))

// function repeatStr (n, s) {
//   // return '';
//   // return s.repeat(n)
// let result = ""
//   let i = 0
//   while(i < n ){
//     console.log(s);
//     result = s + result
//     i++
//   }
//   return result
// }
//
// console.log(repeatStr(3, "*"));
// console.log(repeatStr(5, "#"));
// console.log(repeatStr(2, "ha "));


// function removeChar(str){
//  //You got this!
// let l = str.length
//
// let remove = str.slice(1, (l - 1))
// return remove
// };
//
// console.log(removeChar('elolquent'));

// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//
//     let arr = args.sort(function (a, b){return a - b})
//
//     return arr[0];
//   }
//
// }
//
// console.log(findSmallestInt([78,56,232,12,8]));
//
//
// let points = [40, 100, 1, 5, 25, 10];
//
// points.sort(function(a, b){return a -b})
//
// points
// console.log(points[0]);


// var summation = function (num) {
//   // Code here
//   let sum = 0
//   let i = 1
//   while (i <= num){
//     sum = sum + i
//     i++
//   }
//   return sum
// }
//
// console.log(summation(1));
// console.log(summation(8));



// function noSpace(x){
//   let arr = x.split("")
//   console.log(arr.length);
//   let arr2 = []
//   let arr3 = []
//   for ( let i = 0 ; i< arr.length; i++){
//     if (arr[i] !== " "){
//       arr2.push(arr[i])
//       arr3 = arr2.join("")
//
//     }
//
//   }
//   console.log(arr3);
//   return arr3
// }

// function noSpace(x){
//
//   result = ""
//   for (let i= 0; i < x.length; i++){
//     if (x[i] !== " "){
//       result = result + x[i]
//     }
//   }
//   return result
// }
//
//
//
// console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));
// console.log(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'));
// console.log(noSpace('8aaaaa dddd r     '));


// function squareSum(numbers){
//   sum = 0
//   for (let num of numbers){
//     sum += num ** 2
//
//   }
//   return sum
// }
//
//
// console.log(squareSum([1,2]));
// console.log(squareSum([0, 3, 4, 5]));


// var array1 = [true,  true,  true,  false,
//               true,  true,  true,  true ,
//               true,  false, true,  false,
//               true,  false, false, true ,
//               true,  true,  true,  true ,
//               false, false, true,  true ];
//
// function countSheeps(arrayOfSheep) {
//   // TODO May the force be with you
//   let count = 0
//   for (let i in arrayOfSheep){
//
//     if (arrayOfSheep[i] === true){
//       count++
//     }
//   }
//   return count
// }
//
// console.log(countSheeps(array1));


// function litres(time) {
//   // return 0;
//   return Math.floor(time * 0.5)
//
// }
// console.log(litres(2));
// console.log(litres(1.4));


// function greet(){
//   return "hello World!"
// }

// function century(year) {
//   // Finish this :)
//   if (year %100 === 0) {
//     return Math.floor(year /100)
//   }else{
//     return Math.floor(year/ 100) + 1
//   }
// }
//
// console.log(century(2000));
// console.log(century(1705));
// console.log(century(89));



// function basicOp(operation, value1, value2){
  // Code
  // if (operation === "*"){
  //   return value1 * value2
  // }else if (operation === "/"){
  //   return value1 / value2
  // }else if (operation === "+"){
  //   return value1 + value2
  // }else if (operation === "-"){
  //   return value1 - value2
  // }


  // switch (operation){
  //   case "+":
  //     return value1 + value2;
  //     break;
  //   case "-":
  //     return value1 - value2;
  //     break;
  //   case "*":
  //     return value1 * value2;
  //     break;
  //   case "/":
  //     return value1 / value2;
  //     break;
  // }

// return eval (value1+operation+value2)
//
// }
//
// console.log(basicOp('+', 4, 7));
// console.log(basicOp('-', 15, 18));
// console.log(basicOp('*', 5, 5));
// console.log(basicOp('/', 49, 7));

// function isDivisible(n, x, y) {
//   if (n % x === 0 && n % y === 0){
//     return true
//   } return false
//
// }
//
// console.log(isDivisible(3,3,4));
// console.log(isDivisible(12,3,4));

// function digitize(n) {
  //code here
  // console.log(typeof n);
  // let str = String(n)
  // console.log(typeof str);
  // let arr = str.split("").map(Number).reverse()
  //
  // return arr

//   let str = n.toString()
//   let arr = str.split("")
//   arr
//   arr = arr.reverse()
//   let arr2 = arr.map(Number)
//   arr2
//   return arr
//
// }
//
// console.log(digitize(35231));



// function abbrevName(name){
//     // code away
//     // let dot = []
//     // let arr = name.split(" ")
//     // arr
//     //
//     // return (arr[0][0] + "." + arr[1][0]).toUpperCase();
//
//
// // other good way with the variable asigned
//
//     const [firstName, lastName] = name.split(' ')
//     firstName
//     lastName
//     const firstInitial = firstName.charAt(0).toUpperCase()
//     const secondInitial = lastName.charAt(0).toUpperCase()
//     return firstInitial + '.' + secondInitial
//
// }
//
// console.log(abbrevName("Sam Harris"));
// console.log(abbrevName("Patrick Feenan"));
// console.log(abbrevName("gabriel roena"));


// function greet(name){
//
//   if(name === "Johnny"){
//     return "Hello, my love!";
//   }else {
//     return "Hello, " + name + "!";
//   }
// }
//
//
// console.log(greet("Jim"));
// console.log(greet("Johnny"));


// function maps(x){
//
//   // let arr = x.map(myFunction)
//   //
//   // function myFunction(num){
//   //   return num * 2
//   // }
//   // return arr
//
//   //short version
//   return x.map(n => n * 2)
// }
//
//
// console.log(maps([1, 2, 3]));

// var haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
// var haystack_2 = ['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago'];
// var haystack_3 = [1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54];
//
// function findNeedle(haystack) {
//   // your code here
//
//   // let index = haystack.indexOf('needle')
//   //
//   // return `found the needle at position ${index}`
//
//
// // other good way to do it!
//   var i = 0;
//   while (i < haystack.length) {
//     if (haystack[i] == 'needle') {
//       return 'found the needle at position ' + i;
//     }
//     i++;
//   }
// }
//
//
//
// console.log(findNeedle(haystack_1));
// console.log(findNeedle(haystack_2));
// console.log(findNeedle(haystack_3));

// function getAverage(marks){
//   //TODO : calculate the downward rounded average of the marks array
//   let len = marks.length
//   let sum = 0
//   for (let i of marks){
//     sum = sum + i
//
//   }
//   return Math.floor(sum / len)
// }
//
//
// console.log(getAverage([2,2,2,2]));
// console.log(getAverage([1,2,3,4,5,]));


//
// function reverseWords(str){
//   // let arr = str.split(" ")
//   // arr.reverse()
//   // let str2 = arr.join(" ")
//   //
//   // return str2; // reverse those words
//
//   //or
//   return str.split(" ").reverse().join(" ")
//
// }
//
// console.log(reverseWords("hello world!"));
// console.log(reverseWords("yoda doesn't speak like this" ));

// function invert(array) {
//    return array.map(n => n *-1);
// }
//
// console.log(invert([1,2,3,4,5]));

// function booleanToString(b){
//   //your code here
//   return String(b)
//
// }
//
// console.log(booleanToString(true));
// console.log(booleanToString(false));

// let testData1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
// let testData2 = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
//
// function countPositivesSumNegatives(input) {
//
//   let arr = []
//   let posi = 0
//   let neg = 0
//
//   if (input === null || input.length === " "){
//     return arr
//   }else{
//
//     for (let i of input){
//       if (i < 0){
//         neg = neg + i
//
//       }else if (i>= 0){
//         posi += 1
//
//       }
//
//     }
//     // arr[0] = posi
//     // arr[1] = neg
//   }
//   // return arr
//   return [posi, neg]
// }
//
// console.log(countPositivesSumNegatives(testData1));
// console.log(countPositivesSumNegatives(testData2));


// function getDecimal(n){

  // let num = Math.floor(n)
  // if (n <= 0){
  //   num
  //   return (n * -1) +  (num + 1)
  // }else {
  //   return n - num; // fix me
  // }

//or

//   let a = Math.floor(n);
//   let b = Math.ceil(n);
//     if (n>0) {
//       return n - a
//     }
//     if (n<0) {
//       b
//       return 0 - (n - b)
//     }
//
// }
//
// console.log(getDecimal(-0.2));
// console.log(getDecimal(10));
// console.log(getDecimal(-1.2));
// console.log(getDecimal(4.5));

// let TESTS = [
//   [1, 2, false],
//   [16, 8, false],
//   [1, 1, false],
//   [2, 3, false],
//   [7, 10, false],
//   [43, 77, true],
//   [7, 15, true],
//   [23, 7, true],
// ];

// function sharedBits(a, b) {
// //   Your code here
//   a = a.toString(2).split("").reverse()
//   b = b.toString(2).split("").reverse()
//
//   let count = 0
//
//   for ( let i in a){
//     if ( a[i] === '1' && a[i] === b[i]){
//       count += 1
//     }
//     if ( count > 1){
//       return true
//     }
//   }
//     return false
// }
//
// console.log(sharedBits(1, 2));
// console.log(sharedBits(7, 15));
// console.log(sharedBits(7, 10));


// function monkeyCount(n) {
// // your code here
//     let arr = []
//     let count = 0
//     while (n > count){
//
//       arr[count] = count + 1
//       count ++
//
//     }
//     return arr
// }
//
// console.log(monkeyCount(5));


// function arrayPlusArray(arr1, arr2) {
//   let sum1 = 0
//   let sum2 = 0
//   for (let i in arr1){
//     sum1 = arr1[i] + sum1
//     sum2 = arr2[i] + sum2
//
//   }
//
//   return sum1 + sum2; //something went wrong
// }
//
// console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
// console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]));
//
// let peopleWithAgeDrink = (age) =>
//
// age < 14 ? "drink toddy" :
// age < 18 ? "drink coke" :
// age < 21 ? "drink beer" : "drink whisky"
//
//
//
// // function peopleWithAgeDrink(old) {
// //   if (old < 14){
// //     return "drink toddy" ;
// //   }else if (old <18) {
// //     return "drink coke" ;
// //   }else if (old < 21 ) {
// //     return "drink beer" ;
// //   }else if (old >= 21) {
// //     return "drink whisky" ;
// //   }
// //
// //   return '';
// // }
//
// console.log(peopleWithAgeDrink(19));
// console.log(peopleWithAgeDrink(22));
// console.log(peopleWithAgeDrink(30));


// function bmi(weight, height) {
//
//   let bmi = weight / Math.pow(height, 2) // or (height ** 2)
//
//   if (bmi <= 18.5){
//     return "Underweight"
//   }else if (bmi <= 25) {
//     return "Normal"
//   }else if (bmi <= 30) {
//     return "Overweight"
//   }else if (bmi > 30){
//     return "Obese"
//   }
//
//   return "";
// }

//Other solution
// const bmi = (w, h, bmi = w/h/h) =>  bmi <= 18.5 ? "Underweight" :
//                                     bmi <= 25 ? "Normal" :
//                                     bmi <= 30 ? "Overweight" : "Obese";
// console.log(bmi(80, 1.80));
//
// function fakeBin(x){
// console.log(x.length);
//   let str = ""
//   for ( let i of x){
//   i
//   if (i < 5){
//     str = str + "0"
//   }else {
//     str = str + "1"
//   }
// }
// console.log(str.length);
//   return str
// }
//
// console.log(fakeBin('45385593107843568'));
// console.log(fakeBin('509321967506747'));
// console.log(fakeBin('366058562030849490134388085'));

//
// function sum (numbers) {
//     "use strict";
//   let sum = 0
//
//   if ( numbers === []){
//     return "0"
//   } else{
//     for ( let i of numbers){
//       i
//       sum = sum + i
//     }
//   }
//   return sum
// };
//
// console.log(sum([]));
// console.log(sum([1, 5.2, 4, 0, -1]));


// const reverseSeq = n => {
//   let count = n
//   let arr = []
//     while (count > 0) {
//       arr.push(count)
//       count--
//
//     }
//   return arr;
// };
//
// console.log(reverseSeq(5));



// function areYouPlayingBanjo(name) {
//   // Implement me
//
// // let name = Prompt ("What is your name?")
//
//   if ( name[0] === "R" || name [0] === "r"){
//     return name + " plays banjo"
//   }
//
//   return name + " does not play banjo";
// }
//
//
// console.log(areYouPlayingBanjo("Adam"));
// console.log(areYouPlayingBanjo("Ringo"));
// console.log(areYouPlayingBanjo("bravo"));
// console.log(areYouPlayingBanjo("rolf"));


// var min = function(list){
//
//     let compare = (a ,b) => a-b
//     list.sort(compare)
//
//     return list[0];
// }
//
// var max = function(list){
//
//     let compare = (a ,b) => a-b
//     list.sort(compare).reverse()
//     return list[0];
// }
//
// console.log(min([-1, -10]));
// console.log(min([-52, 56, 30, 29, -54, 0, -110]));
// console.log(min([42, 54, 65, 87, 0]));
// console.log(max([4,6,2,1,9,63,-134,566]));
// console.log(max([5]));


// function lovefunc(flower1, flower2){
//   // moment of truth
//   // let love = ( (flower1 % 2 === 0 || flower2 % 2 === 0) && (flower1 % 2 !== 0 || flower2 % 2 !== 0)) ? true : false
//   //
//   // return love
//
//   //other solution
// return flower1 % 2 !== flower2 % 2;
//
// }
//
// console.log(lovefunc(1,4));
// console.log(lovefunc(2,2));
// console.log(lovefunc(0,1));
// console.log(lovefunc(0,0));


// function DNAtoRNA(dna) {
//   // create a function which returns an RNA sequence from the given DNA sequence
//   // let str = ""
//   // for (let i in dna){
//   //
//   //   str = (dna[i] === "T")? (str = str + "U") : (str = str + dna[i])
//   //
//   // }
//   // return str
//
//   return dna.replace(/T/g, 'U');
// }
//
// console.log(DNAtoRNA("TTTT"));
// console.log(DNAtoRNA("GCAT"));
// console.log(DNAtoRNA("GACCGCCGCC"));


// function grow(x){
// let multiply = 1
//   // let process = x.map(function (num) { return num * multiply})
//   // multiply = process
//   // return multiply
//
//   for ( let i of x){
//     multiply = i * multiply
//
//   }
//   return multiply
// }
//
// console.log(grow([1, 2, 3]));
// console.log(grow([4, 1, 1, 1, 4]));
// console.log(grow([2, 2, 2, 2, 2, 2]));


    hol
  hol
