import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";

export default function TopBar() {
  return (
    <div
      className="
        w-full
        bg-black
        from-[#ec4899]
        to-[#db2777]
        text-white
        px-4
        sm:px-6
        md:px-10
        py-3
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          flex
          flex-col
          lg:flex-row
          items-center
          justify-between
          gap-3
        "
      >

        {/* LEFT SIDE */}
        <div
          className="
            flex
            flex-wrap
            items-center
            justify-center
            lg:justify-start
            gap-4
            text-[13px]
            sm:text-[14px]
            font-medium
          "
        >

          {/* PHONE */}
          <a
            href="tel:7185550101"
            className="
              flex
              items-center
              gap-2
              text-white
              no-underline
              hover:opacity-80
              transition-all
            "
          >
            <div
              className="
                w-8
                h-8
                rounded-full
                bg-white/20
                flex
                items-center
                justify-center
              "
            >
              <IoMdCall size={16} />
            </div>

            <span>917-300-2728</span>
          </a>

          {/* DIVIDER */}
          <div className="hidden sm:block w-[1px] h-5 bg-white/30"></div>

          {/* EMAIL */}
          <a
            href="mailto:info@drankurshah.com"
            className="
              flex
              items-center
              gap-2
              text-white
              no-underline
              hover:opacity-80
              transition-all
            "
          >
            <div
              className="
                w-8
                h-8
                rounded-full
                bg-white/20
                flex
                items-center
                justify-center
              "
            >
              <MdEmail size={16} />
            </div>

            <span>info@drankurshah.com</span>
          </a>
        </div>

        {/* RIGHT SIDE */}
        <div
          className="
            flex
            items-center
            gap-2
            text-[13px]
            sm:text-[14px]
            font-medium
            text-center
          "
        >

          <div
            className="
              w-8
              h-8
              rounded-full
              bg-white/20
              flex
              items-center
              justify-center
            "
          >
            <IoTimeOutline size={16} />
          </div>

          <span>
            Mon – Fri: 9am – 5pm &nbsp; | &nbsp; Sat: 9am – 1pm
          </span>
        </div>
      </div>
    </div>
  );
}