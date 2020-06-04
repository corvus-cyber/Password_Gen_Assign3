var developPassword= "";
var finalPassword= "";
var Upper= "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
var Lower= "abcdefghijklmnopqrstuvwxyz";
var num= 1234567890;
var special= "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = createPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function createPassword() {
  //Password length question
  var passwordLength = prompt("How many characters do you want for you password? Note: Must be between 8 to 128.") 
  if (passwordLength > 7 && (passwordLength < 129)) {
    console.log(passwordLength) } 
    else {alert("Choose a length that is between 8 to 128 characters");
    return;
  }
  //
  uppercase = confirm("Do you want to include uppercase letters in your password?");
  if (uppercase) {
    developPassword += Upper;
    console.log(developPassword) }
    else {alert("Uppercase letters will not be included in your password")
  }

  lowercase = confirm("Do you want to include lowercase letters in your password?");
  if (lowercase) {
    developPassword += Lower;
    console.log(developPassword) }
    else {alert("Lowercase letters will not be included in your password") 
  }
    
  numbers = confirm("Do you want to include numbers in your password?");
  if (numbers) {
    developPassword += num;
    console.log(developPassword)}
  else {alert("Numbers will not be included in your password")
  }

  characters = confirm("Do you want to include special characters in your password?");
  if (characters) {
    developPassword += special;
    console.log(developPassword)}
  else {alert("Special characters will not be included in your password")
  }


  for (var i = 1; i <=passwordLength; i++) {
    finalPassword += developPassword.charAt(Math.floor(Math.random() * developPassword.length));
    console.log(finalPassword)
    alert("Your password is ready")
  }
  return finalPassword;


}
    