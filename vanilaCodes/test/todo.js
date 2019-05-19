const todoForm = document.querySelector(".js-todoForm"),
  todoInput = todoForm.querySelector("input"),
  todoList = document.querySelector(".js-todoList");

const TODOS_LS = 'todos';



function paintTodo(text){
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "Ω";
  const span = document.createElement("span");
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  todoList.appendChild(li);
}

function handleSubmit(e){
  e.preventDefault();
  const currnentValue = todoInput.value;
  paintTodo(currnentValue);
  todoInput.value = "";
}


//todo리스트를 출력한다.
//있던 없던 항상 출력한다.
function loadTodos(){
  const todos = localStorage.getItem(TODOS_LS);
  if(todos === !null){
    
  }else{
    //없으면 ? 할게 없다.
  }
}


function init(){
  loadTodos();
  todoForm.addEventListener("submit",handleSubmit);
}
init();