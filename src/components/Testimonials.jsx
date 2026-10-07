import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Member · 2 Years",
    text: "Forge completely changed the way I train. The trainers actually care about your progress, and the atmosphere keeps me motivated every single day.",
  },
  {
    name: "Priya Mehta",
    role: "Member · 1 Year",
    text: "The best thing about Forge is the community. I started with zero confidence and now training has become one of the strongest parts of my routine.",
  },
  {
    name: "Arjun Kapoor",
    role: "Member · 3 Years",
    text: "Excellent equipment, knowledgeable trainers and an amazing environment. If you're serious about getting stronger, this is the place.",
  },
]

const Testimonials = () => {
  return (
    <section className="bg-[#0D0D0D] px-6 py-24 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#C6FF00]" />

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C6FF00]">
              Member Stories
            </span>
          </div>

          <h2 className="text-5xl font-black uppercase leading-[0.88] tracking-[-0.05em] md:text-7xl">
            Don't Take
            <br />
            <span className="text-white/25">Our Word</span>
            <br />
            <span className="text-[#C6FF00]">For It.</span>
          </h2>
        </motion.div>

        {/* Testimonials */}
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              className="group relative flex min-h-[360px] flex-col justify-between border border-white/10 bg-[#151515] p-7 transition-all duration-500 hover:border-[#C6FF00]/50 md:p-9"
            >
              {/* Quote */}
              <div>
                <div className="flex items-center justify-between">
                  <Quote
                    size={32}
                    className="text-[#C6FF00]"
                    fill="currentColor"
                  />

                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        fill="#C6FF00"
                        className="text-[#C6FF00]"
                      />
                    ))}
                  </div>
                </div>

                <p className="mt-10 text-lg font-medium leading-8 text-white/70">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Person */}
              <div className="mt-10 flex items-end justify-between border-t border-white/10 pt-5">
                <div>
                  <p className="font-black uppercase tracking-wide">
                    {testimonial.name}
                  </p>

                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/30">
                    {testimonial.role}
                  </p>
                </div>

                <span className="text-4xl font-black text-white/5 transition-colors duration-500 group-hover:text-[#C6FF00]/10">
                  0{index + 1}
                </span>
              </div>

              {/* Accent */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#C6FF00] transition-all duration-500 group-hover:w-full" />
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Testimonials