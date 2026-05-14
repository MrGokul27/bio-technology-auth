// REGISTER
const registerForm = document.getElementById("registerForm");

if (registerForm) {
  const nameInput = document.getElementById("name");

  nameInput.addEventListener("keypress", function (e) {
    if (!/[a-zA-Z ]/.test(e.key)) e.preventDefault();
  });

  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = nameInput.value;
    const role = document.getElementById("role").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
      document.getElementById("passwordError").style.display = "block";
      return;
    }
    document.getElementById("passwordError").style.display = "none";

    localStorage.setItem(
      "loggedInUser",
      JSON.stringify({ name, role, email, password }),
    );

    window.location.href = "login.html";
  });
}

// LOGIN
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const role = document.getElementById("loginRole").value;
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const user = { name: email.split("@")[0], role, email, password };
    localStorage.setItem("loggedInUser", JSON.stringify(user));

    window.location.href = "dashboard.html";
  });
}

// PASSWORD TOGGLE
document.querySelectorAll(".auth-field__eye").forEach((eye) => {
  eye.addEventListener("click", function () {
    const input = document.getElementById(this.dataset.target);
    if (input.type === "password") {
      input.type = "text";
      this.classList.replace("bi-eye", "bi-eye-slash");
    } else {
      input.type = "password";
      this.classList.replace("bi-eye-slash", "bi-eye");
    }
  });
});
