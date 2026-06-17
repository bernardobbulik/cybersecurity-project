function swapMode() {
  document.body.classList.toggle("dark-mode");

  let modeIcon = document.getElementById("modeIcon");

  if (document.body.classList.contains("dark-mode")) {
    modeIcon.src = "./assets/icons/sun.svg";
    modeIcon.alt = "Light mode";
  } else {
    modeIcon.src = "./assets/icons/moon.svg";
    modeIcon.alt = "Dark mode";
  }
}

const defaultFontSize = 16;
const minFontSize = 12;
const maxFontSize = 24;
let currentFontSize = defaultFontSize;

function toggleAccessibilityMenu() {
  const accessibilityMenu = document.querySelector(".accessibility-menu");

  if (accessibilityMenu) {
    accessibilityMenu.classList.toggle("show");
  }
}

function applyFontSize() {
  document.body.style.fontSize = `${currentFontSize}px`;
}

function increaseFontSize() {
  if (currentFontSize < maxFontSize) {
    currentFontSize += 2;
    applyFontSize();
  }
}

function resetFontSize() {
  currentFontSize = defaultFontSize;
  applyFontSize();
}

function decreaseFontSize() {
  if (currentFontSize > minFontSize) {
    currentFontSize -= 2;
    applyFontSize();
  }
}
