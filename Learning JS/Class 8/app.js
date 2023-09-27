// function abc(){
//     alert("Hello world")
// }

// for (var i = 1; i <= 10; i++){
//     abc()
// }


// function sum(a = 1,b = 2,c = 3){
//     return a + b + c
// }
// var t = +prompt("Enter Value 1")
// var s = +prompt("Enter Value 1")
// var f = +prompt("Enter Value 1")
// alert(sum(t,s,f))

// alert(sum(10))
// alert(sum())





// function sum(a = 2, b = 2, c = 2) {
//     var t = +prompt("Enter value 1")
//     var t1 = +prompt("Enter value 2")
//     var t2 = +prompt("Enter value 3")
//     if (t == "" && t1 == "" && t2 == "") {
//         return a + b + c
//     }
//     else {
//         return t + t1 + t2
//     }
// };
// alert(sum());

function calculation () {
    var num1 = +prompt("enter value 1");
    var op = prompt("enter operator");
    var num2 = +prompt("enter value 2");
    
    if (op === "+") {
        return num1 + num2;
    }
    else if (op === "-") {
        return num1 - num2;
    }
    else if (op === "*") {
        return num1 * num2;
    }
    else if (op === "/") {
        return num1 / num2;
    }
    else {
        return "Invalid operator";
    }
}

var result = calculation();
alert(result);

