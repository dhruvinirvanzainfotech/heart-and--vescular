import { useState } from "react";
import { Link } from "react-router-dom";
import { HeartPulse } from "lucide-react";
import "./TreatmentSidebar.css";


import AppointmentModal from "./AppointmentModal";

export default function TreatmentSidebar() {
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);

  return (
    <div className="treatment-sidebar">
      <h3>Our Treatments</h3>

      <ul>
        <li>
          <Link
            to="/treatment/cardiactesting"
            className="treatment-link"
          >
            <HeartPulse size={18} />
            Cardiac Testing & Treatment
          </Link>
        </li>

        <li>
          <Link
            to="/treatment/varicose-veins"
            className="treatment-link"
          >
            <HeartPulse size={18} />
            Varicose Veins, Ulcer and Lymphedema Treatment Center
          </Link>
        </li>

        <li>
          <Link
            to="/treatment/vascular-testing"
            className="treatment-link"
          >
            <HeartPulse size={18} />
            Vascular Testing and Treatment
          </Link>
        </li>

        <li>
          <Link
            to="/treatment/nutrition-counseling"
            className="treatment-link"
          >
            <HeartPulse size={18} />
            Nutrition Counseling
          </Link>
        </li>
      </ul>

      

      {showAppointmentModal && (
        <AppointmentModal
          onClose={() =>
            setShowAppointmentModal(false)
          }
        />
      )}
    </div>
  );
}