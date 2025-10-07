import { slider } from "./slider";
 import { validateForm } from "./validation.js";
 import { checkoutSession } from "./cart.js";
 import {menuHamburger} from "./btn-hamburger.js"

 const d = document;
 
d.addEventListener("DOMContentLoaded", (e) => {
    menuHamburger()
     slider()
     checkoutSession()
 })

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const contenedor = d.querySelector("h2");
  
  const spanExistente = d.querySelector(".err");
  
  if (spanExistente) {
    spanExistente.remove()
  }
  
  if (!validateForm(form)) {
    const span = d.createElement("span");
    span.classList.add("err")
    span.textContent = "Por favor revisa los campos antes de continuar."
      contenedor.insertAdjacentElement("afterend",span)
      return;
    }

    const pass = document.querySelector('input[type="password"]');
    const confirm = document.getElementById("confirm-password");
    if (confirm && pass.value !== confirm.value) {
      e.preventDefault();
      console.log("Las contraseñas no coinciden.");
    }
  });
