function checkAll(button) {

    const mama = button.closest(".mama")

    for(let child of mama.children){

        if (child.tagName != "DIV") {
            child.checked = true
        }
    }
}