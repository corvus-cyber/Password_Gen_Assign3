// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var lower= "abcdefghijklmnopqrstuvwxyz";
var upper= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num="012344556789";
var symbol="!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
function writePassword() {

 

  //Password length question

  
  var passwordLength = prompt("How many characters do you want for you password? Note: Must be between 8 to 128.") 
  if (passwordLength > 7 && (passwordLength < 129)) {
    console.log(passwordLength)
    //send it to password collection entry;

  } else {alert("Choose a length that is between 8 to 128 characters");
    return;
  }
 

  //Password Upper Case question
  var passwordUpper = confirm("Do you want upper case letters in your password?");
  if (passwordUpper) {
    console.log(upper);
    //send it to password collection entry
  };

  //Password Lower Case question
  var passwordLower = confirm("Do you want lower case letters in your password?");
  if (passwordLower) {
    console.log(lower);
    //send it to password collection entry
  };

  //Password Upper Case question
  var passwordSpecial = confirm("Do you want special characters in your password?");
  if (passwordSpecial) {
    console.log(symbol);
    //send it to password collection entry
  };

  //Password Number question
  var passwordNumber = confirm("Do you want numbers in your password?");
  if (passwordNumber) {
    console.log(num);
    //send it to password collection entry
  };


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  //
}

for (var i=0; i < 1; i++){
  var number = Math.floor(Math.random()*10);
  console.log(number)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
