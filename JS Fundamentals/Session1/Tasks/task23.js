//Task 2.3

var userName = prompt("Name: ");
var isNameVaild = /\D/.test(userName);

var phoneNum = prompt("Phone number (8 digits): ");
var isPhoneVaild = /^[0-9]{8}$/.test(phoneNum);

var mobileNum = prompt("Mobile Number (010, 012, 011) :");
var isMobileVaild = /^((010)|(012)|(011))[0-9]{8}/.test(mobileNum);

var email = prompt("Email: ");
var isEmailVaild = /\w+@[A-Za-z]+.com/.test(email);

//Check color if it's out of [Red, Blue, Green] Defult "Black"
var colors = colorsCheck();

document.writeln("<h1>Entering user info</h1> <hr>");

checkVaildtion(isNameVaild, "Welcome dear guest", userName);
checkVaildtion(isPhoneVaild, "your telephone number is ", phoneNum);
checkVaildtion(isMobileVaild, "your mobile number is", mobileNum);
checkVaildtion(isEmailVaild, "your email address is ", email);

//Get Today Date
const timeElapsed = Date.now();
const today = new Date(timeElapsed);

document.writeln(
  `<span style="color:${colors};font-size:28px;" >Today is </span> <span style="font-size:28px">${today.toDateString()}</span>`
);

// Check the value it it's a vaild input of not 
function checkVaildtion(vaildation, msg, input) {
  if (vaildation) {
    document.writeln(
      `<span style="color:${colors}; font-size:28px">${msg} </span> <span style="font-size:28px">${input}</span> <br>`
    );
  } else {
    document.writeln(
      `<span style="color:${colors}; font-size:28px">${msg} </span> <span style="font-size:28px"> Invaild</span> <br>`
    );
  }
}

//Check Color Vaildation
function colorsCheck() {
  var color = prompt("Choose a color: Red, Blue, Green").toLowerCase();
  if (color === "red" || color === "blue" || color === "green") {
    return color;
  } else {
    return "black";
  }
}
