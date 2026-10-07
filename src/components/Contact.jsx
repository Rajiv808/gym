import { motion } from "framer-motion"
import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  ArrowUpRight,
} from "lucide-react"

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0D0D0D] px-6 py-24 lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#C6FF00]" />

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C6FF00]">
              Find Us
            </span>
          </div>

          <h2 className="text-5xl font-black uppercase leading-[0.88] tracking-[-0.05em] md:text-7xl">
            Ready To
            <br />
            <span className="text-white/25">Start?</span>
            <br />
            <span className="text-[#C6FF00]">Come Train.</span>
          </h2>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-12">

          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col bg-[#151515] p-7 md:p-10 lg:col-span-5"
          >

            <div>
              <p className="max-w-md text-sm leading-7 text-white/40">
                Have questions about memberships, personal training,
                or our programs? Get in touch with our team and
                we'll help you get started.
              </p>
            </div>

            {/* Details */}
            <div className="mt-10 space-y-6">

              {/* Location */}
              <div className="flex gap-4 border-b border-white/10 pb-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#C6FF00] text-black">
                  <MapPin size={18} />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                    Location
                  </p>

                  <p className="mt-1 font-semibold">
                    Kolkata, West Bengal
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 border-b border-white/10 pb-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#C6FF00] text-black">
                  <Phone size={18} />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                    Phone
                  </p>

                  <a
                    href="tel:+919876543210"
                    className="mt-1 block font-semibold transition-colors hover:text-[#C6FF00]"
                  >
                    +91 9477110367
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 border-b border-white/10 pb-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#C6FF00] text-black">
                  <Mail size={18} />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                    Email
                  </p>

                  <a
                    href="mailto:hello@forgefitness.com"
                    className="mt-1 block font-semibold transition-colors hover:text-[#C6FF00]"
                  >
                    hello@absolutegym.com
                  </a>
                </div>
              </div>

              {/* Opening hours */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#C6FF00] text-black">
                  <Clock3 size={18} />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                    Opening Hours
                  </p>

                  <p className="mt-1 font-semibold">
                    Open 24 Hours · 7 Days
                  </p>
                </div>
              </div>

            </div>

            {/* Directions */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Kolkata%2C%20West%20Bengal%2C%20India"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-auto flex items-center justify-between bg-[#C6FF00] px-5 py-4 text-xs font-black uppercase tracking-[0.15em] text-black transition-all hover:bg-white"
            >
              Get Directions

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

          </motion.div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative min-h-[450px] overflow-hidden border border-white/10 lg:col-span-7"
          >
            <iframe
              title="Forge Fitness Kolkata Location"
              src="https://www.google.com/maps?q=Kolkata%2C%20West%20Bengal%2C%20India&output=embed"
              className="absolute inset-0 h-full w-full grayscale invert-[0.9] contrast-[1.1]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Map overlay */}
            <div className="pointer-events-none absolute inset-0 border border-white/10" />

            <div className="absolute left-5 top-5 bg-black/80 px-4 py-3 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-[#C6FF00]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                  Kolkata
                </span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Contact