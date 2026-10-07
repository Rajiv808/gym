import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Marquee from "./components/Marquee"
import About from "./components/About"
import Programs from "./components/Programs"
import Results from "./components/Results"
import Trainers from "./components/Trainers"
import Pricing from "./components/Pricing"
import Testimonials from "./components/Testimonials"
import CTA from "./components/CTA"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <main className="bg-[#050505] text-white">
      <Navbar />

      <Hero />

      <Marquee />

      <About />

      <Programs />

      <Results />

      <Trainers />

      <Pricing />

      <Testimonials />

      <CTA />

      <Contact />

      <Footer />
    </main>
  )
}

export default App