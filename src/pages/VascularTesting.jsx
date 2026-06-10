
import "../styles/ServicePage.css";
import PageBanner from "../components/PageBanner";
import serviceImage from "../image/treat3.png";
import bannerImg from "../image/pagebanner.png";
import { HeartPulse } from "lucide-react";
import TreatmentSidebar from "../components/TreatmentSidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function VascularTesting() {
  return (
    <div className="service-page">
      <PageBanner
        title="Vascular Testing and Treatment"
        backgroundImage={bannerImg}
      />

      <section className="service-section">
        <div className="service-container">

          {/* LEFT CONTENT */}
          <div className="service-content">

            <img
              src={serviceImage}
              alt="Vascular Testing and Treatment"
              className="service-image"
            />

          <h1>Vascular Testing and Treatment</h1>

<p>
  Vascular testing involves specialized diagnostic procedures used to evaluate
  blood flow through arteries and veins. Early detection of vascular conditions
  helps prevent serious complications and supports effective treatment planning.
</p>

<h2>Warning Symptoms of Vascular Problems?</h2>

<div className="service-list">
  <p>
    <FontAwesomeIcon icon={faArrowRight} className="list-icon-red" />
    Leg Pain or Cramping: Pain while walking or exercising that improves with rest.
  </p>

  <p>
    <FontAwesomeIcon icon={faArrowRight} className="list-icon-red" />
    Swelling: Persistent swelling in the legs, ankles, or feet.
  </p>

  <p>
    <FontAwesomeIcon icon={faArrowRight} className="list-icon-red" />
    Varicose Veins: Enlarged, twisted veins that may cause discomfort or heaviness.
  </p>
</div>

<h2>Diagnostic Services</h2>

<p>
  Our clinic offers Doppler Ultrasound, Arterial & Venous Studies,
  Ankle-Brachial Index (ABI), Carotid Ultrasound, and comprehensive
  vascular assessments to accurately diagnose circulation disorders.
</p>

<h2>Common Vascular Diagnostic Tests</h2>

<div className="service-list">
  <p>
    <FontAwesomeIcon icon={faArrowRight} className="list-icon-red" />
    Doppler Ultrasound: Uses sound waves to evaluate blood flow through arteries and veins.
  </p>

  <p>
    <FontAwesomeIcon icon={faArrowRight} className="list-icon-red" />
    Ankle-Brachial Index (ABI): Compares blood pressure in the ankle and arm to detect peripheral artery disease.
  </p>
</div>

<h2>Treatment Options & Management</h2>

<div className="service-list">
  <p>
    <FontAwesomeIcon icon={faArrowRight} className="list-icon-red" />
    Lifestyle Modifications: Regular exercise, healthy diet, smoking cessation, and weight management.
  </p>

  <p>
    <FontAwesomeIcon icon={faArrowRight} className="list-icon-red" />
    Medications: Treatments to improve circulation, control blood pressure, lower cholesterol, or prevent blood clots.
  </p>

  <p>
    <FontAwesomeIcon icon={faArrowRight} className="list-icon-red" />
    Compression Therapy: Specialized stockings that improve blood flow and reduce swelling.
  </p>
</div>



            <div className="why-choose">
              <h2>Why Choose Us</h2>

              <div className="why-grid">

                <div className="why-card">
                  <h4>Advanced Diagnostics</h4>
                  <p>Modern vascular imaging and testing technology.</p>
                </div>

                <div className="why-card">
                  <h4>Specialized Expertise</h4>
                  <p>Experienced vascular and endovascular care.</p>
                </div>

                <div className="why-card">
                  <h4>Personalized Treatment</h4>
                  <p>Customized plans for every patient.</p>
                </div>

                <div className="why-card">
                  <h4>Comprehensive Care</h4>
                  <p>Complete support from diagnosis to recovery.</p>
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