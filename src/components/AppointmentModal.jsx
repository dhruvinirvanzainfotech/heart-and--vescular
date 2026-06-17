import { useState, useEffect } from "react";
import "./AppointmentModal.css";

const treatments = [
  { label: "Cardiac Testing & Treatment", id: "cardiac" },
  { label: "Vascular Testing and Treatment", id: "vascular" },
  { label: "Varicose Veins, Ulcer and Lymphedema Treatment Center", id: "varicose" },
  { label: "Nutrition Counseling", id: "nutrition" },
];
const getCurrentDateTime = () => {
  const now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  return now.toISOString().slice(0, 16);
};
export default function AppointmentModal({ onClose }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    appointment_date: getCurrentDateTime(),
    treatment: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!form.name || !form.phone || !form.email) {
      setError("Please fill required fields");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) return;

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!data.success) {
        setError("Booking failed. Try again.");
        return;
      }

      alert("Appointment Booked Successfully!");
      onClose();
    } catch (err) {
      setError("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const openWhatsApp = () => {
    if (!form.name || !form.phone) {
      setError("Please fill name and phone before WhatsApp");
      return;
    }

    const message = `
🩺 New Appointment Request

👤 Name: ${form.name}
📧 Email: ${form.email}
📞 Phone: ${form.phone}
🏥 Treatment: ${form.treatment || "Not selected"}
📅 Date: ${form.appointment_date || "Not selected"}
📝 Message: ${form.message || "No message"}
    `.trim();

    const url = `https://api.whatsapp.com/send/?phone=919173002728&text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box show" onClick={(e) => e.stopPropagation()}>

        {/* CLOSE BUTTON */}
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        <h5 className="modal-title">Book An Appointment</h5>

        <form onSubmit={handleSubmit} className="appointment-form">

          <div className="form-row">
            <input
              name="name"
              placeholder="Full Name *"
              onChange={handleChange}
            />

            <input
              name="email"
              placeholder="Email *"
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <input
              name="phone"
              placeholder="Phone *"
              onChange={handleChange}
            />

            <input
              type="datetime-local"
              name="appointment_date"
              value={form.appointment_date}
              min={getCurrentDateTime()}
              onChange={handleChange}
            />
          </div>

          <select name="treatment" onChange={handleChange}>
            <option value="">Select Treatment</option>
            {treatments.map((t) => (
              <option key={t.id} value={t.label}>
                {t.label}
              </option>
            ))}
          </select>

          <textarea
            name="message"
            placeholder="Message"
            onChange={handleChange}
          />

          {error && <p className="error">{error}</p>}

          <div className="button-group">
            <button type="submit" disabled={loading}>
              {loading ? "Processing..." : "Book an Appointment"}
            </button>

            <button type="button" onClick={openWhatsApp}>
              Send on WhatsApp
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}