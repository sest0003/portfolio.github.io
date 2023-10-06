// todo: insert code here

// Obeject

const text1 = document.querySelector(".text1")
const text2 = document.querySelector(".text2")
const result = document.querySelector(".result")


//Function

function render() {
    console.log("Render is called")
    console.log("The value of the first textbox is", text1.value)

    text2.value = text1.value

    const nChar = text1.value.length
   
    if (nChar === 0) {
        result.innerHTML = "No Characters"
    }

    else if (nChar === 1) {
        result.innerHTML = nChar + " character"
    }

    else {
        result.innerHTML = nChar + " characters"
    }
}

