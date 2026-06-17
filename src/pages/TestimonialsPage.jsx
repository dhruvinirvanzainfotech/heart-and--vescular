import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import PageBanner from "../components/PageBanner";
import bannerImg from "../image/pagebanner.png";

import { Quote } from "lucide-react";
import "./TestimonialsPage.css";

import Main from "../image/user-testi.png";

const testimonials = [
  {
  name: "Syed Shah",
  text: `I cannot recommend Dr. Ankur Shah highly enough. From the moment we stepped into his office, I felt a sense of calm and confidence, which is exactly what you need when dealing with heart and vascular concerns.

Dr. Shah is not only brilliant and clearly a leading expert in his field, but he also possesses a rare quality: genuine compassion.

He took the time—never rushing—to listen intently to all of my symptoms and concerns. He then explained the diagnosis and the proposed treatment plan in clear, easy-to-understand language, patiently answering every question my family and I had.

He ensured we fully understood what was happening and what to expect next.

The follow-up care has been thorough and proactive. I truly feel like we have a partner in managing our cardiovascular health.

If you are looking for a doctor who combines top-tier medical expertise with an outstanding bedside manner and clear communication, look no further than Dr. Ankur Shah. He is a truly exceptional physician.`,
},
{
    name: "J Ramos",
    text: "I have the most respect for Dr Shah, he is kind, smart and compassionate. However his practice and the “students” that he hires doesn’t make his practice like a real doctor office. The students, don’t follow up, reminder call, or give him any messages. I am also put off by the over crowdedness.",
  },
  {
    name: "Marlein Diaz",
    text: "I need to take time to tell everyone here thank you I appreciate all the hard you guys did as a team to take care of my health and to Dr Ankur Shah I want to thank you as well for taking me in as a new patient and understanding.",
  },
  {
    name: "Sharon Spencer",
    text: "This place is small and sometimes there's no place to sit. They do NOT honor appointments.You make an appointment and you dont get seen until an hour or more later. It is a walk in first come first serve office. That is not how you treat patients.",
  },
  {
    name: "Marilyn Brito",
    text: "The staff is polite, caring and  exceptional! Dr Shah is very professiona.  polite and provided simple explantions.   I did waited a bit , but that was understandable, i did Not had an appointment appointment.  Thanks Dr Shah it was a great experience.",
  },
   {
    name: "Marie Venza",
    text: "Incredible dedicated physician. Answers your call immediately. Like no other. Highly recommend Dr ankur Shaw and staff .",
  },
  
  {
    name: "Karandeep Singh",
    text: "Staff is very polite and caring. Dr Shah is very professional and good nature.",
  },
   {
    name: "Domingo Rivera",
    text: "One of the best for cardiologist recommend.",
  },
   {
    name: "Rudolph Persaud",
    text: "Great place, excellent doctor and staff.",
  },
   {
    name: "Monir",
    text: "Doctor is good , he may talk less.",
  },
];

export default function TestimonialsPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="testimonials-page">
      <PageBanner title="Testimonials" backgroundImage={bannerImg} />

      <section className="testimonials-section">
        <div className="testimonials-container">
          <div className="testimonials-header" data-aos="fade-up">
            
          </div>

          <div className="testimonials-grid">
            {testimonials.map((item, index) => (
              <div 
                key={index} 
                className="testimonial-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="testimonial-header">
                  <div className="avatar">
                    <img src={Main} alt={item.name} />
                  </div>
                  <h3 className="testimonial-name">{item.name}</h3>
                </div>

              

                <p className="testimonial-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}