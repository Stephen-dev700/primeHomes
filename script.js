document.addEventListener("DOMContentLoaded", function () {

  console.log("JS is connected");

  const reveals = document.querySelectorAll(".reveal");

  function revealSections() {
    const windowHeight = window.innerHeight;

    reveals.forEach(function (section) {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < windowHeight - 100) {
        section.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", revealSections);

  // Run once on load
  revealSections();

});


const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", async function (e) {
  e.preventDefault(); // stop redirect

  const data = new FormData(form);

  try {
    const response = await fetch("https://formspree.io/f/xaqlavww", {
      method: "POST",
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      status.innerHTML = "✅ Message sent successfully!";
      status.style.color = "#4CAF50";
      form.reset();
    } else {
      status.innerHTML = "❌ Oops! Something went wrong.";
      status.style.color = "red";
    }

  } catch (error) {
    status.innerHTML = "❌ Network error. Try again.";
    status.style.color = "red";
  }
});