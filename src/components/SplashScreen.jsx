import { useEffect, useState } from "react";

export default function SplashScreen({ onDone }) {
  const [phase, setPhase] = useState("show");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("out"), 3200);
    const t2 = setTimeout(() => onDone(), 4000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onDone]);

  return (
    <div
      className={`
        fixed
        inset-0
        z-[99999]
        overflow-hidden
        transition-all
        duration-1000
        bg-[#050816]
        ${
          phase === "out"
            ? "opacity-0 invisible pointer-events-none"
            : "opacity-100"
        }
      `}
    >

      {/* LEFT CURTAIN */}
      <div
        className={`
          absolute
          top-0
          left-0
          w-1/2
          h-full
          bg-gradient-to-br
          from-[#081120]
          via-[#0f1d35]
          to-black
          z-20
          transition-all
          duration-[1800ms]
          ease-in-out
          ${
            phase === "out"
              ? "-translate-x-full"
              : "translate-x-0"
          }
        `}
      >

        {/* LIGHT EFFECT */}
        <div className="absolute top-0 right-0 w-40 h-full bg-cyan-400/10 blur-3xl"></div>

      </div>

      {/* RIGHT CURTAIN */}
      <div
        className={`
          absolute
          top-0
          right-0
          w-1/2
          h-full
          bg-gradient-to-bl
          from-[#081120]
          via-[#0f1d35]
          to-black
          z-20
          transition-all
          duration-[1800ms]
          ease-in-out
          ${
            phase === "out"
              ? "translate-x-full"
              : "translate-x-0"
          }
        `}
      >

        {/* LIGHT EFFECT */}
        <div className="absolute top-0 left-0 w-40 h-full bg-cyan-400/10 blur-3xl"></div>

      </div>

      {/* CENTER CONTENT */}
      <div className="relative z-30 w-full h-full flex items-center justify-center">

        <div className="text-center px-4">

          {/* ECG LINE */}
          <div className="w-72 mx-auto mb-6 animate-fadeUp">

            <svg viewBox="0 0 100 60" className="w-full h-auto">

              <polyline
                points="
                  0,30
                  15,30
                  20,10
                  25,50
                  30,30
                  40,30
                  45,5
                  50,55
                  55,30
                  70,30
                  75,15
                  80,45
                  85,30
                  100,30
                "
                fill="none"
                stroke="#06b6d4"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-drawEcg"
              />

            </svg>
          </div>

          {/* LOGO */}
          <div className="w-52 h-52 mx-auto mb-6 animate-logoZoom">

            <img
              src="/public/image/favicon.png"
              alt="Logo"
              className="
                w-full
                h-full
                object-contain
                drop-shadow-[0_0_35px_rgba(0,255,255,0.35)]
              "
            />

          </div>

          {/* DOCTOR NAME */}
          <h1
            className="
              text-white
              text-4xl
              md:text-6xl
              font-extrabold
              tracking-wide
              mb-3
              animate-fadeUp2
            "
          >
            Dr. Ankur Shah
          </h1>

          {/* SPECIALIST */}
          <h2
            className="
              text-cyan-300
              text-lg
              md:text-2xl
              font-semibold
              tracking-[2px]
              mb-4
              animate-fadeUp3
            "
          >
            Heart & Vascular Specialist
          </h2>

          {/* SUBTITLE */}
          <p
            className="
              text-slate-300/80
              text-sm
              md:text-base
              tracking-[5px]
              uppercase
              mb-8
              animate-fadeUp4
            "
          >
         
          </p>

          {/* LOADING BAR */}
          <div
            className="
              w-64
              h-[4px]
              bg-white/10
              rounded-full
              overflow-hidden
              mx-auto
              animate-fadeUp4
            "
          >

            <div
              className="
                h-full
                rounded-full
                bg-gradient-to-r
                from-cyan-400
                via-sky-400
                to-cyan-300
                animate-loadBar
              "
            ></div>

          </div>

        </div>
      </div>

      {/* STYLES */}
      <style>
        {`
          @keyframes drawEcg {
            0% {
              stroke-dasharray: 400;
              stroke-dashoffset: 400;
            }

            100% {
              stroke-dashoffset: 0;
            }
          }

          .animate-drawEcg {
            animation: drawEcg 2s ease forwards;
          }

          @keyframes loadBar {
            0% {
              width: 0%;
            }

            100% {
              width: 100%;
            }
          }

          .animate-loadBar {
            animation: loadBar 3s linear forwards;
          }

          @keyframes logoZoom {
            0% {
              opacity: 0;
              transform: scale(0.6);
            }

            100% {
              opacity: 1;
              transform: scale(1);
            }
          }

          .animate-logoZoom {
            animation: logoZoom 1s ease forwards;
          }

          @keyframes fadeUp {
            0% {
              opacity: 0;
              transform: translateY(40px);
            }

            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeUp {
            animation: fadeUp 0.8s ease forwards;
          }

          .animate-fadeUp2 {
            opacity: 0;
            animation: fadeUp 0.8s ease forwards;
            animation-delay: 0.3s;
          }

          .animate-fadeUp3 {
            opacity: 0;
            animation: fadeUp 0.8s ease forwards;
            animation-delay: 0.6s;
          }

          .animate-fadeUp4 {
            opacity: 0;
            animation: fadeUp 0.8s ease forwards;
            animation-delay: 0.9s;
          }
        `}
      </style>
    </div>
  );
}