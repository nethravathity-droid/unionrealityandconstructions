import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function SiteVisit() {
  return (
    <section className="relative bg-[#07192f] py-24 px-6 lg:px-20 overflow-hidden">

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-[40px] border border-white/10"
      >

        {/* BG IMAGE */}
        <div className="absolute inset-0">

          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2070&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover"
          />

        </div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-[#03142b]/85"></div>

        {/* CONTENT */}
        <div className="relative z-10 grid lg:grid-cols-2 gap-16 p-10 lg:p-20">

          {/* LEFT */}
          <div>

            <div className="flex items-center gap-5 mb-5">

              <div className="w-16 h-[2px] bg-[#d4a437]"></div>

              <span className="text-[#d4a437] tracking-[3px] uppercase text-sm">
                Book Site Visit
              </span>

            </div>

            <h1 className="text-white text-[45px] lg:text-[80px] leading-[1] font-bold">

              Schedule Your
              <span className="text-[#d4a437]"> Property Visit</span>

            </h1>

            <p className="text-gray-300 text-lg leading-9 mt-10">

              Visit our premium gated community plots and farm lands with expert guidance from Union Reality & Construction.

            </p>

            {/* CONTACT */}
            <div className="space-y-6 mt-12">

              <div className="flex items-center gap-5">

                <div className="w-16 h-16 rounded-full bg-[#d4a437] text-black flex items-center justify-center text-2xl">

                  <FaPhoneAlt />

                </div>

                <div>

                  <p className="text-gray-400">
                    Call Us
                  </p>

                  <h3 className="text-white text-2xl font-semibold">

                    +91 82173 41627

                  </h3>

                </div>

              </div>

              <div className="flex items-center gap-5">

                <div className="w-16 h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center text-2xl">

                  <FaWhatsapp />

                </div>

                <div>

                  <p className="text-gray-400">
                    WhatsApp
                  </p>

                  <h3 className="text-white text-2xl font-semibold">

                    +91 99010 79241

                  </h3>

                </div>

              </div>

              <div className="flex items-center gap-5">

                <div className="w-16 h-16 rounded-full bg-[#d4a437] text-black flex items-center justify-center text-2xl">

                  <FaMapMarkerAlt />

                </div>

                <div>

                  <p className="text-gray-400">
                    Location
                  </p>

                  <h3 className="text-white text-2xl font-semibold">

                    Bangalore, Karnataka

                  </h3>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT FORM */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[35px] p-8 lg:p-10">

            <h2 className="text-white text-4xl font-bold mb-10">

              Request A Callback

            </h2>

            <form className="space-y-6">

              {/* NAME */}
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-white/5 border border-white/10 rounded-full px-7 py-5 text-white outline-none focus:border-[#d4a437]"
              />

              {/* PHONE */}
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full bg-white/5 border border-white/10 rounded-full px-7 py-5 text-white outline-none focus:border-[#d4a437]"
              />

              {/* EMAIL */}
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-white/5 border border-white/10 rounded-full px-7 py-5 text-white outline-none focus:border-[#d4a437]"
              />

              {/* PROPERTY */}
              <select
                className="w-full bg-white/5 border border-white/10 rounded-full px-7 py-5 text-gray-400 outline-none focus:border-[#d4a437]"
              >
                <option>
                  Select Property Type
                </option>

                <option>
                  Gated Community Plot
                </option>

                <option>
                  Farm Land
                </option>

                <option>
                  Villa Plot
                </option>

              </select>

              {/* MESSAGE */}
              <textarea
                rows="5"
                placeholder="Message"
                className="w-full bg-white/5 border border-white/10 rounded-[30px] px-7 py-5 text-white outline-none focus:border-[#d4a437]"
              ></textarea>

              {/* BUTTON */}
              <button className="w-full bg-[#d4a437] hover:bg-[#bc902d] duration-300 text-black font-semibold py-5 rounded-full">

                Book Free Site Visit →

              </button>

            </form>

          </div>

        </div>

      </motion.div>

    </section>
  );
}