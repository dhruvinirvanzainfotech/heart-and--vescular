import logo from "../image/logo3.png";

export default function WhatsAppScreen({ form, onClose }) {
  const sendToWhatsApp = () => {
    const message = `
🏥 Dr. Ankur Shah Heart & Vascular Specialist

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
Date: ${form.date}
Treatment: ${form.treatment}
Message: ${form.message}
    `;

    const url = `https://api.whatsapp.com/send/?phone=919173002728&text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/60 p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden">

        {/* HEADER (LIKE YOUR SCREENSHOT) */}
        <div className="bg-white p-5 text-center border-b">
          <img
            src={logo}
            alt="logo"
            className="w-16 h-16 mx-auto object-contain mb-2"
          />

          <h2 className="text-xl font-semibold text-gray-800">
            Dr. Ankur Shah
          </h2>

          <p className="text-sm text-gray-500">
            Heart & Vascular Specialist
          </p>
        </div>

        {/* MESSAGE PREVIEW BOX */}
        <div className="p-4">
          <p className="text-xs text-gray-500 mb-2">
            New Appointment Request
          </p>

          <div className="bg-gray-100 rounded-xl p-4 text-sm text-gray-700 space-y-1 max-h-52 overflow-auto">
            <p><b>Name:</b> {form.name}</p>
            <p><b>Phone:</b> {form.phone}</p>
            <p><b>Email:</b> {form.email}</p>
            <p><b>Date:</b> {form.date}</p>
            <p><b>Treatment:</b> {form.treatment}</p>
            <p><b>Message:</b> {form.message}</p>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="p-4 flex gap-3">
          <button
            onClick={sendToWhatsApp}
            className="flex-1 bg-[#25D366] text-white py-3 rounded-xl font-semibold"
          >
            Send on WhatsApp
          </button>

          <button
            onClick={onClose}
            className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}