/*
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
*/

//Generates a random number
// function generateRandomNumber (maxValue) {
//   var randomNumber=Math.random();

//   var result=Math.floor(randomNumber * maxValue);

//   return result;
// }

//randomly chooses an element from an array
// function getRandomElement(array) {
//   var randomPosition=generateRandomNumber(array.length);
//   return array[randomPosition];
// }

// Assignment Code
/*-----------------------------------------------------------------Global Variable---------------------------------------------------------*/
var passwordCritera = {
  length: 128,
  numbers: "0123456789",
  spclChars: "! @ # $ % ^ & * ( ) _ + ~ ` | } { [ ] \ : ; ? > < , . / - =",
  alphabet:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
};

 

// 
// 
// 

var generateBtn = document.querySelector("#generate");

/*-------------------------------------------------------Password Generator Code---------------------------------------------------------*/
// function generateRandomNumber () {
//   var randomNumber=Math.random();

//   var result=Math.floor(randomNumber * 10);

//   return result;
// }
// console.log(generateRandomNumber());

// function getLowerCase (array) {
//   var randomLowerLetter=generateRandomNumber(passwordCritera.alphabet.length);
//   return array[randomLowerLetter];
// }

// console.log(getLowerCase());

// Generates our password based on our user's input
function generatePassword() {
  var lengthAnswer = prompt("Please make a choice of how many characters. Choose between 8-128.")
  
  if (lengthAnswer === true) {
    var lowercaseAnswer = confirm("Would you like to include lowercase letters?");
    
    if (lowercaseAnswer === true) {
      var uppercaseAnswer = confirm("Would you like to include uppercase letters?");
      
      if (uppercaseAnswer === true) {
        var numericAnswer = confirm("Would you like to include numbers as well?");
        
        if (numericAnswer === true) {
          var specialCharAnswer = confirm("Would you like to include special characters?");

          if (specialCharAnswer === true) {

          } else if (lengthAnswer && lowercaseAnswer && uppercaseAnswer && numericAnswer && specialCharAnswer === false) {
            
          }
        }
      }
    }
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

