```javascript
const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        status.textContent = "Please fill in all required fields.";
        return;
    }

    status.textContent =
        "Thank you, " + name +
        "! Your form has been checked successfully.";

    // Demo only: no message is sent to the foundation.
});
```