const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });

const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const { Resend } = require("resend");

const app = express();

app.use(cors());
app.use(express.json());

console.log("🚀 Server Starting...");
console.log("ADMIN_EMAILS =>", process.env.ADMIN_EMAILS);
console.log("CLINIC_NAME =>", process.env.CLINIC_NAME);
console.log("RESEND_API_KEY exists:", !!process.env.RESEND_API_KEY);

/* ================= DATABASE ================= */
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "heart_vascular_specialist",
});

db.connect((err) => {
  if (err) {
    console.log("❌ Database Connection Error", err);
  } else {
    console.log("✅ MySQL Connected");
  }
});

/* ================= EMAIL SETUP ================= */
const resend = new Resend(process.env.RESEND_API_KEY);

/* ================= CREATE APPOINTMENT ================= */
app.post("/appointment", async (req, res) => {
  const {
    name,
    phone,
    email,
    appointment_date,
    treatment,
    message,
  } = req.body;

  console.log("📥 Form Data Received:", req.body);

  if (!email) {
    return res.status(400).json({ success: false, message: "Email is required" });
  }

  const sql = `
    INSERT INTO appointments
    (name, phone, email, appointment_date, treatment, message)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(sql, [name, phone, email, appointment_date, treatment, message], async (err, result) => {
    if (err) {
      console.log("❌ DB ERROR:", err);
      return res.status(500).json({ success: false, message: "Insert Failed" });
    }

    const appointmentId = result.insertId;
    console.log(`✅ Appointment Saved - ID: ${appointmentId}`);

    // Admin Emails from .env
    const adminEmails = process.env.ADMIN_EMAILS 
      ? process.env.ADMIN_EMAILS.split(',').map(e => e.trim()).filter(Boolean)
      : [];

    /* ================= SEND TO CLINIC ADMINS ================= */
    try {
      if (adminEmails.length > 0) {
        console.log(`📧 Sending Admin Notification to: ${adminEmails}`);
        await resend.emails.send({
          from: `${process.env.CLINIC_NAME} <onboarding@resend.dev>`,
          to: adminEmails,
          subject: `New Appointment #${appointmentId} - ${name}`,
          html: `
            <!DOCTYPE html>
            <html>
            <head>
              <meta charset="utf-8">
              <style>
                body { font-family: Arial, sans-serif; background: #f4f4f4; padding: 20px; }
                .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
                .header { background: #050505; color: white; padding: 25px; text-align: center; }
                .content { padding: 30px; line-height: 1.6; color: #333; }
                table { width: 100%; border-collapse: collapse; margin: 15px 0; }
                td { padding: 12px 10px; border-bottom: 1px solid #eee; }
                .label { font-weight: bold; width: 160px; color: #1e40af; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header"><h1>New Appointment Received</h1></div>
                <div class="content">
                  <p><strong>Appointment ID:</strong> ${appointmentId}</p>
                  <table>
                    <tr><td class="label">Name</td><td>${name}</td></tr>
                    <tr><td class="label">Phone</td><td>${phone}</td></tr>
                    <tr><td class="label">Email</td><td>${email}</td></tr>
                    <tr><td class="label">Date</td><td>${appointment_date}</td></tr>
                    <tr><td class="label">Treatment</td><td>${treatment}</td></tr>
                    <tr><td class="label">Message</td><td>${message || 'No message provided'}</td></tr>
                  </table>
                </div>
              </div>
            </body>
            </html>
          `,
        });
        console.log(`✅ Admin notification sent successfully`);
      }
    } catch (e) {
      console.log("❌ Admin Email Error:", e.message || e);
    }

    /* ================= SEND CONFIRMATION TO PATIENT ================= */
    try {
      console.log(`📧 Sending Confirmation to Patient: ${email}`);
      await resend.emails.send({
        from: `${process.env.CLINIC_NAME} <onboarding@resend.dev>`,
        to: email,                          // ← Using form email
        subject: `Appointment Confirmation #${appointmentId}`,
        
      });
      console.log(`✅ Confirmation email sent to patient: ${email}`);
    } catch (e) {
      console.log("❌ Patient Email Error:", e.message || e);
    }

    res.json({
      success: true,
      message: "Appointment Saved Successfully",
      id: appointmentId,
    });
  });
});

/* ================= OTHER ROUTES ================= */
app.get("/appointment", (req, res) => {
  db.query("SELECT * FROM appointments ORDER BY id DESC", (err, result) => {
    if (err) return res.status(500).json({ success: false });
    res.json(result);
  });
});

app.get("/appointment/:id", (req, res) => {
  db.query("SELECT * FROM appointments WHERE id=?", [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ success: false });
    res.json(result[0]);
  });
});

app.put("/appointment/:id", (req, res) => {
  const { name, phone, email, appointment_date, treatment, message } = req.body;
  const sql = `UPDATE appointments SET name=?, phone=?, email=?, appointment_date=?, treatment=?, message=? WHERE id=?`;
  db.query(sql, [name, phone, email, appointment_date, treatment, message, req.params.id], (err) => {
    if (err) return res.status(500).json({ success: false, message: "Update Failed" });
    res.json({ success: true, message: "Appointment Updated" });
  });
});

app.delete("/appointment/:id", (req, res) => {
  db.query("DELETE FROM appointments WHERE id=?", [req.params.id], (err) => {
    if (err) return res.status(500).json({ success: false, message: "Delete Failed" });
    res.json({ success: true, message: "Appointment Deleted" });
  });
});

/* ================= START SERVER ================= */
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});