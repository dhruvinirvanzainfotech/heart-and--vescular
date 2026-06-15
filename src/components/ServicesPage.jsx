import { useNavigate } from "react-router-dom";
import "./ServicesPage.css";

import Treatment1 from "../image/Treatment1.png";
import Treatment2 from "../image/Treatment2.png";
import Treatment3 from "../image/Treatment3.png";
import Treatment4 from "../image/Treatment4.png";

const services = [
  {
    id: "cardiac",
    path: "/treatment/cardiactesting",
    image: Treatment1,
    title: "Cardiac Testing & Treatment",
    desc: "Advanced cardiac diagnostics and expert heart care services.",
  },
  {
    id: "vascular",
    path: "/treatment/varicose-veins",
    image: Treatment2,
    title: "Varicose Veins, Ulcer and Lymphedema Treatment Center",
    desc: "Professional vascular testing and minimally invasive procedures.",
  },
  {
    id: "varicose",
    path: "/treatment/vascular-testing",
    image: Treatment3,
    title: "Vascular Testing and Treatment",
    desc: "Modern vein treatments and lymphedema therapy solutions.",
  },
  {
    id: "nutrition",
    path: "/treatment/nutrition-counseling",
    image: Treatment4,
    title: "Nutrition Counseling",
    desc: "Comprehensive nutrition guidance for better heart and vascular health.",
  },
];

export default function ServicesPage() {
  const navigate = useNavigate();

  return (
    <section className="services-page">

      <div className="services-header">
        <h2>Our Treatments</h2>
        <p>Expert Heart & Vascular Care</p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div
            key={service.id}
            className="service-card"
            onClick={() => navigate(service.path)}
          >
            <div className="service-img">
              <img src={service.image} alt={service.title} />
            </div>

            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.desc}</p>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(service.path);
                }}
              >
                View More →
              </button>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}