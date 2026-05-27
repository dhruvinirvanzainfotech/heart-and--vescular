import { useEffect, useState } from 'react'

export default function SplashScreen({ onDone }) {
  const [phase, setPhase] = useState('show')

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('out'), 2200)
    const t2 = setTimeout(() => onDone(), 2900)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [onDone])

  return (
    <div className={`fixed inset-0 bg-[#0d0d1a] flex items-center justify-center z-[9999] transition-all duration-700 ${phase === 'out' ? 'opacity-0 invisible pointer-events-none' : 'opacity-100'}`}>
      <div className="text-center animate-splashIn">
        {/* ECG line */}
        <div className="w-56 mx-auto mb-5">
          <svg viewBox="0 0 100 60" className="w-full h-auto">
            <polyline
              points="0,30 15,30 20,10 25,50 30,30 40,30 45,5 50,55 55,30 70,30 75,15 80,45 85,30 100,30"
              fill="none" stroke="#e74c3c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              className="animate-drawEcg"
            />
          </svg>
        </div>

        {/* Logo */}
        <div className="w-36 h-36 mx-auto mb-4 animate-fadeUp1">
          <img src="/favicon.png" alt="Site logo" className="w-full h-full object-contain" />
        </div>
        {/* Optional tagline (hidden on load) */}
        <p className="text-sm font-semibold text-white/60 tracking-widest mb-7 animate-fadeUp2">
          Heart & Vascular Care of New York
        </p>

        {/* Progress bar */}
        <div className="w-48 h-[3px] bg-white/10 rounded-full mx-auto overflow-hidden animate-fadeUp3">
          <div className="h-full bg-gradient-to-r from-red-700 to-red-500 rounded-full animate-loadBar" />
        </div>
      </div>
    </div>
  )
}
