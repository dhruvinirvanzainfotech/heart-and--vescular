import { Link } from "react-router-dom";

const services = [
  {
    id: "cardiac",
    icon: "/image/cardiac.png",
    fallback: "🫀",
    title: "Cardiac Testing",
    desc: "Advanced heart diagnostics and complete cardiac care.",
  },
  {
    id: "varicose",
    icon: "/image/varicos.png",
    fallback: "🦵",
    title: "Varicose Vein Care",
    desc: "Modern minimally invasive vein treatment solutions.",
  },
  {
    id: "vascular",
    icon: "/image/vascular.png",
    fallback: "🩺",
    title: "Vascular Treatment",
    desc: "Professional vascular testing and circulation care.",
  },
  {
    id: "nutrition",
    icon: "/image/nutrition.png",
    fallback: "🥗",
    title: "Nutrition Support",
    desc: "Healthy lifestyle and wellness consultation programs.",
  },
];

export default function HomeServices() {
  return (
    <section className="relative py-20 bg-[#f8fcfd] overflow-hidden">
      {/* LIGHT BG EFFECT */}
      <div className="absolute top-0 left-0 w-[250px] h-[250px] bg-cyan-100 blur-[100px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-50 blur-[120px] rounded-full"></div>

      {/* HEADER */}
      <div className="relative z-10 text-center px-6 mb-14">
        <span className="uppercase tracking-[4px] text-cyan-600 text-[11px] font-semibold">
          Our Services
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-3 leading-tight">
          Heart & Vascular
          <span className="text-cyan-600"> Care</span>
        </h2>

        <p className="text-slate-500 text-[14px] max-w-xl mx-auto mt-4 leading-relaxed">
          Comprehensive cardiovascular and wellness services
          designed with expert care and modern treatment.
        </p>
      </div>

      {/* SERVICES GRID */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((svc, index) => (
            <Link
              key={svc.id}
              to={`/services/${svc.id}`}
              className="
                group
                relative
                overflow-hidden
                rounded-[24px]
                bg-white
                border
                border-cyan-100
                p-6
                no-underline
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-cyan-300
                hover:shadow-[0_18px_40px_rgba(8,145,178,0.12)]
              "
              style={{
                animation: `fadeUp 0.7s ease ${index * 0.1}s both`,
              }}
            >
              {/* TOP BORDER */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-cyan-600"></div>

              {/* ICON */}
              <div
                className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-cyan-50
                  flex
                  items-center
                  justify-center
                  mb-5
                  transition-all
                  duration-500
                  group-hover:bg-cyan-600
                  group-hover:scale-105
                "
              >
                <img
                  src={svc.icon}
                  alt={svc.title}
                  className="w-8 h-8 object-contain"
                  onError={(e) => {
                    e.target.style.display = "none";

                    if (e.target.nextSibling) {
                      e.target.nextSibling.style.display = "block";
                    }
                  }}
                />

                <span className="hidden text-2xl">
                  {svc.fallback}
                </span>
              </div>

              {/* TITLE */}
              <h3 className="text-[18px] font-semibold text-slate-800 mb-3 group-hover:text-cyan-600 transition-all duration-300">
                {svc.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-slate-500 text-[13px] leading-6 mb-6">
                {svc.desc}
              </p>

              {/* BUTTON */}
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-cyan-600
                  text-[13px]
                  font-semibold
                  transition-all
                  duration-300
                  group-hover:gap-3
                "
              >
                Learn More

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>

              {/* HOVER GLOW */}
              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-700
                  bg-gradient-to-b
                  from-cyan-50/50
                  to-transparent
                  pointer-events-none
                "
              ></div>
            </Link>
          ))}
        </div>
      </div>

      {/* BUTTON */}
      <div className="relative z-10 text-center mt-14">
        <Link
          to="/services"
          className="
            inline-flex
            items-center
            gap-2
            px-7
            py-3
            rounded-full
            bg-cyan-600
            text-white
            text-[13px]
            font-semibold
            no-underline
            transition-all
            duration-500
            hover:bg-cyan-700
            hover:scale-105
            hover:shadow-[0_12px_30px_rgba(8,145,178,0.25)]
          "
        >
          View All Services →

        </Link>
      </div>

      {/* ANIMATION */}
      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
  );
}