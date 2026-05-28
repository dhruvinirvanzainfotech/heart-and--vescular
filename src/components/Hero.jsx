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
    const timer = setInterval(nextSlide, 2000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative h-[88vh] min-h-[620px] w-full overflow-hidden bg-white">

      {/* SLIDES */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === current
              ? "opacity-1000 scale-100 z-20"
              : "opacity-0 scale-120 z-10"
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
              brightness-[0.95]
              contrast-[1.1]
              saturate-[1.05]
            "
          />

          {/* DARK PROFESSIONAL OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-slate-900/20"></div>

          {/* CYAN GLOW */}
         
          {/* CONTENT */}
          <div className="absolute inset-0 z-30 flex items-center">
            <div className="max-w-7xl mx-auto px-5 lg:px-12 w-full">

              <div className="max-w-4xl">

                {/* TAG */}
                <div className="mb-5 inline-flex items-center gap-3 animate-[fadeUp_1s_ease]">

                  <span className="w- h-[2px] bg-cyan-400 rounded-full"></span>

                  <span
                    className="
                      uppercase
                      tracking-[3px]
                      text-white
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
                    text-white
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

                  <span className="text-red-400 bg-pink">
                    {slide.subtitle}
                  </span>
                </h1>

                {/* DESCRIPTION */}
                <p
                  className="
                    text-slate-200
                    text-[20px]
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
                      bg-cyan-500
                      text-white
                      text-[17px]
                      font-semibold
                      no-underline
                      transition-all
                      duration-300
                      hover:bg-cyan-400
                      hover:-translate-y-1
                      hover:shadow-[0_15px_35px_rgba(8,145,178,0.35)]
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
                      bg-white/10
                      backdrop-blur-md
                      border
                      border-green/20
                      text-white
                      text-[17px]
                      font-semibold
                      no-underline
                      transition-all
                      duration-300
                      hover:bg-white
                      hover:text-slate-900
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
          bg-black-900/80
          border
          border-white-400/30
          text-white
          backdrop-blur-md
          transition-all
          duration-300
          hover:bg-white
          hover:text-black
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
          bg-slate-900/80
          border
          border-white
          text-white
          backdrop-blur-md
          transition-all
          duration-300
          hover:bg-white
          hover:text-black
          hover:scale-110
          shadow-lg
        "
      >
        →
      </button>

      {/* DOTS */}
      

      {/* FLOATING STATS */}
      <div
        className="
          hidden
          lg:flex
          absolute
          bottom-8
          right-8
          z-40
          bg-slate-900/70
           border
          border-white
          rounded-2xl
          px-7
          py-5
          items-center
          gap-7
          shadow-[0_210px_510px_rgba(0,0,0,0.3)]
        "
      >
        {/* CARD */}
        <div>
          <h3 className="text-white text-3xl font-bold">
            15+
          </h3>

          <p className="text-red-300 text-sm mt-1">
            Years Experience
          </p>
        </div>

        <div className="w-px h-12 bg-cyan-400/20"></div>

        {/* CARD */}
        <div>
          <h3 className="text-white text-3xl font-bold">
            5000+
          </h3>

          <p className="text-red-300 text-sm mt-1">
            Patients Treated
          </p>
        </div>
      </div>

      {/* ANIMATIONS */}
      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
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