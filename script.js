function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

const bookingForm = document.getElementById("bookingForm");
const bookingMessage = document.getElementById("bookingMessage");

if (bookingForm && bookingMessage) {
  bookingForm.addEventListener("submit", function (e) {
    e.preventDefault();

    bookingMessage.textContent =
      "Thank you! Your booking request has been submitted. We will contact you shortly to confirm your ride.";
    bookingMessage.style.color = "#1b6b3a";

    bookingForm.reset();
  });
}
