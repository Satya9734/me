const roles = ["MERN Stack Developer", "Full-Stack Engineer", "React Native Enthusiast"];
let i = 0;
let j = 0;
let isDeleting = false;
const speed = 120;
const typingElement = document.getElementById("typing");

function typeEffect() {
  const current = roles[i];

  if (isDeleting) {
    typingElement.textContent = current.substring(0, j--);
  } else {
    typingElement.textContent = current.substring(0, j++);
  }

  if (!isDeleting && j === current.length + 1) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % roles.length;
  }

  setTimeout(typeEffect, isDeleting ? speed / 2 : speed);
}

typeEffect();



  const scriptURL = "https://script.google.com/macros/s/AKfycby2Gty0Z5HSfRSyRVzc49oT7L72hC5NJ7FxeRklcMWApqpnIAnl8HtS3_aRlFVnUim3/exec"; 

document.querySelector(".contact-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;

  // Convert FormData to a simple object (JSON-style)
  const formData = new FormData(form);
  const data = {};
  formData.forEach((value, key) => data[key] = value);

  try {
    const response = await fetch(scriptURL, {
      method: "POST",
      body: formData // sending as FormData avoids CORS preflight
    });

    if (response.ok) {
      alert("✅ Message sent successfully!");
      form.reset();
    } else {
      alert("❌ Something went wrong: " + response.statusText);
    }
  } catch (err) {
    alert("❌ Error: " + err.message);
  }
});

