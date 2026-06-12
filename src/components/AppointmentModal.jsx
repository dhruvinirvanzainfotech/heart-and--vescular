import { useState, useEffect } from "react";
import logo from "../image/logo3.png";

const treatments = [
  { label: "Cardiac Testing & Treatment", id: "cardiac" },
  { label: "Vascular Testing and Treatment", id: "vascular" },
  { label: "Varicose Veins, Ulcer and Lymphedema Treatment Center", id: "varicose" },
  { label: "Nutrition Counseling", id: "nutrition" },
];

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-[14px] text-slate-700 outline-none focus:border-[#00bcd4] focus:bg-white";

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
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "");
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    // ✅ VALIDATION
    if (!form.name || !form.phone || !form.email) {
      setError("Please fill all required fields");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await res.json();

      if (!result.success) {
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
🏥 Dr. Ankur Shah Heart & Vascular Specialist

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
Date: ${form.appointment_date}
Treatment: ${form.treatment}
Message: ${form.message}
    `;

    const url = `https://api.whatsapp.com/send/?phone=919173002728&text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 bg-black/60"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl flex flex-col max-h-[90vh]"
      >
        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white shadow hover:bg-red-500 hover:text-white"
        >
          ✕
        </button>

        {/* HEADER */}
        <div className="bg-[#00bcd4] px-6 py-5 rounded-t-2xl flex items-center gap-3">
          <img
            src={logo}
            alt="logo"
            className="w-60 h-11 bg-cyan p-1 object-contain"
          />
          <div>
            <h2 className="text-white text-lg font-bold">Book Appointment</h2>
            <p className="text-white/80 text-xs">
              Dr. Ankur Shah · Heart & Vascular Specialist
            </p>
          </div>
        </div>

        {/* FORM */}
        <div className="flex-1 overflow-y-auto p-6">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            <input
              name="name"
              placeholder="Full Name"
              className={inputClass}
              onChange={handleChange}
            />

            <input
              name="phone"
              placeholder="Phone"
              className={inputClass}
              onChange={handleChange}
            />

            <input
              name="email"
              placeholder="Email"
              className={inputClass}
              onChange={handleChange}
            />

            <input
              type="date"
              name="appointment_date"
              className={inputClass}
              onChange={handleChange}
            />

            <select
              name="treatment"
              className={inputClass}
              onChange={handleChange}
            >
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
              className={inputClass}
              rows={3}
              onChange={handleChange}
            />

            {error && <p className="text-red-500 text-sm">{error}</p>}

            {/* BUTTONS */}
            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                className="flex-1 bg-[#00bcd4] text-white py-3 rounded-xl font-semibold"
              >
                {loading ? "Processing..." : "Book Appointment"}
              </button>

              <button
                type="button"
                onClick={openWhatsApp}
                className="flex-1 bg-[#25D366] text-white py-3 rounded-xl font-semibold"
              >
                Send On WhatsApp
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}