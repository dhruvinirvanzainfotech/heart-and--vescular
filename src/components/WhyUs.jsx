import { useAppointment } from "./AppointmentContext";

const features = [
  {
    number: "01",
    title: "Insurance Support",
    desc: "Most major insurance plans accepted with quick verification support.",
  },
  {
    number: "02",
    title: "Modern Diagnostics",
    desc: "Advanced cardiac and vascular testing with accurate reporting.",
  },
  {
    number: "03",
    title: "Fast Appointments",
    desc: "Easy scheduling with minimal waiting and patient-first service.",
  },
  {
    number: "04",
    title: "Trusted Specialists",
    desc: "Experienced doctors focused on long-term heart wellness.",
  },
];

export default function WhyUs() {
  const openModal = useAppointment();

  return (
    <section className="relative py-20 bg-[#f8fcfd] overflow-hidden">

      {/* BACKGROUND EFFECT */}
      <div className="absolute top-0 left-0 w-[280px] h-[280px] bg-cyan-100 blur-[110px] rounded-full opacity-60 animate-pulse"></div>

      <div className="absolute bottom-0 right-0 w-[280px] h-[280px] bg-sky-100 blur-[110px] rounded-full opacity-60 animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-5">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14 animate-fadeUp">

          <span className="
            inline-block
            px-5
            py-2
            rounded-full
            bg-cyan-100
            text-cyan-700
            text-[12px]
            font-semisemibold            tracking-[3px]
            uppercase
            mb-5
          ">
            Why Choose Us
          </span>

          <h2 className="
            text-3xl
            md:text-4xl
            font-semibold            text-slate-900
            leading-tight
            mb-4
          ">
            Trusted Heart & Vascular Care
          </h2>

          <p className="
            text-slate-600
            text-[15px]
            leading-relaxed
            font-semisemibold          ">
            Modern cardiac care with advanced diagnostics,
            experienced specialists, and patient-focused treatment.
          </p>
        </div>

        {/* MAIN BOX */}
        <div className="
          bg-white/80
          backdrop-blur-xl
          border
          border-cyan-100
          rounded-[40px]
          p-6
          md:p-10
          shadow-xl
          animate-fadeUp
        ">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* LEFT SIDE */}
            <div className="animate-slideLeft">

              <div className="flex items-center gap-3 mb-5">

                <div className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-cyan-100
                  flex
                  items-center
                  justify-center
                  text-2xl
                  animate-float
                ">
                  ❤️
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Personalized Patient Care
                  </h3>

                  <p className="text-slate-500 text-sm mt-1 font-semibold ">
                    Advanced treatment with compassionate support.
                  </p>
                </div>
              </div>

              <h2 className="
                text-3xl
                md:text-5xl
                font-semibold                text-slate-900
                leading-tight
                mb-6
              ">
                Better Care <br />

                <span className="text-cyan-600">
                  Better Heart Health
                </span>
              </h2>

              <p className="
                text-slate-600
                text-[15px]
                leading-relaxed
                mb-8
                max-w-xl
                font-semisemibold              ">
                We provide comprehensive heart and vascular care
                using modern medical technology and a patient-first approach
                designed for comfort, trust, and better outcomes.
              </p>

              {/* STATS */}
              <div className="grid grid-cols-2 gap-5 mb-8">

                <div className="
                  bg-cyan-50
                  rounded-3xl
                  p-5
                  border
                  border-cyan-100
                  hover:-translate-y-2
                  hover:shadow-lg
                  transition-all
                  duration-500
                ">
                  <h4 className="
                    text-3xl
                    font-semibold                    text-slate-900
                    mb-1
                  ">
                    15+
                  </h4>

                  <p className="text-slate-600 text-12px font-semibold">
                    Years Experience
                  </p>
                </div>

                <div className="
                  bg-cyan-50
                  rounded-3xl
                  p-5
                  border
                  border-cyan-100
                  hover:-translate-y-2
                  hover:shadow-lg
                  transition-all
                  duration-500
                ">
                  <h4 className="
                    text-3xl
                    font-semibold                    text-slate-900
                    mb-1
                  ">
                    5000+
                  </h4>

                  <p className="text-slate-600 text-12px font-semibold">
                    Happy Patients
                  </p>
                </div>
              </div>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-4">

                <button
                  onClick={openModal}
                  className="
                    inline-flex
                    items-center
                    gap-2
                    px-7
                    py-4
                    rounded-full
                    bg-slate-900
                    hover:bg-slate-800
                    text-white
                    text-sm
                    font-semisemibold
                    border-none
                    cursor-pointer
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-2xl
                  "
                >
                  Book an Appointment
                  <span className="group-hover:translate-x-1 transition-all">
                    →
                  </span>
                </button>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="grid sm:grid-cols-2 gap-5">

              {features.map((item, index) => (
                <div
                  key={item.title}
                  className="
                    group
                    bg-[#f9feff]
                    border
                    border-cyan-100
                    rounded-[30px]
                    p-7
                    hover:shadow-2xl
                    hover:-translate-y-3
                    transition-all
                    duration-500
                    animate-fadeUp
                  "
                  style={{
                    animationDelay: `${index * 0.15}s`,
                  }}
                >

                  <div className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-white
                    border
                    border-cyan-100
                    flex
                    items-center
                    justify-center
                    text-cyan-600
                    font-semibold                    text-lg
                    mb-5
                    group-hover:bg-cyan-500
                    group-hover:text-white
                    group-hover:rotate-6
                    transition-all
                    duration-300
                  ">
                    {item.number}
                  </div>

                  <h3 className="
                    text-[20px]
                    font-semibold                    text-slate-900
                    mb-3
                    group-hover:text-cyan-600
                    transition-all
                  ">
                    {item.title}
                  </h3>

                  <p className="
                    text-slate-600
                    text-[15px]
                    leading-relaxed
                    font-semibold
                  ">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CUSTOM ANIMATION */}
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

          @keyframes slideLeft {
            from {
              opacity: 0;
              transform: translateX(-40px);
            }

            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes float {
            0% {
              transform: translateY(0px);
            }

            50% {
              transform: translateY(-8px);
            }

            100% {
              transform: translateY(0px);
            }
          }

          .animate-fadeUp {
            animation: fadeUp 0.8s ease both;
          }

          .animate-slideLeft {
            animation: slideLeft 0.9s ease both;
          }

          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
}