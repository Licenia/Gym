import { slider } from "./slider.js";
import { validateForm } from "./validation.js";
import { checkoutSession } from "./cart.js";
import { menuHamburger } from "./btn-hamburger.js";

const d = document;

d.addEventListener("DOMContentLoaded", () => {
  menuHamburger();
  slider();
  checkoutSession();

  const form = d.querySelector("form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const contenedor = d.querySelector("h2, img");
    const spanExistente = d.querySelector(".err");
    if (spanExistente) spanExistente.remove();

     const pass = d.querySelector('input[type="password"]');
    const confirm = d.getElementById("confirm-password");

    if (confirm && pass.value !== confirm.value) {
      const span = d.createElement("span");
      span.classList.add("err");
      span.textContent = "Las contraseñas no coinciden.";
      if (contenedor) contenedor.insertAdjacentElement("afterend", span);
      return;
    }

    if (!validateForm(form)) {
      const span = d.createElement("span");
      span.classList.add("err");
      span.textContent = "Por favor revisa los campos antes de continuar.";
      if (contenedor) contenedor.insertAdjacentElement("afterend", span);
      return;
    }
  });
});

