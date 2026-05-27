import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";


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

    requestAnimationFrame(() => {
      setOpen(false);
      setShowDrop(false);
    });

  }, [location.pathname]);

  // SCROLL TOP FUNCTION
  const goToPage = (path) => {

    navigate(path);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // SERVICES PAGE SCROLL TOP
  const goService = (id) => {

    setOpen(false);
    setShowDrop(false);

    navigate(`/services/${id}`);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const openDrop = () => {
    clearTimeout(dropTimer.current);
    setShowDrop(true);
  };

  const closeDrop = () => {
    dropTimer.current = setTimeout(() => {
      setShowDrop(false);
    }, 120);
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
          <button
            onClick={() => goToPage("/")}
            className="flex items-center shrink-0 bg-transparent border-none cursor-pointer p-0"
          >

            <img
              src="/image/logo.png"
              alt="Logo"
              className="h-11 md:h-12 w-auto object-contain"
            />

          </button>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex items-center gap-2 list-none m-0 p-0">

            {/* HOME */}
            <li>

              <button
                onClick={() => goToPage("/")}
                className={navLink(location.pathname === "/")}
              >
                Home
              </button>

            </li>

            {/* ABOUT */}
            <li>

              <button
                onClick={() => goToPage("/about")}
                className={navLink(isActive("/about"))}
              >
                About
              </button>

            </li>

            {/* SERVICES */}
            <li
              className="relative"
              onMouseEnter={openDrop}
              onMouseLeave={closeDrop}
            >

              <button
                onClick={() => goToPage("/services")}
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
                  border-none
                  cursor-pointer
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

              </button>

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

              <button
                onClick={() => goToPage("/locations")}
                className={navLink(isActive("/locations"))}
              >
                Locations
              </button>

            </li>

            {/* INSURANCE */}
            <li>

              <button
                onClick={() => goToPage("/insurance")}
                className={navLink(isActive("/insurance"))}
              >
                Insurance
              </button>

            </li>

            {/* CONTACT */}
            <li>

              <button
                onClick={() => goToPage("/contact")}
                className={navLink(isActive("/contact"))}
              >
                Contact
              </button>

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

            <button
              onClick={() => goToPage("/appointment")}
              className="
                px-5
                py-3
                rounded-full
                bg-slate-900
                hover:bg-cyan-600
                text-white
                text-[13px]
                font-semibold
                border-none
                cursor-pointer
                transition-all
                duration-300
                hover:shadow-xl
                hover:shadow-cyan-100
                hover:-translate-y-[2px]
              "
            >
              Book Appointment
            </button>

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

          <button
            onClick={() => goToPage("/")}
            className="
              px-4
              py-3
              rounded-2xl
              text-[14px]
              font-medium
              text-slate-700
              hover:bg-cyan-50
              border-none
              bg-transparent
              text-left
              cursor-pointer
            "
          >
            Home
          </button>

          <button
            onClick={() => goToPage("/about")}
            className="
              px-4
              py-3
              rounded-2xl
              text-[14px]
              font-medium
              text-slate-700
              hover:bg-cyan-50
              border-none
              bg-transparent
              text-left
              cursor-pointer
            "
          >
            About
          </button>

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

          <button
            onClick={() => goToPage("/locations")}
            className="
              px-4
              py-3
              rounded-2xl
              text-[14px]
              font-medium
              text-slate-700
              hover:bg-cyan-50
              border-none
              bg-transparent
              text-left
              cursor-pointer
            "
          >
            Locations
          </button>

          <button
            onClick={() => goToPage("/insurance")}
            className="
              px-4
              py-3
              rounded-2xl
              text-[14px]
              font-medium
              text-slate-700
              hover:bg-cyan-50
              border-none
              bg-transparent
              text-left
              cursor-pointer
            "
          >
            Insurance
          </button>

          <button
            onClick={() => goToPage("/contact")}
            className="
              px-4
              py-3
              rounded-2xl
              text-[14px]
              font-medium
              text-slate-700
              hover:bg-cyan-50
              border-none
              bg-transparent
              text-left
              cursor-pointer
            "
          >
            Contact
          </button>

          <button
            onClick={() => goToPage("/appointment")}
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
              border-none
              cursor-pointer
              transition-all
              duration-300
            "
          >
            Book Appointment
          </button>

        </div>
      </div>
    </nav>
  );
}