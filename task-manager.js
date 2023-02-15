let taskList = document.getElementById("task-list");
let taskInput = document.getElementById("task-input");
let addTaskButton = document.getElementById("add-task");
let warningMessage = document.getElementById("warning");

let taskCount = 0;

addTaskButton.addEventListener("click", function() {
  if (taskCount < 5) {
    let taskText = taskInput.value.trim();
    if (taskText.length > 0) {
      let taskItem = document.createElement("li");
      taskItem.textContent = taskText;
      taskList.appendChild(taskItem);

      taskItem.addEventListener("click", function() {
        taskItem.classList.toggle("completed");
      });

      taskInput.value = "";
      taskCount++;

      if (taskCount === 5) {
        addTaskButton.disabled = true;
        warningMessage.style.display = "block";
      }
    }
  }
});
