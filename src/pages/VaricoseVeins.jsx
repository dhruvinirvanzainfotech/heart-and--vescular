  import "../styles/ServicePage.css";
  import PageBanner from "../components/PageBanner";
  import serviceImage from "../image/treat2.png"; // change image
  import bannerImg from "../image/pagebanner.png";
  import { HeartPulse } from "lucide-react";
  import TreatmentSidebar from "../components/TreatmentSidebar";
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

  export default function VaricoseVeins() {
    return (
      <div className="service-page">
        <PageBanner
          title="Varicose Veins, Ulcer and Lymphedema Treatment Center"
          backgroundImage={bannerImg}
        />

        <section className="service-section">
          <div className="service-container">

            {/* LEFT CONTENT */}
            <div className="service-content">

              <img
                src={serviceImage}
                alt="Varicose Veins Treatment"
                className="service-image"
              />

              <h1>Varicose Veins,Ulcer and Lymphedema Treatment Center</h1>

              <p>
                Varicose veins, chronic ulcers, and lymphedema are vascular conditions that
                can cause pain, swelling, skin changes, and reduced mobility. Early diagnosis
                and proper treatment help improve circulation and prevent complications.
              </p>

            <h2>Warning Symptoms of Venous & Lymphatic Disorders?</h2>

  <div className="service-list">

    <p>
      <FontAwesomeIcon icon={faArrowRight} className="list-icon-red" />
      Leg Heaviness: A feeling of tired, aching, or heavy legs, especially after standing.
    </p>

    <p>
      <FontAwesomeIcon icon={faArrowRight} className="list-icon-red" />
      Swelling: Persistent swelling in the legs, ankles, or feet.
    </p>

    <p>
      <FontAwesomeIcon icon={faArrowRight} className="list-icon-red" />
      Visible Varicose Veins: Enlarged, twisted, or bulging veins under the skin.
    </p>

  </div>

  <h2>Conditions We Treat</h2>

  <p>
    Our center specializes in the diagnosis and treatment of:
  </p>

  <div className="service-list">

    <p>
      <FontAwesomeIcon icon={faArrowRight} className="list-icon-red" />
      Varicose Veins
    </p>

    <p>
      <FontAwesomeIcon icon={faArrowRight} className="list-icon-red" />
      Chronic Venous Insufficiency
    </p>

    <p>
      <FontAwesomeIcon icon={faArrowRight} className="list-icon-red" />
      Venous Leg Ulcers
    </p>

  </div>

  <h2>Treatment Options & Management</h2>

  <div className="service-list">

    <p>
      <FontAwesomeIcon icon={faArrowRight} className="list-icon-red" />
      Compression Therapy: Specialized stockings to improve circulation and reduce swelling.
    </p>

    <p>
      <FontAwesomeIcon icon={faArrowRight} className="list-icon-red" />
      Endovenous Laser Treatment (EVLT): Minimally invasive treatment for varicose veins.
    </p>

    <p>
      <FontAwesomeIcon icon={faArrowRight} className="list-icon-red" />
      Radiofrequency Ablation (RFA): Advanced vein closure treatment with minimal discomfort.
    </p>

    <p>
      <FontAwesomeIcon icon={faArrowRight} className="list-icon-red" />
      Ultrasound-Guided Procedures: Precise treatment of diseased veins using imaging guidance.
    </p>

  </div>

  <h2>Benefits of Early Treatment</h2>

  <div className="service-list">

    <p>
      <FontAwesomeIcon icon={faArrowRight} className="list-icon-red" />
      Prevents progression of venous disease.
    </p>

    <p>
      <FontAwesomeIcon icon={faArrowRight} className="list-icon-red" />
      Reduces pain, swelling, and discomfort.
    </p>

    <p>
      <FontAwesomeIcon icon={faArrowRight} className="list-icon-red" />
      Improves mobility and daily activities.
    </p>

  </div>
              
              <div className="why-choose">
                <h2>Why Choose Us</h2>

                <div className="why-grid">
                  <div className="why-card">
                    <h4>Advanced Diagnostics</h4>
                    <p>Accurate vascular and lymphatic assessments.</p>
                  </div>

                  <div className="why-card">
                    <h4>Specialized Expertise</h4>
                    <p>Experienced vascular and wound care specialists.</p>
                  </div>

                  <div className="why-card">
                    <h4>Minimally Invasive Care</h4>
                    <p>Modern treatment options with faster recovery.</p>
                  </div>

                  <div className="why-card">
                    <h4>Comprehensive Support</h4>
                    <p>Complete care from diagnosis through recovery.</p>
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