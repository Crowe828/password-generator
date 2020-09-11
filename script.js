// Code that makes the "generate" button function
var generateBtn = document.querySelector("#generate")

// Array of lowercase letters
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// Array of UPPERCASE letters
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// Array of special characters
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "`", "{", "|", "}", "~"]

// Array of digits 0-9
var nums = [0,1,2,3,4,5,6,7,8,9]

// Empty array that will collect the arrays from each variable
var total = []

// Empty array that will display the final password
var pwd = []

// Function which runs the password generator
function generatePassword() {
  
  // Password cannot be less than 8 or exceed 128 characters total
  var numCount = prompt("Enter number of characters. Must be between 8 and 128 characters.");
  
  // If password is within 8 and 128 characters long, user may proceed
  if (numCount >= 8 && numCount <= 128) {

    // Let the user know how long their password will be
    alert("Your password will be " + numCount + " characters long.");
    
    // Does the user want to include lowercase letters in their password?
    var lowerPrompt = confirm("Would you like to include lowercase letters?");
    
    // If confirmed, lowercase letters will be in their password
    if (lowerPrompt) {
      total.push(...lower);
    }

    // Does the user want to include UPPERCASE letters in their password?
    var upperPrompt = confirm("Would you like to include UPPERCASE letters?");

    // If confirmed, UPPERCASE letters will be in their password
    if (upperPrompt) {
      total.push(...upper);
    }
    
    // Does the user want to include numbers in their password?
    var numPrompt  = confirm("Would you like to include numbers?");

    // If confirmed, numbers will be in their password
    if (numPrompt) {
      total.push(...nums);
    }

    // Does the user want to include special characters in their password?
    var specialPrompt = confirm("Would you like to include special characters?");
    
    // If confirmed, special characters will be in their password
    if (specialPrompt) {
      total.push(...special);
    }

    // Let the user know they have finished all of the prompts
    alert("Password complete!");
    
    // For loop which will take all of the items in the total array and randomly select however many characters that the user originally specified
    for (var i = 0; i < numCount; i++) {
      pwd.push(total[Math.floor(Math.random() * total.length)]);
    }
  }

  // User will be alerted to start over if they did not enter an acceptable length
  else {
    alert("Please start over and enter a correct password length.");
  }
  
  // Displays the final password
  return pwd.join("") 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);