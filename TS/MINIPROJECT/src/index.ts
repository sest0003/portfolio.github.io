

interface Todo {text: string, completed: boolean;}

const btn = document.getElementById("btn")!
const input = document.getElementById("todoinput") as HTMLInputElement;
const form = document.querySelector("form");
const list = document.getElementById("todolist")!;

const todos: Todo[] = readTodos();
todos.forEach(createTodo)


function readTodos() {
const todosJSON = localStorage.getItem("todos");
if (todosJSON === null) return [];
return JSON.parse(todosJSON);
}

function saveTodos () {
    localStorage.setItem("todos", JSON.stringify(todos));
}

//Submit funtion
form?.addEventListener("submit", function(e) {
    
    e.preventDefault()

    const newTodo: Todo = {
        text: input.value,
        completed: false, 
    }

    createTodo(newTodo);
    //Add todo to array
    todos.push(newTodo);
    //Store todo in localdatabase
    localStorage.setItem("todos", JSON.stringify(todos));

    saveTodos();
    input.value = "";
 

})

function createTodo (todo: Todo) {
    const newTodoText = input.value;
    const newLi = document.createElement("li");
    //Checkbox 
    const checkbox = document.createElement("input");
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