let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");
let copyIcon = document.getElementById("copyIcon");

// Showing input slider value
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener("input", () => {
  sliderValue.textContent = inputSlider.value;
});

genBtn.addEventListener("click", () => {
  passBox.value = generatePassword();
});

let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let allNumbers = "0123456789";
let allSymbols = "~!@#$%^&*";

//Function to generate Password
function generatePassword() {
  let genPassword = "";
  let allChars = "";

  // if (lowercase.checked){
  //   allChars += lowerChars;
  // }
  // else if (uppercase.checked){
  //   allChars += upperChars;
  // }
  // else if (numbers.checked){
  //   allChars += allNumbers;
  // }
  // else if (symbols.checked){
  //   allChars += allSymbols;
  // }
  // else{
  //   allChars += "";
  // }

  allChars += lowercase.checked ? lowerChars : "";
  allChars += uppercase.checked ? upperChars : "";
  allChars += numbers.checked ? allNumbers : "";
  allChars += symbols.checked ? allSymbols : "";

  let i = 1;
  while (i <= inputSlider.value) {
    genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
    i++;
  }

  return genPassword;
}

//copy text code
copyIcon.addEventListener("click", function () {
  navigator.clipboard.writeText(passBox.value);

  copyIcon.innerHTML = "check";
  copyIcon.title = "Password Copied";
  
  setTimeout(function(){
    copyIcon.innerHTML = "content_copy";
    copyIcon.title = "";

  },2000)
});

//enter button

passBox.addEventListener("keypress", function () {
  generatePassword();
});
