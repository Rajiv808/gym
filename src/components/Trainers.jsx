import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

import trainer1 from "../assets/trainer1.png"
import trainer2 from "../assets/trainer2.png"
import trainer3 from "../assets/trainer3.png"

const trainers = [
  {
    number: "01",
    name: "ABHISHEK",
    role: "Strength & Conditioning",
    experience: "10+ YEARS EXPERIENCE",
    image: trainer1,
  },
  {
    number: "02",
    name: "Maya",
    role: "Performance Coach",
    experience: "8+ YEARS EXPERIENCE",
    image: trainer2,
  },
  {
    number: "03",
    name: " RAHUL",
    role: "Zumba Trainer",
    experience: "7+ YEARS EXPERIENCE",
    image: trainer3,
  },
]

const whatsappNumber = "919477110367"

const contactTrainer = (trainer) => {
  const message = `Hello ABSOLUTE GYM,

I am interested in training with ${trainer.name}.

Trainer: ${trainer.name}
Specialization: ${trainer.role}

I would like to know more about the trainer's schedule, membership options and admission process.

Thank you.`

  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`

  window.open(whatsappURL, "_blank", "noopener,noreferrer")
}

const Trainers = () => {
  return (
    <section
      id="trainers"
      className="relative overflow-hidden bg-[#0D0D0D] px-6 py-24 lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
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
                The Team
              </span>
            </div>

            <h2 className="text-5xl font-black uppercase leading-[0.88] tracking-[-0.05em] md:text-7xl">
              Meet Our
              <br />
              <span className="text-white/25">Trainers.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-white/40">
            Experienced coaches dedicated to helping you build
            strength, confidence and lasting results.
          </p>
        </motion.div>

        {/* Trainers */}
        <div className="grid gap-5 md:grid-cols-3">
          {trainers.map((trainer, index) => (
            <motion.article
              key={trainer.number}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
              className="group relative overflow-hidden bg-[#151515]"
            >
              {/* Image */}
              <div className="relative h-[560px] overflow-hidden">

                <motion.img
                  src={trainer.image}
                  alt={`${trainer.name} - ${trainer.role}`}
                  className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                  whileHover={{ scale: 1.06 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                {/* Lime Glow */}
                <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-[#C6FF00]/20 blur-[100px] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                {/* Number */}
                <span className="absolute right-6 top-6 text-sm font-black text-white/50">
                  {trainer.number}
                </span>

                {/* Instagram */}
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  aria-label={`${trainer.name} Instagram`}
                  className="absolute left-6 top-6 flex h-10 w-10 items-center justify-center border border-white/20 bg-black/20 text-xs font-black text-white backdrop-blur-md transition-all duration-300 hover:border-[#C6FF00] hover:bg-[#C6FF00] hover:text-black"
                >
                  IG
                </a>

                {/* Trainer Content */}
                <div className="absolute inset-x-0 bottom-0 p-7">

                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#C6FF00]">
                    {trainer.experience}
                  </p>

                  <h3 className="text-3xl font-black uppercase tracking-tight md:text-4xl">
                    {trainer.name}
                  </h3>

                  <div className="mt-3 flex items-center justify-between border-t border-white/20 pt-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
                      {trainer.role}
                    </p>

                    {/* WhatsApp Trainer Button */}
                    <button
                      type="button"
                      onClick={() => contactTrainer(trainer)}
                      aria-label={`Contact ${trainer.name}`}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-[#C6FF00] text-black transition-all duration-500 hover:bg-white group-hover:rotate-45"
                    >
                      <ArrowUpRight size={16} />
                    </button>
                  </div>

                  {/* Hover CTA */}
                  <button
                    type="button"
                    onClick={() => contactTrainer(trainer)}
                    className="mt-4 text-[10px] font-black uppercase tracking-[0.2em] text-white/0 transition-all duration-500 group-hover:text-[#C6FF00]"
                  >
                    Contact Trainer →
                  </button>

                </div>
              </div>

              {/* Bottom Line */}
              <div className="h-[3px] w-0 bg-[#C6FF00] transition-all duration-700 group-hover:w-full" />
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-sm text-white/40">
            One team. One mission. Your transformation.
          </p>

          <button
            type="button"
            onClick={() => contactTrainer({
              name: "one of the ABSOLUTE GYM trainers",
              role: "personal training",
            })}
            className="group flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors hover:text-[#C6FF00]"
          >
            Talk to a trainer

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </button>
        </motion.div>

      </div>
    </section>
  )
}

export default Trainers