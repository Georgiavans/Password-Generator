// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

var userinput = window.prompt("How many characters would you like your password to have?")

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 
