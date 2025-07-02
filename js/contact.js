document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !subject || !message) {
    alert("Please fill out all fields.");
    return;
  }

  // Simulate submission (replace with real email backend if needed)
  alert("Thanks for contacting me! I'll get back to you soon.");
  document.getElementById("contact-form").reset();
});
