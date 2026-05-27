export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        py-24
        px-5
        md:px-10
        overflow-hidden
        bg-[#f8fcfd]
      "
    >
      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-cyan-100 blur-[120px] rounded-full opacity-50"></div>

      <div className="absolute bottom-0 right-0 w-[260px] h-[260px] bg-sky-100 blur-[100px] rounded-full opacity-50"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* TOP HEADER */}
        <div className="text-center mb-16">

          <span
            className="
              inline-block
              px-5
              py-2
              rounded-full
              bg-cyan-100
              text-cyan-700
              text-[11px]
              font-semibold
              tracking-[3px]
              uppercase
              mb-5
            "
          >
            About Specialist
          </span>

          <h2
            className="
              text-3xl
              md:text-5xl
              font-bold
              text-slate-900
              leading-tight
              max-w-3xl
              mx-auto
            "
          >
            Advanced Cardiology Care <br />

            <span className="text-cyan-600">
              With Trusted Experience
            </span>
          </h2>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT IMAGE */}
          <div className="relative">

            {/* IMAGE CARD */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[40px]
                shadow-[0_20px_60px_rgba(0,0,0,0.10)]
                group
              "
            >
              <img
                src="/image/doctor2.jpg"
                alt="Doctor"
                className="
                  w-full
                  h-[540px]
                  object-cover
                  object-top
                  transition-all
                  duration-700
                  group-hover:scale-105
                "
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent"></div>

              {/* FLOAT CARD */}
              <div
                className="
                  absolute
                  bottom-6
                  left-6
                  right-6
                  bg-white/90
                  backdrop-blur-xl
                  rounded-3xl
                  p-5
                  shadow-xl
                  border
                  border-white/50
                  flex
                  items-center
                  justify-between
                  gap-4
                "
              >
                <div>
                  <h3 className="text-2xl font-bold text-cyan-600">
                    15+
                  </h3>

                  <p className="text-slate-600 text-sm">
                    Years Experience
                  </p>
                </div>

                <div className="w-[1px] h-10 bg-slate-200"></div>

                <div>
                  <h3 className="text-2xl font-bold text-cyan-600">
                    5000+
                  </h3>

                  <p className="text-slate-600 text-sm">
                    Happy Patients
                  </p>
                </div>
              </div>
            </div>

            {/* FLOATING BADGE */}
            <div
              className="
                hidden
                md:flex
                absolute
                -top-5
                -right-5
                bg-white
                shadow-2xl
                rounded-3xl
                px-6
                py-5
                border
                border-cyan-100
                items-center
                gap-4
                animate-bounceSlow
              "
            >
              <div
                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-cyan-100
                  flex
                  items-center
                  justify-center
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
                  Modern diagnostics & treatment
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>

            <h3
              className="
                text-2xl
                md:text-4xl
                font-bold
                text-slate-900
                leading-tight
                mb-5
              "
            >
              Dr. Ankur Shah
            </h3>

            <p
              className="
                text-cyan-600
                font-semibold
                text-[14px]
                mb-8
              "
            >
              Cardiologist & Vascular Specialist · New York
            </p>

            <div className="space-y-5">

              <p className="text-slate-600 text-[15px] leading-relaxed">
                Dr. Ankur Shah specializes in advanced heart and
                vascular care using modern diagnostics, preventive
                treatment, and patient-focused medical solutions.
              </p>

              <p className="text-slate-600 text-[15px] leading-relaxed">
                His approach combines clinical expertise with
                compassionate support to help patients achieve
                healthier lifestyles and long-term wellness.
              </p>

              <p className="text-slate-600 text-[15px] leading-relaxed">
                Thousands of patients trust his experience in
                cardiovascular treatment, accurate diagnosis,
                and personalized care planning.
              </p>
            </div>

            {/* FEATURE BOXES */}
            <div className="grid sm:grid-cols-2 gap-5 mt-10">

              <div
                className="
                  bg-white
                  border
                  border-cyan-100
                  rounded-3xl
                  p-6
                  shadow-md
                  hover:-translate-y-1
                  hover:shadow-xl
                  transition-all
                  duration-300
                "
              >
                <div
                  className="
                    w-12
                    h-12
                    rounded-2xl
                    bg-cyan-100
                    flex
                    items-center
                    justify-center
                    text-xl
                    mb-4
                  "
                >
                  🩺
                </div>

                <h4 className="text-slate-900 font-semibold mb-2">
                  Advanced Diagnostics
                </h4>

                <p className="text-slate-500 text-sm leading-relaxed">
                  Modern cardiac testing and personalized treatment plans.
                </p>
              </div>

              <div
                className="
                  bg-white
                  border
                  border-cyan-100
                  rounded-3xl
                  p-6
                  shadow-md
                  hover:-translate-y-1
                  hover:shadow-xl
                  transition-all
                  duration-300
                "
              >
                <div
                  className="
                    w-12
                    h-12
                    rounded-2xl
                    bg-cyan-100
                    flex
                    items-center
                    justify-center
                    text-xl
                    mb-4
                  "
                >
                  💙
                </div>

                <h4 className="text-slate-900 font-semibold mb-2">
                  Patient-Focused Care
                </h4>

                <p className="text-slate-500 text-sm leading-relaxed">
                  Compassionate support designed around patient comfort.
                </p>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href="/appointment"
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-7
                  py-3.5
                  rounded-full
                  bg-cyan-500
                  hover:bg-cyan-600
                  text-white
                  text-sm
                  font-semibold
                  no-underline
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_15px_35px_rgba(6,182,212,0.25)]
                "
              >
                Schedule Consultation
                <span>→</span>
              </a>

              <a
                href="/services"
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-7
                  py-3.5
                  rounded-full
                  bg-white
                  border
                  border-cyan-200
                  text-cyan-700
                  text-sm
                  font-semibold
                  no-underline
                  transition-all
                  duration-300
                  hover:bg-cyan-50
                "
              >
                View Services
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ANIMATION */}
      <style>
        {`
          @keyframes bounceSlow {
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

          .animate-bounceSlow {
            animation: bounceSlow 5s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
}