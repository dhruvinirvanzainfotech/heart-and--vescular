import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Quote } from "lucide-react";
import Main from "../image/user-testi.png";
import "swiper/css";
import "swiper/css/pagination";
import "./Testimonials.css";

const testimonials = [
  { name: "Monir", text: "Doctor is good, he may talk less." },
  { name: "Domingo Rivera", text: "One of the best for cardiologist recommend" },
  { name: "Marie Venza", text: "Incredible dedicated physician. Answers your call immediately. Like no other. Highly recommend Dr ankur Shaw and staff." },
  { name: "Karandeep Singh", text: "Staff is very polite and caring. Dr shah is very professional and good nature." },
  { name: "Rudolph Persaud", text: "This is a great place, Dr takes care of you and his staff. He is an excellent Dr." },
];

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        {/* Heading */}
        <div className="testimonials-heading">
          <span>TESTIMONIALS</span>
          <h2>
            What Our <span className="highlight">Patients Say</span>
          </h2>
          <p>
            Hear from our valued patients about their experience with our expert cardiac and vascular care services.
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={25}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="testimonials-swiper"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card">
                <div className="testimonial-card-inner">
                  <Quote size={50} className="testimonial-quote" />

                  <p className="testimonial-text">{item.text}</p>

                  <div className="testimonial-user">
                    <img
                      src={Main}
                      alt={item.name}
                      className="testimonial-avatar"
                    />
                    <div>
                      <h4 className="testimonial-name">{item.name}</h4>
                      <p className="text-slate-500 text-sm">Patient</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}