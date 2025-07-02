document.addEventListener("DOMContentLoaded", function () {
  const element = document.querySelector(".typed-name");
  const text = "Your Name";
  let index = 0;

  function typeEffect() {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(typeEffect, 100);
    }
  }

  typeEffect();
});
