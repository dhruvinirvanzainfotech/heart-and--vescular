import { useNavigate } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Locations", to: "/locations" },
  { label: "Insurance", to: "/insurance" },
  { label: "Contact Us", to: "/contact" },
];

const services = [
  {
    label: "Cardiac Testing",
    id: "cardiac",
  },
  {
    label: "Vascular Treatment",
    id: "vascular",
  },
  {
    label: "Varicose Vein Care",
    id: "varicose",
  },
  {
    label: "Nutrition Counseling",
    id: "nutrition",
  },
];

export default function Footer() {

  const navigate = useNavigate();

  // PAGE TOP SCROLL
  const goToPage = (path) => {

    navigate(path);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // SERVICE PAGE TOP SCROLL
  const goService = (id) => {

    navigate(`/services/${id}`);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="
        relative
        overflow-hidden
        rounded-t-[70px]
        mt-20
        text-white
        bg-cover
        bg-center
      "
      style={{
        backgroundImage:
          "linear-gradient(rgba(3,10,18,0.88), rgba(3,10,18,0.92)), url('/image/banner1.jpg')",
      }}
    >

      {/* GLASS OVERLAY */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"></div>

      {/* LIGHT EFFECTS */}
      <div className="absolute top-[-100px] left-[-100px] w-[260px] h-[260px] bg-cyan-400/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-[-100px] right-[-100px] w-[260px] h-[260px] bg-sky-400/10 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-16">

        {/* TOP BOX */}
        <div
          className="
            mb-14
            bg-white/5
            border
            border-white/10
            rounded-[35px]
            backdrop-blur-xl
            p-8
            flex
            flex-col
            lg:flex-row
            items-center
            justify-between
            gap-8
          "
        >

          {/* LEFT */}
          <div className="flex items-center gap-5">

            <div className="bg-white rounded-3xl p-4 shadow-2xl">

              <img
                src="/image/logo3.png"
                alt="logo"
                className="h-20 object-contain"
              />

            </div>

            <div>

              <h2 className="text-3xl font-bold text-white mb-2">
                Dr. Ankur Shah
              </h2>

              <p className="text-cyan-300 text-lg">
                Heart & Vascular Specialist
              </p>

            </div>
          </div>

          {/* BUTTON */}
          <button
            onClick={() => goToPage("/appointment")}
            className="
              px-8
              py-4
              rounded-full
              bg-gradient-to-r
              from-cyan-500
              to-sky-600
              text-white
              font-bold
              text-[15px]
              border-none
              cursor-pointer
              hover:scale-105
              transition-all
              duration-300
              shadow-[0_10px_30px_rgba(0,180,255,0.35)]
            "
          >
            Book Appointment
          </button>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* ABOUT */}
          <div>

            <h3 className="text-[28px] font-bold mb-3 text-cyan-400">
              About Clinic
            </h3>

            <div className="w-16 h-1 bg-cyan-400 rounded-full mb-7"></div>

            <p className="text-[15px] leading-[32px] text-slate-200 mb-7">
              Complete Heart & Vascular Care provides
              advanced cardiac and vascular treatments
              with compassionate patient-centered care
              and modern medical technology.
            </p>

            {/* SOCIAL */}
            <div className="flex items-center gap-3">

              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-11
                  h-11
                  rounded-2xl
                  bg-white/10
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  text-white
                  hover:bg-cyan-500
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >
                <FaFacebookF />
              </a>

              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-11
                  h-11
                  rounded-2xl
                  bg-white/10
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  text-white
                  hover:bg-pink-500
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >
                <FaInstagram />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-11
                  h-11
                  rounded-2xl
                  bg-white/10
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  text-white
                  hover:bg-cyan-500
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >
                <FaLinkedinIn />
              </a>

            </div>
          </div>

          {/* QUICK LINKS */}
          <div>

            <h3 className="text-[28px] font-bold mb-3 text-cyan-400">
              Quick Links
            </h3>

            <div className="w-16 h-1 bg-cyan-400 rounded-full mb-7"></div>

            <ul className="space-y-5">

              {quickLinks.map((item) => (
                <li key={item.label}>

                  <button
                    onClick={() => goToPage(item.to)}
                    className="
                      text-white
                      text-[16px]
                      hover:text-cyan-400
                      transition-all
                      duration-300
                      flex
                      items-center
                      gap-3
                      bg-transparent
                      border-none
                      cursor-pointer
                      p-0
                    "
                  >

                    <span className="text-cyan-400 text-xl">
                      →
                    </span>

                    {item.label}

                  </button>

                </li>
              ))}

            </ul>
          </div>

          {/* SERVICES */}
          <div>

            <h3 className="text-[28px] font-bold mb-3 text-cyan-400">
              Our Services
            </h3>

            <div className="w-16 h-1 bg-cyan-400 rounded-full mb-7"></div>

            <div className="space-y-5">

              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => goService(service.id)}
                  className="
                    flex
                    items-center
                    gap-3
                    text-white
                    text-[16px]
                    hover:text-cyan-400
                    transition-all
                    duration-300
                    bg-transparent
                    border-none
                    cursor-pointer
                    p-0
                  "
                >

                  <span className="text-cyan-400 text-xl">
                    →
                  </span>

                  {service.label}

                </button>
              ))}

            </div>
          </div>

          {/* CONTACT */}
          <div>

            <h3 className="text-[28px] font-bold mb-3 text-cyan-400">
              Contact Info
            </h3>

            <div className="w-16 h-1 bg-cyan-400 rounded-full mb-7"></div>

            <div className="space-y-6">

              {/* LOCATION */}
              <a
                href="https://maps.google.com/?q=100-12+101st+Ave,+Ozone+Park,+NY+11416"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-start
                  gap-4
                  text-white
                  no-underline
                  hover:text-cyan-400
                  transition-all
                "
              >

                <div className="text-cyan-400 text-xl mt-1">
                  📍
                </div>

                <div className="text-[16px] leading-8 text-slate-200">
                  100-12 101st Ave,
                  <br />
                  Ozone Park, NY 11416
                </div>

              </a>

              {/* PHONE */}
              <a
                href="tel:+17185550101"
                className="
                  flex
                  items-center
                  gap-4
                  text-white
                  no-underline
                  hover:text-cyan-400
                  transition-all
                "
              >

                <div className="text-cyan-400 text-xl">
                  📞
                </div>

                <div className="text-[16px] text-slate-200">
                  +1 (718) 555-0101
                </div>

              </a>

              {/* EMAIL */}
              <a
                href="mailto:drankur@completeheartandvascularcare.com"
                className="
                  flex
                  items-center
                  gap-4
                  text-white
                  no-underline
                  hover:text-cyan-400
                  transition-all
                "
              >

                <div className="text-cyan-400 text-xl">
                  ✉️
                </div>

                <div className="text-[15px] text-slate-200 break-all leading-7">
                  drankur@completeheartandvascularcare.com
                </div>

              </a>

              {/* WEBSITE */}
              <a
                href="https://completeheartandvascularcare.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-center
                  gap-4
                  text-white
                  no-underline
                  hover:text-cyan-400
                  transition-all
                "
              >

                <div className="text-cyan-400 text-xl">
                  🌐
                </div>

                <div className="text-[15px] text-slate-200 break-all leading-7">
                  completeheartandvascularcare.com
                </div>

              </a>

              {/* SECOND LOCATION */}
              <a
                href="https://maps.google.com/?q=2501+86th+St,+Brooklyn,+NY"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-start
                  gap-4
                  text-white
                  no-underline
                  hover:text-cyan-400
                  transition-all
                "
              >

                <div className="text-cyan-400 text-xl mt-1">
                  🏥
                </div>

                <div className="text-[16px] leading-8 text-slate-200">
                  2501 86th St,
                  <br />
                  Brooklyn, NY 11214
                </div>

              </a>

            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 mt-14 pt-6">

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            {/* COPYRIGHT */}
            <p className="text-slate-300 text-[15px] text-center md:text-left">

              © {new Date().getFullYear()}{" "}

              <span className="text-cyan-400 font-semibold">
                Complete Heart & Vascular Care
              </span>

              . All Rights Reserved.

            </p>

            {/* LINKS */}
            <div className="flex items-center gap-6">

              <button
                className="
                  text-slate-300
                  hover:text-cyan-400
                  transition-all
                  bg-transparent
                  border-none
                  cursor-pointer
                  text-[15px]
                "
              >
                Privacy Policy
              </button>

              <button
                className="
                  text-slate-300
                  hover:text-cyan-400
                  transition-all
                  bg-transparent
                  border-none
                  cursor-pointer
                  text-[15px]
                "
              >
                Terms & Conditions
              </button>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}