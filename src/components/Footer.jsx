import { ArrowUpRight } from "lucide-react"

const Footer = () => {
  const socialLinks = [
    {
      name: "IG",
      label: "Instagram",
      href: "#",
    },
    {
      name: "FB",
      label: "Facebook",
      href: "#",
    },
    {
      name: "YT",
      label: "YouTube",
      href: "#",
    },
  ]

  const exploreLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Trainers", href: "#trainers" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <footer className="bg-[#050505] px-6 pb-8 pt-20 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Main Footer */}
        <div className="grid gap-12 border-b border-white/10 pb-16 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">

            <a
              href="#"
              className="inline-flex items-center gap-3"
            >
              <span className="flex h-12 w-12 items-center justify-center bg-[#C6FF00] text-xl font-black text-black">
                A
              </span>

              <span className="text-2xl font-black tracking-tight">
                ABSOLUTE GYM<span className="text-[#C6FF00]">.</span>
              </span>
            </a>

            <p className="mt-7 max-w-md text-sm leading-7 text-white/35">
              A premium fitness community built for people who
              refuse to settle. Train harder. Think stronger.
              Become unstoppable.
            </p>

            {/* Social Links */}
            <div className="mt-7 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center border border-white/10 text-[10px] font-black text-white/50 transition-all duration-300 hover:border-[#C6FF00] hover:bg-[#C6FF00] hover:text-black"
                >
                  {social.name}
                </a>
              ))}
            </div>

          </div>

          {/* Explore */}
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#C6FF00]">
              Explore
            </p>

            <div className="mt-6 flex flex-col gap-4">
              {exploreLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="w-fit text-sm text-white/40 transition-colors duration-300 hover:translate-x-1 hover:text-white"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#C6FF00]">
              Contact
            </p>

            <div className="mt-6 flex flex-col gap-4 text-sm text-white/40">

              <a
                href="tel:+919876543210"
                className="transition-colors hover:text-white"
              >
                +91 9477110367
              </a>

              <a
                href="mailto:hello@forgefitness.com"
                className="transition-colors hover:text-white"
              >
                hello@absolutefitness.com
              </a>

              <p>
                Kolkata, West Bengal
                <br />
                India
              </p>

            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Kolkata%2C%20West%20Bengal%2C%20India"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 flex w-fit items-center gap-2 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:text-[#C6FF00]"
            >
              Get Directions

              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>

        </div>

        {/* Bottom */}
        <div className="flex flex-col justify-between gap-4 pt-7 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/20 sm:flex-row">

          <p>
            © 2026 ABSOLUTE GYM. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="#"
              className="transition-colors hover:text-white"
            >
              Privacy
            </a>

            <a
              href="#"
              className="transition-colors hover:text-white"
            >
              Terms
            </a>
          </div>

        </div>

      </div>
    </footer>
  )
}

export default Footer