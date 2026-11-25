const form = document.getElementById("login-form");
const message = document.getElementById("message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = form.email.value.trim();
  const password = form.password.value;

  message.hidden = false;
  message.textContent =
    email && password
      ? `Signed in as ${email} (demo only).`
      : "Enter an emaiccl and password.";
});
