console.log("Hello World!");

const varName = "Hello World!";
let varName2 = "true";

// Variable types
//Number, String, Boolean, Object, Array, Function, undefined, null
// variable name cannot start with a number
//variable name cannot contain spaces or hyphens
//variable name can only contain letters, numbers, $, or _
//variable names are case sensitive
//variable names should be camelCase
//variable names should be descriptive
//variable names should be in lower case
//variable names should not start with capital letters

// Array methods
console.log("---Array methods---");
const list = [1, 2, 3, 4, 5];
list.push(7);
list.pop();

list.shift();
list.unshift(1);

const reversed = list.reverse();
console.log(reversed, "REVERSED");

const sorted = list.sort();
console.log(sorted, "SORTED");

const fused = list.concat(reversed);
console.log(fused, "CONCATENATED");

console.log(list.includes(3), "CHECK IF 3 IS IN THE LIST");
console.log(list.indexOf(3), "GET INDEX OF 3 IN THE LIST");
console.log(list.slice(0, 15), "SLICE FIRST 15 VALUES");
list.splice(0, 3, ...[1, 2, 3, 4]);
console.log(list, "DELETE RANGE AND ADD NEW VALUES");
console.log(list.length, "GET LENGHT OF THE LIST");

// Loops

list.forEach(function (item) {
  console.log(item, "from for Each");
});

const mapped = list.map(function (item) {
  return item + 3;
});
console.log(mapped, "Mapped array");

//Object methods
//EMPTY OBJECT
const teacher = {};

const student = {
  firstName: "John",
  lastName: "Doe",
};

console.log(student.firstName);
console.log(student.lastName);
listOfKeys = ["firstName", "lastName"];

listOfKeys.forEach((value) => console.log(student[value]));

student.firstName = "Jane";
student.character = "Wild";
console.log(student);
//console.Log(student["firstName"]);

//Functions
//Step 1: Define the function
function add(a, b) {
  return a + b;
}
//Step 2 : THE OLD WAY This is weired but it works
const add2 = function (a, b) {
  return a + b;
};

add2(1, 2);

//Step 3 THE MODERN WAY
const add3 = (a, b) => a + b;

//SELECTORS
let element = document.getElementById("header");
console.log(element);

let paragraph = document.getElementsByClassName("text");
console.log(paragraph);

let tag = document.getElementsByTagName("body");

let selector = document.querySelectorAll(".text");
console.log(selector);

let container = document.querySelector("#container");

//CREATE/APPEND
const newTextNode = document.createElement("span");
newTextNode.innerText = "Hello World from JS!";

container.appendChild(newTextNode);

//EVENTS
function showMessage() {
  element.classList.add("color"); //add class
}
