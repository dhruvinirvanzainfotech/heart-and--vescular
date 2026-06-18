const express = require("express");
const router = express.Router();
const db = require("../db");

/* ================= CREATE ================= */
router.post("/", (req, res) => {
  const {
    name,
    phone,
    email,
    appointment_date,
    treatment,
    message,
    status = "Pending"
  } = req.body;

  const sql = `
    INSERT INTO appointments 
    (name, phone, email, appointment_date, treatment, message, status)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(sql, [name, phone, email, appointment_date, treatment, message, status], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: "Insert Failed" });
    }
    res.json({ 
      success: true, 
      message: "Appointment Saved Successfully", 
      id: result.insertId 
    });
  });
});

/* ================= GET ALL ================= */
router.get("/", (req, res) => {
  db.query("SELECT * FROM appointments ORDER BY id DESC", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: "Fetch Failed" });
    }
    res.json(result);
  });
});

/* ================= UPDATE ================= */
router.put("/:id", (req, res) => {
  const {
    name,
    phone,
    email,
    appointment_date,
    treatment,
    message,
    status
  } = req.body;

  const sql = `
    UPDATE appointments 
    SET name=?, phone=?, email=?, appointment_date=?, treatment=?, message=?, status=?
    WHERE id=?
  `;

  db.query(sql, [
    name, phone, email, appointment_date, treatment, message, status, req.params.id
  ], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: "Update Failed" });
    }
    res.json({ success: true, message: "Appointment Updated" });
  });
});
const updateStatus = async (id, newStatus) => {
  const appointment = appointments.find((a) => a.id === id);

  try {
    await axios.put(`${API_URL}/${id}`, {
      ...appointment,
      status: newStatus,
    });

    loadAppointments();
  } catch (err) {
    console.error(err);
  }
};
/* ================= GET SINGLE + DELETE (unchanged) ================= */
router.get("/:id", (req, res) => {
  db.query("SELECT * FROM appointments WHERE id = ?", [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ success: false, message: "Fetch Failed" });
    res.json(result[0]);
  });
});

router.delete("/:id", (req, res) => {
  db.query("DELETE FROM appointments WHERE id = ?", [req.params.id], (err) => {
    if (err) return res.status(500).json({ success: false, message: "Delete Failed" });
    res.json({ success: true, message: "Appointment Deleted" });
  });
});

module.exports = router;