let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    function addTask() {
      let input = document.getElementById("taskInput");
      let value = input.value;

      if (value === "") return;

      tasks.push(value);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      displayTasks();

      input.value = "";
    }

    function displayTasks() {
      let list = document.getElementById("list");
      list.innerHTML = "";

      for (let i = 0; i < tasks.length; i++) {
        list.innerHTML += 
          `<li>
            <span onclick="toggleTask(${i})">${tasks[i]}</span>
            <div>
              <button onclick="deleteTask(${i})">❌</button>
            </div>
          </li>`;
        ;
      }
    }

    function deleteTask(index) {
      tasks.splice(index, 1); // remove item
        localStorage.setItem("tasks", JSON.stringify(tasks));
      displayTasks();
    }

    function toggleTask(index) {
      let listItems = document.querySelectorAll("li span");
      listItems[index].classList.toggle("done");
    }

    displayTasks();



