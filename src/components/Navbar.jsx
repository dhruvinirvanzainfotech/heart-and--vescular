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

  const servicesPanelRef = useRef(null);
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
      setMobSvc(false);
    });
  }, [location.pathname]);

  const goToPage = (path) => {
    navigate(path);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const goService = (id) => {
    setOpen(false);
    setShowDrop(false);
    setMobSvc(false);

    navigate(`/treatments/${id}`);

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

  const navLink = (active) => `
      px-4
      xl:px-5
      py-3
      rounded-full
      text-[15px]
      xl:text-[16px]
      font-semibold
      transition-all
      duration-300
      whitespace-nowrap
      ${
        active
          ? "bg-[#eff6ff] text-cyan-900"
          : "text-slate-700 hover:text-cyan-900 hover:bg-[#f8fafc]"
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
        border-slate-200
        ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-sm"
            : "bg-white/90 backdrop-blur-lg"
        }
      `}
    >
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 xl:px-10">
        <div className="h-[100px] flex items-center justify-between gap-4">

          {/* LOGO */}
          <button
            onClick={() => goToPage("/")}
            className="
              flex
              items-center
              shrink-0
              border-none
              bg-transparent
              cursor-pointer
              p-0
            "
          >
            <img
              src="/image/logo3.png"
              alt="Logo"
              className="h-20 xl:h-24 w-auto object-contain"
            />
          </button>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex items-center gap-1 xl:gap-2 list-none m-0 p-0">

            <li>
              <button
                onClick={() => goToPage("/")}
                className={navLink(location.pathname === "/")}
              >
                Home
              </button>
            </li>

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
                onClick={() => goToPage("/treatments")}
                className={`
                  flex
                  items-center
                  gap-2
                  px-4
                  xl:px-5
                  py-3
                  rounded-full
                  text-[15px]
                  xl:text-[16px]
                  font-semibold
                  transition-all
                  duration-300
                  border-none
                  bg-transparent
                  cursor-pointer
                  whitespace-nowrap
                  ${
                    isActive("/treatments")
                      ? "bg-[#eff6ff] text-cyan-900"
                      : " hover:text-cyan-900 hover:bg-[#f8fafc]"
                  }
                `}
              >
                Treatments

                <span
                  className={`
                    text-[11px]
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
                  top-[68px]
                  left-0
                  w-[290px]
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
                    bg-white
                    border
                    border-slate-200
                    rounded-3xl
                    shadow-[0_15px_50px_rgba(0,0,0,0.08)]
                    p-3
                  "
                >
                 
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
                        text-[17px]
                        font-medium
                        text-slate-700
                        hover:bg-[#f8fafc]
                        hover:text-cyan-800
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
                          text-[#2563eb]
                        "
                      >
                        →
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </li>

            <li>
              <button
                onClick={() => goToPage("/insurance")}
                className={navLink(isActive("/insurance"))}
              >
                Insurance
              </button>
            </li>

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
                text-[15px]
                font-semibold
                text-slate-700
                no-underline
                hover:text-cyan-900
                transition-all
              "
            >
              (917)-300-2728
            </a>

            <button
              onClick={() => goToPage("/appointment")}
              className="
                px-6
                py-3
                rounded-full
                bg-cyan-800
                hover:bg-cyan-900
                text-white
                text-[14px]
                font-semibold
                border-none
                cursor-pointer
                transition-all
                duration-300
                hover:-translate-y-[2px]
                hover:shadow-lg
              "
            >
              Book an Appointment
            </button>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
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
          border-b
          border-slate-200
          bg-white
          transition-all
          duration-300
          ${
            open
              ? "max-h-[550px] opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }
        `}
      >
        <div className="px-4 py-4">
          <ul className="flex flex-col gap-2">

            <li>
              <button
                onClick={() => goToPage("/")}
                className={navLink(location.pathname === "/")}
              >
                Home
              </button>
            </li>

            <li>
              <button
                onClick={() => goToPage("/about")}
                className={navLink(isActive("/about"))}
              >
                About
              </button>
            </li>

            {/* MOBILE SERVICES */}
            <li>

              <button
                onClick={() => setMobSvc(!mobSvc)}
                className={`
                  w-full
                  flex
                  items-center
                  justify-between
                  px-4
                  py-3
                  rounded-full
                  text-[15px]
                  font-semibold
                  transition-all
                  duration-300
                  ${
                    isActive("/services")
                      ? "bg-cyan-900 text-cyan-900"
                      : "text-slate-700 "
                  }
                `}
              >
                <span>Treatments</span>

                <span
                  className={`
                    transition-all
                    duration-300
                    ${mobSvc ? "rotate-180" : ""}
                  `}
                >
                  ▼
                </span>
              </button>

              <div
                ref={servicesPanelRef}
                className={`
                  mt-2
                  overflow-hidden
                  transition-all
                  duration-300
                  ${
                    mobSvc
                      ? "max-h-[400px] opacity-100"
                      : "max-h-0 opacity-0"
                  }
                `}
              >
                <div
                  className="
                    bg-white
                    border
                    border-slate-200
                    rounded-3xl
                    p-3
                  "
                >
                  {serviceItems.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => goService(s.id)}
                      className="
                        w-full
                        flex
                        items-center
                        justify-between
                        text-left
                        px-4
                        py-4
                        rounded-2xl
                        text-[15px]
                        font-medium
                        text-slate-700
                        hover:bg-[#f8fafc]
                        hover:text-[#2563eb]
                        transition-all
                        duration-300
                        border-none
                        bg-transparent
                        cursor-pointer
                      "
                    >
                      <span>{s.label}</span>

                      <span className="text-[#2563eb]">
                        →
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </li>

            <li>
              <button
                onClick={() => goToPage("/insurance")}
                className={navLink(isActive("/insurance"))}
              >
                Insurance
              </button>
            </li>

            <li>
              <button
                onClick={() => goToPage("/contact")}
                className={navLink(isActive("/contact"))}
              >
                Contact
              </button>
            </li>

            

            <li>
              <button
                onClick={() => goToPage("/appointment")}
                className="
                  w-full
                  px-5
                  py-3
                  rounded-full
                  bg-cyan-900
                  hover:bg-cyan-900
                  text-white
                  text-[14px]
                  font-semibold
                  border-none
                  cursor-pointer
                  transition-all
                  duration-300
                "
              >
                Book an Appointment
              </button>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}