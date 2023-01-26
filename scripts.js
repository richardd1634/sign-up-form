const password = document.getElementById("password");
const confirm = document.getElementById("password-confirm");
const msg = document.getElementById("error-msg");

confirm.addEventListener("input", (event) => {
  if (password.value !== confirm.value) {
    msg.textContent = "* passwords do not match";
    password.classList.add("error");
    confirm.classList.add("error");
  } else {
    msg.textContent = "";
    password.classList.remove("error");
    confirm.classList.remove("error");
  }
});

function showError() {}
