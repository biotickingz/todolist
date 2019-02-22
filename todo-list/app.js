// get value from add button
document.getElementById("add-button").addEventListener("click", function() {
  var input = document.getElementById("placeholder").value;
  if (input) {
    addTodo(input);
    document.getElementById("placeholder").value = "";
  }
});

function addTodo(text) {
  // add new todo
  var todo = document.getElementById("todo-list");
  todoList = document.createElement("li");
  todoList.innerText = text;

  // add new remove buttons
  var remove = document.createElement("button");
  remove.classList.add("remove-btn");
  remove.innerText = "X";
  todoList.appendChild(remove);
  todo.appendChild(todoList);

  //add event to delete todos
  remove.addEventListener("click", deleteTodo);

  //add event to complete todos
  todoList.addEventListener("click", completeTodo);
}

function deleteTodo(event) {
  var item = this.parentNode;
  var parent = item.parentNode;
  parent.removeChild(item);

  // stop event bubbling
  event.stopPropagation();
}

function completeTodo() {
  if (this.style.color === "rgb(141, 138, 138)") {
    this.style.color = "#FF99E6";
    this.style.textDecoration = "line-through";
  } else {
    this.style.color = "#8D8A8A";
    this.style.textDecoration = "none";
  }
}

deleteTodo();
completeTodo();
