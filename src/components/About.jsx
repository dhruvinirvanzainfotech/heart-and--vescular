export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        py-24
        px-5
        md:px-10
        bg-[#fff8fc]
      "
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-[#f9a8d4] blur-[140px] opacity-20 rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[320px] h-[320px] bg-[#fbcfe8] blur-[140px] opacity-20 rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-20 animate-fadeUp">
          <span
            className="
              inline-flex
              items-center
              gap-2
              px-5
              py-2
              rounded-full
              bg-white
              border
              border-[#fbcfe8]
              text-[#00838f]
              text-xs
              font-semibold
              tracking-[2px]
              uppercase
              shadow-sm
              mb-6
            "
          >
           About Doctor
          </span>

          <h2
            className="
              text-3xl
              md:text-5xl
              font-bold
              text-slate-900
              leading-tight
              animate-title
            "
          >
            Modern Cardiology <br />

            <span className="text-[#00838f]">With Human Care</span>
          </h2>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          {/* LEFT SIDE */}
          <div className="relative animate-left mt-6 lg:mt-0">
            {/* IMAGE BOX */}
            <div
              className="
                relative
                rounded-[40px]
                overflow-hidden
                bg-white
                p-4
                shadow-[0_20px_80px_rgba(236,72,153,0.08)]
              "
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden rounded-[30px] group">
                <img
                  src="/image/doctor2.jpg"
                  alt="Dr. Ankur Shah"
                  className="
                    w-full
                    h-[360px]
                    sm:h-[460px]
                    md:h-[560px]
                    lg:h-[650px]
                    object-cover
                    object-top
                    transition-all
                    duration-700
                    group-hover:scale-105
                  "
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>

              {/* EXPERIENCE CARD */}
              <div
                className="
                  absolute
                  bottom-10
                  left-10
                  bg-white/90
                  backdrop-blur-md
                  px-7
                  py-5
                  rounded-[24px]
                  shadow-xl
                  border
                  border-white/50
                  animate-float
                "
              >
                <h3 className="text-4xl font-bold text-[#ec4899]">15+</h3>

                <p className="text-slate-500 text-sm mt-1">Years of Excellence</p>
              </div>

              {/* FLOAT CARD */}
              <div
                className="
                  hidden
                  md:flex
                  absolute
                  -top-6
                  -right-6
                  bg-white
                  rounded-[24px]
                  px-5
                  py-4
                  shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                  items-center
                  gap-4
                  border
                  border-slate-100
                  animate-floatSlow
                "
              >
                <div
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-[#00838f]
                    flex
                    items-center
                    justify-center
                    text-white
                    text-2xl
                  "
                >
                  ❤️
                </div>

                <div>
                  <h4 className="text-slate-900 font-semibold text-sm">Trusted Heart Care</h4>

                  <p className="text-slate-500 text-xs mt-1">Modern treatment & diagnosis</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="animate-right">
            {/* TAG */}
            <span
              className="
                inline-flex
                items-center
                px-5
                py-2
                rounded-full
                bg-[#fdf2f8]
                text-[#00838f]
                font-semibold
                mb-6
              "
            >
              🩺 Cardiologist & Vascular Specialist
            </span>

            {/* NAME */}
            <h3
              className="
                text-4xl
                md:text-6xl
                font-bold
                text-slate-900
                leading-tight
                mb-5
              "
            >
              Dr.{" "}
              <span className="text-[#00838f]">Ankur Shah</span>
            </h3>

            {/* SUBTEXT */}
            <p
              className="
                text-lg
                text-[#00838f]
                font-semibold
                mb-8
              "
            >
              Advanced Heart & Vascular Care Specialist
            </p>

            {/* PARAGRAPH */}
            <div className="space-y-6">
              <p className="text-slate-600 leading-8 text-[16px]">
                Dr. Ankur Shah specializes in{" "}
                <span className="text-[#00838f] font-semibold">advanced cardiology</span>, vascular treatment,
                preventive heart care, and minimally invasive procedures with patient-first care.
              </p>

              <p className="text-slate-600 leading-8 text-[16px]">
                Combining{" "}
                <span className="text-[#00838f] font-semibold">modern medical technology</span> with compassionate
                treatment, he has helped thousands of patients improve long-term cardiovascular health and quality of
                life.
              </p>
            </div>

            {/* FEATURE CARDS */}
            <div className="grid sm:grid-cols-2 gap-6 mt-12">
              {/* CARD */}
              <div
                className="
                  bg-white
                  p-7
                  rounded-[30px]
                  border
                  border-slate-100
                  shadow-[0_10px_40px_rgba(236,72,153,0.05)]
                  hover:-translate-y-2
                  hover:shadow-[0_20px_50px_rgba(236,72,153,0.12)]
                  transition-all
                  duration-500
                "
              >
                <div
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-[#fdf2f8]
                    flex
                    items-center
                    justify-center
                    text-2xl
                    mb-5
                  "
                >
                  💓
                </div>

                <h4 className="text-cyan-700 font-semibold text-lg mb-3">Cardiac Diagnostics</h4>

                <p className="text-slate-900 leading-7">
                  ECG, Echo, stress testing, and advanced heart evaluations with precision diagnosis.
                </p>
              </div>

              {/* CARD */}
              <div
                className="
                  bg-white
                  p-7
                  rounded-[30px]
                  border
                  border-slate-100
                  shadow-[0_10px_40px_rgba(236,72,153,0.05)]
                  hover:-translate-y-2
                  hover:shadow-[0_20px_50px_rgba(236,72,153,0.12)]
                  transition-all
                  duration-500
                "
              >
                <div
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-[#fff1f2]
                    flex
                    items-center
                    justify-center
                    text-2xl
                    mb-5
                  "
                >
                  🩺
                </div>

                <h4 className="text-cyan-700 font-semibold text-lg mb-3">Personalized Treatment</h4>

                <p className="text-slate-900 leading-7">
                  Patient-focused care plans for long-term heart wellness and healthy living.
                </p>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-5 mt-14">
              <a
                href="/appointment"
                className="
                  inline-flex
                  items-center
                  gap-3
                  px-8
                  py-4
                  rounded-full
                  bg-gradient-to-r
                  from-[#00838f]
                  to-[#00838f]
                  text-white
                  font-semibold
                  no-underline
                  transition-all
                  duration-500
                  hover:scale-105
                  hover:shadow-[0_20px_40px_rgba(236,72,153,0.25)]
                "
              >
                Book an Appointment
                <span>→</span>
              </a>

              <a
                href="/services"
                className="
                  inline-flex
                  items-center
                  gap-3
                  px-8
                  py-4
                  rounded-full
                  bg-white
                  border
                  border-slate-200
                  text-slate-700
                  font-semibold
                  no-underline
                  hover:bg-slate-50
                  transition-all
                "
              >
                View Services
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ANIMATIONS */}
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

          @keyframes title {
            from {
              opacity: 0;
              letter-spacing: 6px;
              transform: translateY(30px);
            }

            to {
              opacity: 1;
              letter-spacing: 0;
              transform: translateY(0);
            }
          }

          @keyframes left {
            from {
              opacity: 0;
              transform: translateX(-60px);
            }

            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes right {
            from {
              opacity: 0;
              transform: translateX(60px);
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
              transform: translateY(-10px);
            }

            100% {
              transform: translateY(0px);
            }
          }

          @keyframes floatSlow {
            0% {
              transform: translateY(0px);
            }

            50% {
              transform: translateY(-15px);
            }

            100% {
              transform: translateY(0px);
            }
          }

          .animate-fadeUp {
            animation: fadeUp 1s ease;
          }

          .animate-title {
            animation: title 1.2s ease;
          }

          .animate-left {
            animation: left 1s ease;
          }

          .animate-right {
            animation: right 1s ease;
          }

          .animate-float {
            animation: float 4s ease-in-out infinite;
          }

          .animate-floatSlow {
            animation: floatSlow 5s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  )
}

