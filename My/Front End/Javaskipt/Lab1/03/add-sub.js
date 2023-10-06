// todo: insert code here

const result = document.querySelector(".result")

let num = 0

function addOne(){
    num++
    oddNum()
}

function removeOne(){
    num--
    oddNum()
}


function addTen(){
    num += 10 
    oddNum()
 }

function removeTen(){
   num -= 10 
   oddNum()
}

function reset(){
num = 1337
oddNum()
}

function oddNum(){
    result.innerHTML = num
     
    if (num % 2 !==  0) {
        result.classList.add("blue-dots")
    } 
    
    else {
        result.classList.remove("blue-dots")
    }
    


}