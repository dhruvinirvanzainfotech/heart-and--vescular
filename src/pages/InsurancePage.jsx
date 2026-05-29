import InsuranceSection from "../components/InsuranceSection";
import InsuranceRightImage from "../components/InsuranceRightImage";
import { Link } from "react-router-dom";


export default function InsurancePage() {
  return (
    <div className="min-h-screen bg-[#f5fbfc] overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-50 via-white to-sky-50 overflow-hidden">

        {/* BACKGROUND LIGHTS */}
        <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-cyan-200/30 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[320px] h-[320px] bg-sky-100/40 blur-[120px] rounded-full"></div>

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <div>

            {/* TAG */}
            <div
              className="
                inline-flex
                items-center
                gap-3
                px-5
                py-2
                rounded-full
                bg-cyan-100
                border
                border-cyan-200
                mb-6
              "
            >
              <span className="w-2 h-2 rounded-full bg-cyan-500"></span>

              <span className="text-cyan-700 text-[12px] font-semibold tracking-[2px] uppercase">
                Accepted Insurance Plans
              </span>
            </div>

            {/* TITLE */}
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-6">
              Insurance Support <br />

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-900 to-sky-800">
                Made Simple
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="text-slate-600 text-[16px] leading-relaxed max-w-xl mb-8">
              We work with many major insurance providers to help patients
              receive smooth access to cardiac and vascular care without stress.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4">

              <a
                href="#insurance-list"
                className="
                  px-7
                  py-3.5
                  rounded-full
                  bg-cyan-800
                  hover:bg-cyan-900
                  text-white
                  text-sm
                  font-semibold
                  no-underline
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                  hover:shadow-cyan-200
                "
              >
                View Insurance
              </a>

              <Link
                to="/appointment"
                className="
                  px-7
                  py-3.5
                  rounded-full
                  border
                  border-cyan-900
                  bg-white
                  hover:bg-cyan-700
                  text-white-800
                  text-sm
                  font-semibold
                  no-underline
                  transition-all
                  duration-300
                "
              >
                Book an Appointment
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <InsuranceRightImage />
          </div>
        </div>
      </section>

      {/* INSURANCE LIST SECTION */}
      <section
        id="insurance-list"
        className="relative py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">

          {/* INSURANCE COMPONENT */}
          <InsuranceSection />


        </div>
      </section>

      {/* ANIMATION */}
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

          @keyframes floatSlow {
            0% {
              transform: translateY(0px);
            }

            50% {
              transform: translateY(-6px);
            }

            100% {
              transform: translateY(0px);
            }
          }

          .animate-float {
            animation: float 5s ease-in-out infinite;
          }

          .animate-floatSlow {
            animation: floatSlow 6s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
}