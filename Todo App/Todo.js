let tasks = [];
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", addTask);

function addTask(){

let input = document.getElementById("taskInput");
let taskText = input.value;
console.log(taskText);

if(taskText === ""){

   alert("Please enter task");

   return;

} 

tasks.push(taskText);

let li = document.createElement("li");

li.innerText = taskText;

document.getElementById("taskList")
.appendChild(li);

input.value = "";
}

let deleteBtn = document.createElement("button");
deleteBtn.innerText = "Delete";
li.appendChild(deleteBtn);

deleteBtn.addEventListener("click", function(){
   li.remove();
});

li.addEventListener("click", function(){

   li.style.textDecoration = "line-through";
   li.classList.toggle("completed");
});

document.getElementById("taskInput")
.addEventListener("keypress", function(event){

   if(event.key === "Enter"){

      addTask();

   }

});

document.getElementById("counter")
.innerText = `Total Tasks: ${tasks.length}`;

function updateCounter(){

   document.getElementById("counter")
   .innerText =
   `Total Tasks: ${tasks.length}`;

}

updateCounter();

localStorage.setItem(
   "tasks",
   JSON.stringify(tasks)
);

let savedTasks = JSON.parse(localStorage.getItem("tasks"));

if(savedTasks){

   tasks = savedTasks;

}

tasks.forEach(function(task){

   createTask(task);

});

function createTask(taskText){

   let li = document.createElement("li");

   li.innerText = taskText;

   document.getElementById("taskList")
   .appendChild(li);

}




