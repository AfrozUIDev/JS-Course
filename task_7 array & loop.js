
document.title = 'Some other title'

let btn = document.createElement('button');
btn.innerText = 'Click Me';
document.body.appendChild(btn);

let todos = ['Get Groceries', 'Wash Car', 'Make Dinner']
todos.push('another')

todos.forEach(function(todoTitle){
  let elem = document.createElement('div')
  elem.innerText = todoTitle;
  document.body.appendChild(elem)
})