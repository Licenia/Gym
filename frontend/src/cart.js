
export function checkoutSession() {
  const form = document.getElementById("payment-form");
  
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

try {
  const res = await fetch("https://mi-backend.onrender.com/create-checkout-session", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nombre: form.nombre.value,
      email: form.email.value
    }),
  });

   if (!res.ok) {
        throw new Error("Error creando sesión de pago");
      }
      
      const data = await res.json();
      window.location.href = data.url;
} catch (error) {
  console.error("Error en checkout:", err);
      alert("Ocurrió un error al procesar el pago. Intenta de nuevo.");
  }
});
}