import { motion } from "framer-motion"
import { ArrowUpRight, TrendingUp } from "lucide-react"
import gym4 from "../assets/gym4.jpg"

const stats = [
  { value: "12K+", label: "Members Transformed" },
  { value: "94%", label: "Goal Success Rate" },
  { value: "12+", label: "Years Experience" },
  { value: "50+", label: "Training Programs" },
]

const Results = () => {
  return (
    <section
      id="results"
      className="relative overflow-hidden bg-[#050505] px-6 py-24 lg:px-12 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#C6FF00]" />

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C6FF00]">
              Real Results
            </span>
          </div>

          <h2 className="max-w-5xl text-5xl font-black uppercase leading-[0.88] tracking-[-0.05em] md:text-8xl">
            Results Speak
            <br />
            <span className="text-white/25">Louder Than</span>
            <br />
            <span className="text-[#C6FF00]">Promises.</span>
          </h2>
        </motion.div>

        {/* Main visual */}
        <div className="relative min-h-[600px] overflow-hidden">

          <motion.img
            src={gym4}
            alt="Training at Forge"
            initial={{ scale: 1.12 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/55" />

          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/30 to-transparent" />

          {/* Floating text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute left-6 top-8 max-w-md md:left-10 md:top-10"
          >
            <div className="flex items-center gap-3 text-[#C6FF00]">
              <TrendingUp size={20} />

              <span className="text-xs font-bold uppercase tracking-[0.25em]">
                Built For Progress
              </span>
            </div>

            <p className="mt-5 text-2xl font-bold uppercase leading-tight md:text-4xl">
              Every rep.
              <br />
              Every session.
              <br />
              <span className="text-[#C6FF00]">
                Every transformation.
              </span>
            </p>
          </motion.div>

          {/* Stats */}
          <div className="absolute inset-x-0 bottom-0 grid grid-cols-2 border-t border-white/20 bg-black/50 backdrop-blur-md md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="border-r border-white/10 p-6 last:border-r-0 md:p-8"
              >
                <p className="text-3xl font-black tracking-tight text-[#C6FF00] md:text-4xl">
                  {stat.value}
                </p>

                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/50">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Corner button */}
          <button className="group absolute right-6 top-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#C6FF00] text-black transition-transform duration-500 hover:rotate-45 md:right-10 md:top-10">
            <ArrowUpRight size={23} />
          </button>

        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-10 flex flex-col justify-between gap-5 border-t border-white/10 pt-7 md:flex-row md:items-center"
        >
          <p className="max-w-xl text-sm leading-6 text-white/40">
            Your starting point doesn't matter. What matters is
            having the right environment, coaching and consistency
            to reach where you want to be.
          </p>

          <div className="text-xs font-bold uppercase tracking-[0.2em] text-white/30">
            Progress is a process.
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Results