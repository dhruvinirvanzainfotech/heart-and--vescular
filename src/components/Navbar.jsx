import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppointmentModal from "./AppointmentModal";
import "./Navbar.css";
import logo from "../image/logo3.png";
import { Menu, X, ChevronDown, CalendarPlus } from "lucide-react";

const treatments = [
  { label: "Cardiac Testing & Treatment", path: "/treatment/cardiactesting" },
  { label: "Nutrition Counseling", path: "/treatment/nutrition-counseling" },
  { label: "Vascular Testing and Treatment", path: "/treatment/vascular-testing" },
  { label: "Varicose Veins, Ulcer and Lymphedema Treatment Center", path: "/treatment/varicose-veins" },
];

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTreatmentsOpen, setIsTreatmentsOpen] = useState(false);
  const [isRotating, setIsRotating] = useState(false);

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setIsTreatmentsOpen(false);
  };

  const openModal = () => {
    setShowModal(true);
    setIsRotating(true);

    setTimeout(() => {
      setIsRotating(false);
    }, 600);
  };

  return (
    <>
      <nav className="main-navbar">
        <div className="container navbar-container">
          {/* LOGO */}
          <Link to="/" className="logo" onClick={closeMenu}>
            <img src={logo} alt="Company Logo" className="logo-img" />
          </Link>

          {/* DESKTOP MENU */}
          <div className="desktop-menu">
            <ul className="nav-links">
              <li><Link to="/" className="nav-link">Home</Link></li>
              <li><Link to="/about" className="nav-link">About</Link></li>

              <li className="dropdown">
                <button type="button" className="nav-link dropdown-btn">
                  Treatments <ChevronDown size={18} />
                </button>
                <ul className="dropdown-menu">
                  {treatments.map((item, index) => (
                    <li key={index}>
                      <Link to={item.path} onClick={closeMenu}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              <li><Link to="/gallery" className="nav-link">Gallery</Link></li>
              <li><Link to="/testimonialspage" className="nav-link">Testimonials</Link></li>
              <li><Link to="/contact" className="nav-link">Contact Us</Link></li>
            </ul>
          </div>

          {/* HAMBURGER */}
          <button
            className="hamburger"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
          <ul className="mobile-nav-links">
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/about" onClick={closeMenu}>About</Link></li>

            {/* Mobile Treatments Dropdown */}
            <li>
              <button
                type="button"
                className="mobile-dropdown-btn"
                onClick={() => setIsTreatmentsOpen(!isTreatmentsOpen)}
              >
                Treatments <ChevronDown size={18} />
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

            <li><Link to="/gallery" onClick={closeMenu}>Gallery</Link></li>
            <li><Link to="/testimonialspage" onClick={closeMenu}>Testimonials</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>Contact Us</Link></li>
          </ul>
        </div>
      </nav>

      {/* FLOATING BOOK BUTTON with Lucide Icon */}
      <button
        className={`floating-book-btn ${isRotating ? "rotate" : ""}`}
        onClick={openModal}
        aria-label="Book Appointment"
      >
        <CalendarPlus size={28} className="floating-icon" />
        <span className="floating-text">Book an Appointment</span>
      </button>

      {/* MODAL */}
      {showModal && (
        <AppointmentModal onClose={() => setShowModal(false)} />
      )}
    </>
  );
}