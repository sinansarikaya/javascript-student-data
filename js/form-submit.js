//FORM SUBMIT
let score = 0 //localStorage.getItem("score") ? Number(localStorage.getItem('score')) : 0
let formDOM = document.querySelector("#userForm")
let scoreDOM = document.querySelector("#score")
formDOM.addEventListener("submit", formSubmit)
const alert = document.getElementById("alert")

const alertFunction = (title, message, type) => `
<div class="alert alert-${type} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`

function formSubmit(event){
    event.preventDefault()
    let scoreDOM = document.querySelector("#score")
    let userName = document.querySelector("#userName")

    if(scoreDOM.value && userName.value) {
        
        localStorage.setItem(userName.value, scoreDOM.value)
        
        addItem(scoreDOM.value, userName.value)
        scoreDOM.value = ""
        userName.value = ""

        alert.innerHTML = alertFunction(
            "Succes",
            "Data added",
            "success"
        )
    } else {
        alert.innerHTML = alertFunction(
            "Error",
            "You should fill the form",
            "danger"
        )
    }
}

let userList = document.querySelector("#userList")
function addItem(scoreDOM,userName) {
    
    let liDOM = document.createElement("li")
    liDOM.innerHTML = `
    ${userName} 
    <span class="badge bg-primary rounded-pill">${scoreDOM}</span>`
    liDOM.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center")
    userList.prepend(liDOM)
}
