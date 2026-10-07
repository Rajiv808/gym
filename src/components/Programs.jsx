import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

import gym3 from "../assets/gym3.jpg"
import gym4 from "../assets/gym4.jpg"
import gym5 from "../assets/gym5.jpg"

const whatsappNumber = "919477110367"

const programs = [
  {
    number: "01",
    title: "Strength",
    subtitle: "Build raw power",
    image: gym3,
    position: "object-center",
  },
  {
    number: "02",
    title: "Muscle",
    subtitle: "Build your physique",
    image: gym4,
    position: "object-center",
  },
  {
    number: "03",
    title: "Conditioning",
    subtitle: "Push your limits",
    image: gym5,
    position: "object-[50%_35%]",
  },
]

const openWhatsApp = (program = "a training program") => {
  const message = `Hello ABSOLUTE GYM,

I am interested in your ${program} program.

I would like to know more about:

• Program details
• Training schedule
• Membership pricing
• Admission process

Please guide me regarding the next steps.`

  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`

  window.open(whatsappURL, "_blank", "noopener,noreferrer")
}

const Programs = () => {
  return (
    <section
      id="programs"
      className="relative overflow-hidden bg-[#0D0D0D] px-6 py-24 lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">

        {/* =========================
            HEADING
        ========================== */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#C6FF00]" />

              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C6FF00]">
                Training Programs
              </span>
            </div>

            <h2 className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.04em] md:text-7xl">
              Train With
              <br />
              <span className="text-white/30">
                Purpose.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-white/40">
            Whether you're chasing strength, size or peak
            conditioning, our programs are designed to make
            every session count.
          </p>
        </motion.div>

        {/* =========================
            PROGRAM CARDS
        ========================== */}
        <div className="grid gap-4 md:grid-cols-3">

          {programs.map((program, index) => (
            <motion.button
              key={program.number}
              type="button"
              onClick={() => openWhatsApp(program.title)}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
              className="group relative h-[520px] overflow-hidden bg-black text-left outline-none focus:ring-2 focus:ring-[#C6FF00]"
              aria-label={`Enquire about ${program.title} program on WhatsApp`}
            >

              {/* =========================
                  IMAGE
              ========================== */}
              <motion.img
                src={program.image}
                alt={`${program.title} training`}
                className={`absolute inset-0 h-full w-full object-cover ${program.position} grayscale transition-all duration-700 group-hover:grayscale-0`}
                whileHover={{
                  scale: 1.06,
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10 transition-all duration-500 group-hover:from-black/90" />

              {/* Lime Glow */}
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#C6FF00]/20 blur-[100px] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

              {/* =========================
                  NUMBER
              ========================== */}
              <div className="absolute right-6 top-6">
                <span className="text-sm font-black text-white/40">
                  {program.number}
                </span>
              </div>

              {/* =========================
                  CONTENT
              ========================== */}
              <div className="absolute inset-x-0 bottom-0 p-7 md:p-8">

                <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-[#C6FF00]">
                  {program.subtitle}
                </p>

                <div className="flex items-end justify-between gap-4">

                  <h3 className="text-4xl font-black uppercase tracking-tight md:text-5xl">
                    {program.title}
                  </h3>

                  {/* Arrow */}
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#C6FF00] text-black transition-transform duration-500 group-hover:rotate-45">
                    <ArrowUpRight size={21} />
                  </span>

                </div>

                {/* Expanding Line */}
                <div className="mt-5 h-[2px] w-10 bg-[#C6FF00] transition-all duration-500 group-hover:w-full" />

                {/* Hover Text */}
                <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white/0 transition-all duration-500 group-hover:text-white/60">
                  Enquire on WhatsApp →
                </p>

              </div>
            </motion.button>
          ))}

        </div>

        {/* =========================
            BOTTOM CTA
        ========================== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="mt-10 flex flex-col items-start justify-between gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center"
        >

          <p className="text-sm text-white/40">
            Not sure which program is right for you?
          </p>

          {/* Talk To Trainer */}
          <button
            type="button"
            onClick={() =>
              openWhatsApp("a personal training")
            }
            className="group flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:text-[#C6FF00]"
          >
            Talk to a trainer

            <span className="flex h-8 w-8 items-center justify-center border border-white/20 transition-all duration-300 group-hover:border-[#C6FF00] group-hover:bg-[#C6FF00] group-hover:text-black">

              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />

            </span>
          </button>

        </motion.div>

      </div>
    </section>
  )
}

export default Programs