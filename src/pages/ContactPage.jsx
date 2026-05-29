import { useState } from 'react'

const cards = [
  { icon: '📞', title: 'Phone',        lines: ['Ozone Park: (718) 555-0101', 'Brooklyn: (718) 555-0202'] },
  { icon: '📧', title: 'Email',        lines: ['info@drankurshah.com', 'appointments@drankurshah.com'] },
  { icon: '🕐', title: 'Office Hours', lines: ['Monday – Friday: 9am – 5pm', 'Saturday: 9am – 1pm'] },
  { icon: '🚨', title: 'Emergency',    lines: ['For cardiac emergencies', 'call 911 immediately'] },
]

const inputCls = 'w-full border border-slate-200 bg-slate-50 focus:bg-white focus:border-[#00bcd4] outline-none rounded-xl px-4 py-3 text-sm text-slate-700 transition-colors'
const labelCls = 'block text-xs font-bold text-[#1a1a2e] uppercase tracking-wide mb-1.5'

export default function ContactPage() {
  const [form, setForm]       = useState({ name: '', phone: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = e => { e.preventDefault(); setSubmitted(true) }

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Page title */}
      <div className="py-10 text-center bg-white border-b border-slate-100">
        <h1 className="text-3xl font-light text-slate-700 tracking-widest animate-titleIn">Contact Us</h1>
        <div className="w-12 h-[2px] bg-[#00bcd4] mx-auto mt-2" />
      </div>

      {/* Info cards */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mb-14">
          {cards.map((card, i) => (
            <div key={card.title} className={`animate-card-${i} bg-white border border-slate-100 rounded-2xl p-7 text-center hover:-translate-y-1 hover:shadow-lg hover:border-[#00bcd4] transition-all duration-200`}>
              <div className="text-xl mb-3">{card.icon}</div>
              <h4 className="text-12px font-bold text-[#00838f] mb-2">{card.title}</h4>
              {card.lines.map(l => <p key={l} className="text-sm text-slate-900 leading-relaxed">{l}</p>)}
            </div>
          ))}
        </div>

        {/* Contact form */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-20px font-semibold text-[#00838f] text-center mb-8">Send Us a Message</h2>

          {submitted ? (
            <div className="bg-white rounded-2xl shadow p-14 text-center">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-[#1a1a2e] mb-2">Message Sent!</h3>
              <p className="text-slate-500 text-sm mb-6">Thank you, <strong>{form.name}</strong>. We'll get back to you shortly.</p>
              <button onClick={() => setSubmitted(false)} className="bg-[#00bcd4] hover:bg-[#0097a7] text-white font-semibold px-6 py-2.5 rounded-full text-sm border-none cursor-pointer transition-colors">
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="bg-white rounded-2xl shadow p-8 md:p-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className={labelCls}>Full Name *</label>
                  <input name="name" value={form.name} onChange={handle} placeholder="Your full name" required className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>Phone Number</label>
                  <input name="phone" value={form.phone} onChange={handle} placeholder="(718) 000-0000" className={inputCls} />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className={labelCls}>Email Address *</label>
                  <input name="email" type="email" value={form.email} onChange={handle} placeholder="your@email.com" required className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>Subject</label>
                  <input name="subject" value={form.subject} onChange={handle} placeholder="How can we help?" className={inputCls} />
                </div>
              </div>
              <div className="mb-7">
                <label className={labelCls}>Message *</label>
                <textarea name="message" value={form.message} onChange={handle} rows={5} required placeholder="Write your message here..." className={inputCls + ' resize-none'} />
              </div>
              <button type="submit" className="w-full bg-[#00838f] hover:bg-[#00838f] text-white font-semibold py-3.5 rounded-xl text-sm transition-all hover:-translate-y-0.5 cursor-pointer border-none">
                Send Message →
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
