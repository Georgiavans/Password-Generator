// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max = min 
    min = 0
  }

var rand = Math.random()
  return Math.floor(min*(1 - rand) + (rand*max))
}

function getRandomItem(list) {
  return list[randomInt(0, list.length -1)]
}

function generatePassword(thisIsPasswordLength) {

  var userInput = window.prompt("How many characters would you like your password to have?")
  var passwordLength = parseInt(userInput);

  if (isNaN(passwordLength)) {
    window.alert("that character is not a number")
    return
  };

  if (passwordLength < 8 || passwordLength > 128) {
  window.alert("password length must be greater than 8 characters and no larger than 128 characters.") 
  return
  };

var userWantsNumbers = window.confirm("Do you want to include numbers in your password?")
var userWantsSymbols = window.confirm("Do you want to include symbols in your password?")
var userWantsLowercase = window.confirm("Do you want to include lowercase letters in your password?")
var userWantsUppercase = window.confirm("Do you want to include uppercase letters in your password?")

var numberList = ["0", "1", "2", "3", "4", "5", "6", "7","8", "9"]
var symbolList = [ "!", "@", "#", "$", "%", "^", "&", "*"]
var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
 

var optionsAvailable = []

if (userWantsNumbers === true) {
optionsAvailable.push(numberList)
}

if (userWantsSymbols === true){
optionsAvailable.push(symbolList)
}

if (userWantsLowercase === true){
optionsAvailable.push(lowercaseList)
}

if (userWantsUppercase === true) {
optionsAvailable.push(uppercaseList)
}


var generatedPassword = ""

  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(optionsAvailable)
    var randomchar = getRandomItem(randomList)
    generatedPassword += randomchar
}
return generatedPassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 
