//******************************************************* */

// var array=["C++","Java","JS"]
// var x=prompt("enter your cource: ")

// if(array.includes(x)){
//     console.log("found")
// }
// else
//     array.push(x)
//     console.log(array)

//************ */

// var array=["C++","Java","JS"]
// var x=prompt("enter your cource: ")

// var y =array.findIndex((ele)=> ele==x )
//     if(y !== -1 ){
//     console.log("found")
//     }
//     else{
//         array.push(x)//or by slice
//         console.log(array)
//     }
//****************** */


// var users=[
//     {
//         name:"farah",
//         job:"Software Engineer",
//         age:25,
        
//     },

//         {
//         name:"Mona",
//         job:" Engineer",
//         age:21,
        
//     },

//         {
//         name:"Nour",
//         job:"IT",
//         age:14,
        
//     }
// ]



// console.log(users)

// // users.findIndex((item)>= item.age==25){
// //     console.log(item.age)
// // }

// var i = users.findIndex((item)=>item.age == 25)


// console.log(i)

//*********************** */
//Bank task   //Session 13

var x = parseFloat(prompt("Enter number of users: "));


function addName(){

   var n=prompt("enter your name: ")
   var i=prompt("enter your id: ")
   var b=prompt("enter your balance: ")
    return {name: n, id: i , balance: b}
}

var data = []

for ( var i=0 ; i< x; i++){
    console.log("Enter data for user "+ (i+1))
    data.push(addName())

}

// console.log("All users: ", data) 

console.table(data);


function editBalanceId(Info) {

    var id=prompt("enter your id: ")
    var balance=prompt("enter your new balance: ")

    var found=false;
    for (var j=0; j<Info.length; j++){
        if(Info[j].id == id){
            Info[j].balance = balance
            console.log("Balance updated for user: ",Info[j])
            found =true
            break 
        }
    }

    if (!found){
        console.log("Id not found, error")
    }
    return Info
}



function deleteUserById(Info){

    var id=prompt("enter your id : ")
    var found=false
    for( var k=0 ; k<Info.length ; k++){
        if(Info[k].id == id){
            Info.splice(k,1)
            console.log("User of id " + id + " deleted")
            found=true
            break
        }
    }

    if (!found){
        console.log("Id not found, error")
    }
    return Info
}

data=editBalanceId(data)
console.log("Updated: ",data)

data = deleteUserById(data)
console.log("Deleted: ",data)
