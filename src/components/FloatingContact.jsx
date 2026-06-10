import React, { useState } from "react";
import { FaPlus, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import "./FloatingContact.css";

const FloatingContact = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="floating-wrapper">

      {/* OPTIONS */}
      {open && (
        <div className="floating-options">

          {/* CALL */}
          <a href="tel:+19173002728" className="floating-btn call">
            <FaPhoneAlt />
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/14124917611"
            target="_blank"
            rel="noreferrer"
            className="floating-btn whatsapp"
          >
            <FaWhatsapp />
          </a>

        </div>
      )}

      {/* MAIN BUTTON */}
      <div
        className={`floating-main ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <FaPlus />
      </div>

    </div>
  );
};

export default FloatingContact;