import "../styles/ServicePage.css";
import PageBanner from "../components/PageBanner";
import serviceImage from "../image/treat4.png";
import bannerImg from "../image/pagebanner.png";
import TreatmentSidebar from "../components/TreatmentSidebar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function NutritionCounseling() {
  return (
    <div className="service-page">
      <PageBanner
        title="Nutrition Counseling"
        backgroundImage={bannerImg}
      />

      <section className="service-section">
        <div className="service-container">

          <div className="service-content">

            <img
              src={serviceImage}
              alt="Nutrition Counseling"
              className="service-image"
            />

            <h1>Nutrition Counseling</h1>

            <p>
              Proper nutrition plays a vital role in maintaining overall health,
              supporting heart and vascular wellness, and preventing chronic diseases.
              Personalized nutrition counseling helps patients make informed food choices
              and achieve long-term health goals.
            </p>

            <h2>Who Can Benefit From Nutrition Counseling?</h2>

            <div className="service-list">
              <p>
                <FontAwesomeIcon icon={faArrowRight} className="list-icon-red" />
                Heart Disease Patients: Improve cardiovascular health through a heart-friendly diet.
              </p>

              <p>
                <FontAwesomeIcon icon={faArrowRight} className="list-icon-red" />
                High Blood Pressure: Learn dietary strategies to help manage hypertension.
              </p>
            </div>

            <h2>Our Nutrition Services</h2>

            <div className="service-list">
              <p>
                <FontAwesomeIcon icon={faArrowRight} className="list-icon-red" />
                Personalized Meal Planning tailored to individual health goals.
              </p>

              <p>
                <FontAwesomeIcon icon={faArrowRight} className="list-icon-red" />
                Weight Management Programs for sustainable lifestyle changes.
              </p>

              <p>
                <FontAwesomeIcon icon={faArrowRight} className="list-icon-red" />
                Heart-Healthy Diet Counseling to support cardiovascular wellness.
              </p>

              <p>
                <FontAwesomeIcon icon={faArrowRight} className="list-icon-red" />
                Diabetes Nutrition Guidance for better blood sugar control.
              </p>
            </div>

            <h2>Personalized Nutrition Plans</h2>

            <p>
              We create customized nutrition plans based on your medical history,
              lifestyle, dietary preferences, and wellness objectives to ensure
              practical and sustainable results.
            </p>

            <h2>Treatment & Lifestyle Management</h2>

            <div className="service-list">
              <p>
                <FontAwesomeIcon icon={faArrowRight} className="list-icon-red" />
                Balanced Diet Planning focused on essential nutrients and portion control.
              </p>

              <p>
                <FontAwesomeIcon icon={faArrowRight} className="list-icon-red" />
                Healthy Eating Education to build lifelong habits.
              </p>

              <p>
                <FontAwesomeIcon icon={faArrowRight} className="list-icon-red" />
                Lifestyle Modification Counseling for long-term wellness.
              </p>
            </div>

            <h2>Benefits of Nutrition Counseling</h2>

            <div className="service-list">
              <p>
                <FontAwesomeIcon icon={faArrowRight} className="list-icon-red" />
                Improved Energy Levels and overall well-being.
              </p>

              <p>
                <FontAwesomeIcon icon={faArrowRight} className="list-icon-red" />
                Better Weight Management and metabolism.
              </p>

              <p>
                <FontAwesomeIcon icon={faArrowRight} className="list-icon-red" />
                Enhanced Quality of Life through healthier eating habits.
              </p>
            </div>

            <div className="why-choose">
              <h2>Why Choose Us</h2>

              <div className="why-grid">

                <div className="why-card">
                  <h4>Personalized Guidance</h4>
                  <p>Nutrition plans tailored to your unique health needs.</p>
                </div>

                <div className="why-card">
                  <h4>Heart-Healthy Focus</h4>
                  <p>Specialized dietary support for cardiovascular wellness.</p>
                </div>

                <div className="why-card">
                  <h4>Practical Solutions</h4>
                  <p>Realistic recommendations for everyday life.</p>
                </div>

                <div className="why-card">
                  <h4>Long-Term Wellness</h4>
                  <p>Helping patients build sustainable healthy habits.</p>
                </div>

              </div>
            </div>

          </div>

          <TreatmentSidebar />

        </div>
      </section>
    </div>
  );
}