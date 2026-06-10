import "../styles/ServicePage.css";
import PageBanner from "../components/PageBanner";
import serviceImage from "../image/treat1.png";
import bannerImg from "../image/pagebanner.png";
import { HeartPulse } from "lucide-react";
import TreatmentSidebar from "../components/TreatmentSidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function CardiacTesting() {
  return (
    <div className="service-page">
      <PageBanner
        title="Cardiac Testing & Treatment"

        backgroundImage={bannerImg}
      />

      <section className="service-section">
        <div className="service-container">

          {/* LEFT CONTENT */}
         <div className="service-content">

  <img
    src={serviceImage}
    alt="Cardiac Testing & Treatment"
    className="service-image"
  />

  <h1>Cardiac Testing & Treatment</h1>

  <p>
    Cardiac testing involves specialized diagnostic procedures and targeted
    treatment strategies to evaluate heart health, identify cardiovascular
    conditions, and guide effective treatment plans.
  </p>

  <h2>Warning Symptoms of Cardiac Issues?</h2>

<div className="service-list">
  <p><FontAwesomeIcon icon={faArrowRight} className="list-icon-red" /> Chest Discomfort: Pain, tightness, pressure, or a squeezing sensation in the center of the chest.</p>

  <p><FontAwesomeIcon icon={faArrowRight} className="list-icon-red" /> Radiating Pain: Discomfort that spreads to the arms, back, neck, jaw, or upper abdomen.</p>

  <p><FontAwesomeIcon icon={faArrowRight} className="list-icon-red" /> Palpitations: A feeling that your heart is fluttering, racing, or beating too hard.</p>

  <p><FontAwesomeIcon icon={faArrowRight} className="list-icon-red" /> Shortness of Breath: Difficulty breathing during activ or while resting.</p>

  <p><FontAwesomeIcon icon={faArrowRight} className="list-icon-red" /> Dizziness: Feeling lightheaded, weak, or faint.</p>
</div>

<h2>Diagnostic Services</h2>

<p>
  Our clinic offers ECG, Echocardiography, Stress Testing, Holter Monitoring,
  Blood Pressure Monitoring, and advanced cardiovascular assessments.
</p>

<h2>Common Cardiac Diagnostic Tests</h2>

<div className="service-list">
  <p><FontAwesomeIcon icon={faArrowRight} className="list-icon-red" /> Echocardiogram: A non-invasive ultrasound that provides detailed images of the heart's pumping strength and valve functions.</p>

  <p><FontAwesomeIcon icon={faArrowRight} className="list-icon-red" /> Cardiac Catheterization (Angiogram): Uses contrast dye and X-ray imaging to identify blocked or narrowed arteries.</p>

  <p><FontAwesomeIcon icon={faArrowRight} className="list-icon-red" /> Stress Test: Evaluates heart performance during physical activ and detects circulation problems.</p>

  <p><FontAwesomeIcon icon={faArrowRight} className="list-icon-red" /> Holter Monitoring: Continuous heart rhythm monitoring to identify irregular heartbeats.</p>
</div>

<h2>Treatment Options & Management</h2>

<div className="service-list">
  <p><FontAwesomeIcon icon={faArrowRight} className="list-icon-red" /> Lifestyle Modifications: Following a heart-healthy diet, exercising regularly, managing stress, and quitting smoking.</p>

  <p><FontAwesomeIcon icon={faArrowRight} className="list-icon-red" /> Medications: Prescribed to control blood pressure, cholesterol, heart rhythm, and blood clotting.</p>

  <p><FontAwesomeIcon icon={faArrowRight} className="list-icon-red" /> Cardiac Rehabilitation: A medically supervised program combining exercise, education, and lifestyle counseling.</p>

  <p><FontAwesomeIcon icon={faArrowRight} className="list-icon-red" /> Preventive Care: Regular monitoring and follow-up assessments to reduce future cardiovascular risks.</p>
</div>

<h2>Benefits of Early Detection</h2>

<div className="service-list">
  <p><FontAwesomeIcon icon={faArrowRight} className="list-icon-red" /> Early diagnosis of heart disease and circulation disorders.</p>

  <p><FontAwesomeIcon icon={faArrowRight} className="list-icon-red" /> Reduced risk of heart attack and stroke.</p>

  <p><FontAwesomeIcon icon={faArrowRight} className="list-icon-red" /> Improved treatment outcomes and qual of life.</p>

  <p><FontAwesomeIcon icon={faArrowRight} className="list-icon-red" /> Better long-term cardiovascular health management.</p>
</div>

  <div className="why-choose">
    <h2>Why Choose Us</h2>

    <div className="why-grid">

      <div className="why-card">
        <h4>Uncompromised Precision in Cardiac Diagnostics</h4>
        <p>
          We pair cutting-edge cardiovascular imaging technology with expert clinical insight.
        </p>
      </div>

      <div className="why-card">
        <h4>Whole-Person Heart Care</h4>
        <p>
          Our cardiology team focuses on both preventive screenings and evidence-based treatments.
        </p>
      </div>

      <div className="why-card">
        <h4>Trusted Experts in Cardiovascular Excellence</h4>
        <p>
          Entrust your heart to a team of internationally trained cardiologists and electrophysiologists.
        </p>
      </div>

      <div className="why-card">
        <h4>Reassuring & Compassionate Care</h4>
        <p>
          We provide calm, empathetic, and professional guidance throughout your cardiac care journey.
        </p>
      </div>

    </div>
  </div>

</div>

          {/* RIGHT SIDEBAR */}
          <TreatmentSidebar />

        </div>
      </section>

    </div>
  );
}