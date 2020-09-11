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
  
var total = []

var pwd = []

// Function which runs the password generator
function generatePassword() {
  
  // Password cannot be less than 8 or exceed 128 characters total
  var numCount = prompt("Enter number of characters. Must be between 8 and 128 characters.");
  console.log(numCount); 

  // If password is within 8 and 128 characters long, user may proceed
  if (numCount >= 8 && numCount <= 128) {
    
    // Does the user want to include lowercase letters in their password?
    var lowerPrompt = confirm("Would you like to include lowercase letters?");
    
    if (lowerPrompt) {
      
      total.push(...lower);
      console.log(total);
    }

    // Does the user want to include UPPERCASE letters in their password?
    var upperPrompt = confirm("Would you like to include UPPERCASE letters?");

    if (upperPrompt) {
      
      total.push(...upper);
      console.log(total);
    }
    
    // Does the user want to include numbers in their password?
    var numPrompt  = confirm("Would you like to include numbers?");

    if (numPrompt) {
      
      total.push(...nums);
      console.log(total);
    }

    // Does the user want to include special characters in their password?
    var specialPrompt = confirm("Would you like to include special characters?");
    
    if (specialPrompt) {
      
      total.push(...special);
      console.log(total);
    }
    
    for (var i = 0; i < numCount; i++) {
      pwd.push(total[Math.floor(Math.random() * total.length)]);
    }

  }
  
  // Displays the password
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
