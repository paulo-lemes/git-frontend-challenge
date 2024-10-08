document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide", {
    type: "loop",
    perPage: 1,
    autoplay: true,
    interval: 5000,
  }).mount();
});

function openSideNav() {
  document.getElementById("sidebar").style.width = "90%";
  const overlay = document.createElement("div");
  overlay.classList = "overlay";
  overlay.addEventListener("click", () => {
    closeSideNav();
  });
  document.body.appendChild(overlay);
}

function closeSideNav() {
  document.getElementById("sidebar").style.width = "0";
  const overlay = document.querySelector(".overlay");
  overlay.remove();
}
