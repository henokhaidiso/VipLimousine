// Smooth scroll function
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// Get the form and response div
const form = document.getElementById("bookingForm");
const responseDiv = document.getElementById("formResponse");

// Your Google Apps Script Web App URL
const scriptURL = "https://script.google.com/macros/s/AKfycbyayxfLja3U-f7se4Rw057omuoV1MxBxyhzSPWStIW7AK_X-prvkYnaL4Oa8D1zbqLV-w/exec";

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent page reload

    if (responseDiv) {
      responseDiv.textContent = "⏳ Submitting...";
      responseDiv.style.color = "#333";
    }

    const formData = new FormData(form);
    const urlEncodedData = new URLSearchParams();
    formData.forEach((value, key) => urlEncodedData.append(key, value));

    // Send data (we don't care about response)
    fetch(scriptURL, {
      method: "POST",
      body: urlEncodedData,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      }
    });

    // Show success after 1.5 seconds
    setTimeout(() => {
      if (responseDiv) {
        responseDiv.textContent = "✅ Booking submitted successfully!";
        responseDiv.style.color = "green";
        form.reset();
        setTimeout(() => { responseDiv.textContent = ""; }, 3000);
      }
    }, 1500);
  });
} else {
  console.error("Booking form not found");
}

