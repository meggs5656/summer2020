const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
/* an array for all the todo items */
let todoItems = [];
var nameList = "";
function newTodo() {
  /* asks the user what task they want to complete */
  var task = prompt("Please enter a task:");
  if (task != null) {
    /* prints the task to the screen */
    document.getElementById("todo-list").innerHTML =
    task;
  }
  /*adds the task to the on going list */
  addTodo(task)
  for (var I = 0; I < todoItems.length; I++)
  {
       nameList = "<li>" + todoItems[I] + "</li>";
       document.getElementById("todo-list").innerHTML += nameList;
  }
}



/* a function to add all the todo items */
function addTodo(text){ 
  const todo = { 
    text,
    checked: false,
    id: Date.now(),
  };

  todoItems.push(todo); 
  console.log(todoItems);
  
}

