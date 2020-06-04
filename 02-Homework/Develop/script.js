// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function createPassword() {
  //Password length question
  var passwordLength = prompt("How many characters do you want for you password? Note: Must be between 8 to 128.") 
  if (passwordLength > 7 && (passwordLength < 129)) {
    console.log(passwordLength)
    


}






  } else {alert("Choose a length that is between 8 to 128 characters");
    return;
  }
 

  // Loop over every question object
  for (var i = 0; i < questions.length; i++) {
    // Display current question to user and ask OK/Cancel
    var answer = confirm(questions[i].q);

    // lowercase
    if (answer === true && questions[i].a === "true1") {
      console.log(detail1);
      alert("Sounds good!"); 
    };
    //uppercase
    if (answer === true && questions[i].a === "t") {
      console.log(detail2);
      alert("Sounds good!"); 
    };
    //symbols
    if (answer === true && questions[i].a === "t") {
      console.log(detail3);
      alert("Sounds good!"); 
    };
    //numbers
    if (answer === true && questions[i].a === "t") {
      console.log(detail4);
      alert("Sounds good!"); 
    };
  }

for (var i = 1; i <=passwordLength; i++) {

}

  //Fourteen total possibilities for 

