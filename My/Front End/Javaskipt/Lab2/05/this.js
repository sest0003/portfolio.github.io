const button1 = document.querySelector(".button1")
const button2 = document.querySelector(".button2")
const button3 = document.querySelector(".button3")

function changeBackground1() {

    button1.style.backgroundColor="#a7d31e"
}

function changeBackground2() {

    button2.style.backgroundColor="#a7d31e"
}

function changeBackground3() {

    button3.style.backgroundColor="#a7d31e"
}

// New version

function changeBackground(element) {

    element.style.backgroundColor="#a7d31e"

}