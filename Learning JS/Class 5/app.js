// var arr = [1,2,3,4,5,6,7,8,9,10,"Ahmed"]

// for (var i = 0; i < arr.length; i++){
//     document.write(arr[i], "<br>")
// }

// var arr2 = arr.slice(0)
// console.log(arr2)


// for( i = 1; i <= 10; i++){
//     document.write( i,") Hello World <br>")
// }


// for(var i = 10; i >= 0; i--){
//     document.write( i,") Hello World <br>")
// }

var userInput = +prompt("Enter Value")
var userInput2 = +prompt("Enter number of your choice")

for (var i = 1; i <= userInput2; i++){
    document.write(userInput + " x " + i + " = " + userInput*i + "<br>")
}
