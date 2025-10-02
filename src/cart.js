
export function checkoutSession() {
  const form = document.getElementById("payment-form");
  
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3000/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre: form.nombre.value,
        email: form.email.value
      }),
    });

    const data = await res.json();
    window.location.href = data.url;
  });
}