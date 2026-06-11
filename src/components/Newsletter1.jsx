import { motion } from "framer-motion";

export default function Newsletter() {
  return (
    <section className="relative bg-[#03142b] py-24 px-6 lg:px-20 overflow-hidden">

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-[1200px] mx-auto text-center"
      >

        {/* TITLE */}
        <div className="flex items-center justify-center gap-5 mb-5">

          <div className="w-16 h-[2px] bg-[#d4a437]"></div>

          <span className="text-[#d4a437] tracking-[3px] uppercase text-sm">
            Stay Updated
          </span>

        </div>

        <h1 className="text-white text-[45px] lg:text-[75px] font-bold leading-[1]">

          Subscribe For
          <span className="text-[#d4a437]"> New Launch Updates</span>

        </h1>

        <p className="text-gray-400 text-lg leading-9 mt-10 max-w-[850px] mx-auto">

          Get updates about premium gated community plots, farm lands, luxury projects, offers, and investment opportunities.

        </p>

        {/* FORM */}
        <div className="mt-14 flex flex-col md:flex-row gap-5">

          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="flex-1 bg-white/5 border border-white/10 rounded-full px-8 py-5 text-white outline-none focus:border-[#d4a437]"
          />

          <button className="bg-[#d4a437] hover:bg-[#bc902d] duration-300 text-black font-semibold px-10 py-5 rounded-full">

            Subscribe Now →

          </button>

        </div>

      </motion.div>

    </section>
  );
}