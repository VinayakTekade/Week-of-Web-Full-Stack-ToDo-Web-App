//Basics
// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = "DOM Manipulation";
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[16]);

// Selectors
// let headerTitle = document.getElementById("header-title");
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);
// console.log(headerTitle.innerHTML);
// headerTitle.style.borderBottom = "3px solid green";
// headerTitle.style.color = "red";
// headerTitle.style.backgroundColor = "yellow";

// let taskText = document.getElementsByClassName("task-text");
// console.log(taskText);
// console.log(taskText[1]);
// taskText[1].textContent = "Go on a Walk";
// taskText[1].style.fontWeight = "bold";
// for (let i = 0; i < taskText.length; i++) {
//   taskText[i].style.backgroundColor = "#f4f4f4";
// }

// let list = document.getElementsByTagName("li");
// console.log(list);

let headerTitle = document.querySelector("#header-title");
// console.log(headerTitle);
let taskText = document.querySelector(".task-text");
// console.log(taskText);
let taskTextAll = document.querySelectorAll(".task-text");
// console.log(taskTextAll);
let list = document.querySelector("ul");
// console.log(list);

// Creating a new element
let newDiv = document.createElement("div");
// console.log(newDiv);
// newDiv.className = "hello-class";
// console.log(newDiv);
// newDiv.id = "hello-id";
// console.log(newDiv);
// newDiv.setAttribute("title", "Hello Div");
// console.log(newDiv);
// let newDivText = document.createTextNode("Have a Nice Day");
// newDiv.appendChild(newDivText);
// console.log(newDiv);
// let container = document.querySelector(".container");
// container.insertBefore(newDiv, list);

// const buttonClick = () => {
//   console.log("Button Clicked");
// };

// Event Listener
let button = document.querySelector("#button");
// button.addEventListener("click", buttonClick);

// Mouse Event Listener
// button.addEventListener("dblclick", buttonClick);
// button.addEventListener("mousedown", buttonClick);
// button.addEventListener("mouseup", buttonClick);
// button.addEventListener("mouseenter", areaEnter); //parent element
// button.addEventListener("mouseleave", areaEnter);
// button.addEventListener("mouseover", areaEnter); //inner element
// button.addEventListener("mouseout", areaEnter);
// button.addEventListener("mousemove", areaEnter);

// Mouse Event Properties
const buttonClick = (e) => {
  console.log(e);
  console.log(e.target);
  console.log(e.type);
  console.log(e.clientX);
  console.log(e.offsetX);
  console.log(e.altKey);
};

const runEvent = () => {
  console.log("Key pressed");
};

let inputTask = document.querySelector('input[type="text"]');
inputTask.addEventListener("keydown", runEvent);
inputTask.addEventListener("keyup", runEvent);
inputTask.addEventListener("keypress", runEvent);

inputTask.addEventListener("focus", runEvent);
inputTask.addEventListener("blur", runEvent);
inputTask.addEventListener("cut", runEvent);
inputTask.addEventListener("paste", runEvent);
inputTask.addEventListener("input", runEvent);
inputTask.addEventListener("change", runEvent);
inputTask.addEventListener("submit", runEvent);
