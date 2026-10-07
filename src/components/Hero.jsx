import { motion } from "framer-motion"
import { ArrowDown, ArrowUpRight } from "lucide-react"

import gym1 from "../assets/gym1.jpg"

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050505]">

      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.img
          src={gym1}
          alt="Forge Fitness Gym"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="h-full w-full object-cover"
        />

        {/* Dark overlays */}
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/30" />
      </div>

      {/* Lime Glow */}
      <div className="absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-[#C6FF00]/10 blur-[140px]" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-24 pt-32 lg:px-12">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-7 flex items-center gap-3"
        >
          <span className="h-[2px] w-10 bg-[#C6FF00]" />

          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C6FF00]">
            Premium Fitness Club
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="max-w-5xl text-6xl font-black uppercase leading-[0.85] tracking-[-0.06em] text-white sm:text-7xl md:text-8xl lg:text-[110px]"
        >
          ABSOLUTE GYM
          <br />
          <span className="text-[#C6FF00]">Your Power.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 max-w-lg text-sm leading-7 text-white/55 md:text-base"
        >
          Train with purpose. Build strength. Transform your body
          and mindset inside a premium fitness environment built
          for serious results.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-9 flex flex-col gap-3 sm:flex-row"
        >

          {/* JOIN NOW → PRICING */}
          <a
            href="#pricing"
            className="group inline-flex items-center justify-center gap-3 bg-[#C6FF00] px-7 py-4 text-xs font-black uppercase tracking-[0.15em] text-black transition-all duration-300 hover:bg-white"
          >
            Join Now

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>

          {/* EXPLORE → PROGRAMS */}
          <a
            href="#programs"
            className="group inline-flex items-center justify-center gap-3 border border-white/25 bg-white/5 px-7 py-4 text-xs font-black uppercase tracking-[0.15em] text-white backdrop-blur-sm transition-all duration-300 hover:border-[#C6FF00] hover:bg-[#C6FF00] hover:text-black"
          >
            Explore Gym

            <ArrowDown
              size={17}
              className="transition-transform duration-300 group-hover:translate-y-1"
            />
          </a>

        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid max-w-2xl grid-cols-3 border-t border-white/15 pt-6"
        >
          <div>
            <p className="text-2xl font-black md:text-3xl">
              5K<span className="text-[#C6FF00]">+</span>
            </p>
            <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-white/35">
              Members
            </p>
          </div>

          <div className="border-l border-white/15 pl-5">
            <p className="text-2xl font-black md:text-3xl">
              12<span className="text-[#C6FF00]">+</span>
            </p>
            <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-white/35">
              Expert Trainers
            </p>
          </div>

          <div className="border-l border-white/15 pl-5">
            <p className="text-2xl font-black md:text-3xl">
              24<span className="text-[#C6FF00]">/7</span>
            </p>
            <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-white/35">
              Open Access
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 right-6 z-20 hidden items-center gap-3 text-[9px] font-bold uppercase tracking-[0.25em] text-white/40 transition-colors hover:text-[#C6FF00] md:flex"
      >
        Scroll to explore

        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20">
          <ArrowDown size={14} />
        </span>
      </motion.a>

    </section>
  )
}

export default Hero