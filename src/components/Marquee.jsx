import { motion } from "framer-motion"

const words = [
  "TRAIN HARD",
  "STAY CONSISTENT",
  "BREAK LIMITS",
  "BUILD POWER",
  "NO EXCUSES",
]

const Marquee = () => {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#C6FF00] py-5">

      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...words, ...words, ...words].map((word, index) => (
          <div
            key={index}
            className="flex items-center whitespace-nowrap"
          >
            <span className="mx-6 text-2xl font-black uppercase tracking-tight text-black md:text-4xl">
              {word}
            </span>

            <span className="text-xl font-black text-black/40 md:text-2xl">
              ✦
            </span>
          </div>
        ))}
      </motion.div>

    </section>
  )
}

export default Marquee