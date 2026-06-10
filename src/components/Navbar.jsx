import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppointmentModal from "./AppointmentModal";
import "./Navbar.css";
import logo from "../image/logo3.png";

import {
  CalendarPlus,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

const treatments = [
  {
    label: "Cardiac Testing & Treatment",
    path: "/treatment/cardiactesting",
  },
  {
    label: "Varicose Veins, Ulcer and Lymphedema Treatment Center",
    path: "/treatment/varicose-veins",
  },
  {
    label: "Vascular Testing and Treatment",
    path: "/treatment/vascular-testing",
  },
  {
    label: "Nutrition Counseling",
    path: "/treatment/nutrition-counseling",
  },
];

export default function Navbar() {
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTreatmentsOpen, setIsTreatmentsOpen] = useState(false);

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setIsTreatmentsOpen(false);
  };

  return (
    <>
      <nav className="main-navbar">
        <div className="container navbar-container">
          {/* Logo */}
          <Link to="/" className="logo" onClick={closeMenu}>
            <img src={logo} alt="Logo" className="logo-img" />
          </Link>

          {/* Desktop Menu */}
          <div className="desktop-menu">
            <ul className="nav-links">
              <li><Link to="/" className="nav-link">Home</Link></li>
              <li><Link to="/about" className="nav-link">About</Link></li>

              <li className="dropdown">
                <button className="nav-link dropdown-btn">
                  Treatments
                  <ChevronDown size={18} />
                </button>
                <ul className="dropdown-menu">
                  {treatments.map((item, index) => (
                    <li key={index}>
                      <Link to={item.path}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </li>

              <li><Link to="/insurance" className="nav-link">Insurance</Link></li>
              <li><Link to="/gallery" className="nav-link">Gallery</Link></li>
              <li><Link to="/contact" className="nav-link">Contact Us</Link></li>
            </ul>
          </div>

          {/* Desktop Appointment Button */}
          <button
            className="book-btn"
            onClick={() => setShowAppointmentModal(true)}
          >
            <CalendarPlus size={20} />
            <span>Book an Appointment</span>
          </button>

          {/* Hamburger Button */}
          <button
            className="hamburger"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Mobile Menu with Curtain Animation */}
        <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
          <ul className="mobile-nav-links">
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/about" onClick={closeMenu}>About</Link></li>

            {/* Treatments Dropdown */}
            <li>
              <button
                className="mobile-dropdown-btn"
                onClick={() => setIsTreatmentsOpen(!isTreatmentsOpen)}
              >
                Treatments
                <ChevronDown
                  size={18}
                  className={`rotate-arrow ${isTreatmentsOpen ? "active" : ""}`}
                />
              </button>

              <ul className={`mobile-dropdown ${isTreatmentsOpen ? "open" : ""}`}>
                {treatments.map((item, index) => (
                  <li key={index}>
                    <Link to={item.path} onClick={closeMenu}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li><Link to="/insurance" onClick={closeMenu}>Insurance</Link></li>
            <li><Link to="/gallery" onClick={closeMenu}>Gallery</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>Contact Us</Link></li>
          </ul>

          {/* Mobile Book Button */}
          <button
            className="mobile-book-btn"
            onClick={() => {
              closeMenu();
              setShowAppointmentModal(true);
            }}
          >
            <CalendarPlus size={20} />
            Book an Appointment
          </button>
        </div>
      </nav>

      {/* Appointment Modal */}
      {showAppointmentModal && (
        <AppointmentModal onClose={() => setShowAppointmentModal(false)} />
      )}
    </>
  );
}