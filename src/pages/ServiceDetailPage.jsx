import { useParams, useNavigate, Link } from 'react-router-dom'

const allServices = {
  cardiac: {
    icon: '/image/cardiac.png',
    fallback: '🫀',
    title: 'Cardiac Testing and Treatment',
    teal: true,
    intro: 'Our cardiac testing and treatment services provide comprehensive evaluation and management of all heart conditions using the latest diagnostic technology and evidence-based treatments.',
    items: [
      { name: 'Routine Cardiac Testing',            desc: 'Complete cardiovascular health screening and risk assessment.' },
      { name: 'Pre-operative Cardiac Clearance',    desc: 'Thorough cardiac evaluation before surgical procedures.' },
      { name: 'Evaluation of Abnormal Cardiac Rhythms', desc: 'Diagnosis and management of irregular heart rhythms.' },
      { name: 'Stress Testing: Treadmill, Stress Echocardiography', desc: 'Exercise and imaging-based heart performance evaluation.' },
      { name: 'Echocardiography / Doppler (heart ultrasound)', desc: 'Detailed ultrasound imaging of heart structure and function.' },
      { name: 'Holter Monitor (24 hour heart rhythm / EKG monitors)', desc: 'Continuous 24–48 hour cardiac rhythm recording.' },
      { name: 'Event Monitor (long term rhythm / EKG monitors)', desc: 'Extended monitoring for infrequent cardiac events.' },
      { name: 'Cardiac Catheterization and Percutaneous Coronary Intervention', desc: 'Minimally invasive procedures to open blocked coronary arteries.' },
    ],
  },
  varicose: {
    icon: '/image/varicos.png',
    fallback: '🦵',
    title: 'Varicose Veins, Ulcer and Lymphedema Treatment Center',
    teal: false,
    intro: 'We offer advanced, minimally invasive treatments for varicose veins, venous ulcers, and lymphedema to relieve symptoms and restore quality of life.',
    items: [
      { name: 'Venous Reflux Testing (air plethysmography) Varicose Vein Doppler', desc: 'Comprehensive venous mapping and reflux evaluation.' },
      { name: 'Endovenous Laser Ablation for Symptomatic Varicose Veins', desc: 'Laser-based minimally invasive vein closure procedure.' },
      { name: 'Sclerotherapy for Varicose Veins', desc: 'Chemical injection treatment to eliminate varicose and spider veins.' },
      { name: 'Sequential Compression Device Therapy for Lymphedema', desc: 'Pneumatic compression to reduce lymphatic swelling.' },
      { name: '*Manual Lymphatic Drainage', desc: 'Specialized massage technique to stimulate lymph flow.' },
    ],
  },
  vascular: {
    icon: '/image/vascular.png',
    fallback: '🩺',
    title: 'Vascular Testing and Treatment',
    teal: false,
    intro: 'Our vascular services provide non-invasive diagnostic testing and interventional treatment for diseases of the arteries and veins throughout the body.',
    items: [
      { name: 'Carotid Doppler (ultrasound)', desc: 'Ultrasound evaluation of neck arteries for stroke risk.' },
      { name: 'Aorta Doppler',               desc: 'Imaging of the main body artery for aneurysm detection.' },
      { name: 'Arterial Doppler of Legs & Arms', desc: 'Blood flow assessment in peripheral arteries.' },
      { name: 'Venous Doppler of Legs & Arms',   desc: 'Evaluation of venous circulation and clot detection.' },
      { name: 'Kidney Artery Doppler',           desc: 'Renal artery imaging for hypertension evaluation.' },
      { name: 'ABI (Arm – Brachial Index)',       desc: 'Peripheral artery disease screening test.' },
      { name: 'Percutaneous Endovascular Interventions', desc: 'Minimally invasive procedures to treat vascular blockages.' },
    ],
  },
  nutrition: {
    icon: '/image/nutrition.png',
    fallback: '🥗',
    title: 'Nutrition Counseling',
    teal: true,
    intro: 'Personalized nutrition counseling to support heart health, manage weight, and reduce cardiovascular risk through evidence-based dietary guidance.',
    items: [
      { name: 'In-office Nutrition Consultation', desc: 'One-on-one dietary assessment and personalized meal planning.' },
      { name: 'Body Mass Index Consultation',     desc: 'BMI evaluation and healthy weight goal setting.' },
      { name: 'Body Fat Percentage Analysis',     desc: 'Body composition assessment for targeted health improvement.' },
    ],
  },
}

const order = ['cardiac', 'varicose', 'vascular', 'nutrition']

export default function ServiceDetailPage() {
  const { id }   = useParams()
  const navigate = useNavigate()
  const svc      = allServices[id]

  if (!svc) return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <p className="text-slate-500 text-lg">Service not found.</p>
      <Link to="/services" className="text-[#00bcd4] font-semibold no-underline hover:underline">← Back to Services</Link>
    </div>
  )

  const isTeal = svc.teal
  const currentIdx = order.indexOf(id)
  const prevId = order[currentIdx - 1]
  const nextId = order[currentIdx + 1]

  return (
    <div className="min-h-screen bg-white">

      {/* Hero banner */}
      <div className={`${isTeal ? 'bg-[#00bcd4]' : 'bg-[#1a1a2e]'} py-14 px-6 text-center animate-titleIn`}>
        {/* Icon */}
        <div className="relative inline-block mb-5">
          <div className={`absolute inset-0 rounded-full animate-pulseRing ${isTeal ? 'bg-white/30' : 'bg-[#00bcd4]/30'}`} />
          <div className={`relative w-20 h-20 rounded-full flex items-center justify-center border-2 mx-auto ${isTeal ? 'border-white/60 bg-white/20' : 'border-[#00bcd4] bg-[#00bcd4]/10'}`}>
            <img src={svc.icon} alt={svc.title} className="w-11 h-11 object-contain"
              onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block' }} />
            <span className="hidden text-3xl">{svc.fallback}</span>
          </div>
        </div>
        <h1 className={`text-2xl md:text-3xl font-bold mb-3 ${isTeal ? 'text-white' : 'text-white'}`}>{svc.title}</h1>
        <p className={`text-sm max-w-xl mx-auto leading-relaxed ${isTeal ? 'text-white/80' : 'text-slate-400'}`}>{svc.intro}</p>
      </div>

      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-100 px-6 py-3">
        <div className="max-w-3xl mx-auto flex items-center gap-2 text-xs text-slate-400">
          <Link to="/" className="hover:text-[#00bcd4] no-underline transition-colors">Home</Link>
          <span>›</span>
          <Link to="/services" className="hover:text-[#00bcd4] no-underline transition-colors">Services</Link>
          <span>›</span>
          <span className="text-slate-600 font-medium">{svc.title}</span>
        </div>
      </div>

      {/* Service items */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        <h2 className="text-lg font-semibold text-slate-700 mb-7 text-center tracking-wide">What We Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {svc.items.map((item, i) => (
            <div
              key={item.name}
              className={`animate-card-${Math.min(i, 3)} flex items-start gap-4 bg-white border border-slate-100 rounded-xl p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold ${isTeal ? 'bg-[#00bcd4]' : 'bg-[#1a1a2e]'}`}>
                {i + 1}
              </div>
              <div>
                <div className="text-[13.5px] font-semibold text-slate-700 mb-1">{item.name}</div>
                <div className="text-[12px] text-slate-400 leading-relaxed">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a href="/#appointment"
            className={`inline-block ${isTeal ? 'bg-[#00bcd4] hover:bg-[#00acc1]' : 'bg-[#1a1a2e] hover:bg-[#0f3460]'} text-white font-semibold px-8 py-3.5 rounded-full transition-all hover:-translate-y-0.5 no-underline text-sm`}>
            Book an Appointment →
          </a>
        </div>

        {/* Prev / Next navigation */}
        <div className="mt-10 flex justify-between items-center border-t border-slate-100 pt-8">
          {prevId ? (
            <button onClick={() => navigate(`/services/${prevId}`)}
              className="flex items-center gap-2 text-sm text-slate-500 hover:text-[#00bcd4] transition-colors border-none bg-transparent cursor-pointer">
              ← {allServices[prevId].title}
            </button>
          ) : <div />}
          <Link to="/services" className="text-xs font-semibold text-slate-400 hover:text-[#00bcd4] no-underline transition-colors">
            All Services
          </Link>
          {nextId ? (
            <button onClick={() => navigate(`/services/${nextId}`)}
              className="flex items-center gap-2 text-sm text-slate-500 hover:text-[#00bcd4] transition-colors border-none bg-transparent cursor-pointer">
              {allServices[nextId].title} →
            </button>
          ) : <div />}
        </div>
      </div>
    </div>
  )
}
