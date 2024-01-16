
document.title = 'Some other title'

let todos = ['Get Groceries', 'Wash Car', 'Make Dinner']

todos.forEach(function(todoTitle){
  let elem = document.createElement('div');
  elem.innerText = todoTitle;
  document.body.appendChild(elem)
});

function addTodo(){
  let textbox = document.getElementById('todo_title');
  let title = textbox.value;
  todos.push(title);
}
// console.log(todos);