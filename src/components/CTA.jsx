import { motion } from "framer-motion"
import { ArrowUpRight, Phone, MapPin } from "lucide-react"

import gym1 from "../assets/gym1.jpg"

const whatsappNumber = "919477110367"

const CTA = () => {
  const bookFreeSession = () => {
    const message = `Hello ABSOLUTE GYM,

I would like to book a free gym session.

Please let me know the available timings and the admission process.

Thank you.`

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`

    window.open(whatsappURL, "_blank", "noopener,noreferrer")
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050505]"
    >
      {/* Main CTA */}
      <div className="relative min-h-[700px] overflow-hidden">

        {/* Background */}
        <motion.img
          src={gym1}
          alt="ABSOLUTE GYM Gym"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/30 to-black/60" />

        {/* Lime Glow */}
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C6FF00]/10 blur-[150px]" />

        {/* Content */}
        <div className="relative z-10 flex min-h-[700px] items-center justify-center px-6 py-24 text-center">

          <div className="max-w-6xl">

            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-7 flex items-center justify-center gap-3"
            >
              <span className="h-[2px] w-10 bg-[#C6FF00]" />

              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C6FF00]">
                Your Time Is Now
              </span>

              <span className="h-[2px] w-10 bg-[#C6FF00]" />
            </motion.div>

            {/* Heading */}
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: 120 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-6xl font-black uppercase leading-[0.85] tracking-[-0.06em] md:text-8xl lg:text-[10rem]"
              >
                Become
                <br />
                <span className="text-[#C6FF00]">
                  Unstoppable.
                </span>
              </motion.h2>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.3,
              }}
              className="mx-auto mt-8 max-w-xl text-sm leading-6 text-white/50 md:text-base"
            >
              Stop waiting for the perfect time. Start building
              the strongest version of yourself today.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.5,
              }}
              className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
            >

              {/* START YOUR JOURNEY */}
              <a
                href="#pricing"
                className="group flex items-center justify-center gap-3 bg-[#C6FF00] px-8 py-5 text-sm font-black uppercase tracking-wider text-black transition-all duration-300 hover:bg-white"
              >
                Start Your Journey

                <ArrowUpRight
                  size={20}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>

              {/* BOOK FREE SESSION → WHATSAPP */}
              <button
                type="button"
                onClick={bookFreeSession}
                className="group flex items-center justify-center gap-3 border border-white/20 bg-black/20 px-8 py-5 text-sm font-black uppercase tracking-wider text-white backdrop-blur-md transition-all duration-300 hover:border-[#C6FF00] hover:bg-[#C6FF00] hover:text-black"
              >
                Book Free Session

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </button>

            </motion.div>

          </div>
        </div>
      </div>

      {/* Contact Strip */}
      <div className="border-y border-white/10 bg-[#0D0D0D]">
        <div className="mx-auto grid max-w-7xl md:grid-cols-3">

          {/* PHONE */}
          <a
            href="tel:+919477110367"
            className="group flex items-center gap-4 border-b border-white/10 p-7 transition-colors duration-300 hover:bg-white/[0.03] md:border-b-0 md:border-r"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#C6FF00] text-black transition-transform duration-300 group-hover:scale-110">
              <Phone size={18} />
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                Call Us
              </p>

              <p className="mt-1 font-bold transition-colors group-hover:text-[#C6FF00]">
                +91 9477110367
              </p>
            </div>
          </a>

          {/* GOOGLE MAPS */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=Kolkata%2C%20West%20Bengal%2C%20India"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 border-b border-white/10 p-7 transition-colors duration-300 hover:bg-white/[0.03] md:border-b-0 md:border-r"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#C6FF00] text-black transition-transform duration-300 group-hover:scale-110">
              <MapPin size={18} />
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                Visit Us
              </p>

              <p className="mt-1 font-bold transition-colors group-hover:text-[#C6FF00]">
                KOLKATA, WB, INDIA
              </p>
            </div>
          </a>

          {/* OPENING HOURS */}
          <div className="flex items-center justify-between p-7">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                Open
              </p>

              <p className="mt-1 font-bold">
                24 Hours · 7 Days
              </p>
            </div>

            <span className="h-3 w-3 animate-pulse rounded-full bg-[#C6FF00]" />
          </div>

        </div>
      </div>
    </section>
  )
}

export default CTA