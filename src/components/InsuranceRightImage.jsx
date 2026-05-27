export default function InsuranceRightImage() {
  return (
    <div className="relative flex justify-center">
      {/* MAIN CARD */}
      <div
        className="
          relative
          bg-white
          rounded-[40px]
          shadow-[0_20px_80px_rgba(0,0,0,0.08)]
          border
          border-cyan-100
          overflow-hidden
          w-full
          max-w-[560px]
          animate-float
        "
      >
        <img
          src="/image/banner3.jpg"
          alt="Insurance"
          className="w-full h-[420px] object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

        <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-xl px-5 py-3 rounded-2xl shadow-lg">
          <p className="text-cyan-600 text-xs font-bold uppercase tracking-[2px]">
            Trusted Coverage
          </p>
          <h3 className="text-slate-900 font-bold text-lg mt-1">
            20+ Insurance Plans
          </h3>
        </div>
      </div>

      {/* FLOATING SMALL CARD */}
      <div
        className="
          absolute
          -bottom-8
          left-0
          bg-white
          rounded-3xl
          shadow-2xl
          border
          border-cyan-100
          px-6
          py-5
          animate-floatSlow
        "
      >
        <h4 className="text-cyan-600 text-sm font-semibold mb-1">Fast Verification</h4>
        <p className="text-slate-600 text-xs leading-relaxed max-w-[180px]">
          Quick insurance eligibility and coverage support before your visit.
        </p>
      </div>
    </div>
  );
}

