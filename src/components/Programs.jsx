import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowUpRight } from "lucide-react"

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Programs", href: "#programs" },
  { name: "Trainers", href: "#trainers" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const handleLinkClick = () => {
    setOpen(false)
  }

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute left-0 top-0 z-[999] w-full"
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-12">

          {/* LOGO */}
          <a
            href="#home"
            onClick={handleLinkClick}
            className="group flex items-center gap-3"
          >
            <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden bg-[#C6FF00] font-black text-black">
              <span className="relative z-10">F</span>

              <div className="absolute inset-0 -translate-x-full bg-white transition-transform duration-500 group-hover:translate-x-0" />
            </div>

            <div className="leading-none">
              <p className="text-lg font-black tracking-tight text-white">
                FORGE<span className="text-[#C6FF00]">.</span>
              </p>

              <p className="mt-1 text-[8px] font-medium uppercase tracking-[0.35em] text-white/40">
                Fitness Club
              </p>
            </div>
          </a>

          {/* DESKTOP NAV */}
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

          {/* DESKTOP CTA */}
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

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="relative z-[1001] flex h-12 w-12 touch-manipulation items-center justify-center border border-white/20 bg-black/80 text-white backdrop-blur-md transition-all duration-300 hover:border-[#C6FF00] hover:text-[#C6FF00] lg:hidden"
          >
            {open ? <X size={23} /> : <Menu size={23} />}
          </button>
        </nav>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <>
            {/* BACKDROP */}
            <motion.button
              type="button"
              aria-label="Close menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[997] bg-black/70 backdrop-blur-sm lg:hidden"
            />

            {/* MENU PANEL */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              className="fixed left-0 right-0 top-0 z-[1000] bg-[#050505] pt-24 shadow-2xl lg:hidden"
            >
              <div className="border-t border-white/10 px-6 pb-7">

                {/* LINKS */}
                <div className="flex flex-col">
                  {links.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={handleLinkClick}
                      initial={{
                        opacity: 0,
                        x: -20,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.05,
                        duration: 0.25,
                      }}
                      className="flex min-h-[58px] touch-manipulation items-center justify-between border-b border-white/10 text-sm font-bold uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-[#C6FF00]"
                    >
                      <span>{link.name}</span>

                      <ArrowUpRight
                        size={18}
                        className="text-white/30"
                      />
                    </motion.a>
                  ))}
                </div>

                {/* MOBILE CTA */}
                <motion.a
                  href="#pricing"
                  onClick={handleLinkClick}
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.3,
                    duration: 0.3,
                  }}
                  className="mt-6 flex min-h-[56px] touch-manipulation items-center justify-center gap-3 bg-[#C6FF00] px-5 py-4 text-sm font-black uppercase tracking-wider text-black transition-colors hover:bg-white"
                >
                  Join Now

                  <ArrowUpRight size={18} />
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar