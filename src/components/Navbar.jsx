import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppointmentModal from "./AppointmentModal";
import "./Navbar.css";
import logo from "../image/logo3.png";
import { Menu, X, ChevronDown } from "lucide-react";

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
            <img src={logo} alt="Logo" className="logo-img" />
          </Link>

          {/* DESKTOP MENU */}
          <div className="desktop-menu">
            <ul className="nav-links">
              <li><Link to="/" className="nav-link">Home</Link></li>
              <li><Link to="/about" className="nav-link">About</Link></li>

              <li className="dropdown">
                <button className="nav-link dropdown-btn">
                  Treatments <ChevronDown size={18} />
                </button>
                <ul className="dropdown-menu">
                  {treatments.map((item, i) => (
                    <li key={i}>
                      <Link to={item.path}>{item.label}</Link>
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
          >
            {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>

        </div>

        {/* MOBILE MENU */}
        <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>

          <ul className="mobile-nav-links">

            <li>
              <Link to="/" onClick={closeMenu}>Home</Link>
            </li>

            <li>
              <Link to="/about" onClick={closeMenu}>About</Link>
            </li>

            {/* MOBILE DROPDOWN */}
            <li>
              <button
                className="mobile-dropdown-btn"
                onClick={() => setIsTreatmentsOpen(!isTreatmentsOpen)}
              >
                Treatments <ChevronDown size={18} />
              </button>

              <ul className={`mobile-dropdown ${isTreatmentsOpen ? "open" : ""}`}>
                {treatments.map((item, i) => (
                  <li key={i}>
                    <Link to={item.path} onClick={closeMenu}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <Link to="/gallery" onClick={closeMenu}>Gallery</Link>
            </li>

            <li>
              <Link to="/testimonialspage" onClick={closeMenu}>Testimonials</Link>
            </li>

            <li>
              <Link to="/contact" onClick={closeMenu}>Contact Us</Link>
            </li>

          </ul>
        </div>
      </nav>

      {/* FLOATING BOOK BUTTON */}
      <button
        className={`floating-book-btn ${isRotating ? "rotate" : ""}`}
        onClick={openModal}
      >
        Book Appointment
      </button>

      {/* MODAL */}
      {showModal && (
        <AppointmentModal onClose={() => setShowModal(false)} />
      )}
    </>
  );
}