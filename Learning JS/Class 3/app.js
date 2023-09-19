// Chap 10

// 6 prompt 
// total 

var userName = prompt("Enter Your Name:");
var sub1 = +prompt("Enter urdu marks:");
var sub2 = +prompt("Enter eng marks:");
var sub3 = +prompt("Enter maths marks:");
var sub4 = +prompt("Enter Sst marks:");
var sub5 = +prompt("Enter islamiyat marks:");

var totalNumbers = sub1 + sub2 + sub3 + sub4 + sub5;
var percentage = (totalNumbers / 500) * 100;

document.write("<center> Your percentage is " + percentage + " % <br><br></center>");

document.write("<center><table border=1px>" + "<tr>" + "<th> Name </th>" + "<th> Urdu Marks</th>" + "<th>Eng marks</th>" + "<th>maths marks</th>" + "<th>sst marks</th>" + "<th>Islamiyat Marks</th>" + "<th>Total Marks</th>" + "</tr>" + "<td>" + userName + "</td>" + "<td>" + sub1 + "</td>" + "<td>" + sub2 + "</td>" + "<td>" + sub3 + "</td>" + "<td>" + sub4 + "</td>" + "<td>" + sub5 + "</td>" + "<td>" + totalNumbers + "</td>" + "</tr>" + "</table><br></center>");


if (percentage >= 80 && percentage < 101) {
    document.write("<center>Your Grade is A+</center>") 
}
else if (percentage > 100){
    document.write("<center>Invalid Percentage</center>")
}
else if (percentage >= 70 && percentage < 80){
    document.write("<center>Your grade is A</center>")
}
else if (percentage >= 60 && percentage < 70){
    document.write("<center>Your grade is B</center>")
}
else if (percentage >= 50 && percentage < 60){
    document.write("<center>Your grade is C</center>")
}
else if (percentage >= 40 && percentage < 50){
    document.write("<center>Your grade is D</center>")
}
else if (percentage >= 30 && percentage < 40){
    document.write("<center>Your grade is E</center>")
}
else if (percentage < 30){
    document.write("<center>Sorry! You are faild</center>")
}
else {
    document.write ("<center>You are failed</center>")
};


// console.log ("Hello world")

// var num1 = +prompt("Enter value 1");
// var num2 = +prompt("Enter value 2");
// var op = prompt("Enter Operator");

// if (op == "+") {
//     document.write(num1 + num2)
// }
// else if (op == "-") {
//     document.write(num1 - num2)
// } else if (op == "*") {
//     document.write(num1 * num2)
// } else if (op == "/") {
//     document.write(num1 / num2)
// }
// else if (op == "%") {
//     document.write(num1 % num2)
// }
// else {
//     document.write("Invalid Operator")
// };
