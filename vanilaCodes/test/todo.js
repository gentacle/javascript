const todoForm = document.querySelector(".js-todoForm"),
  todoInput = todoForm.querySelector("input"),
  todoList = document.querySelector(".js-todoList");


const TODOS_LS = 'todos';

const todos = [];


function paintTodo(text){
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = todos.length + 1;

  delBtn.innerText = "Ω";
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
//이름 삭제버튼 누그고 다시 입력하면 submit 안되는 버그있음

function loadTodos(){
  if(true){
    const todos = localStorage.getItem(TODOS_LS);
    todoForm.addEventListener("submit",handleSubmit);
    if(todos === !null){
      
    }else{
      //없으면 ? 할게 없다.
    };
  }else{
  }
}


function init(){
  loadTodos();
}
init();