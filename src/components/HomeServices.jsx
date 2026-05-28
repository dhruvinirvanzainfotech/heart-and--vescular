import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const services = [
  {
    id: "cardiac",
    image: "/image/service1.jpg",
    title: "Advanced Cardiac Testing",
    desc:
      "Comprehensive heart diagnostic services including ECG, Echocardiogram, Stress Testing, Holter Monitoring, and advanced cardiac evaluation for complete heart health assessment.",
  },

  {
    id: "vascular",
    image: "/image/service2.jpg",
    title: "Vascular Treatment Care",
    desc:
      "Professional vascular treatment solutions designed to improve blood circulation, diagnose artery conditions, and provide advanced minimally invasive procedures.",
  },

  {
    id: "varicose",
    image: "/image/service3.jpg",
    title: "Varicose Vein Treatment",
    desc:
      "Modern varicose vein treatment with laser therapy, minimally invasive care, vein screening, and advanced vascular procedures for long-term comfort.",
  },

  {
    id: "nutrition",
    image: "/image/service4.jpg",
    title: "Nutrition & Wellness",
    desc:
      "Personalized nutrition counseling and healthy lifestyle guidance focused on cardiovascular wellness, cholesterol management, and long-term heart health.",
  },

  {
    id: "heart",
    image: "/image/service5.jpg",
    title: "Preventive Heart Screening",
    desc:
      "Complete preventive heart screening and cardiovascular checkups to detect early heart risks and maintain healthy heart function.",
  },

  {
    id: "echo",
    image: "/image/service6.jpg",
    title: "2D Echo & Ultrasound",
    desc:
      "Advanced 2D echo imaging and ultrasound diagnostics for detailed heart structure analysis and accurate cardiovascular monitoring.",
  },

  {
    id: "blood",
    image: "/image/service7.jpg",
    title: "Blood Pressure Monitoring",
    desc:
      "Continuous blood pressure monitoring and hypertension management designed to reduce cardiovascular risks and improve overall wellness.",
  },

  {
    id: "consultation",
    image: "/image/service8.jpg",
    title: "Heart Specialist Consultation",
    desc:
      "Expert consultation with experienced cardiovascular specialists offering personalized treatment plans and advanced cardiac care solutions.",
  },
];

export default function HomeServices() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) =>
        prev === services.length - 4 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-24 overflow-hidden bg-[#f4f8fc]">

      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-blue-100 blur-[120px] rounded-full opacity-60"></div>

      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-sky-100 blur-[120px] rounded-full opacity-60"></div>

      {/* HEADER */}
      <div className="relative z-10 text-center px-6 mb-16">

        <span
          className="
            uppercase
            tracking-[5px]
            text-sky-700
            text-[16px]
            font-bold
          "
        >
          OUR SERVICES
        </span>

       <h2
  className="
    text-5xl
    font-bold
    mt-4
    leading-tight
    text-red-500
  "
>
          <span className="text-red">
            Complete Heart & Vascular Care
          </span>

          <br />

          
        </h2>

        <p
          className="
            text-slate-500
            text-[16px]
            max-w-2xl
                font-bold

            mx-auto
            mt-6
            leading-8
          "
        >
          Advanced cardiovascular healthcare solutions with
          expert treatment, modern diagnostics, and
          compassionate patient care.
        </p>
      </div>

      {/* SLIDER */}
      <div className="relative z-10 overflow-hidden">

        <div
          className="flex transition-all duration-700 ease-in-out"
          style={{
            transform: `translateX(-${current * 25}%)`,
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="
                min-w-[100%]
                sm:min-w-[50%]
                lg:min-w-[25%]
                px-4
              "
            >
              <Link
                to={`/services/${service.id}`}
                className="no-underline"
              >
                <div
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[30px]
                    bg-white
                    border
                    border-slate-200
                    shadow-[0_15px_40px_rgba(0,0,0,0.06)]
                    hover:shadow-[0_20px_50px_rgba(37,99,235,0.18)]
                    transition-all
                    duration-500
                    hover:-translate-y-3
                  "
                >

                  {/* IMAGE */}
                  <div className="relative h-[250px] overflow-hidden">

                    <img
                      src={service.image}
                      alt={service.title}
                      className="
                        w-full
                        h-full
                        object-cover
                        transition-all
                        duration-700
                        group-hover:scale-110
                      "
                    />

                    {/* OVERLAY */}
                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/70
                        via-black/20
                        to-transparent
                      "
                    ></div>

                    {/* NUMBER */}
                    

                    {/* TITLE ON IMAGE */}
                    <div className="absolute bottom-5 left-5 right-5">

                      <h3
                        className="
                          text-white
                          text-[24px]
                          font-bold
                          leading-tight
                        "
                      >
                        {service.title}
                      </h3>

                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-7">

                    <p
                      className="
                        text-slate-500
                        text-[15px]
                        leading-7
                        mb-6
                            font-bold

                      "
                    >
                      {service.desc}
                    </p>

                    {/* BUTTON */}
                    <div
                      className="
                        inline-flex
                        items-center
                        gap-3
                        text-sky-700
                        font-semibold
                        transition-all
                        duration-300
                        group-hover:gap-5
                      "
                    >
                      Explore Service

                      <span
                        className="
                          transition-all
                          duration-300
                          group-hover:translate-x-2
                        "
                      >
                        →
                      </span>
                    </div>
                  </div>

                  {/* HOVER LIGHT */}
                  <div
                    className="
                      absolute
                      inset-0
                      opacity-0
                      group-hover:opacity-100
                      transition-all
                      duration-700
                      bg-gradient-to-b
                      from-blue-100/20
                      to-transparent
                      pointer-events-none
                    "
                  ></div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* DOTS */}
      <div className="flex justify-center mt-12 gap-3">

        {services.slice(0, 5).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`
              rounded-full
              transition-all
              duration-500
              ${
                current === index
                  ? "w-10 h-3 bg-gradient-to-r from-sky-700 to-blue-900"
                  : "w-3 h-3 bg-slate-300"
              }
            `}
          ></button>
        ))}

      </div>

      {/* BUTTON */}
      <div className="text-center mt-14">

        <Link
          to="/services"
          className="
            inline-flex
            items-center
            gap-3
            px-8
            py-4
            rounded-full
            bg-gradient-to-r
            from-sky-700
            to-blue-900
            text-white
            text-[14px]
            font-semibold
            no-underline
            transition-all
            duration-500
            hover:scale-105
            hover:shadow-[0_15px_40px_rgba(37,99,235,0.25)]
          "
        >
          View All Services →

        </Link>

      </div>
    </section>
  );
}