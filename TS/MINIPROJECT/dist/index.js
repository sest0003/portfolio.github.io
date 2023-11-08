"use strict";
console.log("hej");
console.log("hej");
var btn = document.getElementById("btn");
var input = document.getElementById("todoinput");
var form = document.querySelector("form");
var list = document.getElementById("todolist");
var todos = readTodos();
todos.forEach(createTodo);
function readTodos() {
    var todosJSON = localStorage.getItem("todos");
    if (todosJSON === null)
        return [];
    return JSON.parse(todosJSON);
}
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
form === null || form === void 0 ? void 0 : form.addEventListener("submit", function (e) {
    e.preventDefault();
    var newTodo = {
        text: input.value,
        completed: false,
    };
    createTodo(newTodo);
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
    saveTodos();
    input.value = "";
});
function createTodo(todo) {
    var newTodoText = input.value;
    var newLi = document.createElement("li");
    //Checkbox 
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", function () {
        todo.completed = checkbox.checked;
        saveTodos();
    });
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
