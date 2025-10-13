export function menuHamburger() {
  
  const d = document,
  btn = d.querySelector(".btn-hamburger"),
  panel = d.querySelector(".panel");
  
d.addEventListener("click", (e) => {
  if (e.target.closest(".btn-hamburger")) {
    btn.classList.toggle("is-active");
    panel.classList.toggle("is-active");
  }
  
  if (e.target.matches(".menu a")) {
    btn.classList.remove("is-active");
    panel.classList.remove("is-active");
  }
});
}
