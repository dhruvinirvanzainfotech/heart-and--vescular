const cards = [
  { icon: '📞', title: 'Phone', lines: ['Ozone Park: (718) 555-0101', 'Brooklyn: (718) 555-0202'] },
  { icon: '📧', title: 'Email', lines: ['info@drankurshah.com', 'appointments@drankurshah.com'] },
  { icon: '🕐', title: 'Office Hours', lines: ['Monday – Friday: 9am – 5pm', 'Saturday: 9am – 1pm'] },
  { icon: '🚨', title: 'Emergency', lines: ['For cardiac emergencies', 'call 911 immediately'] },
]

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-20 px-6">
      <div className="text-center mb-12">
        <span className="text-red-600 text-xs font-bold tracking-[2px] uppercase mb-3 block">Reach Us</span>
        <h2 className="text-4xl font-bold text-[#1a1a2e] mb-3">Contact Information</h2>
        <p className="text-slate-500 text-base">We're here to help. Reach out through any of the channels below.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {cards.map(card => (
          <div key={card.title}
            className="bg-slate-50 border border-slate-100 rounded-2xl p-8 text-center hover:-translate-y-1 hover:shadow-lg hover:border-red-200 transition-all duration-200">
            <div className="text-4xl mb-4">{card.icon}</div>
            <h4 className="text-base font-bold text-[#1a1a2e] mb-3">{card.title}</h4>
            {card.lines.map(l => (
              <p key={l} className="text-sm text-slate-500 leading-relaxed">{l}</p>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
