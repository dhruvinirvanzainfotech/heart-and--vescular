import { useState, useEffect } from "react";
import "./AppointmentModal.css";

const treatments = [
  { label: "Cardiac Testing & Treatment", id: "cardiac" },
  { label: "Vascular Testing and Treatment", id: "vascular" },
  { label: "Varicose Veins, Ulcer and Lymphedema Treatment Center", id: "varicose" },
  { label: "Nutrition Counseling", id: "nutrition" },
];

export default function AppointmentModal({ onClose }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    appointment_date: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.name || !form.phone || !form.email) {
      setError("Please fill required fields");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!data.success) {
        setError("Booking failed");
        return;
      }

      alert("Appointment Booked Successfully!");
      onClose();
    } catch (err) {
      setError("Server error");
    } finally {
      setLoading(false);
    }
  };

  const openWhatsApp = () => {
    const message = `
New Appointment Request

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Treatment: ${form.treatment}
Message: ${form.message}
    `.trim();

    const url = `https://api.whatsapp.com/send/?phone=919173002728&text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (

    
  <div className="modal-overlay" onClick={onClose}>
  <div className="modal-box show" onClick={(e) => e.stopPropagation()}>

      <button className="close-btn" onClick={onClose}>
        ✕
      </button>

      <h2 className="modal-title">Book Appointment</h2>

      <form onSubmit={handleSubmit} className="appointment-form">

        <input name="name" placeholder="Full Name *" onChange={handleChange} />
        <input name="email" placeholder="Email *" onChange={handleChange} />
        <input name="phone" placeholder="Phone *" onChange={handleChange} />

        <input type="date" name="appointment_date" onChange={handleChange} />

        <select name="treatment" onChange={handleChange}>
          <option value="">Select Treatment</option>
          {treatments.map((t) => (
            <option key={t.id} value={t.label}>
              {t.label}
            </option>
          ))}
        </select>

        <textarea name="message" placeholder="Message" onChange={handleChange} />

        {error && <p className="error">{error}</p>}

        <div className="button-group">

          <button type="submit" disabled={loading}>
            {loading ? "Processing..." : "Book an Appointment"}
          </button>

          <button type="button" onClick={openWhatsApp}>
            send on WhatsApp
          </button>

        </div>

      </form>

    </div>
  </div>
);
}