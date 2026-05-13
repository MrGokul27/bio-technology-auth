(function () {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const excluded = ["loader.html", "404.html"];

  if (excluded.includes(currentPage)) return;

  const isReload = performance.navigation.type === 1;
  const isIndex = currentPage === "index.html" || currentPage === "";
  const loaderDone = sessionStorage.getItem("loaderDone");
  const indexLoaderDone = sessionStorage.getItem("indexLoaderDone");

  if (isReload || !loaderDone || (isIndex && !indexLoaderDone)) {
    sessionStorage.removeItem("loaderDone");
    sessionStorage.removeItem("indexLoaderDone");
    sessionStorage.setItem("loaderTarget", currentPage || "index.html");
    window.location.href = "loader.html";
  }
})();
