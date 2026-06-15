import "./ContactPage.css";
import PageBanner from "../components/PageBanner";
import bannerImg from "../image/pagebanner.png";

import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { Clock3 } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="contact-page">

      <PageBanner
        title="Contact Us"
        backgroundImage={bannerImg}
      />

      <section className="contact-section">

        <div className="contact-container">

          {/* LEFT SIDE */}
          <div className="contact-info">

            <h2>Get In Touch</h2>

            <div className="info-card">
              <CiLocationOn size={28} />
              <div>
                <h4>Address</h4>
                <p>
                  100-12 101st Ave
                  <br />
                  Ozone Park, NY 11416
                  <br />
                  United States
                </p>
              </div>
            </div>

            <div className="info-card">
              <IoMdCall size={28} />
              <div>
                <h4>Phone</h4>
                <p>(+917) 300-2728</p>
              </div>
            </div>

            <div className="info-card">
              <MdEmail size={28} />
              <div>
                <h4>Email</h4>
                <p>drankur@completeheartandvascularcare.com</p>
              </div>
            </div>

            <div className="info-card">
              <Clock3 size={28} />
              <div>
                <h4>Working Hours</h4>
                <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p>Saturday: 9:00 AM - 1:00 PM</p>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <div className="contact-form-box">

            <h2>Send Message</h2>

            <form className="contact-form">

              <input type="text" placeholder="Full Name" />
              <div className="form-row">
  <input name="email" placeholder="Email *" />
  <input name="phone" placeholder="Phone *" />
</div>
              <textarea rows="6" placeholder="Your Message"></textarea>

              <button type="submit">Send Message</button>

            </form>

          </div>

        </div>

      </section>

      {/* MAP */}
      <section className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.456!2d-73.843821!3d40.685306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c26758014ec2ab%3A0x4779d9a2d868e93f!2sDr.%20Ankur%20Shah!5e0!3m2!1sen!2sus!4v1720000000000"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Dr. Ankur Shah Location"
        ></iframe>
      </section>

    </div>
  );
}