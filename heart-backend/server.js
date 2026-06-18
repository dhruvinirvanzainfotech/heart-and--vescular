const path = require("path");

require("dotenv").config({
  path: path.join(__dirname, ".env"),
});

const express = require("express");
const cors = require("cors");

const appointmentRoutes = require("./routes/appointment");

const app = express();

/* ================= CORS ================= */

app.use(
  cors({
    origin: [
      // "https://ankurshahh.dnsoftech.in",
      "http://localhost:5173",
      // "http://localhost:3000",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

/* ================= HEALTH CHECK ================= */

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "API is running 🚀",
  });
});

/* ================= ROUTES ================= */

app.use("/api/appointment", appointmentRoutes);

/* ================= PORT ================= */

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server Running On Port ${PORT}`);
});