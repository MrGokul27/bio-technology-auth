(function () {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const excluded = ["loader.html", "404.html", "login.html", "register.html"];

  if (excluded.includes(currentPage)) return;

  const isReload = performance.navigation.type === 1;
  const isIndex = currentPage === "index.html" || currentPage === "";
  const loaderDone = sessionStorage.getItem("loaderDone");
  const indexLoaderDone = sessionStorage.getItem("indexLoaderDone");

  const backToHome = sessionStorage.getItem("backToHome");

  if (backToHome) {
    sessionStorage.removeItem("backToHome");
    return;
  }

  if (isReload || !loaderDone || (isIndex && !indexLoaderDone)) {
    sessionStorage.removeItem("loaderDone");
    sessionStorage.removeItem("indexLoaderDone");
    const target = isIndex ? "login.html" : (currentPage || "login.html");
    sessionStorage.setItem("loaderTarget", target);
    window.location.href = "loader.html";
  }
})();
