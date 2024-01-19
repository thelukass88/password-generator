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

let passwordLeng;
let specialChars; 
let numericChars;
let lowercaseChars;
let uppercaseChars;

// Function to prompt user for password options
const generateBtn = document.getElementById('generate');

function getPasswordOptions() {
  generateBtn.addEventListener('click', getPasswordOptions);
  passwordLeng = window.prompt("How long would you like your password to be?");
  if (isNaN(passwordLeng) === true){
    alert("This is not a number!")
    return 
  }
  if (passwordLeng < 8 || passwordLeng > 128){
    alert("Password must be betwee 8 and 128 characters!")
    return
  }

  specialChars = window.confirm("Would you like to use Special Characters?");
  numericChars = window.confirm("Woud you like to use Numbers?");
  lowercaseChars = window.confirm("Would you like to use Lower Case Characters?");
  uppercaseChars = window.confirm("Would you like to use Upper Case Characters?");
  if (specialChars === false && numericChars === false && lowercaseChars === false && upperCaseChars === false){
    alert("Must select at least one set of characters!")
    return
  }

  var passwordOptions = {
    passwordLeng: passwordLeng,
    specialChars: specialChars,
    numericChars: numericChars,
    lowercaseChars: lowercaseChars,
    uppercaseChars: uppercaseChars

  }
  return passwordOptions

}


console.log(getPasswordOptions());
console.log(passwordLeng);
console.log(specialChars);
console.log(numericChars);
console.log(lowercaseChars);
console.log(uppercaseChars);

let string = "this password has these options " + passwordLeng

console.log(string);


// Function for getting a random element from an array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}
console.log(getRandom());
// Add string 
// Use a for loop 
// Start with a letter (one array) 


// Function to generate password with user input
function generatePassword() {
var options = getPasswordOptions();
var selectedChars = []

}

// Get references to the #generate element


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);