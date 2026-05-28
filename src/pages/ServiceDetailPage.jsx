import { useParams, useNavigate, Link } from "react-router-dom";

const allServices = {
  cardiac: {
    image: "/image/service1.jpg",
    icon: "/image/cardiac.png",
    fallback: "🫀",
    title: "Cardiac Testing & Treatment",
    accent: "#2563eb",

    intro:
      "Advanced cardiac diagnostics and modern heart treatment solutions designed with compassionate patient care and latest medical technology.",

    items: [
      {
        name: "Routine Cardiac Testing",
        desc: "Complete heart evaluation and preventive cardiac screening services.",
      },
      {
        name: "Stress Testing",
        desc: "Professional treadmill and stress echocardiography procedures.",
      },
      {
        name: "Heart Ultrasound",
        desc: "Detailed echocardiography imaging for accurate diagnosis.",
      },
      {
        name: "Holter Monitoring",
        desc: "24-hour ECG and heart rhythm monitoring solutions.",
      },
      {
        name: "Cardiac Catheterization",
        desc: "Minimally invasive procedures for blocked coronary arteries.",
      },
      {
        name: "Arrhythmia Evaluation",
        desc: "Diagnosis and treatment for abnormal heart rhythms.",
      },
    ],
  },

  vascular: {
    image: "/image/service2.jpg",
    icon: "/image/vascular.png",
    fallback: "🩺",
    title: "Vascular Treatment",
    accent: "#7c3aed",

    intro:
      "Modern vascular care and advanced circulation treatment using minimally invasive procedures and expert diagnostics.",

    items: [
      {
        name: "Carotid Doppler",
        desc: "Stroke risk evaluation and artery ultrasound testing.",
      },
      {
        name: "Aorta Doppler",
        desc: "Advanced aortic imaging and circulation evaluation.",
      },
      {
        name: "ABI Testing",
        desc: "Peripheral artery disease and circulation analysis.",
      },
      {
        name: "Venous Doppler",
        desc: "Vein circulation and blood clot detection services.",
      },
      {
        name: "Kidney Artery Doppler",
        desc: "Renal artery imaging and hypertension assessment.",
      },
      {
        name: "Endovascular Procedures",
        desc: "Modern minimally invasive vascular treatments.",
      },
    ],
  },

  varicose: {
    image: "/image/service3.jpg",
    icon: "/image/varicos.png",
    fallback: "🦵",
    title: "Varicose Vein Care",
    accent: "#db2777",

    intro:
      "Advanced minimally invasive vein treatment procedures to improve circulation and provide long-term vein health.",

    items: [
      {
        name: "Laser Vein Ablation",
        desc: "Modern laser treatment for symptomatic varicose veins.",
      },
      {
        name: "Sclerotherapy",
        desc: "Injection therapy for spider and varicose veins.",
      },
      {
        name: "Vein Doppler Testing",
        desc: "Detailed vein circulation and reflux evaluation.",
      },
      {
        name: "Compression Therapy",
        desc: "Professional compression treatment for vein disorders.",
      },
      {
        name: "Lymphedema Therapy",
        desc: "Advanced swelling management and drainage therapy.",
      },
      {
        name: "Vein Consultation",
        desc: "Complete vein examination and personalized planning.",
      },
    ],
  },

  nutrition: {
    image: "/image/service4.jpg",
    icon: "/image/nutrition.png",
    fallback: "🥗",
    title: "Nutrition Counseling",
    accent: "#f59e0b",

    intro:
      "Personalized nutrition programs and healthy lifestyle guidance for improved cardiovascular wellness and healthy living.",

    items: [
      {
        name: "Nutrition Consultation",
        desc: "Personalized dietary assessment and meal planning.",
      },
      {
        name: "Weight Management",
        desc: "Healthy weight and wellness improvement programs.",
      },
      {
        name: "Body Fat Analysis",
        desc: "Professional body composition evaluation services.",
      },
      {
        name: "Lifestyle Coaching",
        desc: "Healthy routine planning for long-term wellness.",
      },
      {
        name: "Diet Planning",
        desc: "Custom nutrition plans for healthy living.",
      },
      {
        name: "Wellness Monitoring",
        desc: "Continuous nutrition and health improvement tracking.",
      },
    ],
  },
};

const order = ["cardiac", "vascular", "varicose", "nutrition"];

export default function ServiceDetailPage() {
  const { id } = useParams();

  const navigate = useNavigate();

  const svc = allServices[id];

  if (!svc) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <h2 className="text-3xl font-bold text-slate-700 mb-4">
          Service Not Found
        </h2>

        <Link
          to="/services"
          className="
            px-6
            py-3
            rounded-full
            bg-slate-900
            text-white
            no-underline
          "
        >
          Back to Services
        </Link>
      </div>
    );
  }

  const currentIdx = order.indexOf(id);

  const prevId = order[currentIdx - 1];

  const nextId = order[currentIdx + 1];

  return (
    <div className="bg-[#f8fafc] min-h-screen overflow-hidden">
      {/* HERO */}
      <section className="relative pt-24 pb-20 overflow-hidden bg-white">
        {/* BG SHAPES */}
        <div
          className="absolute top-[-120px] left-[-100px] w-[300px] h-[300px] rounded-full blur-[120px] opacity-20"
          style={{
            background: svc.accent,
          }}
        ></div>

        <div
          className="absolute bottom-[-120px] right-[-100px] w-[320px] h-[320px] rounded-full blur-[120px] opacity-20"
          style={{
            background: svc.accent,
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* BREADCRUMB */}
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-10">
            <Link
              to="/"
              className="hover:text-slate-700 no-underline"
            >
              Home
            </Link>

            <span>•</span>

            <Link
              to="/services"
              className="hover:text-slate-700 no-underline"
            >
              Services
            </Link>

            <span>•</span>

            <span className="text-slate-700 font-medium">
              {svc.title}
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* LEFT */}
            <div>
              {/* ICON */}
              <div
                className="
                  w-24
                  h-24
                  rounded-[28px]
                  flex
                  items-center
                  justify-center
                  mb-7
                  shadow-lg
                "
                style={{
                  background: `${svc.accent}15`,
                }}
              >
                <img
                  src={svc.icon}
                  alt={svc.title}
                  className="w-12 h-12 object-contain"
                  onError={(e) => {
                    e.target.style.display = "none";

                    if (e.target.nextSibling) {
                      e.target.nextSibling.style.display = "block";
                    }
                  }}
                />

                <span className="hidden text-5xl">
                  {svc.fallback}
                </span>
              </div>

              {/* TAG */}
              <span
                className="
                  inline-block
                  px-5
                  py-2
                  rounded-full
                  text-sm
                  font-semibold
                  mb-5
                "
                style={{
                  background: `${svc.accent}15`,
                  color: svc.accent,
                }}
              >
                Specialized Medical Care
              </span>

              {/* TITLE */}
              <h1
                className="
                  text-4xl
                  md:text-6xl
                  font-bold
                  text-slate-800
                  leading-tight
                  mb-6
                "
              >
                {svc.title}
              </h1>

              {/* DESC */}
              <p
                className="
                  text-slate-500
                  text-[17px]
                  leading-8
                  max-w-2xl
                  mb-10
                "
              >
                {svc.intro}
              </p>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/appointment"
                  className="
                    px-8
                    py-4
                    rounded-full
                    text-white
                    text-sm
                    font-semibold
                    no-underline
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    shadow-lg
                  "
                  style={{
                    background: svc.accent,
                  }}
                >
                  Book Appointment
                </Link>

                <Link
                  to="/contact"
                  className="
                    px-8
                    py-4
                    rounded-full
                    border
                    border-slate-200
                    bg-white
                    text-slate-700
                    text-sm
                    font-semibold
                    no-underline
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-lg
                  "
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* IMAGE */}
            <div className="relative">
              {/* BOX */}
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[35px]
                  bg-white
                  p-4
                  shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                "
              >
                <img
                  src={svc.image}
                  alt={svc.title}
                  className="
                    w-full
                    h-[500px]
                    object-cover
                    rounded-[28px]
                    hover:scale-105
                    transition-all
                    duration-700
                  "
                />

                {/* FLOAT CARD */}
                <div
                  className="
                    absolute
                    bottom-8
                    left-8
                    bg-white/90
                    backdrop-blur-xl
                    rounded-3xl
                    px-6
                    py-5
                    shadow-xl
                  "
                >
                  <h3
                    className="text-3xl font-bold"
                    style={{
                      color: svc.accent,
                    }}
                  >
                    15+
                  </h3>

                  <p className="text-slate-500 text-sm mt-1">
                    Years Experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* HEADER */}
          <div className="text-center mb-16">
            <span
              className="uppercase tracking-[4px] text-sm font-semibold"
              style={{
                color: svc.accent,
              }}
            >
              Treatment Services
            </span>

            <h2 className="text-4xl font-bold text-slate-800 mt-4">
              Complete Healthcare Solutions
            </h2>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7">
            {svc.items.map((item, index) => (
              <div
                key={item.name}
                className="
                  group
                  relative
                  bg-white
                  rounded-[30px]
                  p-7
                  border
                  border-slate-100
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]
                "
              >
                {/* NUMBER */}
                <div
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    text-white
                    text-lg
                    font-bold
                    mb-6
                  "
                  style={{
                    background: svc.accent,
                  }}
                >
                  {index + 1}
                </div>

                {/* TITLE */}
                <h3 className="text-[22px] font-bold text-slate-800 mb-4">
                  {item.name}
                </h3>

                {/* TEXT */}
                <p className="text-slate-500 leading-7 text-[15px]">
                  {item.desc}
                </p>

                {/* BORDER */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    w-0
                    h-[4px]
                    rounded-full
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                  style={{
                    background: svc.accent,
                  }}
                ></div>
              </div>
            ))}
          </div>

          {/* NAVIGATION */}
          <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-5">
            {/* PREV */}
            {prevId ? (
              <button
                onClick={() => navigate(`/services/${prevId}`)}
                className="
                  px-7
                  py-4
                  rounded-full
                  bg-white
                  border
                  border-slate-200
                  text-slate-700
                  text-sm
                  font-semibold
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                "
              >
                ← Previous Service
              </button>
            ) : (
              <div></div>
            )}

            {/* CENTER */}
            <Link
              to="/services"
              className="
                px-8
                py-4
                rounded-full
                text-white
                text-sm
                font-semibold
                no-underline
                transition-all
                duration-300
                hover:-translate-y-1
                shadow-lg
              "
              style={{
                background: svc.accent,
              }}
            >
              View All Services
            </Link>

            {/* NEXT */}
            {nextId ? (
              <button
                onClick={() => navigate(`/services/${nextId}`)}
                className="
                  px-7
                  py-4
                  rounded-full
                  bg-white
                  border
                  border-slate-200
                  text-slate-700
                  text-sm
                  font-semibold
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                "
              >
                Next Service →
              </button>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}