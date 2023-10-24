const input = document.querySelector(".input");
const button = document.querySelector(".button");
const form = document.querySelector(".form");
const add = document.querySelector(".add")

let todoList = []
function renderElement(text) {
    let div = document.createElement("div");

    let checkbox = document.createElement("input")
    checkbox.setAttribute("type" , "checkbox");

    let p = document.createElement("p");

    p.textContent = text

    div.appendChild(checkbox);
    div.appendChild(p)

    add.appendChild(div)


}
function clearInput() {
    input.value = ""
}

function setToStorage(item) {
    todoList.push(item)
    let obj = JSON.stringify(todoList);
    localStorage.setItem("list" , obj)
}
function loadFromStorage() {
    
}


function events() {
    form.addEventListener("submit" , (e) => {
        let val = input.value
        e.preventDefault()

        if(input.value =="") {
            alert("hoyyyyyyyyyyyyy")
        }else {
            setToStorage(val)
            renderElement(val)
            clearInput()
        }

    })
}
events()