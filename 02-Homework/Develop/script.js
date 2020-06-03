// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var length = 8 - 128;
    charAt= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz012344556789!@#$%^&*()~+="

  
  var passwordLength = prompt("How many characters do you want for you password? Note: Must be between 8 to 128.") 
  var passwordUpper = confirm("Do you want upper case letters in your password?");
  var passwordLower = confirm("Do you want lower case letters in your password?");
  var passwordSpecial = confirm("Do you want special characters in your password?");
  var passwordNumber = confirm("Do you want numbers in your password?");  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  //
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
