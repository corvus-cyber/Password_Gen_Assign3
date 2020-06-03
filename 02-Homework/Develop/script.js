// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var lower= "abcdefghijklmnopqrstuvwxyz";
  var upper= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var num="012344556789";
  var symbol="!@#$%^&*()~+=.-";
  var passwordLength = prompt("How many characters do you want for you password? Note: Must be between 8 to 128.") 
  if (passwordLength > 7 && (passwordLength < 129) & (! passwordLength)) {
    console.log(PasswordLength);
  } else {alert("Choose a length that is between 8 to 128 characters")};
  var passwordUpper = confirm("Do you want upper case letters in your password?");
  var passwordLower = confirm("Do you want lower case letters in your password?");
  var passwordSpecial = confirm("Do you want special characters in your password?");
  var passwordNumber = confirm("Do you want numbers in your password?");

        if (passwordUpper) {
          console.log(upper)
        };
        if (passwordLower) {
          console.log(lower)
        };
        if (passwordSpecial) {
          console.log(symbol)
        };
        if (passwordNumber) {
          console.log(num)
        };



  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  //
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)