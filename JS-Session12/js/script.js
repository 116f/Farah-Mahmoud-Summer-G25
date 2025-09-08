// //******************************** */

// var degree=prompt("enter your degree: ")
// console.log(degree)

//     if (degree ==null || degree=="") console.log("Please enter your degree: ")
//         else {
//                 if(degree>100) console.log("Please enter degree (0-100)")
//                                 if(degree >=80 && degree <100) console.log("Your degree is :A")

//                                 else if(degree >=70 && degree <80) console.log("Your degree is :B")

//                                 else if(degree >=50 && degree <70) console.log("Your degree is :C")
    
//         }

// // ********************************
// // for loop

// var myName="Farah"

// for (var i=0 ; i<5 ; i++ ){
//     var n=prompt("enter your name")
//     if (n==myName)
//         break
// console.log("Try again")           
// }


// //****************************************** */

// // continue num less than break number
// // check are the ALL numbers existing

// function looping(startNum,breakNum,continNum,endNum){
 
//     if (startNum == undefined || breakNum == undefined || continNum == undefined || endNum == undefined) {
//     console.log("ُEnter 4 values");
//    }
//     else{
//         for (var i=startNum; i<=endNum; i++){
//                  if(i == continNum) 
//             continue
//         else if (i==breakNum) 
//             break
            
//             console.log(i)
//         }
        
   

//     }
  
// }

// looping(0,6,3,10)

// looping(0,4,3,20)


//******************************************************* */

var array=["C++","Java","JS"]
var x=prompt("enter your cource: ")

if(array.includes(x)){
    console.log("found")
}
else
    array.push(x)
    console.log(array)


