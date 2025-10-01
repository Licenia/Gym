import dotenv from "dotenv";
import cors from "cors";  
import Stripe from "stripe";
import express from "express";

dotenv.config();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const app = express();

app.post("/webhook", express.raw({ type: "application/json" }), (req, res) => {
  const sig = req.headers["stripe-signature"];
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("❌ Error verificando webhook:", err.message);
    return res.sendStatus(400);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    console.log("✅ Pago confirmado:", session.id);
  }

  res.sendStatus(200);
});


app.use(cors());
app.use(express.json());


app.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Curso Entrenamiento Full Body",
              description: "Acceso online a 4 semanas de rutinas",
            },
            unit_amount: 2000,
          },
          quantity: 1,
        },
      ],
      success_url: "http://localhost:5173/success.html",
      cancel_url: "http://localhost:5173/cancel.html",
    });

    res.json({ url: session.url });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => console.log("Servidor en http://localhost:3000"));

