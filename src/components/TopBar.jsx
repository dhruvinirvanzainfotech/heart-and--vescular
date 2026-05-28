export default function TopBar() {
  return (
    <div
      className="
        bg-[#1a1a2e]
        text-slate-300
        text-[13px]
        sm:text-[15px]
        md:text-[17px]
        px-3
        sm:px-6
        md:px-10
        py-2.5
        flex
        flex-wrap
        items-center
        justify-between
        gap-2.5
      "
    >
      {/* LEFT */}
      <div className="flex items-center gap-3 sm:gap-4 flex-wrap">

        <span className="flex items-center gap-2">
          <span className="text-base">📞</span>

          <a
            href="tel:7185550101"
            className="
              text-slate-200
              hover:text-[#00bcd4]
              transition-colors
              font-medium
            "
          >
            (718) 555-0101
          </a>
        </span>

        <span className="text-slate-600 hidden sm:inline">
          |
        </span>

        <span className="hidden sm:flex items-center gap-2">
          <span className="text-base">📧</span>

          <a
            href="mailto:info@drankurshah.com"
            className="
              text-slate-200
              hover:text-[#00bcd4]
              transition-colors
              font-medium
            "
          >
            info@drankurshah.com
          </a>
        </span>

      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-2 text-slate-300">

        <span className="text-base text-slate-400">
          🕐
        </span>

        <span className="font-medium text-center sm:text-left leading-tight">
          Mon–Fri: 9am–5pm &nbsp;|&nbsp; Sat: 9am–1pm
        </span>

      </div>
    </div>
  );
}