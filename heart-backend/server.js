const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

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

  db.query(
    sql,
    [
      name,
      phone,
      email,
      appointment_date,
      treatment,
      message,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: false,
          message: "Insert Failed",
        });
      }

      res.json({
        success: true,
        message: "Appointment Saved",
        id: result.insertId,
      });
    }
  );
});

/* ================= GET ALL APPOINTMENTS ================= */

app.get("/appointment", (req, res) => {
  const sql = "SELECT * FROM appointments ORDER BY id DESC";

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: false,
      });
    }

    res.json(result);
  });
});

/* ================= GET SINGLE APPOINTMENT ================= */

app.get("/appointment/:id", (req, res) => {
  const { id } = req.params;

  db.query(
    "SELECT * FROM appointments WHERE id=?",
    [id],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: false,
        });
      }

      res.json(result[0]);
    }
  );
});

/* ================= UPDATE ================= */

app.put("/appointment/:id", (req, res) => {
  const { id } = req.params;

  const {
    name,
    phone,
    email,
    appointment_date,
    treatment,
    message,
  } = req.body;

  const sql = `
    UPDATE appointments
    SET
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
    [
      name,
      phone,
      email,
      appointment_date,
      treatment,
      message,
      id,
    ],
    (err, result) => {
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

/* ================= DELETE ================= */

app.delete("/appointment/:id", (req, res) => {
  const { id } = req.params;

  db.query(
    "DELETE FROM appointments WHERE id=?",
    [id],
    (err, result) => {
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