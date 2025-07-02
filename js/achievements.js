document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".timeline-item");

  items.forEach((item, index) => {
    item.style.opacity = 0;
    item.style.transform = "translateY(30px)";
    setTimeout(() => {
      item.style.transition = "all 0.6s ease";
      item.style.opacity = 1;
      item.style.transform = "translateY(0)";
    }, index * 150);
  });
});
