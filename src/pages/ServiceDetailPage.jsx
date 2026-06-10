import { useParams, useNavigate, Link } from "react-router-dom";

const alltreatments = {
  cardiac: {
    image: "/image/service1.jpg",
    title: "Cardiac Testing and Treatment",
    teal: true,
    intro:
      "Our cardiac testing and treatment treatments provide comprehensive evaluation and management of all heart conditions using the latest diagnostic technology and evidence-based treatments.",

    items: [
      {
        name: "Routine Cardiac Testing",
        desc: "Complete cardiovascular health screening and risk assessment.",
      },
      {
        name: "Pre-operative Cardiac Clearance",
        desc: "Thorough cardiac evaluation before surgical procedures.",
      },
      {
        name: "Evaluation of Abnormal Cardiac Rhythms",
        desc: "Diagnosis and management of irregular heart rhythms.",
      },
      {
        name: "Stress Testing",
        desc: "Exercise and imaging-based heart performance evaluation.",
      },
      {
        name: "Echocardiography / Doppler",
        desc: "Detailed ultrasound imaging of heart structure and function.",
      },
      {
        name: "Holter Monitor",
        desc: "Continuous 24–48 hour cardiac rhythm recording.",
      },
    ],
  },

  vascular: {
    image: "/image/service2.jpg",
    title: "Vascular Testing and Treatment",
    teal: false,
    intro:
      "Our vascular treatments provide non-invasive diagnostic testing and interventional treatment for diseases of arteries and veins.",

    items: [
      {
        name: "Carotid Doppler",
        desc: "Ultrasound evaluation of neck arteries for stroke risk.",
      },
      {
        name: "Aorta Doppler",
        desc: "Imaging of the main body artery for aneurysm detection.",
      },
      {
        name: "Arterial Doppler",
        desc: "Blood flow assessment in peripheral arteries.",
      },
      {
        name: "Venous Doppler",
        desc: "Evaluation of venous circulation and clot detection.",
      },
      {
        name: "Kidney Artery Doppler",
        desc: "Renal artery imaging for hypertension evaluation.",
      },
      {
        name: "ABI Testing",
        desc: "Peripheral artery disease screening test.",
      },
    ],
  },

  varicose: {
    image: "/image/service3.jpg",
    title: "Varicose Veins & Lymphedema Treatment",
    teal: true,
    intro:
      "We offer advanced minimally invasive treatments for varicose veins, ulcers and lymphedema care.",

    items: [
      {
        name: "Venous Reflux Testing",
        desc: "Comprehensive venous mapping and reflux evaluation.",
      },
      {
        name: "Laser Ablation",
        desc: "Laser-based minimally invasive vein closure procedure.",
      },
      {
        name: "Sclerotherapy",
        desc: "Injection treatment for varicose and spider veins.",
      },
      {
        name: "Compression Therapy",
        desc: "Advanced therapy to reduce swelling and pain.",
      },
      {
        name: "Manual Lymphatic Drainage",
        desc: "Specialized massage technique to stimulate lymph flow.",
      },
    ],
  },

  nutrition: {
    image: "/image/service4.jpg",
    title: "Nutrition Counseling",
    teal: false,
    intro:
      "Personalized nutrition counseling to support heart health and healthy lifestyle management.",

    items: [
      {
        name: "Nutrition Consultation",
        desc: "Personalized dietary assessment and planning.",
      },
      {
        name: "BMI Consultation",
        desc: "Healthy weight and fitness evaluation.",
      },
      {
        name: "Body Fat Analysis",
        desc: "Body composition assessment and guidance.",
      },
      {
        name: "Diet Planning",
        desc: "Custom meal planning for wellness goals.",
      },
    ],
  },
  lymphedema: {
  image: "/image/service5.jpg",
  title: "Lymphedema Treatment Center",
  teal: true,
  intro:
    "Our lymphedema treatment program helps reduce swelling, improve circulation, and enhance mobility through advanced therapeutic techniques and personalized care.",

  items: [
    {
      name: "Lymphedema Evaluation",
      desc: "Comprehensive assessment and diagnosis of lymphatic swelling.",
    },
    {
      name: "Compression Therapy",
      desc: "Specialized compression garments and bandaging techniques.",
    },
    {
      name: "Manual Lymphatic Drainage",
      desc: "Gentle massage therapy that stimulates lymphatic flow.",
    },
    {
      name: "Complete Decongestive Therapy",
      desc: "Integrated treatment combining drainage, exercise, and compression.",
    },
    {
      name: "Exercise Therapy",
      desc: "Customized movement programs to improve lymphatic circulation.",
    },
    {
      name: "Long-Term Management",
      desc: "Ongoing care plans to prevent recurrence and maintain results.",
    },
  ],
},
};

const order = ["cardiac", "vascular", "varicose", "nutrition"];

export default function ServiceDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const svc = alltreatments[id];

  if (!svc) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-slate-500 text-lg">
          Service not found.
        </p>

        <Link
          to="/treatments"
          className="text-cyan-600 font-semibold no-underline hover:underline"
        >
          ← Back to treatments
        </Link>
      </div>
    );
  }

  const isTeal = svc.teal;

  const currentIdx = order.indexOf(id);

  const prevId = order[currentIdx - 1];

  const nextId = order[currentIdx + 1];

  return (
    <div className="min-h-screen bg-[#f8fcfd]">
      {/* HERO SECTION */}
      <div
        className={`
          relative
          overflow-hidden
          ${
            isTeal
              ? "bg-gradient-to-r from-cyan-600 to-cyan-500"
              : "bg-gradient-to-r from-[#1a1a2e] to-[#16213e]"
          }
        `}
      >
        {/* BACKGROUND EFFECT */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/10 rounded-full blur-[120px]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT CONTENT */}
          <div className="text-white">
            <div className="inline-block px-4 py-2 rounded-full bg-white/15 text-[12px] uppercase tracking-[3px] font-semibold mb-5">
              Medical Service
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              {svc.title}
            </h1>

            <p className="text-white/80 leading-8 text-[16px] max-w-xl">
              {svc.intro}
            </p>

            <div className="mt-8 flex gap-4 flex-wrap">
              <a
                href="/#appointment"
                className="
                  px-7
                  py-3
                  rounded-full
                  bg-white
                  text-cyan-700
                  font-semibold
                  no-underline
                  transition-all
                  duration-300
                  hover:scale-105
                "
              >
                Book an Appointment
              </a>

              <Link
                to="/treatments"
                className="
                  px-7
                  py-3
                  rounded-full
                  border
                  border-white/40
                  text-white
                  no-underline
                  font-semibold
                  transition-all
                  duration-300
                  hover:bg-white/10
                "
              >
                All treatments
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="overflow-hidden rounded-[30px] shadow-2xl">
              <img
                src={svc.image}
                alt={svc.title}
                className="
                  w-full
                  h-[400px]
                  object-cover
                  transition-all
                  duration-700
                  hover:scale-105
                "
              />
            </div>

            {/* FLOATING CARD */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5">
              <p className="text-slate-400 text-sm mb-1">
                Expert Medical Care
              </p>

              <h3 className="text-slate-800 font-bold text-lg">
                Trusted Treatment
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* BREADCRUMB */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-2 text-sm">
          <Link
            to="/"
            className="text-slate-400 hover:text-cyan-600 no-underline"
          >
            Home
          </Link>

          <span className="text-slate-300">›</span>

          <Link
            to="/treatments"
            className="text-slate-400 hover:text-cyan-600 no-underline"
          >
            treatments
          </Link>

          <span className="text-slate-300">›</span>

          <span className="text-slate-700 font-medium">
            {svc.title}
          </span>
        </div>
      </div>

      {/* treatments */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <span className="uppercase tracking-[3px] text-cyan-600 text-[12px] font-semibold">
            What We Offer
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-3">
            Advanced Treatment treatments
          </h2>
        </div>

        {/* SERVICE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {svc.items.map((item, index) => (
            <div
              key={item.name}
              className="
                group
                bg-white
                border
                border-slate-100
                rounded-3xl
                p-7
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)]
              "
            >
              <div
                className={`
                  w-14
                  h-14
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  text-white
                  text-lg
                  font-bold
                  mb-5
                  ${
                    isTeal
                      ? "bg-cyan-600"
                      : "bg-[#1a1a2e]"
                  }
                `}
              >
                {index + 1}
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-3">
                {item.name}
              </h3>

              <p className="text-slate-500 leading-7 text-[15px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* PREV NEXT */}
        <div className="mt-20 flex justify-between items-center flex-wrap gap-5 border-t border-slate-200 pt-8">
          {prevId ? (
            <button
              onClick={() =>
                navigate(`/treatments/${prevId}`)
              }
              className="
                border-none
                bg-transparent
                text-slate-500
                hover:text-cyan-600
                text-sm
                cursor-pointer
                transition-all
              "
            >
              ← {alltreatments[prevId].title}
            </button>
          ) : (
            <div />
          )}

          <Link
            to="/treatments"
            className="
              px-6
              py-3
              rounded-full
              bg-cyan-600
              text-white
              no-underline
              text-sm
              font-semibold
            "
          >
            All treatments
          </Link>

          {nextId ? (
            <button
              onClick={() =>
                navigate(`/treatments/${nextId}`)
              }
              className="
                border-none
                bg-transparent
                text-slate-500
                hover:text-cyan-600
                text-sm
                cursor-pointer
                transition-all
              "
            >
              {alltreatments[nextId].title} →
            </button>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}