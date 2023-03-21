// Array of special characters to be included in password
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numericChars = "0123456789";
const specialChars = "$@%&*()_+-=[]{}|;:,.<>?";

// Function to prompt user for password options
function generatePassword() {
  
  var passwordLength = prompt("Enter password length(8-128 characters):");
  if (passwordLength === null) {
    return; // User clicked cancel
  }

}



 // Validate at least one character type is selected
 if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
  alert("At least one character type must be selected.");
  return;
}



// Generate password using selected criteria
let password = "";
for (let i = 0; i < passwordLength; i++) {
  password += charSet.charAt(Math.floor(Math.random() * charSet.length));
}

// Display generated password
alert("Your password is: " + password);


// Add event listener to generate button
const generateButton = document.getElementById("generate-button");
generateButton.addEventListener("click", generatePassword);

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);