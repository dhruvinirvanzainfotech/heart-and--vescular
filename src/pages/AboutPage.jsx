import "./AboutPage.css";
import doctorimage from "../image/image.png";
import bannerImg from "../image/pagebanner.png";
import PageBanner from "../components/PageBanner";
import { FaBullseye, FaEye } from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function AboutPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="about-page">

      {/* PAGE BANNER */}
      <PageBanner
        title="About"
       
        backgroundImage={bannerImg}
      />

      {/* ABOUT SECTION */}
      <section className="about-section">
        <div className="about-container">

          <div
            className="about-image"
            data-aos="fade-right"
          >
            <div className="about-ring-wrapper">

              <div className="about-ring outer-ring"></div>

              <div className="about-ring inner-ring"></div>

              <div className="doctor-circle">
                <img
                  src={doctorimage}
                  alt="Dr. Ankur Shah"
                />
              </div>

              <div className="experience-badge">
                <h3>5+</h3>
                <p>Years Experience</p>
              </div>

            </div>
          </div>
          <div
            className="about-content"
            data-aos="fade-left"
          >
            <span>HEART & VASCULAR SPECIALIST</span>

            <h2>
             Welcome To Dr. Ankur Shah Heart & Vascular Specialist
            </h2>

            <p>
               <strong>Dr. Ankur Shah </strong> is a highly skilled and dedicated
              Heart & Vascular Specialist committed to delivering exceptional
              cardiovascular care With expertise in diagnosing
              and treating complex heart and vascular conditions, he combines
               advanced medical knowledge,<strong>
               cutting-edge technology </strong> and compassionate
              patient care to achieve the best possible outcomes.
            </p>

            <p>
              From routine heart health screenings and
               preventive cardiology consultations to
              <strong> advanced diagnostic procedures</strong> and
              vascular interventions, Dr. Shah is dedicated to helping patients
              maintain a <strong>healthier heart</strong> and improve their
              overall quality of life.
            </p>

            <p>
              By combining evidence-based medicine with a
               patient-first philosophy, he strives to build
              lasting relationships with patients while providing
               comprehensive cardiovascular care at every stage
              of their cardiovascular journey.
            </p>
            <div className="about-features">
              <div>✔ Advanced Cardiac Diagnostics</div>
              <div>✔ Preventive Heart Care</div>
              <div>✔ Vascular Disease Management</div>
              <div>✔ Personalized Treatment Plans</div>
            </div>


          </div>

        </div>
      </section>

      {/* STATS */}


      {/* MISSION & VISION */}
      <section className="mission-section">

        <div
          className="mission-box"
          data-aos="fade-right"
        >
          <div className="mission-icon">
            <FaBullseye />
          </div>

          <h3>Our Mission</h3>

          <p>
            To provide world-class cardiac and vascular care through
            innovation, precision, and compassionate patient treatment.
          </p>
        </div>

        <div
          className="mission-box"
          data-aos="fade-left"
        >
          <div className="mission-icon">
            <FaEye />
          </div>

          <h3>Our Vision</h3>

          <p>
            To become a trusted leader in cardiovascular healthcare,
            improving lives through excellence, innovation, and
            preventive medicine.
          </p>
        </div>

      </section>
      {/* WHY CHOOSE US */}
      <section className="why-section">

        <h2 data-aos="fade-up">
          Why Choose  <span>Dr. Ankur Shah?</span>
        </h2>

        <div
          className="why-grid"
          data-aos="fade-up"
        >
          <div>✔ Personalized Treatment Plans</div>
          <div>✔ Advanced Diagnostic Technology</div>
          <div>✔ Evidence-Based Cardiac Care</div>
          <div>✔ Compassionate Patient Support</div>
          <div>✔ Preventive Heart Health Focus</div>
          <div>✔ Modern Vascular Treatments</div>
        </div>

      </section>

      {/* QUOTE */}


    </div>
  );
}