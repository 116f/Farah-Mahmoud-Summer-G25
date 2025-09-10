
// ********************
// function changeImg(){
//     var img=document.querySelector("#img")
//     console.log(img.src)
//     // img.src="images/b.png"
//     if(img.src.includes("b.png")){
//         img.src = "images/c.png";
//     } else {
//         img.src = "images/b.png";
//     }
// }

// **************


// var userForm =document.getElementById('userForm')
// var users=[]

// userForm.addEventListener("submit",(e)=>{
//     e.preventDefault()
//     console.log(e)
//     console.log(e.target.elements.userName.value)
//     console.log(e.target.elements.userEmail.value)

//     var user={
//         name:e.target.elements.userName.value,
//         email:e.target.elements.userEmail.value
//     }

//     users.push(user)
//     console.log(users)
// })


// *****************
// https://www.w3schools.com/jsref/dom_obj_event.asp


var userForm = document.getElementById('userForm')
var userName = document.getElementById('userName')
var userEmail = document.getElementById('userEmail')
var users = []
var editIndex = null;
var submitBtn = userForm.querySelector("button")

userForm.addEventListener("submit", (e) => {
    e.preventDefault()

    if (editIndex === null) {
   
        var user = {
            name: userName.value,
            email: userEmail.value
        }
        users.push(user)
    } else {
    
        users[editIndex].name = userName.value
        users[editIndex].email = userEmail.value
        editIndex = null
        submitBtn.textContent = "Add User"; 
        submitBtn.classList.remove("btn-warning")
        submitBtn.classList.add("btn-primary")
    }


    userName.value = ""
    userEmail.value = ""

    showUser()
})


var showUser = () => {
    var tBody = document.getElementById('tableBody')
    tBody.innerText = ""

    users.forEach((item, i) => {
        var tr = document.createElement("tr")

        var td1 = document.createElement('td')
        td1.innerText = item.name

        var td2 = document.createElement('td')
        td2.innerText = item.email

        var td3 = document.createElement('td')

        var editBtn = document.createElement('button')
        editBtn.innerText = "Edit user"
        editBtn.classList.add('btn', 'btn-success', 'btn-sm')
        editBtn.addEventListener('click', () => {
            userName.value = item.name
            userEmail.value = item.email
            editIndex = i
            submitBtn.textContent = "Update User"
            submitBtn.classList.remove("btn-primary")
            submitBtn.classList.add("btn-warning")
        })

        var deleteBtn = document.createElement('button')
        deleteBtn.innerText = "Remove user"
        deleteBtn.classList.add('btn', 'btn-danger', 'btn-sm', "ms-2")
        deleteBtn.addEventListener('click', () => {
            users.splice(i, 1) 
            showUser()
        })

        td3.append(editBtn, deleteBtn)
        tr.append(td1, td2, td3)
        tBody.append(tr)
    })
}
