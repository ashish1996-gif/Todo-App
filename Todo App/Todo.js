// let tasks = [];

// let addBtn =
// document.getElementById("addBtn");
// addBtn.addEventListener("click", addTask);

// // LOAD SAVED TASKS

// let savedTasks =
// JSON.parse(localStorage.getItem("tasks"));

// if(savedTasks){

//    tasks = savedTasks;

//    tasks.forEach(function(task){

//       createTask(task);

//    });
//    updateCounter();
// }

// // ADD TASK FUNCTION

// function addTask(){

//    let input =
//    document.getElementById("taskInput");

//    let taskText = input.value;

//    if(taskText === ""){

//       alert("Please enter task");

//       return;

//    }

//    tasks.push(taskText);

//    createTask(taskText);

//    saveTasks();

//    updateCounter();

//    input.value = "";

// }

// // CREATE TASK FUNCTION

// function createTask(taskText){

//    let li = document.createElement("li");

//    li.innerText = taskText;

//    // COMPLETE TASK

//    li.addEventListener("click", function(){

//       li.classList.toggle("completed");

//    });

//    // DELETE BUTTON

//    let deleteBtn =
//    document.createElement("button");

//    deleteBtn.innerText = "Delete";

//    deleteBtn.addEventListener("click", function(event){

//       event.stopPropagation();

//       li.remove();

//       tasks = tasks.filter(function(task){

//          return task !== taskText;

//       });

//       saveTasks();

//       updateCounter();

//    });

//    li.appendChild(deleteBtn);

//    document.getElementById("taskList")
//    .appendChild(li);

// }

// // UPDATE COUNTER

// function updateCounter(){
//    document.getElementById("counter")
//    .innerText =
//    `Total Tasks: ${tasks.length}`;
// }

// // SAVE TASKS

// function saveTasks(){

//    localStorage.setItem(
//       "tasks",
//       JSON.stringify(tasks)
//    );

// }

// // ENTER KEY SUPPORT

// document.getElementById("taskInput")
// .addEventListener("keypress", function(event){

//    if(event.key === "Enter"){

//       addTask();

//    }

// });

// document.getElementById("darkModeBtn")
// .addEventListener("click", function(){

//    document.body.classList.toggle("dark");
//    classList.toggle("dark")
// });


// document.getElementById("darkModeBtn")
// .addEventListener("click", function(){

//    document.body.classList.toggle("dark");

//    localStorage.setItem(
//       "darkMode",
//       document.body.classList.contains("dark")
//    );

// });

// let darkMode =
// localStorage.getItem("darkMode");

// if(darkMode === "true"){

//    document.body.classList.add("dark");

// }














let tasks = [];

// =====================
// LOAD DATA ON START
// =====================

let savedTasks = JSON.parse(localStorage.getItem("tasks"));

if (savedTasks) {
  tasks = savedTasks;

  tasks.forEach((task) => {
    createTask(task);
  });

  updateCounter();
}

// =====================
// ADD TASK BUTTON
// =====================

document
  .getElementById("addBtn")
  .addEventListener("click", addTask);

// =====================
// ADD TASK FUNCTION
// =====================

function addTask() {
  let input = document.getElementById("taskInput");

  let taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter task");
    return;
  }

  let task = {
    id: Date.now(),
    text: taskText,
    completed: false,
  };

  tasks.push(task);

  createTask(task);

  saveTasks();

  updateCounter();

  input.value = "";
}

// =====================
// CREATE TASK
// =====================

function createTask(task) {
  let li = document.createElement("li");

  li.setAttribute("data-id", task.id);

  if (task.completed) {
    li.classList.add("completed");
  }

  // Task Text

  let span = document.createElement("span");

  span.innerText = task.text;

  span.classList.add("task-text");

  // Complete Task

  span.addEventListener("click", function () {
    li.classList.toggle("completed");

    task.completed = !task.completed;

    saveTasks();
  });

  // Edit Button

  let editBtn = document.createElement("button");

  editBtn.innerText = "Edit";

  editBtn.classList.add("editBtn");

  editBtn.addEventListener("click", function () {
    let updatedTask = prompt(
      "Edit your task",
      task.text
    );

    if (updatedTask === null) return;

    updatedTask = updatedTask.trim();

    if (updatedTask === "") return;

    task.text = updatedTask;

    span.innerText = updatedTask;

    saveTasks();
  });

  // Delete Button

  let deleteBtn = document.createElement("button");

  deleteBtn.innerText = "Delete";

  deleteBtn.classList.add("deleteBtn");

  deleteBtn.addEventListener("click", function () {
    li.remove();

    tasks = tasks.filter((t) => {
      return t.id !== task.id;
    });

    saveTasks();

    updateCounter();
  });

  // Button Container

  let buttonDiv = document.createElement("div");

  buttonDiv.classList.add("task-buttons");

  buttonDiv.appendChild(editBtn);

  buttonDiv.appendChild(deleteBtn);

  li.appendChild(span);

  li.appendChild(buttonDiv);

  document
    .getElementById("taskList")
    .appendChild(li);
}

// =====================
// UPDATE COUNTER
// =====================

function updateCounter() {
  document.getElementById(
    "counter"
  ).innerText = `Total Tasks: ${tasks.length}`;
}

// =====================
// SAVE TASKS
// =====================

function saveTasks() {
  localStorage.setItem(
    "tasks",
    JSON.stringify(tasks)
  );
}

// =====================
// ENTER KEY SUPPORT
// =====================

document
  .getElementById("taskInput")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

// =====================
// SEARCH TASKS
// =====================

document
  .getElementById("searchInput")
  .addEventListener("input", function () {
    let searchText =
      this.value.toLowerCase();

    let allTasks =
      document.querySelectorAll("#taskList li");

    allTasks.forEach((task) => {
      if (
        task.innerText
          .toLowerCase()
          .includes(searchText)
      ) {
        task.style.display = "flex";
      } else {
        task.style.display = "none";
      }
    });
  });

// =====================
// CLEAR ALL TASKS
// =====================

document
  .getElementById("clearAllBtn")
  .addEventListener("click", function () {
    let confirmDelete =
      confirm(
        "Are you sure you want to delete all tasks?"
      );

    if (!confirmDelete) return;

    tasks = [];

    document.getElementById(
      "taskList"
    ).innerHTML = "";

    saveTasks();

    updateCounter();
  });

// =====================
// DARK MODE
// =====================

let darkMode =
  localStorage.getItem("darkMode");

if (darkMode === "true") {
  document.body.classList.add("dark");
}

document
  .getElementById("darkModeBtn")
  .addEventListener("click", function () {
    document.body.classList.toggle("dark");

    localStorage.setItem(
      "darkMode",
      document.body.classList.contains(
        "dark"
      )
    );
  });

// =====================
// INITIAL COUNTER
// =====================

updateCounter();