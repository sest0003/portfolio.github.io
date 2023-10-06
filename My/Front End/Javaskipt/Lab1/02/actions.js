//object
const result = document.querySelector(".result")
//Detta skulle också funka:
// const result = document.getElementById("my-reslut")


//Function
function changeHtml(){
result.innerHTML = "What does the fox says"
 
}

function changeText(){
    result.innerText = "What does the <strong> fox </strong> says"   
    }
    
    function highlight() {
        result.classList.add("fat-borders")
        result.classList.add("big-orange-font")
    }
   
    function unHighlight() {
        result.classList.remove("fat-borders")
        result.classList.remove("big-orange-font")
    }

    function hidden() {
        result.classList.add("hidden") 
    }

   function foxy(){
    result.classList.add("fox") 
   }