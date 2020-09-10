// Code that makes the "generate" button function
var generateBtn = document.querySelector("#generate");

// Array of lowercase letters
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// Array of UPPERCASE letters
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// Array of special characters
var spCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "`", "{", "|", "}", "~"]

// Array of digits 0-9
var nums = [0,1,2,3,4,5,6,7,8,9]

// Function which runs the password generator
function generatePassword() {
  
  // Password cannot be less than 8 or exceed 128 characters total
  var numPrompt = prompt("Enter number of characters. Must be between 8 and 128 characters.");

  // If password is within 8 and 128 characters long, you may proceed
  if (numPrompt >= 8 && numPrompt <= 128) {
    
    alert("Your password will be " + numPrompt + " characters long.");
    var lowerPrompt = confirm("Would you like to include lowercase letters?");
    
    if (lowerPrompt = true || false) {

      var upperPrompt = confirm("Would you like to include UPPERCASE letters?");
    }

    if (upperPrompt = true || false) {

      var spPrompt = confirm("Would you like to include special characters?");  
    }

    if (spPrompt = true || false) {
      
      alert("Password successfully generated!");
    }

    var lowerRand = lowerCase[Math.floor(Math.random() * lowerCase.length)];
    var upperRand = upperCase[Math.floor(Math.random() * upperCase.length)];
    var spRand = spCharacters[Math.floor(Math.random() * spCharacters.length)];
    var numRand = nums[Math.floor(Math.random() * nums.length)];
    
    var pwd = lowerRand.concat(upperRand, spRand, numRand);

  }

  // If you enter an incorrect length for the password you will receive this message
  else {
    alert("Please press ''Generate Password'' to start over.");
  }
  
  //return for the test var, will be changed.
  return (pwd);
}

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
