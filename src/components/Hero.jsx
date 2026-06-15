import { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import AppointmentModal from "./AppointmentModal";
import Slider1 from "../image/banner.png";
import Slider2 from "../image/banner2.png";
import Slider3 from "../image/banner3.png";
import { ArrowRight, CalendarPlus, ChevronLeft, ChevronRight } from "lucide-react";

import "./Hero.css";

const slides = [
  {
    id: 0,
    image: Slider1,
    tag: "Welcome to Heart & Vascular Care of New York",
    title: "Expert Heart &",
    subtitle: "Vascular Care",
    desc: null,
  },
  {
    id: 1,
    image: Slider2,
    tag: "Comprehensive Heart Diagnostics",
    title: "Advanced Cardiac",
    subtitle: "Testing & Treatment",
    desc: "From EKG and stress testing to echocardiography, we provide comprehensive heart diagnostics and personalized treatment plans.",
  },
  {
    id: 2,
    image: Slider3,
    tag: "Specialized Vein & Vascular Care",
    title: "Advanced Vein &",
    subtitle: "Vascular Treatment",
    desc: "Expert care for varicose veins, vascular conditions, and lymphedema using modern minimally invasive procedures.",
  },
];

/* =========================
   COUNTER HOOK (FIXED)
========================= */
function useCount(end, ref, key, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const alreadyDone = sessionStorage.getItem(key);

    // If already animated once → show final value directly
    if (alreadyDone) {
      setCount(end);
      return;
    }

    const el = ref.current;
    if (!el) return;

    let intervalId;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;

      observer.disconnect();

      let current = 0;
      const steps = 60;
      const increment = end / steps;

      intervalId = setInterval(() => {
        current += increment;

        if (current >= end) {
          current = end;
          clearInterval(intervalId);
          sessionStorage.setItem(key, "done");
        }

        setCount(Math.floor(current));
      }, duration / steps);
    }, { threshold: 0.2 });

    observer.observe(el);

    return () => {
      observer.disconnect();
      clearInterval(intervalId);
    };
  }, [end, ref, key, duration]);

  return count;
}

/* =========================
   HERO COMPONENT
========================= */
export default function Hero() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [apptOpen, setApptOpen] = useState(false);
  const statsRef = useRef(null);

  const years = useCount(5, statsRef, "years-counter");
  const patients = useCount(5000, statsRef, "patients-counter");

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto slide
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  // Reset animations on slide change
  useEffect(() => {
    const timeout = setTimeout(() => {
      const activeSlide = document.querySelector(".slide.active");
      if (activeSlide) {
        const elements = activeSlide.querySelectorAll(
          ".hero-tag, .hero-title, .doctor-card, .hero-desc, .hero-buttons"
        );

        elements.forEach((el) => {
          el.style.animation = "none";
          void el.offsetWidth;
          el.style.animation = "";
        });
      }
    }, 80);

    return () => clearTimeout(timeout);
  }, [current]);

  return (
    <>
      {apptOpen && <AppointmentModal onClose={() => setApptOpen(false)} />}

      <section className="hero-section">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === current ? "active" : ""}`}
          >
            <img src={slide.image} alt="" className="slide-image" />
            <div className="hero-overlay"></div>

            <div className="hero-content">
              <div className="hero-container">
                <div className="hero-text">

                  <div className="hero-tag">
                    <span className="tag-line"></span>
                    <span className="tag-text">{slide.tag}</span>
                  </div>

                  <h1 className="hero-title">
                    {slide.title}
                    <br />
                    <span>{slide.subtitle}</span>
                  </h1>

                  {slide.id === 0 ? (
                    <div className="doctor-card">
                      <h2>Dr. Ankur Shah</h2>
                      <p className="doctor-degree">MD, RPVI</p>
                      <p className="doctor-specialist">
                        Heart & Vascular Specialist
                      </p>
                    </div>
                  ) : (
                    <p className="hero-desc">{slide.desc}</p>
                  )}

                  <div className="hero-buttons">
                    {slide.id === 0 && (
                      <button
                        onClick={() => setApptOpen(true)}
                        className="hero-btn"
                      >
                        <CalendarPlus size={20} />
                        Book an Appointment
                      </button>
                    )}

                    {(slide.id === 1 || slide.id === 2) && (
                      <button
                        onClick={() => navigate("/contact")}
                        className="hero-btn"
                      >
                        {slide.id === 1 ? "Contact Us" : "View More"}
                        <ArrowRight size={20} />
                      </button>
                    )}
                  </div>

                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Controls */}
        <button onClick={prevSlide} className="hero-control left">
          <ChevronLeft size={28} />
        </button>

        <button onClick={nextSlide} className="hero-control right">
          <ChevronRight size={28} />
        </button>

        {/* Stats */}
        <div className="hero-stats" ref={statsRef}>
          <div className="stats-item">
            <h3>{years}+</h3>
            <p>Years of Experience</p>
          </div>

          <div className="stats-divider"></div>

          <div className="stats-item">
            <h3>{patients.toLocaleString()}+</h3>
            <p>Patients Treated</p>
          </div>
        </div>
      </section>
    </>
  );
}