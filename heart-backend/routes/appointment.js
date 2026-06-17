const express = require("express");
const router = express.Router();

const db = require("../db");


// CREATE APPOINTMENT
router.post("/appointment", async (req, res) => {
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
    [name, phone, email, appointment_date, treatment, message],
    async (err, result) => {
      if (err) {
        console.log(err);

        return res.status(500).json({
          success: false,
          message: "Insert Failed",
        });
      }

      const appointmentId = result.insertId;

      // Admin Email
      try {
        const adminEmails = process.env.ADMIN_EMAILS
          .split(",")
          .map((e) => e.trim());

       
      } catch (error) {
        console.log("Admin Email Error", error);
      }

      

      res.json({
        success: true,
        message: "Appointment Saved Successfully",
        id: appointmentId,
      });
    }
  );
});

// GET ALL
router.get("/appointment", (req, res) => {
  db.query(
    "SELECT * FROM appointments ORDER BY id DESC",
    (err, result) => {
      if (err) {
        return res.status(500).json({
          success: false,
        });
      }

      res.json(result);
    }
  );
});

// GET SINGLE
router.get("/appointment/:id", (req, res) => {
  db.query(
    "SELECT * FROM appointments WHERE id=?",
    [req.params.id],
    (err, result) => {
      if (err) {
        return res.status(500).json({
          success: false,
        });
      }

      res.json(result[0]);
    }
  );
});

// UPDATE
router.put("/appointment/:id", (req, res) => {
  const {
    name,
    phone,
    email,
    appointment_date,
    treatment,
    message,
  } = req.body;

  const sql =
    "UPDATE appointments SET name=?, phone=?, email=?, appointment_date=?, treatment=?, message=? WHERE id=?";

  db.query(
    sql,
    [
      name,
      phone,
      email,
      appointment_date,
      treatment,
      message,
      req.params.id,
    ],
    (err) => {
      if (err) {
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

// DELETE
router.delete("/appointment/:id", (req, res) => {
  db.query(
    "DELETE FROM appointments WHERE id=?",
    [req.params.id],
    (err) => {
      if (err) {
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

module.exports = router;