import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { Eye } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import gallery1 from "../image/gallery1.png";
import gallery2 from "../image/gellery1.png";
import gallery3 from "../image/gallery3.png";
import gallery4 from "../image/gallery4.png";

const images = [gallery1, gallery2, gallery3, gallery4];

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  const prev = () =>
    setLightbox((i) => (i - 1 + images.length) % images.length);

  const next = () =>
    setLightbox((i) => (i + 1) % images.length);

  return (
    <section className="pb-0 pt-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">
        
        {/* Header */}
        <div className="text-center mb-12">
          

          <h2 className="text-3xl md:text-5xl font-bold text-black-700">
            Our  <span className="text-red-700">Gallery</span>
          </h2>

          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Explore our clinic, treatment facilities, and patient care environment.
          </p>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop
          spaceBetween={24}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          style={{
            paddingBottom: "60px",
          }}
        >
          {images.map((src, i) => (
            <SwiperSlide key={i}>
              <div
                onClick={() => setLightbox(i)}
                className="
                  relative
                  overflow-hidden
                  rounded-3xl
                  cursor-pointer
                  aspect-[4/3]
                  group
                  shadow-md
                "
              >
                {/* Image */}
                <img
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-all
                    duration-700
                    group-hover:scale-110
                  "
                />

                {/* Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-black/40
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-500
                    flex
                    items-center
                    justify-center
                  "
                >
                  <div
                    className="
                      w-13
                      h-13
                      rounded-full
                      bg-white
                      flex
                      items-center
                      justify-center
                      shadow-xl
                      scale-75
                      group-hover:scale-100
                      transition-all
                      duration-500
                    "
                  >
                    <Eye
                      size={28}
                      className="text-cyan-600"
                      strokeWidth={2.5}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="
            fixed
            inset-0
            z-[9999]
            bg-black/90
            flex
            items-center
            justify-center
          "
          onClick={() => setLightbox(null)}
        >
          {/* Close */}
          <button
            onClick={() => setLightbox(null)}
            className="
              absolute
              top-5
              right-5
              w-12
              h-12
              rounded-full
              bg-white/10
              hover:bg-white/20
              text-white
              text-xl
              flex
              items-center
              justify-center
              transition-all
            "
          >
            ✕
          </button>

          {/* Previous */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="
              absolute
              left-5
              w-12
              h-12
              rounded-full
              bg-white/20
              hover:bg-white/40
              text-white
              text-2xl
              flex
              items-center
              justify-center
              transition-all
            "
          >
            ←
          </button>

          {/* Image */}
          <img
            src={images[lightbox]}
            alt=""
            onClick={(e) => e.stopPropagation()}
            className="
              max-h-[85vh]
              max-w-[90vw]
              object-contain
              rounded-2xl
            "
          />

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="
              absolute
              right-5
              w-12
              h-12
              rounded-full
              bg-white/20
              hover:bg-white/40
              text-white
              text-2xl
              flex
              items-center
              justify-center
              transition-all
            "
          >
            →
          </button>

          {/* Counter */}
          <div className="absolute bottom-6 text-white text-sm font-medium">
            {lightbox + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
  );
}