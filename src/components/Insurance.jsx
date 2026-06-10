import "./Insurance.css";


import unitedhealthcare from "../image/unitedhealthcare.png"
// import Humana from "../image/insurance/humana.png";
// import Medicare from "../image/insurance/medicare.png";
// import Medicaid from "../image/insurance/medicaid.png";
// import United from "../image/insurance/united.png";
// import Wellcare from "../image/insurance/wellcare.png";

const insurances = [
  { image: unitedhealthcare, },
  { image: unitedhealthcare },
  { image: unitedhealthcare },
  { image: unitedhealthcare },
  { image: unitedhealthcare },
  { image: unitedhealthcare },
  { image: unitedhealthcare },
  { image: unitedhealthcare },
  { image: unitedhealthcare },
  { image: unitedhealthcare },
  { image: unitedhealthcare },
  { image: unitedhealthcare },
  { image: unitedhealthcare },
  { image: unitedhealthcare },
  { image: unitedhealthcare },

  { image: unitedhealthcare },

];

export default function Insurance() {
  return (
    <div className="insurance-page">
      {/* Banner */}
      <section className="insurance-banner">
        <div className="insurance-overlay">
          <h1>Insurance Plans Accepted</h1>
        </div>
      </section>

      {/* Intro */}
      

      {/* Insurance Grid */}
      <section className="insurance-list-section">
        <div className="container">
          <h2>Insurance Providers</h2>

          <div className="insurance-grid">
            {insurances.map((insurance, index) => (
              <div key={index} className="insurance-card">
                <img
                  src={insurance.image}
                  alt={insurance.name}
                  className="insurance-logo"
                />
                <h3>{insurance.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      
    </div>
  );
}