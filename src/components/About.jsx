import { Link } from "react-router-dom";
import Aboutmain from "../image/image.png";
import "./About.css";   // ← Make sure this line is here

export default function About() {
  return (
    <section
      id="about"
      className="about-section"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-sky-200/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-100/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE */}
        <div className="relative flex justify-center items-center">

          {/* Background Circle */}
          <div className="about-bg-circle" />

          {/* Doctor Image - Simple & Responsive */}
          <img
            src={Aboutmain}
            alt="Dr. Ankur Shah"
            className="about-doctor-image"
          />

          {/* Experience Box */}
          <div className="about-experience-box">
            <div className="absolute -top-2 -left-2 -right-2 -bottom-2 border-2 border-dashed border-red-700 rounded-[28px]" />
            <h3 className="text-[38px] font-extrabold relative z-10">5+</h3>
            <p className="text-[15px] relative z-10">Years Experience</p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <span className="inline-block text-[#000] text-sm font-bold uppercase tracking-[3px] mb-4">
            About Doctor
          </span>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-red-700">
            Welcome To{" "}
            <span className="text-[#00bcd4]">Dr. Ankur Shah Heart & Vascular Specialist</span>
          </h2>

          <p className="text-slate-600 text-[15px] leading-8 mb-5 text-justify">
            <span className="font-semibold text-[#00bcd4]">Dr. Ankur Shah</span> is a dedicated Heart and Vascular Specialist committed to providing comprehensive cardiovascular care with a patient-first approach.
          </p>

          <p className="text-slate-600 text-[15px] leading-8 mb-8 text-justify">
            At our center, we focus on{" "}
            <span className="font-semibold text-[#00bcd4]">preventive cardiology</span>, accurate diagnosis, and advanced treatment solutions for various heart and vascular diseases.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="flex items-center gap-3">
              <span className="text-[#00bcd4] text-xl">✔</span>
              <span className="text-slate-700 font-medium">Advanced Cardiac Care</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#00bcd4] text-xl">✔</span>
              <span className="text-slate-700 font-medium">Vascular Treatments</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#00bcd4] text-xl">✔</span>
              <span className="text-slate-700 font-medium">Preventive Cardiology</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#00bcd4] text-xl">✔</span>
              <span className="text-slate-700 font-medium">Personalized Patient Care</span>
            </div>
          </div>

          <Link
            to="/about"
            className="inline-flex items-center gap-2 bg-[#00bcd4] hover:bg-[#0097a7] text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  );
}