import { Link } from 'react-router-dom'
import Service1 from "../image/service1.jpg"
import Service2 from "../image/service2.jpg"
import Service3 from "../image/service3.jpg"
import Service4 from "../image/service4.jpg"

const services = [
  {
    id: 'cardiac',
    image: Service1,
    title: 'Cardiac Testing and Treatment',
    desc: 'Comprehensive cardiac diagnostics including EKG, echocardiography, stress testing, Holter monitoring, and cardiac catheterization for complete heart care.',
    items: [
      'Routine Cardiac Testing',
      'Pre-operative Cardiac Clearance',
      'Evaluation of Abnormal Cardiac Rhythms',
      'Stress Testing: Treadmill, Stress Echocardiography',
      'Echocardiography / Doppler (heart ultrasound)',
      'Holter Monitor (24 hour heart rhythm / EKG monitors)',
      'Event Monitor (long term rhythm / EKG monitors)',
      'Cardiac Catheterization and Percutaneous Coronary Intervention',
    ],
  },
  {
    id: 'varicose',
    image: {Service2},
    title: 'Varicose Veins, Ulcer and Lymphedema Treatment Center',
    desc: 'Minimally invasive treatments for varicose veins, venous ulcers, and lymphedema using laser ablation, sclerotherapy, and compression therapy.',
    items: [
      'Venous Reflux Testing (air plethysmography) Varicose Vein Doppler',
      'Endovenous Laser Ablation for Symptomatic Varicose Veins',
      'Sclerotherapy for Varicose Veins',
      'Sequential Compression Device Therapy for Lymphedema',
      '*Manual Lymphatic Drainage',
    ],
  },
  {
    id: 'vascular',
    image: {Service3},
    title: 'Vascular Testing and Treatment',
    desc: 'Advanced vascular diagnostics and minimally invasive interventions for peripheral artery disease, carotid arteries, DVT, and renal artery conditions.',
    items: [
      'Carotid Doppler (ultrasound)',
      'Aorta Doppler',
      'Arterial Doppler of Legs & Arms',
      'Venous Doppler of Legs & Arms',
      'Kidney Artery Doppler',
      'ABI (Arm – Brachial Index)',
      'Percutaneous Endovascular Interventions',
    ],
  },
  {
    id: 'nutrition',
    image: {Service4},
    title: 'Nutrition Counseling',
    desc: 'Personalized nutrition plans for heart health, weight management, cholesterol control, and diabetes care tailored to your lifestyle.',
    items: [
      'In-office Nutrition Consultation',
      'Body Mass Index Consultation',
      'Body Fat Percentage Analysis',
    ],
  },
]

const borderCls = [
  'border-b border-r border-slate-200',
  'border-b border-slate-200',
  'border-r border-slate-200',
  '',
]

export default function Services() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* Page title */}
      <div className="py-10 text-center bg-white border-b border-slate-100">
        <h1 className="text-3xl font-light text-slate-700 tracking-widest animate-titleIn">Services</h1>
        <div className="w-14 h-[2px] bg-[#00bcd4] mx-auto mt-3" />
      </div>

      {/* 2×2 joined grid */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="border border-slate-200 shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
          {services.map((svc, i) => (
            <Link
              key={svc.id}
              to="#"
              className={`${borderCls[i]} flex flex-col items-center px-8 py-10 cursor-pointer bg-white hover:bg-[#f0fdfe] group transition-all duration-200 no-underline`}
            >
              {/* Icon circle */}
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 border-2 border-[#00bcd4] bg-[#e0f7fa] transition-transform duration-300 group-hover:scale-110">
                <img
                  src={svc.image}
                  alt={svc.title}
                  className="w-7 h-7 object-contain"
                  onError={e => { e.target.style.display = 'none' }}
                />
              </div>

              {/* Title */}
              <h2 className="text-[14px] font-bold text-center mb-3 leading-snug text-[#00838f]">
                {svc.title}
              </h2>

              {/* Items */}
              <ul className="list-none p-0 m-0 w-full text-center space-y-1">
                {svc.items.map(item => (
                  <li key={item} className="text-[11.5px] leading-relaxed text-slate-500">
                    {item}
                  </li>
                ))}
              </ul>

              <span className="mt-5 text-[10px] font-bold tracking-widest uppercase text-[#00bcd4] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn More →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
