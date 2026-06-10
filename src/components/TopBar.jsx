import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";

export default function TopBar() {
  return (
    <div className="hidden md:block w-full bg-red-700 text-white py-3 px-4 sm:px-6 lg:px-10">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-6">

          {/* LEFT SIDE - Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-5 text-[13px] sm:text-sm font-medium w-full lg:w-auto">

            {/* PHONE */}
            <a
              href="tel:+19173002728"
              className="flex items-center gap-2 hover:opacity-80 transition-all duration-200 group"
            >
              <IoMdCall size={18} className="shrink-0" />
              <span className="group-hover:underline">(917) 300-2728</span>
            </a>

            {/* Divider */}
            <div className="hidden sm:block w-px h-5 bg-white/40" />

            {/* EMAIL */}
            <a
              href="mailto:drankur@completeheartandvascularcare.com"
              className="flex items-center gap-2 hover:opacity-80 transition-all duration-200 group break-words text-center sm:text-left"
            >
              <MdEmail size={18} className="shrink-0" />
              <span className="group-hover:underline">
                drankur@completeheartandvascularcare.com
              </span>
            </a>
          </div>

          {/* RIGHT SIDE - Working Hours */}
          <div className="flex items-center justify-center gap-2 text-[13px] sm:text-sm font-medium text-center lg:text-left">
            <IoTimeOutline size={18} className="shrink-0" />
            <span>
              Mon – Fri: 9am – 5pm &nbsp;|&nbsp; Sat: 9am – 1pm
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}