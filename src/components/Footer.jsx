import { useNavigate } from "react-router-dom";
import { IoMdCall } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { User } from "lucide-react";
import logo from "../image/footer-logo.png";
import "./Footer.css";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Insurance", to: "/insurance" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact Us", to: "/contactpage" },
];

const treatments = [
  { label: "Cardiac Testing & Treatment", path: "/treatment/cardiactesting" },
  { label: "Varicose Veins, Ulcer and Lymphedema Treatment Center", path: "/treatment/varicose-veins" },
  { label: "Vascular Testing and Treatment", path: "/treatment/vascular-testing" },
  { label: "Nutrition Counseling", path: "/treatment/nutrition-counseling" },
];

export default function Footer() {
  const navigate = useNavigate();

  const goToPage = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      {/* Glow Effects */}
      <div className="footer-glow1"></div>
      <div className="footer-glow2"></div>

      <div className="footer-container">
        <div className="footer-grid">

          {/* About Column */}
          <div className="footer-col">
            <img src={logo} alt="Logo" className="footer-logo" />
            <p className="footer-about-text">
              Complete Heart & Vascular Care provides advanced cardiac and vascular treatments with compassionate patient-centered care and modern medical technology.
            </p>
            <div className="footer-social">
              <a href="#" className="social-icon"><FaFacebookF /></a>
              <a href="#" className="social-icon"><FaInstagram /></a>
              <a href="#" className="social-icon"><FaLinkedinIn /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h3 className="footer-heading">Quick Links</h3>
            <div className="footer-underline"></div>
            <ul className="footer-links">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <button onClick={() => goToPage(item.to)} className="footer-link">
                    <span className="arrow">→</span>
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Treatments */}
          <div className="footer-col">
            <h3 className="footer-heading">Our Treatments</h3>
            <div className="footer-underline"></div>
            <div className="footer-treatments">
              {treatments.map((s) => (
                <button
                  key={s.path}
                  onClick={() => goToPage(s.path)}
                  className="footer-link"
                >
                  <span className="arrow">→</span>
                  <span>{s.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer-col">
            <h3 className="footer-heading">Contact Info</h3>
            <div className="footer-underline"></div>

            <div className="footer-contact">
              <div className="contact-item">
                <User size={18} className="contact-icon" />
                <span>Dr. Ankur Shah</span>
              </div>

              <a 
                href="https://www.google.com/maps/place/Dr.+Ankur+Shah/@40.6853059,-73.8416326,17z/data=!3m1!4b1!4m6!3m5!1s0x89c26758014ec2ab:0x4779d9a2d868e93f!8m2!3d40.6853059!4d-73.8416326!16s%2Fg%2F11p0f_dv0d" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-item"
              >
                <CiLocationOn size={20} className="contact-icon" />
                <span>
                  100-12 101st Ave, Ozone Park,<br />
                  NY 11416, United States
                </span>
              </a>

              <a href="tel:+9173002728" className="contact-item">
                <IoMdCall size={18} className="contact-icon" />
                <span>(+917) 300-2728</span>
              </a>

              <a href="mailto:drankur@completeheartandvascularcare.com" className="contact-item">
                <MdEmail size={18} className="contact-icon" />
                <span>drankur@completeheartandvascularcare.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="highlight">Dr. Ankur Shah Heart and Vascular Specialist</span>.
            All Rights Reserved. | Designed & Developed By :{" "}
            <a href="https://nirvanzainfotech.co.in/" target="_blank" rel="noopener noreferrer">
              Nirvanza Infotech
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}