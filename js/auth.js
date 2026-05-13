// REGISTER

const registerForm = document.getElementById("registerForm");

if (registerForm) {
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const role = document.getElementById("role").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = users.find((user) => user.email === email);

    if (existingUser) {
      alert("User already exists");
      return;
    }

    users.push({
      name,
      role,
      email,
      password,
    });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful");

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
    const rememberMe = document.getElementById("rememberMe").checked;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const validUser = users.find(
      (user) =>
        user.email === email &&
        user.password === password &&
        user.role === role,
    );

    if (validUser) {
      localStorage.setItem("loggedInUser", JSON.stringify(validUser));

      if (rememberMe) {
        localStorage.setItem("rememberUser", validUser.name);
      }

      window.location.href = "dashboard.html";
    } else {
      alert("Invalid Credentials");
    }
  });
}
