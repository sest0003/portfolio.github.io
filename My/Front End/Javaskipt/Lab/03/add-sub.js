// todo: insert code here


const result = document.querySelector(".result")

let number = 0

function addOne() {
    // number = number + 1
    // number += 1
    number++
    result.innerHTML = number
}

function substractOne() {
    number--
    result.innerHTML = number
}

function addTen(){
    number += 10
    result.innerHTML = number
}

function substractTen(){
    number -= 10
    result.innerHTML = number
}

function reset(){
    number = 1337
    result.innerHTML = number
}