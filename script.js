var generateBtn = document.querySelector("#generate");
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var capChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialChar = "!$^&*-=+_?";
var newPass = [];

var passLength =  parseInt(prompt("How many characters do you want in your password?"));

if (passLength < 6) {
  alert("All passwords must be between 6-100 characters.");
  prompt("How many characters do you want in your password?");
  
 }
 else if (passLength > 6 ); {

 }
var upperCase = confirm("Do you want uppercase characters?"); 
var lowerCase = confirm("Do you want lowercase characters?"); 
var numVal = confirm("How about some numbers?"); 
var specCase = confirm("Probably want special characters too right?");

    if (upperCase === true) {
      (newPass.push(capChar));
    }
    if (lowerCase === true) {
      (newPass.push(lowerChar));
    }
    if (numVal === true) {
      (newPass.push(numbers));
    }
    if (specCase === true) {
      (newPass.push(specialChar));
    }

var newPassWord = newPass.join("");

var password = "";

for (var i = 0; i < passLength; i++) {
  var finalPass = newPassWord.charAt(Math.floor(Math.random() * newPassWord.length));
  password = password.concat(finalPass);
  
  }
  
alert("Click to get your password!");
  
function generatePassword() {
  document.querySelector(".password").textContent = password;
}

generateBtn.addEventListener("click", generatePassword);