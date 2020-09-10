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
  var numCount = prompt("Enter number of characters. Must be between 8 and 128 characters.");

  // If password is within 8 and 128 characters long, user may proceed
  if (numCount >= 8 && numCount <= 128) {
    
    // An alert letting you know how many characters you selected
    alert("Your password will be " + numCount + " characters long.");

    // Does the user want to include lowercase letters in their password?
    var lowerPrompt = confirm("Would you like to include lowercase letters?");
    
    //Whether the user selects ok or cancel it will move on to the next message
    if (lowerPrompt = true || false) {

      // Does the user want to include UPPERCASE letters in their password?
      var upperPrompt = confirm("Would you like to include UPPERCASE letters?");
    }

    //Whether the user selects ok or cancel it will move on to the next message
    if (upperPrompt = true || false) {

      // Does the user want to include numbers in their password?
      var numPrompt  = confirm("Would you like to include numbers?");
    }

    //Whether the user selects ok or cancel it will move on to the next message
    if (numPrompt = true || false) {

    // Does the user want to include special characters in their password?
    var spPrompt = confirm("Would you like to include special characters?");
    }

    //Whether the user selects ok or cancel it will move on to the next message
    if (spPrompt = true || false) {
      
      // Password was able to be generated
      alert("Password successfully generated!");
    }
    
    // Provides a random lowercase letter
    var lowerRand = lowerCase[Math.floor(Math.random() * lowerCase.length)];
        
    // Provides a random uppercase letter
    var upperRand = upperCase[Math.floor(Math.random() * upperCase.length)];
    
    // Provides a random special character
    var spRand = spCharacters[Math.floor(Math.random() * spCharacters.length)];
              
    // Provides a random number 0-9
    var numRand = nums[Math.floor(Math.random() * nums.length)];
        
    // Concat putting together all 4 arrays
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
