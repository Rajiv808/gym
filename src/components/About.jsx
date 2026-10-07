import { motion } from "framer-motion"
import {
  Dumbbell,
  Target,
  Users,
  Clock3,
  ArrowUpRight,
} from "lucide-react"

import gym2 from "../assets/gym2.jpg"

const features = [
  {
    icon: Dumbbell,
    number: "01",
    title: "Elite Equipment",
    text: "Train with professional-grade equipment designed for serious results.",
  },
  {
    icon: Target,
    number: "02",
    title: "Proven Programs",
    text: "Structured programs built around strength, conditioning and transformation.",
  },
  {
    icon: Users,
    number: "03",
    title: "Expert Coaching",
    text: "Get guidance from experienced trainers who keep your progress on track.",
  },
  {
    icon: Clock3,
    number: "04",
    title: "24/7 Access",
    text: "Train whenever your schedule allows. Your goals don't have opening hours.",
  },
]

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050505] px-6 py-24 lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mb-16 max-w-3xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#C6FF00]" />

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C6FF00]">
              Why ABSOLUTE GYM
            </span>
          </div>

          <h2 className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.04em] md:text-7xl">
            More Than
            <br />
            <span className="text-white/30">A Gym.</span>
            <br />
            <span className="text-[#C6FF00]">A Mindset.</span>
          </h2>
        </motion.div>

        {/* Main grid */}
        <div className="grid gap-5 lg:grid-cols-12">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9 }}
            className="group relative min-h-[500px] overflow-hidden lg:col-span-5"
          >
            <img
              src={gym2}
              alt="Forge gym"
              className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

            {/* Image label */}
            <div className="absolute bottom-6 left-6">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#C6FF00]">
                EST. 2012
              </p>

              <p className="mt-2 text-2xl font-black uppercase">
                Built For
                <br />
                Champions.
              </p>
            </div>

            {/* Corner */}
            <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center border border-white/20 bg-black/30 backdrop-blur-md">
              <ArrowUpRight size={20} />
            </div>
          </motion.div>

          {/* Features */}
          <div className="grid gap-px bg-white/10 lg:col-span-7 md:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon

              return (
                <motion.div
                  key={feature.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="group relative overflow-hidden bg-[#0D0D0D] p-8 transition-all duration-500 hover:bg-[#151515] md:p-10"
                >
                  {/* Hover glow */}
                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#C6FF00]/10 blur-[70px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative z-10 flex h-full flex-col">

                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center border border-white/10 transition-all duration-500 group-hover:border-[#C6FF00] group-hover:bg-[#C6FF00] group-hover:text-black">
                        <Icon size={21} />
                      </div>

                      <span className="text-xs font-bold text-white/20">
                        {feature.number}
                      </span>
                    </div>

                    <div className="mt-auto pt-20">
                      <h3 className="text-2xl font-black uppercase">
                        {feature.title}
                      </h3>

                      <p className="mt-4 max-w-sm text-sm leading-6 text-white/40 transition-colors duration-500 group-hover:text-white/60">
                        {feature.text}
                      </p>

                      <div className="mt-6 h-[2px] w-8 bg-[#C6FF00] transition-all duration-500 group-hover:w-16" />
                    </div>

                  </div>
                </motion.div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}

export default About