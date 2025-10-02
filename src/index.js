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
    if (!validateForm(form)) {
      e.preventDefault();
      console.log("Por favor revisa los campos antes de continuar.");
    }

    const pass = document.querySelector('input[type="password"]');
    const confirm = document.getElementById("confirm-password");
    if (confirm && pass.value !== confirm.value) {
      e.preventDefault();
      console.log("Las contraseñas no coinciden.");
    }
  });
