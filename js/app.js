console.log("Bio Technology Project Loaded");

// Redirect anchor links with no matching section to 404
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    const target = this.getAttribute("href");
    if (target === "#" || !document.querySelector(target)) {
      e.preventDefault();
      window.location.href = "404.html";
    }
  });
});
