const btn = document.getElementById("btn");
const nav = document.getElementById("nav");

if (btn && nav) {
  btn.addEventListener("click", function (e) {
    nav.classList.toggle("active");
    btn.classList.toggle("active");
  });
} else {
  console.error("Button or nav element not found.");
}
