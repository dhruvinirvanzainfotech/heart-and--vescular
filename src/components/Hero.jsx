import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 0,
    image: "/image/benner4.jpg",
    tag: "Heart & Vascular Care",
    title: "Advanced Cardiac",
    subtitle: "Treatment Center",
    desc: "Modern heart and vascular treatments with expert medical care and advanced technology.",
  },
  {
    id: 1,
    image: "/image/banner3.jpg",
    tag: "Expert Cardiology",
    title: "Trusted By",
    subtitle: "Thousands Patients",
    desc: "Professional cardiac diagnosis and treatment designed for every patient.",
  },
  {
    id: 2,
    image: "/image/banner2.jpg",
    tag: "Vascular Wellness",
    title: "Professional",
    subtitle: "Vein Care",
    desc: "Advanced vascular and vein treatments with modern healthcare solutions.",
  },
  {
    id: 3,
    image: "/image/banner1.jpg",
    tag: "Expert Doctors",
    title: "Personalized Care",
    subtitle: "For Every Patient",
    desc: "Compassionate and advanced treatment plans tailored to your needs.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

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
<section className="relative h-[88vh] min-h-[0px] sm:min-h-[620px] w-full overflow-hidden bg-white">

      {/* SLIDES */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === current
              ? "opacity-100 scale-100 z-20"
              : "opacity-0 scale-105 z-10"
          }`}
        >
          {/* IMAGE */}
          <img
            src={slide.image}
            alt=""
            className="
              w-full
              h-full
              object-cover
              object-center
              animate-[slowZoom_14s_linear_infinite]
              brightness-[1.02]
              contrast-[1.12]
              saturate-[1.12]
            
            "
          />

          {/* CLEAN OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/55 to-white/10"></div>

          {/* SOFT GLOW */}
<div className="absolute top-[-120px] left-[-100px] w-[420px] h-[420px] bg-cyan-400/20 blur-[120px] rounded-full hidden sm:block"></div>

          {/* CONTENT */}
          <div className="absolute inset-0 z-30 flex items-center">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">

              <div className="max-w-2xl">

                {/* TAG */}
                <div className="mb-5 inline-flex items-center gap-3 animate-[fadeUp_1s_ease]">

                  <span className="w-12 h-[2px] bg-cyan-600 rounded-full"></span>

                  <span
                    className="
                      uppercase
                      tracking-[3px]
                      text-cyan-700
                      text-[12px]
                      font-bold
                    "
                  >
                    {slide.tag}
                  </span>
                </div>

                {/* TITLE */}
                <h1
                  className="
                    text-slate-900
                    text-4xl
                    md:text-6xl
                    font-bold
                    leading-[1.1]
                    mb-5
                    animate-[fadeUp_1.2s_ease]
                  "
                >
                  {slide.title}

                  <br />

                  <span className="text-cyan-600">
                    {slide.subtitle}
                  </span>
                </h1>

                {/* DESCRIPTION */}
                <p
                  className="
                    text-slate-700
                    text-[17px]
                    leading-relaxed
                    max-w-xl
                    mb-9
                    animate-[fadeUp_1.4s_ease]
                  "
                >
                  {slide.desc}
                </p>

                {/* BUTTONS */}
                <div className="flex flex-wrap gap-4 animate-[fadeUp_1.6s_ease]">

                  {/* BUTTON 1 */}
                  <Link
                    to="/appointment"
                    className="
                      px-8
                      py-4
                      rounded-full
                      bg-slate-900
                      text-white
                      text-[14px]
                      font-semibold
                      no-underline
                      transition-all
                      duration-300
                      hover:bg-cyan-600
                      hover:-translate-y-1
                      hover:shadow-[0_15px_35px_rgba(8,145,178,0.25)]
                    "
                  >
                    Book Appointment
                  </Link>

                  {/* BUTTON 2 */}
                  <Link
                    to="/services"
                    className="
                      px-8
                      py-4
                      rounded-full
                      bg-white/90
                      backdrop-blur-md
                      border
                      border-white
                      text-slate-800
                      text-[14px]
                      font-semibold
                      no-underline
                      transition-all
                      duration-300
                      hover:bg-white
                      hover:-translate-y-1
                      hover:shadow-xl
                    "
                  >
                    Explore Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* LEFT BUTTON */}
      <button
        onClick={prevSlide}
        className="
          absolute
          left-5
          top-1/2
          -translate-y-1/2
          z-40
          w-12
          h-12
          rounded-full
          bg-white/90
          border
          border-cyan-100
          text-slate-700
          backdrop-blur-md
          transition-all
          duration-300
          hover:bg-cyan-600
          hover:text-white
          hover:scale-110
          shadow-lg
        "
      >
        ←
      </button>

      {/* RIGHT BUTTON */}
      <button
        onClick={nextSlide}
        className="
          absolute
          right-5
          top-1/2
          -translate-y-1/2
          z-40
          w-12
          h-12
          rounded-full
          bg-white/90
          border
          border-cyan-100
          text-slate-700
          backdrop-blur-md
          transition-all
          duration-300
          hover:bg-cyan-600
          hover:text-white
          hover:scale-110
          shadow-lg
        "
      >
        →
      </button>

      {/* DOTS */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`
              rounded-full
              transition-all
              duration-500
              ${
                current === index
                  ? "w-10 h-2 bg-cyan-600"
                  : "w-2.5 h-2.5 bg-cyan-300 hover:bg-cyan-500"
              }
            `}
          ></button>
        ))}
      </div>

      {/* FLOATING STATS */}
      <div
        className="
          hidden
          lg:flex
          absolute
          bottom-8
          right-8
          z-40
          bg-white/85
          backdrop-blur-xl
          border
          border-cyan-100
          rounded-3xl
          px-7
          py-5
          items-center
          gap-7
          shadow-[0_20px_50px_rgba(0,0,0,0.08)]
        "
      >
        {/* CARD */}
        <div>
          <h3 className="text-cyan-600 text-3xl font-bold">
            15+
          </h3>

          <p className="text-slate-500 text-sm mt-1">
            Years Experience
          </p>
        </div>

        <div className="w-px h-12 bg-cyan-100"></div>

        {/* CARD */}
        <div>
          <h3 className="text-cyan-600 text-3xl font-bold">
            5000+
          </h3>

          <p className="text-slate-500 text-sm mt-1">
            Patients Treated
          </p>
        </div>
      </div>

      {/* ANIMATIONS */}
      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 100;
              transform: translateY(30px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slowZoom {
            0% {
              transform: scale(1);
            }

            50% {
              transform: scale(1.04);
            }

            100% {
              transform: scale(1);
            }
          }
        `}
      </style>
    </section>
  );
}