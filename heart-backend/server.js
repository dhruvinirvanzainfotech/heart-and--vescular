const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });

const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const { Resend } = require("resend");

const app = express();

app.use(cors());
app.use(express.json());

/* ================= DEBUG ================= */

console.log("ADMIN_EMAIL =>", process.env.ADMIN_EMAIL);

/* ================= DATABASE ================= */

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "heart_vascular_specialist",
});

db.connect((err) => {
  if (err) {
    console.log("❌ Database Connection Error");
    console.log(err);
  } else {
    console.log("✅ MySQL Connected");
  }
});

/* ================= EMAIL (RESEND) ================= */

const resend = new Resend(process.env.RESEND_API_KEY);

/* ================= CREATE APPOINTMENT ================= */

app.post("/appointment", (req, res) => {
  const {
    name,
    phone,
    email,
    appointment_date,
    treatment,
    message,
  } = req.body;

  const sql = `
    INSERT INTO appointments
    (name, phone, email, appointment_date, treatment, message)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(sql, [name, phone, email, appointment_date, treatment, message], async (err, result) => {
    if (err) {
      console.log("❌ DB ERROR:", err);
      return res.status(500).json({
        success: false,
        message: "Insert Failed",
      });
    }

    /* ================= SEND EMAIL ================= */
    try {
      const { error } = await resend.emails.send({
        from: "Clinic <onboarding@resend.dev>",
        to: process.env.ADMIN_EMAIL,
        subject: "New Appointment Booking",
        html: `
          <h2>New Appointment Received</h2>
          <p><b>Name:</b> ${name}</p>
          <p><b>Phone:</b> ${phone}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Date:</b> ${appointment_date}</p>
          <p><b>Treatment:</b> ${treatment}</p>
          <p><b>Message:</b> ${message}</p>
        `,
      });

      if (error) {
        console.log("❌ EMAIL ERROR:", error);
      } else {
        console.log("📧 EMAIL SENT SUCCESS");
      }
    } catch (e) {
      console.log("❌ EMAIL EXCEPTION:", e);
    }

    res.json({
      success: true,
      message: "Appointment Saved Successfully",
      id: result.insertId,
    });
  });
});

/* ================= GET ALL APPOINTMENTS ================= */

app.get("/appointment", (req, res) => {
  const sql = "SELECT * FROM appointments ORDER BY id DESC";

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ success: false });
    }

    res.json(result);
  });
});

/* ================= GET SINGLE APPOINTMENT ================= */

app.get("/appointment/:id", (req, res) => {
  db.query(
    "SELECT * FROM appointments WHERE id=?",
    [req.params.id],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ success: false });
      }

      res.json(result[0]);
    }
  );
});

/* ================= UPDATE APPOINTMENT ================= */

app.put("/appointment/:id", (req, res) => {
  const {
    name,
    phone,
    email,
    appointment_date,
    treatment,
    message,
  } = req.body;

  const sql = `
    UPDATE appointments SET
      name=?,
      phone=?,
      email=?,
      appointment_date=?,
      treatment=?,
      message=?
    WHERE id=?
  `;

  db.query(
    sql,
    [name, phone, email, appointment_date, treatment, message, req.params.id],
    (err) => {
      if (err) {
        console.log("UPDATE ERROR:", err);
        return res.status(500).json({
          success: false,
          message: "Update Failed",
        });
      }

      res.json({
        success: true,
        message: "Appointment Updated",
      });
    }
  );
});

/* ================= DELETE APPOINTMENT ================= */

app.delete("/appointment/:id", (req, res) => {
  db.query(
    "DELETE FROM appointments WHERE id=?",
    [req.params.id],
    (err) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: false,
          message: "Delete Failed",
        });
      }

      res.json({
        success: true,
        message: "Appointment Deleted",
      });
    }
  );
});

/* ================= SERVER ================= */

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});