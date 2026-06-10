import Main from "../image/user-testi.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Quote } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Sharon Spencer",
    text: "This place is small and sometimes there's no place to sit. They do NOT honor appointments. You make an appointment and you dont get seen until an hour or more later. It is a walk in first come first serve office. That is not how you treat patients.",
  },
  {
    name: "Marilyn Brito",
    text: "The staff is polite, caring and exceptional! Dr Shah is very professiona. polite and provided simple explantions. I did waited a bit , but that was understandable, i did Not had an appointment appointment. Thanks Dr Shah it was a great experience",
  },
  {
    name: "Marie Venza",
    text: "Incredible dedicated physician. Answers your call immediately. Like no other. Highly recommend Dr ankur Shaw and staff .",
  },
  {
    name: "Karandeep Singh",
    text: "Staff is very polite and caring. Dr shah is very professional and good nature.",
  },
  {
    name: "Rudolph Persaud",
    text: "This is a great place, Dr takes care of you and hi staff He is an excellent Dr",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 px-5 overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-sky-50">
      {/* Background Glows */}
      <div className="absolute -top-20 -left-20 w-[450px] h-[450px] bg-cyan-200/30 rounded-full blur-[150px]" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-sky-200/30 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-100/40 rounded-full blur-[180px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.08),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.08),transparent_40%)]" />

      <div className="relative z-10 max-w-8xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block text-black text-sm font-bold uppercase tracking-[3px] mb-4">
            TESTIMONIALS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5">
            What Our <span className="text-red-700">Patients Say</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600 text-[15px] md:text-base leading-7">
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
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="testimonial-swiper"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index} className="h-auto pb-4">
              <div className="testimonial-card">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote
                    size={42}
                    className="text-cyan-500 opacity-30"
                    strokeWidth={2.5}
                  />
                </div>

                {/* Review Text */}
                <p className="text-slate-800 font-semibold-300 leading-relaxed text-[15px] mb-8 flex-grow text-justify tracking-tight">
                  {item.text}
                </p>

                {/* User Info */}
                <div className="flex items-center gap-4 border-t border-slate-100 pt-6 mt-auto">
                  <img
                    src={Main}
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover ring-4 ring-cyan-100"
                  />
                  <div>
                    <h4 className="font-semibold text-slate-900 text-[16px]">
                      {item.name}
                    </h4>
                    <p className="text-sm text-slate-500">Patient</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Pagination Styles */}
      <style jsx>{`
        .testimonial-swiper .swiper-slide {
          height: auto;
        }

        .testimonial-card {
          height: 100%;
          display: flex;
          flex-direction: column;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.6);
          border-radius: 30px;
          padding: 28px;
          box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.05);
          transition: all 0.5s ease;
        }

        .testimonial-card:hover {
          box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
          transform: translateY(-8px);
        }

      .testimonial-swiper {
  padding-bottom: 50px; /* Space for bullets */
}

.testimonial-swiper .swiper-pagination {
  bottom: 10px !important;
}

.testimonial-swiper .swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  background: #cbd5e1;
  opacity: 1;
  margin: 0 4px !important;
}

.testimonial-swiper .swiper-pagination-bullet-active {
  background: #06b6d4;
  width: 24px;
  border-radius: 9999px;
}
        }
      `}</style>
    </section>
  );
}