import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowUpRight } from "lucide-react"

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const links = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Trainers", href: "#trainers" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ]

  const closeMenu = () => {
    setOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="absolute left-0 top-0 z-50 w-full"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-12">

        {/* ================= LOGO ================= */}

        <a
          href="#"
          onClick={closeMenu}
          className="group flex items-center gap-3"
        >
          <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden bg-[#C6FF00] font-black text-black">
            <span className="relative z-10">A</span>

            <div className="absolute inset-0 -translate-x-full bg-white transition-transform duration-500 group-hover:translate-x-0" />
          </div>

          <div className="leading-none">
            <p className="text-lg font-black tracking-tight text-white">
              ABSOLUTE GYM<span className="text-[#C6FF00]">.</span>
            </p>

            <p className="mt-1 text-[8px] font-medium uppercase tracking-[0.35em] text-white/40">
              Fitness Club
            </p>
          </div>
        </a>

        {/* ================= DESKTOP NAV ================= */}

        <div className="hidden items-center gap-7 lg:flex">

          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group relative py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60 transition-colors duration-300 hover:text-white"
            >
              {link.name}

              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#C6FF00] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

        </div>

        {/* ================= DESKTOP CTA ================= */}

        <a
          href="#pricing"
          className="group hidden items-center gap-2 bg-white px-5 py-3 text-xs font-black uppercase tracking-wider text-black transition-all duration-300 hover:bg-[#C6FF00] lg:flex"
        >
          Get Started

          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
          />
        </a>

        {/* ================= MOBILE MENU BUTTON ================= */}

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-11 w-11 items-center justify-center border border-white/20 bg-black/20 text-white backdrop-blur-md transition-all duration-300 hover:border-[#C6FF00] hover:text-[#C6FF00] lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

      </nav>

      {/* ================= MOBILE MENU ================= */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.35,
              ease: "easeInOut",
            }}
            className="overflow-hidden border-t border-white/10 bg-[#050505]/95 backdrop-blur-xl lg:hidden"
          >
            <div className="px-6 py-5">

              {/* Mobile Links */}

              <div className="flex flex-col">

                {links.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={closeMenu}
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.06,
                      duration: 0.3,
                    }}
                    className="group flex items-center justify-between border-b border-white/10 py-5 text-sm font-bold uppercase tracking-[0.2em] text-white/70 transition-colors duration-300 hover:text-[#C6FF00]"
                  >
                    <span>{link.name}</span>

                    <ArrowUpRight
                      size={17}
                      className="opacity-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100"
                    />
                  </motion.a>
                ))}

              </div>

              {/* Mobile CTA */}

              <motion.a
                href="#pricing"
                onClick={closeMenu}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.35,
                  duration: 0.4,
                }}
                className="group mt-6 flex items-center justify-center gap-3 bg-[#C6FF00] px-5 py-4 text-sm font-black uppercase tracking-wider text-black transition-all duration-300 hover:bg-white"
              >
                Join Now

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </motion.a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar