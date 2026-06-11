import {
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-8 right-8 z-[999] flex flex-col gap-5">

      {/* WHATSAPP */}
      <a
        href="https://wa.me/919901079241"
        target="_blank"
        className="w-16 h-16 rounded-full bg-[#25D366] text-white text-2xl flex items-center justify-center shadow-[0_0_40px_rgba(37,211,102,0.5)] hover:scale-110 duration-300"
      >

        <FaWhatsapp />

      </a>

      {/* CALL */}
      <a
        href="tel:+919901079241"
        className="w-16 h-16 rounded-full bg-[#d4a437] text-black text-2xl flex items-center justify-center shadow-[0_0_40px_rgba(212,164,55,0.5)] hover:scale-110 duration-300"
      >

        <FaPhoneAlt />

      </a>

    </div>
  );
}