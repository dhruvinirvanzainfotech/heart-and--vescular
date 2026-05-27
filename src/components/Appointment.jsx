import { useState } from "react";

export default function Appointment() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    location: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handle = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = `
    w-full
    rounded-2xl
    border
    border-slate-200
    bg-slate-50
    px-5
    py-4
    text-[15px]
    text-slate-700
    outline-none
    transition-all
    duration-300
    focus:border-cyan-500
    focus:bg-white
    focus:shadow-[0_0_0_4px_rgba(6,182,212,0.10)]
  `;

  return (
    <section
      id="appointment"
      className="
        relative
        overflow-hidden
        py-24
        px-4
        sm:px-6
        bg-gradient-to-b
        from-slate-50
        to-white
      "
    >
      {/* BACKGROUND LIGHT */}
      <div className="absolute top-0 left-0 w-[320px] h-[320px] bg-cyan-200/30 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-sky-200/30 blur-[120px] rounded-full"></div>

      <div className="relative max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-14">

          <div
            className="
              inline-flex
              items-center
              gap-3
              px-5
              py-2
              rounded-full
              bg-cyan-50
              border
              border-cyan-100
              mb-5
            "
          >
            <span className="w-2 h-2 rounded-full bg-cyan-500"></span>

            <span className="text-cyan-700 text-[13px] font-semibold tracking-[2px] uppercase">
              Appointment Form
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5 leading-tight">
            Book Your
            <span className="text-cyan-600"> Appointment</span>
          </h2>

          <p className="max-w-2xl mx-auto text-slate-600 text-[16px] leading-relaxed">
            Schedule your consultation with our expert heart and vascular
            specialists for advanced and compassionate medical care.
          </p>
        </div>

        {submitted ? (

          /* SUCCESS CARD */
          <div
            className="
              max-w-xl
              mx-auto
              bg-white
              border
              border-cyan-100
              rounded-[32px]
              p-14
              text-center
              shadow-[0_20px_60px_rgba(0,0,0,0.08)]
            "
          >

            <div
              className="
                w-24
                h-24
                mx-auto
                mb-7
                rounded-full
                bg-cyan-100
                flex
                items-center
                justify-center
                text-5xl
              "
            >
              ✅
            </div>

            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Appointment Requested
            </h3>

            <p className="text-slate-600 text-[16px] leading-relaxed mb-8">
              Thank you{" "}
              <span className="font-semibold text-slate-900">
                {form.name}
              </span>
              . Our medical team will contact you shortly at{" "}
              <span className="font-semibold text-cyan-700">
                {form.phone || form.email}
              </span>
              .
            </p>

            <button
              onClick={() => setSubmitted(false)}
              className="
                px-8
                py-4
                rounded-full
                bg-slate-900
                text-white
                text-[15px]
                font-semibold
                border-none
                cursor-pointer
                transition-all
                duration-300
                hover:bg-cyan-600
                hover:-translate-y-1
                hover:shadow-[0_15px_30px_rgba(6,182,212,0.25)]
              "
            >
              Book Another Appointment
            </button>
          </div>

        ) : (

          /* FORM */
          <form
            onSubmit={submit}
            className="
              bg-white
              border
              border-slate-200
              rounded-[36px]
              p-8
              md:p-10
              shadow-[0_20px_60px_rgba(0,0,0,0.06)]
            "
          >

            {/* ROW 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">
                  Full Name *
                </label>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handle}
                  placeholder="Enter full name"
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">
                  Phone Number *
                </label>

                <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handle}
                  placeholder="(718) 000-0000"
                  required
                  className={inputClass}
                />
              </div>
            </div>

            {/* ROW 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handle}
                  placeholder="your@email.com"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">
                  Preferred Date
                </label>

                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handle}
                  className={inputClass}
                />
              </div>
            </div>

            {/* LOCATION */}
            <div className="mb-6">

              <label className="block text-sm font-semibold text-slate-700 mb-3">
                Preferred Location *
              </label>

              <select
                name="location"
                value={form.location}
                onChange={handle}
                required
                className={inputClass}
              >
                <option value="">Select Location</option>

                <option value="ozone">
                  Ozone Park – 100-12 101st Ave
                </option>

                <option value="brooklyn">
                  Brooklyn – 2501 86th St
                </option>
              </select>
            </div>

            {/* MESSAGE */}
            <div className="mb-8">

              <label className="block text-sm font-semibold text-slate-700 mb-3">
                Reason For Visit
              </label>

              <textarea
                name="message"
                value={form.message}
                onChange={handle}
                rows={5}
                placeholder="Describe your symptoms or reason for appointment..."
                className={`${inputClass} resize-none h-[140px]`}
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="
                w-full
                py-4
                rounded-2xl
                bg-slate-900
                text-white
                text-[16px]
                font-semibold
                border-none
                cursor-pointer
                transition-all
                duration-300
                hover:bg-cyan-600
                hover:-translate-y-1
                hover:shadow-[0_15px_35px_rgba(6,182,212,0.25)]
              "
            >
              Request Appointment →
            </button>
          </form>
        )}
      </div>
    </section>
  );
}