var generateBtn = document.querySelector("#generate");

function generatePassword() {
    var length = 15;
    var randomChar = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    var returnValue = "";
    for (var i = 0, n = randomChar.length; i < length; ++i) {
        returnValue += randomChar.charAt(Math.floor(Math.random() * n));
    }
    return returnValue;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector(".password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);