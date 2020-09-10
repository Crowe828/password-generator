// Assignment Code

// Special characters include: space"!#$%&'()*+,-./:;<=>?@[\]^_`{|}~

// Application prompts user for password length and if they would like to include lowercased, uppercased, numeric, and special characters.
// Application generates valid password based on provided options.
// Application requires minimum password length of 8 characters.
// Application requires maximum password length of 128 characters.
// Application is free of console errors.

// May have to use arrays and push

var generateBtn = document.querySelector("#generate");

// Write variables here

function generatePassword() {

  // Logic will go here
  

  var testAlert = prompt("Enter number of characters")

  return testAlert
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
