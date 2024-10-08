function openSideNav() {
  document.getElementById("nav-links").style.width = "90%";
  const overlay = document.createElement("div");
  overlay.classList = "overlay";
  overlay.addEventListener("click", () => {
    closeSideNav();
  });
  document.body.appendChild(overlay);
}

function closeSideNav() {
  document.getElementById("nav-links").style.width = "0";
  const overlay = document.querySelector(".overlay");
  overlay.remove();
}
