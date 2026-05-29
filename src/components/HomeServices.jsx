import { useNavigate } from "react-router-dom";

const services = [
  {
    id: "cardiac",
    icon: "/image/cardiac.png",
    fallback: "🫀",
    title: "Cardiac Testing & Treatment",
    desc: "Advanced cardiac diagnostics and expert heart care services.",
    items: [
      "Stress Testing",
      "Heart Ultrasound",
      "Holter Monitor",
      "Cardiac Catheterization",
    ],
  },
  {
    id: "vascular",
    icon: "/image/vascular.png",
    fallback: "🩺",
    title: "Vascular Treatment",
    desc: "Professional vascular testing and minimally invasive procedures.",
    items: [
      "Carotid Doppler",
      "Venous Doppler",
      "ABI Testing",
      "Endovascular Procedures",
    ],
  },
  {
    id: "varicose",
    icon: "/image/varicos.png",
    fallback: "🦵",
    title: "Varicose Vein Care",
    desc: "Modern vein treatments and lymphedema therapy solutions.",
    items: [
      "Laser Ablation",
      "Sclerotherapy",
      "Vein Doppler",
      "Lymphedema Therapy",
    ],
  },
  {
    id: "nutrition",
    icon: "/image/nutrition.png",
    fallback: "🥗",
    title: "Nutrition Counseling",
    desc: "Healthy lifestyle and personalized nutrition guidance.",
    items: [
      "BMI Consultation",
      "Body Fat Analysis",
      "Diet Planning",
      "Health Coaching",
    ],
  },
];

export default function Services() {
  const navigate = useNavigate();

  return (
    <section className="relative py-20 bg-[#f8fcfd] overflow-hidden">
      {/* LIGHT BACKGROUND */}
      <div className="absolute top-0 left-0 w-[280px] h-[280px] bg-cyan-100 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[320px] h-[320px] bg-cyan-50 blur-[120px] rounded-full"></div>

      {/* HEADER */}
      <div className="relative z-10 text-center mb-14 px-6">
        <span className="uppercase tracking-[4px] text-cyan-600 text-[11px] font-semibold">
          Our Medical Services
        </span>

        <h1 className="text-slate-800 text-3xl md:text-4xl font-bold mt-3 leading-tight">
          Expert Heart &
          <span className="text-cyan-600"> Vascular Care</span>
        </h1>

        <p className="text-slate-500 max-w-2xl mx-auto mt-4 text-[14px] leading-7">
          Advanced cardiac and vascular treatments designed with
          modern technology and compassionate patient care.
        </p>
      </div>

  {/* 4 CARDS */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-7">
          {services.map((service, index) => (
            <div
              key={service.id}
              onClick={() => navigate(`/treatments/${service.id}`)}
              className="
                group
                relative
                overflow-hidden
                rounded-[26px]
                border
                border-cyan-900
                bg-white
                p-7
                cursor-pointer
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-cyan-900
                hover:shadow-[0_18px_45px_rgba(8,145,178,0.12)]
              "
              style={{
                animation: `fadeUp 0.7s ease ${index * 0.12}s both`,
              }}
            >
              {/* TOP LINE */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-cyan-600"></div>

              {/* ICON */}
              <div
                className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-cyan-700
                  flex
                  items-center
                  justify-center
                  mb-5
                  transition-all
                  duration-500
                  group-hover:bg-cyan-800
                  group-hover:scale-105
                "
              >
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-8 h-8 object-contain"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "block";
                  }}
                />

                <span className="hidden text-2xl">
                  {service.fallback}
                </span>
              </div>

              {/* TITLE */}
              <h2 className="text-[22px] font-semibold text-slate-800 mb-3 leading-snug group-hover:text-cyan-600 transition-all duration-300">
                {service.title}
              </h2>

              {/* DESCRIPTION */}
              <p className="text-slate-500 text-[16px] leading-6 mb-6 font-bold">
                {service.desc}
              </p>

              {/* LIST */}
              <div className="space-y-3 mb-7">
                {service.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-cyan-900 font-semibold"></div>

                    <span className="text-slate-600 text-[15px]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* BUTTON */}
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-5
                  py-3
                  rounded-full
                  bg-cyan-900
                  text-white
                  text-[13px]
                  font-semibold
                  transition-all
                  duration-500
                  group-hover:bg-cyan-600
                  group-hover:text-white
                "
              >
                Learn More

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>

              {/* HOVER EFFECT */}
              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-700
                  bg-gradient-to-b
                  from-cyan-50/40
                  to-transparent
                  pointer-events-none
                "
              ></div>
            </div>
          ))}
        </div>
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