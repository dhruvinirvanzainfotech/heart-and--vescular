import { Link, useNavigate } from "react-router-dom";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Locations", to: "/locations" },
  { label: "Insurance", to: "/insurance" },
  { label: "Contact", to: "/contact" },
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

  const goService = (id) => {
    navigate(`/services/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="relative overflow-hidden bg-[#071018] text-white">

      {/* BACKGROUND LIGHTS */}
      <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-sky-400/10 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-14">

        {/* FOOTER GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-14">

          {/* ABOUT */}
          <div>

            <img
              src="/image/logo.png"
              alt="Logo"
              className="h-12 w-auto object-contain mb-6"
            />

            <p className="text-slate-400 text-[14px] leading-relaxed mb-6">
              Advanced cardiac and vascular care focused on modern
              diagnostics, patient comfort, and compassionate treatment
              for every patient.
            </p>

            {/* SOCIAL */}
            <div className="flex items-center gap-3">

              {["F", "I", "L"].map((item, index) => (
                <div
                  key={index}
                  className="
                    w-11
                    h-11
                    rounded-2xl
                    bg-white/5
                    border
                    border-white/10
                    flex
                    items-center
                    justify-center
                    text-sm
                    font-semibold
                    text-slate-300
                    hover:bg-cyan-500
                    hover:text-white
                    hover:-translate-y-1
                    transition-all
                    duration-300
                    cursor-pointer
                  "
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>

            <h3 className="text-[20px] font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">

              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="
                      text-slate-400
                      text-[14px]
                      no-underline
                      hover:text-cyan-400
                      transition-all
                      duration-300
                      hover:translate-x-1
                      inline-block
                    "
                  >
                    → {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>

            <h3 className="text-[20px] font-semibold mb-6">
              Our Services
            </h3>

            <div className="space-y-4">

              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => goService(service.id)}
                  className="
                    w-full
                    flex
                    items-center
                    gap-3
                    text-left
                    text-slate-400
                    text-[14px]
                    hover:text-cyan-400
                    transition-all
                    duration-300
                    border-none
                    bg-transparent
                    cursor-pointer
                    hover:translate-x-1
                  "
                >
                  <div className="w-2 h-2 rounded-full bg-cyan-400"></div>

                  <span>{service.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div>

            <h3 className="text-[20px] font-semibold mb-6">
              Contact Info
            </h3>

            <div className="space-y-5">

              {/* PHONE */}
              <div
                className="
                  flex
                  gap-4
                  p-4
                  rounded-2xl
                  bg-white/5
                  border
                  border-white/10
                  hover:border-cyan-400/40
                  transition-all
                  duration-300
                "
              >
                <div className="text-cyan-400 text-xl">
                  📞
                </div>

                <div>
                  <p className="text-white text-sm font-medium mb-1">
                    Call Us
                  </p>

                  <a
                    href="tel:+17185550101"
                    className="text-slate-400 text-sm no-underline hover:text-cyan-400"
                  >
                    (718) 555-0101
                  </a>
                </div>
              </div>

              {/* EMAIL */}
              <div
                className="
                  flex
                  gap-4
                  p-4
                  rounded-2xl
                  bg-white/5
                  border
                  border-white/10
                  hover:border-cyan-400/40
                  transition-all
                  duration-300
                "
              >
                <div className="text-cyan-400 text-xl">
                  📧
                </div>

                <div>
                  <p className="text-white text-sm font-medium mb-1">
                    Email
                  </p>

                  <a
                    href="mailto:info@drankurshah.com"
                    className="text-slate-400 text-sm no-underline hover:text-cyan-400"
                  >
                    info@drankurshah.com
                  </a>
                </div>
              </div>

              {/* LOCATION */}
              <div
                className="
                  flex
                  gap-4
                  p-4
                  rounded-2xl
                  bg-white/5
                  border
                  border-white/10
                  hover:border-cyan-400/40
                  transition-all
                  duration-300
                "
              >
                <div className="text-cyan-400 text-xl">
                  📍
                </div>

                <div>
                  <p className="text-white text-sm font-medium mb-1">
                    Location
                  </p>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    100-12 101st Ave, Ozone Park, NY 11416
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 py-6">

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            <p className="text-slate-500 text-[13px] text-center md:text-left">
              © {new Date().getFullYear()} Heart & Vascular.
              All rights reserved.
            </p>

            <div className="flex items-center gap-6 text-[13px] text-slate-500">

              <span className="hover:text-cyan-400 transition-all cursor-pointer">
                Privacy Policy
              </span>

              <span className="hover:text-cyan-400 transition-all cursor-pointer">
                Terms & Conditions
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}