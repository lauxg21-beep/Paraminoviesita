function openLetter() {
  document.querySelector(".flap").style.transform = "rotateX(180deg)";
  document.querySelector(".letter").style.opacity = "1";
  document.querySelector(".letter").style.transform = "translateY(0)";
  document.querySelector(".open-btn").style.display = "none";
}

function closeLetter() {
  document.querySelector(".flap").style.transform = "rotateX(0deg)";
  document.querySelector(".letter").style.opacity = "0";
  document.querySelector(".letter").style.transform = "translateY(40px)";
  document.querySelector(".open-btn").style.display = "block";
}
