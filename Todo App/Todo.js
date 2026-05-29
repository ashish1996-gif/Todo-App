let tasks = [];

let addBtn =
document.getElementById("addBtn");
addBtn.addEventListener("click", addTask);

// LOAD SAVED TASKS

let savedTasks =
JSON.parse(localStorage.getItem("tasks"));

if(savedTasks){

   tasks = savedTasks;

   tasks.forEach(function(task){

      createTask(task);

   });
   updateCounter();
}

// ADD TASK FUNCTION

function addTask(){

   let input =
   document.getElementById("taskInput");

   let taskText = input.value;

   if(taskText === ""){

      alert("Please enter task");

      return;

   }

   tasks.push(taskText);

   createTask(taskText);

   saveTasks();

   updateCounter();

   input.value = "";

}

// CREATE TASK FUNCTION

function createTask(taskText){

   let li = document.createElement("li");

   li.innerText = taskText;

   // COMPLETE TASK

   li.addEventListener("click", function(){

      li.classList.toggle("completed");

   });

   // DELETE BUTTON

   let deleteBtn =
   document.createElement("button");

   deleteBtn.innerText = "Delete";

   deleteBtn.addEventListener("click", function(event){

      event.stopPropagation();

      li.remove();

      tasks = tasks.filter(function(task){

         return task !== taskText;

      });

      saveTasks();

      updateCounter();

   });

   li.appendChild(deleteBtn);

   document.getElementById("taskList")
   .appendChild(li);

}

// UPDATE COUNTER

function updateCounter(){
   document.getElementById("counter")
   .innerText =
   `Total Tasks: ${tasks.length}`;
}

// SAVE TASKS

function saveTasks(){

   localStorage.setItem(
      "tasks",
      JSON.stringify(tasks)
   );

}

// ENTER KEY SUPPORT

document.getElementById("taskInput")
.addEventListener("keypress", function(event){

   if(event.key === "Enter"){

      addTask();

   }

});

document.getElementById("darkModeBtn")
.addEventListener("click", function(){

   document.body.classList.toggle("dark");

});


