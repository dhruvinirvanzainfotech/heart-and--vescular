import { useState } from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { FaFax } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoTime } from "react-icons/io5";

const locations = [
  {
    id: 0,
    name: 'Ozone Park Office',
    address: '100-12 101st Ave',
    city: 'Ozone Park, NY 11416',
    phone: '(917) 300-2728',
    fax: '(917) 300-2785',
    email: 'ozonepark@drankurshah.com',
    hours: [
      { day: 'Monday – Friday', time: '9:00 am – 5:00 pm' },
      { day: 'Saturday',        time: '9:00 am – 1:00 pm' },
      { day: 'Sunday',          time: 'Closed' },
    ],
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.123!2d-73.8456!3d40.6789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25f0000000001%3A0x1!2s100-12+101st+Ave%2C+Ozone+Park%2C+NY+11416!5e0!3m2!1sen!2sus!4v1234567890',
    dirLink: 'https://maps.google.com/?q=100-12+101st+Ave,+Ozone+Park,+NY+11416',
  },
 
]

export default function Locations() {
  const [active, setActive] = useState(0)
  const loc = locations[active]

  return (
    <section id="locations" className="bg-slate-50 py-16 px-0">
      <div className="max-w-6xl mx-auto px-6 mb-10 text-center ">
        <span className="text-[#00bcd4] text-sm md:text-base font-semibold tracking-[4px] uppercase block mb-2">Find Us</span>
        <p className="text-slate-500 text-2xl md:text-3xl font-bold">Two convenient New York City locations to serve you better</p>
      </div>

      {/* Location tabs */}
  <div className="w-full max-w-7xl mx-auto px-6 mb-7 overflow-x-auto">
  <div className="flex flex-nowrap gap-3 min-w-max">
    
    {locations.map((l, i) => (
      <button
        key={l.id}
        onClick={() => setActive(i)}
        className={`
          flex
          items-center
          gap-2
          px-6
          py-3
          rounded-full
          text-sm
          font-semibold
          border-2
          whitespace-nowrap
          transition-all
          duration-300
          cursor-pointer
          ${
            active === i
              ? "bg-cyan-900 border-cyan-900 text-white shadow-md"
              : "bg-white border-slate-200 text-slate-600 hover:border-cyan-600 hover:text-cyan-700"
          }
        `}
      >
        <FaLocationDot />
        {l.name}
      </button>
    ))}

  </div>
</div>
      {/* Map + Details */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-xl border border-slate-200">


          {/* Google Map */}
          <div className="relative h-80 lg:h-auto min-h-[400px] bg-slate-200">
            <iframe
              key={loc.id}
              title={loc.name}
              src={loc.mapSrc}
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Fallback if map doesn't load */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-100 -z-10">
              <div className="text-5xl mb-3">🗺️</div>
              <p className="text-slate-500 text-sm font-medium">{loc.address}</p>
              <p className="text-slate-400 text-xs">{loc.city}</p>
            </div>
          </div>

          {/* Contact details */}
          <div className="bg-white p-8 md:p-10 flex flex-col justify-between">
            <div>
              {/* Office name */}
              <div className="flex items-center gap-3 mb-6 pb-5 border-b border-slate-100">
                <div className="w-10 h-10 bg-[#00838f] border-2 border-[#00bcd4] rounded-xl flex items-center justify-center text-xl">
                     <FaLocationDot />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1a1a2e]">{loc.name}</h3>
                  <p className="text-[#00838f] text-sm font-medium">{loc.address}, {loc.city}</p>
                </div>
              </div>

              {/* Contact rows */}
              <div className="space-y-4 mb-7">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 bg-[#e0f7fa] rounded-lg flex items-center justify-center text-base flex-shrink-0"><IoCall />
</div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-0.5">Phone</div>
                    <a href={`tel:${loc.phone.replace(/\D/g,'')}`} className="text-[#1a1a2e] font-semibold text-sm hover:text-[#00bcd4] transition-colors no-underline">{loc.phone}</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 bg-[#e0f7fa] rounded-lg flex items-center justify-center text-base flex-shrink-0"><FaFax />
</div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-0.5">Fax</div>
                    <span className="text-[#1a1a2e] font-semibold text-sm">{loc.fax}</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 bg-[#e0f7fa] rounded-lg flex items-center justify-center text-base flex-shrink-0"><MdEmail />
</div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-0.5">Email</div>
                    <a href={`mailto:${loc.email}`} className="text-[#1a1a2e] font-semibold text-sm hover:text-[#00bcd4] transition-colors no-underline">{loc.email}</a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 bg-[#e0f7fa] rounded-lg flex items-center justify-center text-base flex-shrink-0"><IoTime />
</div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">Office Hours</div>
                    <div className="space-y-1">
                      {loc.hours.map(h => (
                        <div key={h.day} className="flex justify-between gap-6 text-sm">
                          <span className="text-slate-500">{h.day}</span>
                          <span className={`font-semibold ${h.time === 'Closed' ? 'text-red-400' : 'text-[#1a1a2e]'}`}>{h.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a href={loc.dirLink} target="_blank" rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-[#00838f] hover:bg-[#0097a7] text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all hover:-translate-y-0.5 no-underline">
              🗺️ Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
