const todoForm = document.querySelector(".js-todoForm"),
  todoInput = todoForm.querySelector("input"),
  todoList = document.querySelector(".js-todoList");


const TODOS_LS = 'todos';

const todos = [];



function filterFn(todo){
  return todo.id !== 1
}

function deleteTodo(e){
  const btn = e.target;
  const li = btn.parentNode;
  todoList.removeChild(li);

  const cleanTodos = todos.filter(filterFn);
  console.log(cleanTodos);

}


function saveTodos(){
  localStorage.setItem(TODOS_LS,JSON.stringify(todos));
}


function paintTodo(text){
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = todos.length + 1;

  delBtn.innerText = "Ω";
  delBtn.addEventListener("click",deleteTodo);

  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  todoList.appendChild(li);

  const todoObj = {
    text: text,
    id: newId
  };
  todos.push(todoObj);
  saveTodos();
}

function handleSubmit(e){
  e.preventDefault();
  if(todoInput.value.trim() === ""){
    return;
  }
  const currnentValue = todoInput.value;
  paintTodo(currnentValue);
  todoInput.value = "";
}


//todo리스트를 출력한다.
//있던 없던 항상 출력한다.

// @todo 이름 입력 안되있으면 보이지않게 해야함.

function loadTodos(){
    const loadedTodos = localStorage.getItem(TODOS_LS);
    todoForm.addEventListener("submit",handleSubmit);

    if(loadedTodos !== null){
      const parsedTodos = JSON.parse(loadedTodos);
      parsedTodos.forEach(item => {
        paintTodo(item.text)
      });
    }else{
      //없으면 ? 할게 없다.
    };  
}


function init(){
  loadTodos();
}
init();