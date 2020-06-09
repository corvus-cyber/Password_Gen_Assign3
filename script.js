//Variables for the password criteria
var Upper= "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
var Lower= "abcdefghijklmnopqrstuvwxyz";
var num= 1234567890;
var special= "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

//Variable for if the user decides not to choose acceptable criteria
var reject= "please try again"

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

//This function builds a randomized password based off of the User's choices 
function createPassword() {
  
  //Variable for password length, kept as undefined so that if the user presses the button again it will be reset
  passwordLength = undefined;
  //Empty variables that will be filled by the user's input
  var developPassword = "";
  var finalPassword = ""; 

  //Password length question
  var passwordLength = prompt("How many characters do you want for you password? Note: Must be between 8 to 128.") 
  if (passwordLength >= 8 && (passwordLength <= 128)) {
    console.log(passwordLength) } 
    else {alert("Choose a length that is between 8 to 128 characters");
    return reject;
  }
  //Question of whether the user wants to include uppercase letters in password
  uppercase = confirm("Do you want to include uppercase letters in your password?");
  if (uppercase) {
    developPassword += Upper;
    console.log(developPassword);
   }
    else {alert("Uppercase letters will not be included in your password");
  }
  
  //Question of whether the user wants to include lowercase letters in password
  lowercase = confirm("Do you want to include lowercase letters in your password?");
  if (lowercase) {
    developPassword += Lower;
    console.log(developPassword); 
  }
    else {alert("Lowercase letters will not be included in your password"); 
  }
  
  //Question of whether the user wants to include numbers in password
  numbers = confirm("Do you want to include numbers in your password?");
  if (numbers) {
    developPassword += num;
    console.log(developPassword);
  }
  else {alert("Numbers will not be included in your password");
  }

  //Question of whether the user wants to include special characters in password
  characters = confirm("Do you want to include special characters in your password?");
  if (characters) {
    developPassword += special;
    console.log(developPassword);
  }
  else {alert("Special characters will not be included in your password");
  }

  //This will build the password based off the criteria based off of the user's answers 
  for (var i = 1; i <=passwordLength; i++) {
    finalPassword += developPassword.charAt(Math.floor(Math.random() * developPassword.length));
    console.log(finalPassword);
  } 
  
  //If the user decided not to include any of the four criteria, it will result in them being alerted that they need to choose at least one option
  if (finalPassword==="") {
    alert("You need to select one of the character types in order for the password to work");
    return reject;
  }
  
  //If the user chose at at least one criteria, it will now populate the password in the box
  else {alert("Your password is ready!");
  return finalPassword; 
  }
    
}



    