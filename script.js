
emailjs.init({
  publicKey: "Q1RttjkOdzb_5Z8d4"
});

const form = document.getElementById("guestbookForm");
const status = document.getElementById("status");
const button = document.getElementById("submitButton");

form.addEventListener("submit", async function(event) {
  event.preventDefault();

  const name = document.getElementById("guestName").value.trim();
  const message = document.getElementById("guestMessage").value.trim();

  if (!name || !message) {
    status.textContent = "PLEASE FILL OUT EVERYTHING!! ♡";
    return;
  }

  button.disabled = true;
  button.textContent = "SENDING... ♡";
  status.textContent = "Sending your message...";

  try {
    await emailjs.send(
      "service_92nq8gb",
      "template_6wmw0zg",
      {
        guest_name: name,
        guest_message: message
      }
    );

    status.textContent = "THANK YOU FOR SIGNING MY GUESTBOOK!! ♡";
    form.reset();

  } catch (error) {
    console.error("EmailJS Error:", error);

    status.textContent =
      "ERROR: " + (error.text || error.message || "Unknown error");

    alert(
      "EmailJS Error:\n" +
      (error.text || error.message || JSON.stringify(error))
    );

  } finally {
    button.disabled = false;
    button.textContent = "SIGN MY GUESTBOOK!!";
  }
});
