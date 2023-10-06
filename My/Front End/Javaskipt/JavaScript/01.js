
// Object
let InputEmail = document.querySelector(".email")
let teInputEmail2 = document.querySelector(".email-again")
let result = document.querySelector(".result")



//Functions



// todo: kolla om epostaddressen är invalid => "Invalid email address"



    // todo: kolla om textfälten är olika => "Not the same"




// Kolla om epost är invalid = invalid epost




  
function isValidEmailAddress(email) {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ) != null;
};









// kolla om textfälten är olika Not the same. 
  



