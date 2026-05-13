const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

if (!loggedInUser) {
  window.location.href = "login.html";
}

const initial = loggedInUser.name.charAt(0).toUpperCase();

document.getElementById("userName").innerText = loggedInUser.name;
document.getElementById("userEmail").innerText = loggedInUser.email;
document.getElementById("userAvatar").innerText = initial;
document.getElementById("sidebarAvatar").innerText = initial;
document.getElementById("sidebarName").innerText = loggedInUser.name;
document.getElementById("sidebarRole").innerText = loggedInUser.role;
document.getElementById("welcomeText").innerText =
  `Welcome back, ${loggedInUser.name}!`;
document.getElementById("userRole").innerText = loggedInUser.role;
document.getElementById("infoName").innerText = loggedInUser.name;
document.getElementById("infoEmail").innerText = loggedInUser.email;
document.getElementById("infoRole").innerText = loggedInUser.role;

// SIGN OUT

document.getElementById("logoutBtn").addEventListener("click", function () {
  localStorage.removeItem("loggedInUser");

  window.location.href = "index.html";
});

// ROLE-BASED SIDEBAR
if (loggedInUser.role.toLowerCase() !== "admin") {
  document.querySelectorAll("[data-admin-only]").forEach((el) => el.remove());
}

// EMPTY LINKS => 404

const emptyLinks = document.querySelectorAll(".empty-link");

emptyLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    window.location.href = "404.html";
  });
});
