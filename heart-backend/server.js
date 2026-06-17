const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });


console.log("🗄️ DB USER:", process.env.DB_USER);

const express = require("express");
const cors = require("cors");

const appointmentRoutes = require("./routes/appointment");

const app = express();

app.use(cors());
app.use(express.json());

// ROUTES
app.use("/", appointmentRoutes);

// PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server Running On Port ${PORT}`);
});