import { useState, useEffect } from 'react'

const treatments = [
  { label: "Cardiac Testing & Treatment", id: "cardiac" },
  { label: "Vascular Testing and Treatment", id: "vascular" },
  { label: "Varicose Veins, Ulcer and Lymphedema Treatment Center", id: "varicose" },
  { label: "Nutrition Counseling", id: "nutrition" },
]

const inputClass = 'w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-[14px] text-slate-700 outline-none transition-all focus:border-[#00bcd4] focus:bg-white'

export default function AppointmentModal({ onClose }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', date: '', treatment: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  // close on Escape key
  useEffect(() => {
    const fn = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [onClose])

  // prevent body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = e => { e.preventDefault(); setSubmitted(true) }

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
        style={{ animation: 'modalIn 0.3s ease' }}
      >
        {/* Header */}
        <div className="bg-[#00bcd4] px-6 py-5 rounded-t-2xl flex items-center justify-between">
          <div>
            <h2 className="text-white text-lg font-bold">Book Appointment</h2>
            <p className="text-white/80 text-xs mt-0.5">Dr. Ankur Shah, MD · Heart & Vascular Specialist</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center border-none cursor-pointer text-lg transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Request Sent!</h3>
              <p className="text-slate-500 text-sm mb-6">
                Thank you, <strong>{form.name}</strong>. We'll contact you at <strong>{form.phone || form.email}</strong> to confirm.
              </p>
              <button
                onClick={onClose}
                className="bg-[#00bcd4] hover:bg-[#0097a7] text-white font-semibold px-6 py-2.5 rounded-full text-sm border-none cursor-pointer transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1.5">Full Name *</label>
                  <input name="name" value={form.name} onChange={handle} placeholder="Your name" required className={inputClass} />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1.5">Phone *</label>
                  <input name="phone" value={form.phone} onChange={handle} placeholder="(718) 000-0000" required className={inputClass} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1.5">Email</label>
                  <input name="email" type="email" value={form.email} onChange={handle} placeholder="your@email.com" className={inputClass} />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1.5">Preferred Date</label>
                  <input name="date" type="date" value={form.date} onChange={handle} className={inputClass} />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1.5">Treatment *</label>
                <select name="treatment" value={form.treatment} onChange={handle} required className={inputClass}>
                  <option value="">Select a treatment</option>
                  {treatments.map((t) => (
                    <option key={t.id} value={t.id}>{t.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1.5">Reason for Visit</label>
                <textarea name="message" value={form.message} onChange={handle} rows={3}
                  placeholder="Briefly describe your symptoms..."
                  className={inputClass + ' resize-none'} />
              </div>

              <button type="submit"
                className="w-full bg-[#00bcd4] hover:bg-[#0097a7] text-white font-semibold py-3.5 rounded-xl text-sm border-none cursor-pointer transition-all hover:-translate-y-0.5 mt-1">
                Request Appointment →
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`@keyframes modalIn { from { opacity:0; transform:scale(0.95) translateY(20px); } to { opacity:1; transform:scale(1) translateY(0); } }`}</style>
    </div>
  )
}
