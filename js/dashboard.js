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
document.getElementById("settingsName").innerText = loggedInUser.name;
document.getElementById("settingsEmail").innerText = loggedInUser.email;
document.getElementById("settingsRole").innerText = loggedInUser.role;

// TAB SWITCHING
document.querySelectorAll(".dash-sidebar__link[data-tab]").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document
      .querySelectorAll(".dash-sidebar__link")
      .forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
    document
      .querySelectorAll(".dash-tab")
      .forEach((t) => (t.style.display = "none"));
    document.getElementById("tab-" + this.dataset.tab).style.display = "block";
    document
      .getElementById("dashSidebar")
      .classList.remove("dash-sidebar--open");
  });
});

// SIGN OUT
document.getElementById("logoutBtn").addEventListener("click", function () {
  localStorage.removeItem("loggedInUser");
  window.location.href = "login.html";
});

// ROLE-BASED SIDEBAR
const role = loggedInUser.role.toLowerCase();
if (role !== "admin") {
  document.querySelectorAll("[data-admin-only]").forEach((el) => el.remove());
}
if (role !== "admin" && role !== "researcher") {
  document
    .querySelectorAll("[data-admin-researcher]")
    .forEach((el) => el.remove());
}
