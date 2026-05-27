export default function TopBar() {
  return (
    <div className="bg-[#1a1a2e] text-slate-400 text-xs px-6 md:px-10 py-2 flex flex-wrap items-center justify-between gap-2">
      <div className="flex items-center gap-4 flex-wrap">
        <span>📞 <a href="tel:7185550101" className="text-slate-300 hover:text-[#00bcd4] transition-colors">(718) 555-0101</a></span>
        <span className="text-slate-600 hidden sm:inline">|</span>
        <span className="hidden sm:inline">📧 <a href="mailto:info@drankurshah.com" className="text-slate-300 hover:text-[#00bcd4] transition-colors">info@drankurshah.com</a></span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-slate-500">🕐</span>
        <span>Mon–Fri: 9am–5pm &nbsp;|&nbsp; Sat: 9am–1pm</span>
      </div>
    </div>
  )
}
