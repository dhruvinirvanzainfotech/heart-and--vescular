import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Quote } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";
import "./TestimonialsPage.css";

import Main from "../image/user-testi.png";

const testimonials = [
  { name: "Monir", text: "Doctor is good , he may talk less." },
  { name: "Domingo Rivera", text: "One of the best cardiologist recommend" },
  {
    name: "Marie Venza",
    text: "Incredible dedicated physician. Answers your call immediately. Highly recommend Dr Ankur Shah and staff.",
  },
  {
    name: "Karandeep Singh",
    text: "Staff is very polite and caring. Dr Shah is very professional.",
  },
  {
    name: "Rudolph Persaud",
    text: "Great place, excellent doctor and staff.",
  },
];

export default function TestimonialsPage() {
  return (
    <section className="testimonials-page">

      {/* Background */}
      <div className="bg-glow top-left"></div>
      <div className="bg-glow right"></div>
      <div className="bg-glow bottom"></div>

      {/* Header */}
      <div className="testimonials-header">
        <span>TESTIMONIALS</span>
        <h2>What Our Patients Say</h2>
        <p>
          Hear from our patients about their experience with our cardiac and vascular care.
        </p>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={25}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="testimonial-swiper"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">

              <Quote className="quote-icon" size={42} />

              <p className="testimonial-text">{item.text}</p>

              <div className="testimonial-user">
                <img src={Main} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <p>Patient</p>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}