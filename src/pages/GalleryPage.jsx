import { useState } from "react";
import "./GalleryPage.css";
import { Eye } from "lucide-react";
import PageBanner from "../components/PageBanner";
import bannerImg from "../image/pagebanner.png";

import img1 from "../image/gallery1.png";
import img2 from "../image/gallery3.png";
import img3 from "../image/gallery3.png";
import img4 from "../image/gallery4.png";
import treat1 from "../image/treat1.png";
import treat2 from "../image/treat2.png";
import treat3 from "../image/treat3.png";
import treat4 from "../image/treat4.png";
import treatment1 from "../image/treatment1.png";


export default function GalleryPage() {
  const images = [
    img1,
    img2,
    img3,
    img4,
    treat1,
    treat2,
    treat3,
    treat4,
    treatment1,
  ];

  const [currentIndex, setCurrentIndex] = useState(null);

  const openImage = (index) => {
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setCurrentIndex(null);
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className="gallery-page">

      <PageBanner
        title="Gallery"
        backgroundImage={bannerImg}
      />

      <section className="gallery-section">

        <div className="gallery-heading">
          <span>OUR GALLERY</span>



          
        </div>

        <div className="gallery-grid">
          {images.map((img, index) => (
            <div
              className="gallery-card"
              key={index}
              onClick={() => openImage(index)}
            >
              <img src={img} alt={`Gallery ${index + 1}`} />

              <div className="gallery-overlay">
                <div className="gallery-icon">
                  <Eye size={28} />
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {currentIndex !== null && (
        <div className="gallery-modal">

          <button
            className="close-btn"
            onClick={closeModal}
          >
            ✕
          </button>

          <button
            className="arrow-btn left-arrow"
            onClick={prevImage}
          >
            ❮
          </button>

          <img
            src={images[currentIndex]}
            alt="Preview"
            className="modal-image"
          />

          <button
            className="arrow-btn right-arrow"
            onClick={nextImage}
          >
            ❯
          </button>

        </div>
      )}

    </div>
  );
}