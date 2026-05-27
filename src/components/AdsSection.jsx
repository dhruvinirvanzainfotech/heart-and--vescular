import { Link } from 'react-router-dom'
import RevealSection from './RevealSection'

export default function AdsSection() {
  const cards = [
    {
      image: '/image/doctor.jpg',
      tag: 'Same-Day Consults',
      title: 'Quick Appointments, Clear Results',
      desc: 'Get expert care with fast scheduling and modern diagnostics for better patient care.',
      cta: {
        label: 'Book Appointment',
        to: '/appointment',
      },
    },

    {
      image: '/image/cardiac.png',
      tag: 'Cardiac Testing',
      title: 'Comprehensive Heart Evaluation',
      desc: 'EKG, stress testing, echocardiography and complete cardiac monitoring solutions.',
      cta: {
        label: 'Explore Services',
        to: '/services/cardiac',
      },
    },

    {
      image: '/image/vascular.png',
      tag: 'Vascular Wellness',
      title: 'Ultrasound & Doppler Diagnostics',
      desc: 'Advanced vascular imaging and non-invasive diagnostics for healthier outcomes.',
      cta: {
        label: 'View Vascular',
        to: '/services/vascular',
      },
    },
  ]

  return (
    <RevealSection>
      <section className="relative py-16 px-5 bg-gradient-to-b from-cyan-50 to-white overflow-hidden">

        {/* BACKGROUND BLUR */}
        <div className="absolute top-0 left-0 w-[250px] h-[250px] bg-cyan-100 blur-[100px] rounded-full opacity-50"></div>

        <div className="absolute bottom-0 right-0 w-[220px] h-[220px] bg-sky-100 blur-[100px] rounded-full opacity-50"></div>

        <div className="relative z-10 max-w-6xl mx-auto">

          {/* HEADER */}
          <div className="text-center mb-12">

            <span className="
              inline-block
              text-cyan-600
              text-[11px]
              font-semibold
              tracking-[3px]
              uppercase
              mb-3
            ">
              Featured Care
            </span>

            <h2 className="
              text-3xl
              md:text-4xl
              font-bold
              text-slate-800
              mb-4
              leading-tight
            ">
              Expert Care With Modern Technology
            </h2>

            <p className="
              text-slate-500
              text-[14px]
              max-w-2xl
              mx-auto
              leading-relaxed
            ">
              Personalized cardiac and vascular care with advanced diagnostics and compassionate treatment.
            </p>
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

            {cards.map((card, index) => (
              <div
                key={card.title}
                className="
                  group
                  bg-white
                  rounded-[24px]
                  overflow-hidden
                  border
                  border-cyan-100
                  shadow-sm
                  hover:shadow-xl
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  flex
                  flex-col
                "
                style={{
                  animation: `fadeUp 0.7s ease ${index * 0.15}s both`,
                }}
              >

                {/* IMAGE */}
                <div className="
                  relative
                  h-[210px]
                  overflow-hidden
                  bg-slate-100
                ">

                  <img
                    src={card.image}
                    alt={card.title}
                    className="
                      w-full
                      h-full
                      object-cover
                      object-center
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />

                  {/* OVERLAY */}
                  <div className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/30
                    via-transparent
                    to-transparent
                  "></div>

                  {/* TAG */}
                  <div className="absolute top-4 left-4">

                    <span className="
                      bg-white
                      text-cyan-700
                      text-[10px]
                      font-semibold
                      px-3
                      py-1.5
                      rounded-full
                      shadow-sm
                    ">
                      {card.tag}
                    </span>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="
                  p-6
                  flex
                  flex-col
                  flex-1
                ">

                  <h3 className="
                    text-[22px]
                    font-bold
                    text-slate-800
                    leading-snug
                    mb-3
                    transition-all
                    duration-300
                    group-hover:text-cyan-600
                  ">
                    {card.title}
                  </h3>

                  <p className="
                    text-slate-500
                    text-[14px]
                    leading-relaxed
                    mb-6
                    flex-1
                  ">
                    {card.desc}
                  </p>

                  {/* BUTTON */}
                  <Link
                    to={card.cta.to}
                    className="
                      w-full
                      text-center
                      py-3
                      rounded-full
                      bg-cyan-500
                      hover:bg-cyan-600
                      text-white
                      text-[13px]
                      font-semibold
                      transition-all
                      duration-300
                      no-underline
                      hover:shadow-lg
                      hover:shadow-cyan-200
                    "
                  >
                    {card.cta.label} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ANIMATION */}
        <style>
          {`
            @keyframes fadeUp {
              from {
                opacity: 0;
                transform: translateY(35px);
              }

              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}
        </style>
      </section>
    </RevealSection>
  )
}