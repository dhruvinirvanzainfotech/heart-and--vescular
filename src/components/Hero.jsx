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
    overlay: "from-slate-950/60 via-slate-900/30 to-transparent",
  },
  {
    id: 1,
    image: Slider2,
    tag: "Comprehensive Heart Diagnostics",
    title: "Advanced Cardiac",
    subtitle: "Testing & Treatment",
    desc: "From EKG and stress testing to echocardiography, we provide comprehensive heart diagnostics and personalized treatment plans.",
    overlay: "from-slate-950/80 via-slate-900/60 to-slate-900/20",
  },
  {
    id: 2,
    image: Slider3,
    tag: "Specialized Vein & Vascular Care",
    title: "Advanced Vein &",
    subtitle: "Vascular Treatment",
    desc: "Expert care for varicose veins, vascular conditions, and lymphedema using modern minimally invasive procedures.",
    overlay: "from-slate-950/80 via-slate-900/60 to-slate-900/20",
  },
];

function useCount(end, ref, duration = 2000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(0);
    const el = ref.current;
    if (!el) return;
    let id;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        let cur = 0;
        const steps = 60;
        const inc = end / steps;
        id = setInterval(() => {
          cur += inc;
          if (cur >= end) {
            setCount(end);
            clearInterval(id);
          } else setCount(Math.floor(cur));
        }, duration / steps);
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      clearInterval(id);
    };
  }, [end, ref, duration]);
  return count;
}

export default function Hero() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [apptOpen, setApptOpen] = useState(false);
  const statsRef = useRef(null);

  const years = useCount(5, statsRef);
  const patients = useCount(5000, statsRef);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

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

            <div className={`absolute inset-0 bg-gradient-to-r ${slide.overlay}`} />

            <div className="hero-content">
              <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 w-full">
                <div className="max-w-3xl">
                  <div className="mb-4 inline-flex items-center gap-3 animate-fadeUp">
                    <span className="w-10 h-[2px] bg-cyan-400 rounded-full" />
                    <span className="uppercase tracking-[3px] text-[#00bcd4] text-xs sm:text-sm font-bold">
                      {slide.tag}
                    </span>
                  </div>

                  <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-5 animate-fadeUp animation-delay-1">
                    {slide.title}
                    <br />
                    <span className="text-cyan-400">{slide.subtitle}</span>
                  </h1>

                  {slide.id === 0 ? (
                    <div className="animate-fadeUp animation-delay-2 mb-8">
                      <div className="inline-block bg-white/10 backdrop-blur-md border border-black/30 rounded-2xl px-6 py-5">
                        <h2 className="text-white text-xl sm:text-2xl font-bold">Dr. Ankur Shah</h2>
                        <p className="text-red-800 text-3xl">MD, RPVI</p>
                        <p className="text-slate-200 text-sm">Heart & Vascular Specialist</p>
                      </div>
                    </div>
                  ) : (
                    <p className="text-slate-100 text-base sm:text-lg leading-relaxed max-w-xl mb-8 animate-fadeUp animation-delay-2">
                      {slide.desc}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-4 animate-fadeUp animation-delay-3">
                    {slide.id === 0 && (
                      <button
                        onClick={() => setApptOpen(true)}
                        className="px-7 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 text-white font-semibold text-base sm:text-lg flex items-center gap-2 transition-all hover:-translate-y-1"
                      >
                        <CalendarPlus size={22} />
                        Book an Appointment
                      </button>
                    )}

                    {(slide.id === 1 || slide.id === 2) && (
                      <button
                        onClick={() => navigate("#")}
                        className="px-7 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 text-white font-semibold text-base sm:text-lg flex items-center gap-2 transition-all hover:-translate-y-1"
                      >
                        {slide.id === 1 ? "Contact Us" : "View More"}
                        <ArrowRight size={22} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="hero-control left"
          aria-label="Previous slide"
        >
          <ChevronLeft size={28} strokeWidth={3} />
        </button>

        <button
          onClick={nextSlide}
          className="hero-control right"
          aria-label="Next slide"
        >
          <ChevronRight size={28} strokeWidth={3} />
        </button>

        {/* Floating Stats */}
        <div
          ref={statsRef}
          className="hidden lg:flex absolute bottom-8 right-8 z-40 bg-white/10 border border-black/20 rounded-2xl px-7 py-5 items-center gap-7 backdrop-blur-md"
        >
          <div>
            <h3 className="text-black-500 text-3xl font-bold">{years}+</h3>
            <p className="text-black-300 text-sm">Years Experience</p>
          </div>
          <div className="w-px h-12 bg-cyan-400/30" />
          <div>
            <h3 className="text-black-500 text-3xl font-bold">{patients.toLocaleString()}+</h3>
            <p className="text-black-300 text-sm">Patients Treated</p>
          </div>
        </div>
      </section>
    </>
  );
}