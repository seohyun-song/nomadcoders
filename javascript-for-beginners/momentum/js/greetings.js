const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');
const todos = document.querySelector("#todo-form");
const todosList = document.querySelector("#todo-list");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onSubmit(e) {
    e.preventDefault();
     
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;

    localStorage.setItem(USERNAME_KEY, username);
    paintGreeting(username);
    paintToDos();
}

function paintGreeting(username) {
    greeting.innerText =`Hello, ${username}` ;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function paintToDos() {
    todos.classList.remove(HIDDEN_CLASSNAME);
    todosList.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onSubmit); 
} else {
    paintGreeting(savedUsername);
    paintToDos();
}

