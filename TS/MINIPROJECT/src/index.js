"use strict";
const btn = document.getElementById("btn");
const input = document.getElementById("todoinput");
const form = document.querySelector("form");
const list = document.getElementById("todolist");
const todos = readTodos();
todos.forEach(createTodo);
function readTodos() {
    const todosJSON = localStorage.getItem("todos");
    if (todosJSON === null)
        return [];
    return JSON.parse(todosJSON);
}
form === null || form === void 0 ? void 0 : form.addEventListener("submit", function (e) {
    e.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false,
    };
    createTodo(newTodo);
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
    input.value = "";
});
function createTodo(todo) {
    const newTodoText = input.value;
    const newLi = document.createElement("LI");
    const checkbox = document.createElement("INPUT");
    checkbox.type = "checkbox";
    // Lägger till/append element till ett annan element newLi
    newLi.append(todo.text);
    newLi.append(checkbox);
    list.append(newLi);
}
// btn?.addEventListener("click", function () {
//        alert(input.value);
//      });
// let mystery: unknown = 4; 
// const numChar = (mystery as string).length
