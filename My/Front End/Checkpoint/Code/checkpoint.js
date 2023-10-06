
const allGnomes = [
    { file: "garden.jpg", description: "garden gnome", price: 400 },
    { file: "lady.jpg", description: "lady gnome", price: 120 },
    { file: "laugh.jpg", description: "laughing gnome", price: 300 },
    { file: "military.jpg", description: "military gnome", price: 240 },
    { file: "red-hat.jpg", description: "red hat", price: 10 },
    { file: "summer.jpg", description: "double summer", price: 80 }
]



const text1 = document.querySelector(".food")
const result = document.querySelector(".likes")


// level 2
const resultArea = document.querySelector(".gnomeResult")
resultArea.innerHTML = allGnomes

const searchBox = document.getElementById(".searchtext").value.toUpperCase();




//Level 1
function inputChanged(){


    const nOfLetters = text1.value.length
   

    if (nOfLetters === 0) {
        result.classList.remove("frame")
        result.innerHTML = "The gnome doesn´t like anything"
    }
   
     else if (nOfLetters => 1) {
        result.innerHTML = "The gnome likes " + text1.value
        result.classList.add("frame")
        
    }
}


// level 2
function showAll() {

}

function searchGnomes() {

}


