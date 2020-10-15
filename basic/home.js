// changing html file by using js
document.getElementById('hello').innerHTML = 'No one say hello';

//take input and print it
// var age = prompt("please enter your age");
// document.getElementById('hello').innerHTML = 'your age is' + age;

//************functions */

/* 
create a function ,to take name and return a react for him or her
*/

function react() {
    var name = prompt("please enter your name");
    var result = "hello" + name;
    console.log(result);
}
//react();

/* define a function to take inputs and return react for the arguments*/

var age = prompt("please enter your age");

function hello(age) {
    var result = "Your age is " + age;
    console.log(result);
}
//hello(age);

//************data types***************** */

var myAge = 23; // integer
var myName = "vikum"; // string
var male = true; //boolean
var details = { name: "Vikum", age: "23", school: "RCG" }; //object


var juice = "avacado";

console.log(juice.length);
console.log(juice.indexOf("aca"));
console.log(juice.slice(2, 5));
console.log(juice.toLowerCase());
console.log(juice.toUpperCase());
console.log(juice.split(""));



//*************define an Array*********** */

var arr = ["saman", "kamal", "Nimal"];
var names = new Array("saman", "kamal", "Nimal");