import React from "react";
import { Phone, CalendarPlus } from "lucide-react";
import DoctorImg from "../image/image.png";
import "./DoctorProfileCard.css";

export default function DoctorProfileCard({ openAppointmentModal }) {
  const handleCall = () => {
    window.location.href = "tel:+19173002728";
  };

  const handleBook = () => {
    if (openAppointmentModal) {
      openAppointmentModal();
    }
  };

  return (
    <div className="simple-doctor-card">
      <div className="doctor-header">
        <div className="doctor-image">
          <img src={DoctorImg} alt="Dr. Ankur Shah" />
        </div>

        <div className="doctor-info">
          <h2>Dr. Ankur Shah</h2>
          <p>Heart & Vascular Specialist</p>
        </div>
      </div>

      <div className="doctor-content">
        <p className="intro">
          Hello! I'm Dr. Ankur Shah. I specialize in advanced heart and
          vascular care, helping patients achieve better cardiovascular health.
        </p>

        <ul className="specialties">
          <li>Heart Disease Treatment</li>
          <li>Vascular Surgery & Vein Care</li>
          <li>Cardiac Consultation & Diagnostics</li>
          <li>Preventive Heart Health Checkups</li>
        </ul>
      </div>

      <div className="doctor-buttons">
        <button
  className="btn-book"
  onClick={openAppointmentModal}
>
  <CalendarPlus size={18} />
  Book an Appointment
</button>
        <button className="btn-call" onClick={handleCall}>
  <Phone size={18} />
  Call Now
</button>
      </div>
    </div>
  );
}