import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const serviceItems = [
  { label: "Cardiac Testing", id: "cardiac" },
  { label: "Vascular Treatment", id: "vascular" },
  { label: "Varicose Vein Care", id: "varicose" },
  { label: "Nutrition Counseling", id: "nutrition" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showDrop, setShowDrop] = useState(false);
  const [mobSvc, setMobSvc] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const dropTimer = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const scrollFn = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", scrollFn);

    return () => window.removeEventListener("scroll", scrollFn);
  }, []);

  useEffect(() => {
    setOpen(false);
    setShowDrop(false);
  }, [location.pathname]);

  const openDrop = () => {
    clearTimeout(dropTimer.current);
    setShowDrop(true);
  };

  const closeDrop = () => {
    dropTimer.current = setTimeout(() => {
      setShowDrop(false);
    }, 120);
  };

  const goService = (id) => {
    setOpen(false);
    setShowDrop(false);
    navigate(`/services/${id}`);
  };

  const isActive = (path) =>
    location.pathname === path ||
    location.pathname.startsWith(path + "/");

  const navLink = (active) =>
    `
      px-5
      py-3
      rounded-full
      text-[15px]
      font-semibold
      transition-all
      duration-300
      no-underline
      whitespace-nowrap
      ${
        active
          ? "bg-cyan-50 text-cyan-700 shadow-sm"
          : "text-slate-700 hover:bg-cyan-50 hover:text-cyan-700"
      }
    `;

  return (
    <nav
      className={`
        sticky
        top-0
        z-[500]
        transition-all
        duration-300
        border-b
        border-cyan-100
        ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-sm"
            : "bg-white/90 backdrop-blur-lg"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        {/* HEADER */}
        <div className="h-[78px] flex items-center justify-between gap-4">

          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center shrink-0 no-underline"
          >
            <img
              src="/image/logo.png"
              alt="Logo"
              className="h-11 md:h-12 w-auto object-contain"
            />
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex items-center gap-2 list-none m-0 p-0">

            {/* HOME */}
            <li>
              <Link
                to="/"
                className={navLink(location.pathname === "/")}
              >
                Home
              </Link>
            </li>

            {/* ABOUT */}
            <li>
              <Link
                to="/about"
                className={navLink(isActive("/about"))}
              >
                About
              </Link>
            </li>

            {/* SERVICES */}
            <li
              className="relative"
              onMouseEnter={openDrop}
              onMouseLeave={closeDrop}
            >
              <Link
                to="/services"
                className={`
                  flex
                  items-center
                  gap-2
                  px-5
                  py-3
                  rounded-full
                  text-[15px]
                  font-semibold
                  transition-all
                  duration-300
                  no-underline
                  ${
                    isActive("/services")
                      ? "bg-cyan-50 text-cyan-700 shadow-sm"
                      : "text-slate-700 hover:bg-cyan-50 hover:text-cyan-700"
                  }
                `}
              >
                Services

                <span
                  className={`
                    text-[10px]
                    transition-all
                    duration-300
                    ${showDrop ? "rotate-180" : ""}
                  `}
                >
                  ▼
                </span>
              </Link>

              {/* DROPDOWN */}
              <div
                className={`
                  absolute
                  top-[65px]
                  left-0
                  w-[280px]
                  transition-all
                  duration-300
                  origin-top
                  ${
                    showDrop
                      ? "opacity-100 visible translate-y-0 scale-100"
                      : "opacity-0 invisible -translate-y-2 scale-95"
                  }
                `}
              >
                <div
                  className="
                    bg-white/95
                    backdrop-blur-xl
                    border
                    border-cyan-100
                    rounded-3xl
                    shadow-[0_15px_50px_rgba(0,0,0,0.08)]
                    p-3
                  "
                >

                  {/* TITLE */}
                  <div className="px-4 pb-3 pt-1 border-b border-slate-100 mb-2">
                    <p className="text-[11px] uppercase tracking-[2px] text-cyan-600 font-bold">
                      Our Services
                    </p>
                  </div>

                  {serviceItems.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => goService(s.id)}
                      className="
                        group
                        w-full
                        flex
                        items-center
                        justify-between
                        text-left
                        px-4
                        py-4
                        rounded-2xl
                        text-[14px]
                        font-medium
                        text-slate-700
                        hover:bg-cyan-50
                        hover:text-cyan-700
                        transition-all
                        duration-300
                        border-none
                        bg-transparent
                        cursor-pointer
                      "
                    >
                      <span>{s.label}</span>

                      <span
                        className="
                          opacity-0
                          -translate-x-2
                          group-hover:opacity-100
                          group-hover:translate-x-0
                          transition-all
                          duration-300
                          text-cyan-600
                        "
                      >
                        →
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </li>

            {/* LOCATIONS */}
            <li>
              <Link
                to="/locations"
                className={navLink(isActive("/locations"))}
              >
                Locations
              </Link>
            </li>

            {/* INSURANCE */}
            <li>
              <Link
                to="/insurance"
                className={navLink(isActive("/insurance"))}
              >
                Insurance
              </Link>
            </li>

            {/* CONTACT */}
            <li>
              <Link
                to="/contact"
                className={navLink(isActive("/contact"))}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* RIGHT SIDE */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">

            <a
              href="tel:+17185550101"
              className="
                text-[13px]
                font-medium
                text-slate-500
                no-underline
                hover:text-cyan-700
                transition-all
              "
            >
              (718) 555-0101
            </a>

            <Link
              to="/appointment"
              className="
                px-5
                py-3
                rounded-full
                bg-slate-900
                hover:bg-cyan-600
                text-white
                text-[13px]
                font-semibold
                no-underline
                transition-all
                duration-300
                hover:shadow-xl
                hover:shadow-cyan-100
                hover:-translate-y-[2px]
              "
            >
              Book Appointment
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="
              lg:hidden
              w-11
              h-11
              rounded-2xl
              border
              border-slate-200
              flex
              flex-col
              items-center
              justify-center
              gap-[4px]
              bg-white
              cursor-pointer
            "
          >
            <span
              className={`
                w-5
                h-[2px]
                bg-slate-700
                rounded-full
                transition-all
                duration-300
                ${open ? "rotate-45 translate-y-[6px]" : ""}
              `}
            />

            <span
              className={`
                w-5
                h-[2px]
                bg-slate-700
                rounded-full
                transition-all
                duration-300
                ${open ? "opacity-0" : ""}
              `}
            />

            <span
              className={`
                w-5
                h-[2px]
                bg-slate-700
                rounded-full
                transition-all
                duration-300
                ${open ? "-rotate-45 -translate-y-[6px]" : ""}
              `}
            />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          lg:hidden
          overflow-hidden
          transition-all
          duration-300
          bg-white
          border-t
          border-slate-100
          ${open ? "max-h-[700px] py-4" : "max-h-0"}
        `}
      >
        <div className="px-4 flex flex-col gap-2">

          <Link
            to="/"
            className="
              px-4
              py-3
              rounded-2xl
              text-[14px]
              font-medium
              text-slate-700
              no-underline
              hover:bg-cyan-50
            "
          >
            Home
          </Link>

          <Link
            to="/about"
            className="
              px-4
              py-3
              rounded-2xl
              text-[14px]
              font-medium
              text-slate-700
              no-underline
              hover:bg-cyan-50
            "
          >
            About
          </Link>

          {/* MOBILE SERVICES */}
          <div className="bg-slate-50 rounded-3xl p-2">

            <button
              onClick={() => setMobSvc(!mobSvc)}
              className="
                w-full
                flex
                items-center
                justify-between
                px-4
                py-3
                text-[14px]
                font-medium
                text-slate-700
                border-none
                bg-transparent
                cursor-pointer
              "
            >
              Services

              <span className="text-sm">
                {mobSvc ? "−" : "+"}
              </span>
            </button>

            {mobSvc && (
              <div className="flex flex-col gap-1 mt-2">

                {serviceItems.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => goService(s.id)}
                    className="
                      text-left
                      px-4
                      py-3
                      rounded-2xl
                      text-[13px]
                      text-slate-600
                      hover:bg-cyan-50
                      hover:text-cyan-700
                      transition-all
                      border-none
                      bg-transparent
                      cursor-pointer
                    "
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/locations"
            className="
              px-4
              py-3
              rounded-2xl
              text-[14px]
              font-medium
              text-slate-700
              no-underline
              hover:bg-cyan-50
            "
          >
            Locations
          </Link>

          <Link
            to="/insurance"
            className="
              px-4
              py-3
              rounded-2xl
              text-[14px]
              font-medium
              text-slate-700
              no-underline
              hover:bg-cyan-50
            "
          >
            Insurance
          </Link>

          <Link
            to="/contact"
            className="
              px-4
              py-3
              rounded-2xl
              text-[14px]
              font-medium
              text-slate-700
              no-underline
              hover:bg-cyan-50
            "
          >
            Contact
          </Link>

          <Link
            to="/appointment"
            className="
              mt-3
              bg-slate-900
              hover:bg-cyan-600
              text-white
              text-center
              py-3
              rounded-full
              text-[14px]
              font-semibold
              no-underline
              transition-all
              duration-300
            "
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </nav>
  );
}