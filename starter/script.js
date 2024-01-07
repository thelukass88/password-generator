// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// question: password length?
const button = document.querySelector('button');
// Add an event listener to the button that listens for the click event
button.addEventListener('click', function() {
  // Display the prompt when the button is clicked
  // question: would you like Lowercase?
  // question: would you like Uppercase
  // question: would you like Numeric
  // question: would you like Special characters ($@%&*, etc)
  const userInput = prompt('How long would you like your password to be? (min 8 max 128)');
  const lowercaseInput = confirm ("Would you like to use lowercase?")
  const uppercaseInput = confirm ("Would you like to use uppercase?")
  const numbersInput = confirm ("Would you like to use numbers?")
  const specialCharactersInput = confirm ("Would you like to use special characters?")

  console.log(userInput);
  console.log(lowercaseInput);
  console.log(uppercaseInput);
  console.log(numbersInput);
  console.log(specialCharactersInput);
});

// Function to prompt user for password options
function getPasswordOptions() {
  var passwordLength = userInput


}

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