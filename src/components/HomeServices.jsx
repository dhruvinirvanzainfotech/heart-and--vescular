import { useNavigate } from "react-router-dom";
import Treatment1 from "../image/Treatment1.png"
import Treatment2 from "../image/Treatment2.png"
import Treatment3 from "../image/Treatment3.png"
import Treatment4 from "../image/Treatment4.png"

const services = [
  {
    id: "cardiac",
    path: "/treatment/cardiactesting",
    image: Treatment1,
    title: "Cardiac Testing & Treatment",
    desc: "Advanced cardiac diagnostics and expert heart care services.",
  },
  {
    id: "vascular",
    path: "/treatment/varicose-veins",
    image: Treatment2,
    title: "Varicose Veins, Ulcer and Lymphedema Treatment Center",
    desc: "Professional vascular testing and minimally invasive procedures.",
  },
  {
    id: "varicose",
    path: "/treatment/vascular-testing",
    image: Treatment3,
    title: "Vascular Testing and Treatment",
    desc: "Modern vein treatments and lymphedema therapy solutions.",
  },
  {
    id: "nutrition",
    path: "/treatment/nutrition-counseling",
    image: Treatment4,
    title: "Nutrition Counseling",
    desc: "Comprehensive nutrition guidance for better heart and vascular health.",
  },
];
export default function HomeServices() {
  const navigate = useNavigate();

  return (
    <section className="relative py-20 bg-[#f8fcfd] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-[280px] h-[280px] bg-cyan-100 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[320px] h-[320px] bg-cyan-50 blur-[120px] rounded-full"></div>

      {/* Header */}
      <div className="relative z-10 text-center mb-14 px-6">
        <span className="inline-block text-black text-sm font-bold uppercase tracking-[3px] mb-4">
          OUR TREATMENTS
        </span>

        <h2 className="text-slate-800 text-3xl md:text-4xl font-bold mt-3 leading-tight">
          Expert Heart &
          <span className="text-cyan-600"> Vascular Care</span>
        </h2>

        <p className="text-slate-500 max-w-2xl mx-auto mt-4 text-[15px] leading-7">
          Advanced cardiac and vascular treatments designed with modern
          technology and compassionate patient care.
        </p>
      </div>

      {/* Services Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {services.map((service, index) => (
            <div
              key={service.id}
              onClick={() => navigate(service.path)}
              className="
                group
                overflow-hidden
                rounded-[26px]
                border
                border-cyan-100
                bg-white
                cursor-pointer
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-cyan-300
                hover:shadow-[0_18px_45px_rgba(8,145,178,0.12)]
                flex
                flex-col
                h-full
              "
              style={{
                animation: `fadeUp 0.7s ease ${index * 0.12}s both`,
              }}
            >
              {/* Image */}
              <div className="h-300px] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-256px object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3
                  className="
                    text-[18px]
                    font-bold
                    text-slate-800
                    mb-2
                    group-hover:text-cyan-600
                    transition
                    overflow-hidden
                  "
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    minHeight: "56px",
                  }}
                >
                  {service.title}
                </h3>

                <p
                  className="
                    text-slate-500
                    text-[14px]
                    leading-6
                    mb-4
                    overflow-hidden
                    flex-grow
                  "
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {service.desc}
                </p>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(service.path);
                  }}
                  className="
                    mt-auto
                    text-red-700
                    font-semibold
                    text-sm
                    hover:text-cyan-700
                    transition
                  "
                >
                  View More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

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