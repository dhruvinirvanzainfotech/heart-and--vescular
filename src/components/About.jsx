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
        bg-[#f8fafc]
      "
    >
      {/* SOFT BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#c4b5fd] blur-[140px] opacity-20 rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#f9a8d4] blur-[140px] opacity-20 rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* SECTION HEADER */}
        <div className="text-center mb-20">

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
              border-[#f3e8ff]
              text-[#a855f7]
              text-xs
              font-semibold
              tracking-[2px]
              uppercase
              shadow-sm
              mb-6
            "
          >
            ✨ About Doctor
          </span>

          <h2
            className="
              text-3xl
              md:text-5xl
              font-bold
              text-slate-900
              leading-tight
            "
          >
            Modern Cardiology <br />
            With Human Care
          </h2>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT SIDE */}
          <div className="relative">

            {/* IMAGE BOX */}
            <div
              className="
                relative
                rounded-[40px]
                overflow-hidden
                bg-white
                p-4
                shadow-[0_20px_80px_rgba(15,23,42,0.08)]
              "
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden rounded-[30px]">

                <img
                  src="/image/doctor2.jpg"
                  alt="Dr. Ankur Shah"
                  className="
                    w-full
                    h-[650px]
                    object-cover
                    object-top
                    transition-all
                    duration-700
                    hover:scale-105
                  "
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

              </div>

              {/* EXPERIENCE CARD */}
              <div
                className="
                  absolute
                  bottom-10
                  left-10
                  bg-white/90
                  backdrop-blur-xl
                  px-7
                  py-5
                  rounded-[24px]
                  shadow-2xl
                  border
                  border-white/40
                "
              >
                <h3 className="text-4xl font-bold text-[#ec4899]">
                  15+
                </h3>

                <p className="text-slate-500 text-sm mt-1">
                  Years of Excellence
                </p>
              </div>

              {/* FLOATING MINI CARD */}
              <div
                className="
                  hidden
                  md:flex
                  absolute
                  -top-6
                  -right-6
                  bg-white
                  rounded-[28px]
                  px-5
                  py-4
                  shadow-[0_20px_60px_rgba(0,0,0,0.10)]
                  items-center
                  gap-4
                  border
                  border-slate-100
                  animate-float
                "
              >
                <div
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-gradient-to-r
                    from-[#ec4899]
                    to-[#a855f7]
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
                  <h4 className="text-slate-900 font-semibold text-sm">
                    Trusted Heart Care
                  </h4>

                  <p className="text-slate-500 text-xs mt-1">
                    Modern treatment & diagnosis
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div>

            {/* TAG */}
            <span
              className="
                font-19px
                inline-flex
                items-center
                px-5
                py-2
                rounded-full
                bg-[#fdf4ff]
                text-[#db2777]
                font-semibold
                mb-6
              "
            >
              🩺 Cardiologist & Vascular Specialist
            </span>

            {/* NAME */}
            <h3
              className="
                text-xl
                md:text-6xl
                font-bold
                text-slate-900
                leading-tight
                mb-5
              "
            >
              Dr. Ankur Shah
            </h3>

            {/* SUBTEXT */}
            <p
              className="
                text-lg
                text-[#a855f7]
                font-medium
                mb-8
                font-semibold

              "
            >
              Advanced Heart & Vascular Care Specialist
            </p>

            {/* PARAGRAPH */}
            <div className="space-y-6">

              <p className="text-slate-600 leading-8 text-[16px] font-semibold">
                Dr. Ankur Shah specializes in advanced cardiology,
                vascular treatment, preventive heart care, and
                minimally invasive procedures with patient-first care.
              </p>

              <p className="text-slate-600 leading-8 text-[16px] font-semibold">
                Combining modern medical technology with compassionate
                treatment, he has helped thousands of patients improve
                long-term cardiovascular health and quality of life.
              </p>

            </div>

            {/* FEATURES */}
            <div className="grid sm:grid-cols-2 gap-6 mt-12">

              {/* CARD */}
              <div
                className="
                  bg-white
                  p-7
                  rounded-[30px]
                  border
                  border-slate-100
                  shadow-[0_10px_40px_rgba(0,0,0,0.04)]
                  hover:-translate-y-2
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
                    font-semibold
                  "
                >
                  💓
                </div>

                <h4 className="text-slate-900 font-semibold text-lg mb-3">
                  Cardiac Diagnostics
                </h4>

                <p className="text-slate-500 text-12px leading-7 font-semibold">
                  ECG, Echo, stress testing, and advanced heart
                  evaluations with precision diagnosis.
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
                  shadow-[0_10px_40px_rgba(0,0,0,0.04)]
                  hover:-translate-y-2
                  transition-all
                  duration-500
                "
              >
                <div
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-[#eef2ff]
                    flex
                    items-center
                    justify-center
                    text-2xl
                    mb-5
                  "
                >
                  🩺
                </div>

                <h4 className="text-slate-900 font-semibold text-lg mb-3">
                  Personalized Treatment
                </h4>

                <p className="text-slate-500 text-14px leading-7 font-semibold">
                  Patient-focused care plans for long-term heart
                  wellness and healthy living.
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
                  from-[#ec4899]
                  to-[#a855f7]
                  text-white
                  font-semibold
                  no-underline
                  transition-all
                  duration-500
                  hover:scale-105
                  hover:shadow-[0_20px_50px_rgba(168,85,247,0.25)]
                "
              >
                Book Appointment
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

      {/* CUSTOM FLOAT ANIMATION */}
      <style>
        {`
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

          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
}