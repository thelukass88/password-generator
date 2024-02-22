var passwordLeng = 8;
var userChoice = [];



// Array of special characters to be included in password
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', 
  ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q',
  'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
  'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// Function to prompt user for password options
function getPasswordOptions() {
//resets array
  userChoice = [];
//Deals with password length and alerts if numbers are not entered, or parameters not met
  passwordLeng = parseInt(prompt("How long would you like your password to be? (Must be between 8-128 characters)"));
  if (isNaN(passwordLeng) === true){
    alert("This is not a number!")
    return 
  }
  if (passwordLeng < 8 || passwordLeng > 128){
    alert("Password must be betwee 8 and 128 characters!")
    return
  }
//If statements for concactinating character choices
  if (confirm("Would you like to use special characters?")) {
      userChoice = userChoice.concat(specialCharacters);
  }
  if (confirm("Would you like to use numeric characters?")) {
    userChoice = userChoice.concat(numericCharacters);
  }
  if (confirm("Would you like to use lowercase characters?")) {
  userChoice = userChoice.concat(lowerCasedCharacters);
  }
  if (confirm("Would you like to use uppercasecharacters?")) {
  userChoice = userChoice.concat(upperCasedCharacters);
  }
  return true;



}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

  var passwordRand = "";
  for(var i = 0; i < passwordLeng; i++) {
    var randomiser = Math.floor(Math.random() * userChoice.length);
    passwordRand = passwordRand + userChoice[randomiser];
  }
  return passwordRand;

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}


