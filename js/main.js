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
