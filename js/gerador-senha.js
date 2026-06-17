const resultText = document.getElementById("senhaText");
let senha;
let pwrLenght = 10;

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getPassword() {
  // Tabela ASCII opera do 32 ao 126
  let escapePassword = "";
  for (let i = 0; i < pwrLenght; i++) {
    let charCode = getRandomNumber(32, 126);
    escapePassword += String.fromCharCode(charCode);
  }
  resultText.innerHTML = escapePassword;
}