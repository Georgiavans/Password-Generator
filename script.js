// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

var userInput = window.prompt("How many characters would you like your password to have?")
var passwordLength = parseInt("")

if (isNaN(passwordLength)) {
window.alert("that character is not a number")
return
}

if (passwordLength < 8 || passwordLength > 128) {
 window.alert("password length must be greater than 8 characters and no larger than 128 characters.") 
 return
}

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 
