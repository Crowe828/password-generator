// Assignment Code

// Special characters include: space"!#$%&'()*+,-./:;<=>?@[\]^_`{|}~
// May have to use arrays and push

// Application prompts user for password length and if they would like to include lowercased, uppercased, numeric, and special characters
// Application generates valid password based on provided options


// Code that makes the "generate" button function
var generateBtn = document.querySelector("#generate");

// Array of lowercase letters
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// Array of UPPERCASE letters
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// Array for special digits
var spCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "`", "{", "|", "}", "~"]

function generatePassword() {
  
  // Password cannot be less than 8 or exceed 128 characters total
  var numPrompt = prompt("Enter number of characters. Must be between 8 and 128 characters.");

  // If password is within 8 and 128 characters long, you may proceed
  if (numPrompt >= 8 && numPrompt <= 128) {
    
    alert("Your password will be " + numPrompt + " characters long.");
    var lowerPrompt = confirm("Would you like to include lowercase letters?");
    
    if (lowerPrompt = true) {

      Math.floor(Math.random(lowerCase) * 26);
      var upperPrompt = confirm("Would you like to include UPPERCASE letters?");
    }

    if (upperPrompt = true) {

      Math.floor(Math.random(upperCase) * 26);
      var spPrompt = confirm("Would you like to include special characters?");  
    }

    if (spPrompt = true) {

      Math.floor(Math.random(spCharacters) * 27);    
    }
     


  }

  // If password is not the correct length you will receive this message
  else {
    alert("Please press ''Generate Password'' or refresh the page to start over.");
  }


  // Set it so that only numbers entered are valid between 8 and 128, including both.

  // Set a prompt asking if they would like lowercased letters in their password

  // Set a prompt asking if they would like uppercased letters in their password

  // Set a prompt asking if they would like numbers in their password

  // Set a prompt asking if they would like special characters in their password (and show what the special characters are)

  // Prompts must each continue to the next prompt regardless of choice

  // The code must take all of these variables and create a random password, meeting all of these requirements. Only whole numbers.

  // set a "return" of the final output that will display the newly generated password 

  //return for the test var, will be changed.
  return (numPrompt);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
