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
          "linear-gradient(rgba(3,10,18,0.82), rgba(3,10,18,0.88)), url('/image/banner1.jpg')",
      }}
    >

      {/* GLASS OVERLAY */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"></div>

      {/* LIGHT EFFECT */}
      <div className="absolute top-[-100px] left-[-100px] w-[260px] h-[260px] bg-cyan-400/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-[-100px] right-[-100px] w-[260px] h-[260px] bg-sky-400/10 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-16">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* ABOUT */}
          <div>

            {/* LOGO */}
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-4 inline-block mb-6 shadow-2xl">

              <img
                src="/image/logo.png"
                alt="logo"
                className="h-16 object-contain"
              />

            </div>

            {/* TEXT */}
            <p className="text-[15px] leading-[32px] text-slate-200 mb-7">
              Welcome to Heart & Vascular Center,
              where advanced cardiac care meets
              compassion and modern treatment for
              every patient.
            </p>

            {/* SOCIAL */}
            <div className="flex items-center gap-3">

              {/* FACEBOOK */}
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-11
                  h-11
                  rounded-2xl
                  bg-white/10
                  backdrop-blur-xl
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

              {/* INSTAGRAM */}
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-11
                  h-11
                  rounded-2xl
                  bg-white/10
                  backdrop-blur-xl
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

              {/* LINKEDIN */}
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-11
                  h-11
                  rounded-2xl
                  bg-white/10
                  backdrop-blur-xl
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

            <h3 className="text-[30px] font-bold mb-3 text-cyan-400">
              Quick Links
            </h3>

            <div className="w-14 h-1 bg-cyan-400 rounded-full mb-7"></div>

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
                      +
                    </span>

                    {item.label}

                  </button>

                </li>
              ))}

            </ul>
          </div>

          {/* SERVICES */}
          <div>

            <h3 className="text-[30px] font-bold mb-3 text-cyan-400">
              Our Services
            </h3>

            <div className="w-14 h-1 bg-cyan-400 rounded-full mb-7"></div>

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
                    +
                  </span>

                  {service.label}

                </button>
              ))}

            </div>
          </div>

          {/* CONTACT */}
          <div>

            <h3 className="text-[30px] font-bold mb-3 text-cyan-400">
              Reach Us
            </h3>

            <div className="w-14 h-1 bg-cyan-400 rounded-full mb-7"></div>

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
                href="mailto:info@drankurshah.com"
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

                <div className="text-[16px] text-slate-200 break-all">
                  info@drankurshah.com
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
                Heart & Vascular
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