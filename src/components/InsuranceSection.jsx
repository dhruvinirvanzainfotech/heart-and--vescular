import { Link } from "react-router-dom";

const insuranceCards = [
  {
    title: "Most Insurance Accepted",
    desc: "We work with major insurance providers to make cardiac and vascular care simple and affordable.",
    image: "/image/doctor.jpg",
  },
  {
    title: "Easy Appointment Process",
    desc: "Quick scheduling with fast approvals and minimal paperwork for patients.",
    image: "/image/cardiac.png",
  },
  {
    title: "Trusted Medical Network",
    desc: "Connected with hospitals, labs, and diagnostic centers for complete patient care.",
    image: "/image/vascular.png",
  },
];

export default function InsuranceSection() {
  return (
    <section className="relative py-20 bg-[#f7fcfd] overflow-hidden">

      {/* BACKGROUND LIGHT */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-cyan-100 blur-[120px] rounded-full opacity-60"></div>

      <div className="absolute bottom-0 right-0 w-[280px] h-[280px] bg-sky-100 blur-[100px] rounded-full opacity-60"></div>

      <div className="relative max-w-7xl mx-auto px-5">

        {/* HEADER */}
        <div className="text-center mb-14">

          <span className="uppercase tracking-[3px] text-cyan-600 text-[11px] font-semibold">
            Why Patients Trust Us
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4 leading-tight">
            Complete Heart & Vascular Support
          </h2>

          <p className="text-slate-600 text-[14px] max-w-2xl mx-auto leading-relaxed">
            Modern cardiology care with trusted insurance coverage,
            advanced diagnostics, and compassionate patient support.
          </p>
        </div>

        {/* MAIN SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">



          {/* LEFT IMAGE CARD */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[32px]
              h-[420px] sm:h-[480px] lg:h-[520px]

              group
              shadow-xl
            "
          >
            <img
              src="/image/doctor2.jpg"
              alt="Doctor"
              className="
                w-full
                h-full
                object-cover
                transition-all
                duration-700
                group-hover:scale-105
              "
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>

            {/* CONTENT */}
            <div className="absolute bottom-0 left-0 p-6 sm:p-8 text-white">

              <div className="mb-4 inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-2 rounded-full text-[12px]">
                ❤️ Trusted Cardiology Care
              </div>

              <h3 className="text-3xl font-bold mb-4 leading-snug">
                Personalized Care <br />
                For Every Patient
              </h3>

              <p className="text-white/80 text-[14px] leading-relaxed max-w-md mb-6">
                Our experienced specialists provide advanced cardiac
                and vascular treatment with patient-first support and
                modern healthcare technology.
              </p>

              <Link
                to="/appointment"
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-6
                  py-3
                  rounded-full
                  bg-cyan-500
                  hover:bg-cyan-600
                  text-white
                  text-[13px]
                  font-semibold
                  no-underline
                  transition-all
                  duration-300
                  hover:gap-3
                "
              >
                Book an Appointment
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* RIGHT CARDS */}
          <div className="flex flex-col gap-6">

            {insuranceCards.map((item, index) => (
              <div
                key={item.title}
                className="
                  group
                  bg-white
                  border
                  border-cyan-100
                  rounded-[28px]
                  p-5
                  shadow-sm
                  hover:shadow-xl
                  hover:-translate-y-1
                  transition-all
                  duration-500
                  flex
                  items-center
                  gap-5
                "
                style={{
                  animation: `fadeUp 0.7s ease ${index * 0.15}s both`,
                }}
              >

                {/* IMAGE */}
                <div
                  className="
                    w-[110px]
                    h-[110px]
                    rounded-2xl
                    overflow-hidden
                    shrink-0
                    bg-cyan-50
                  "
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                      w-full
                      h-full
                      object-cover
                      transition-all
                      duration-500
                      group-hover:scale-110
                    "
                  />
                </div>

                {/* TEXT */}
                <div className="flex-1">

                  <h3 className="
                    text-[20px]
                    font-bold
                    text-slate-900
                    mb-2
                    group-hover:text-cyan-600
                    transition-all
                    duration-300
                  ">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-[14px] leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="mt-4">
                    <Link
                      to="/insurance"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        text-cyan-600
                        text-[13px]
                        font-semibold
                        no-underline
                        hover:gap-3
                        transition-all
                      "
                    >
                      Learn More
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
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