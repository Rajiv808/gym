import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, Check, X } from "lucide-react"

const plans = [
  {
    name: "Basic",
    price: "₹999",
    period: "/ month",
    description: "Perfect for beginners starting their fitness journey.",
    features: [
      "Gym Access",
      "Cardio & Strength Equipment",
      "Locker Facility",
      "Basic Workout Guidance",
    ],
  },
  {
    name: "Pro",
    price: "₹1,799",
    period: "/ month",
    description: "For members serious about building strength and results.",
    features: [
      "Everything in Basic",
      "Personalized Workout Plan",
      "Trainer Guidance",
      "Diet Guidance",
      "Progress Tracking",
    ],
    popular: true,
  },
  {
    name: "Elite",
    price: "₹2,999",
    period: "/ month",
    description: "Complete premium coaching for maximum transformation.",
    features: [
      "Everything in Pro",
      "Personal Trainer",
      "Advanced Diet Plan",
      "Weekly Progress Review",
      "Priority Support",
    ],
  },
]

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [showForm, setShowForm] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    age: "",
    goal: "",
  })

  const selectPlan = (plan) => {
    setSelectedPlan(plan)
    setShowForm(false)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleAdmission = (e) => {
    e.preventDefault()

    if (!formData.name || !formData.phone) {
      alert("Please enter your name and phone number.")
      return
    }

    const message = `Hello Forge Fitness,

I am interested in joining your gym.

*Selected Plan:* ${selectedPlan.name}
*Price:* ${selectedPlan.price} ${selectedPlan.period}

*Admission Details:*
Name: ${formData.name}
Phone: ${formData.phone}
Age: ${formData.age || "Not provided"}
Fitness Goal: ${formData.goal || "Not provided"}

I would like to know more about the admission process and availability.`

    const whatsappURL = `https://wa.me/919477110367?text=${encodeURIComponent(
      message
    )}`

    window.open(whatsappURL, "_blank")
  }

  return (
    <section
      id="pricing"
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
              Membership
            </span>
          </div>

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <h2 className="text-5xl font-black uppercase leading-[0.88] tracking-[-0.05em] md:text-7xl">
              Choose Your
              <br />
              <span className="text-white/25">Level.</span>
            </h2>

            <p className="max-w-md text-sm leading-6 text-white/40">
              Choose a membership that matches your goals.
              Select your plan and complete your admission enquiry
              directly through WhatsApp.
            </p>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid gap-5 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.article
              key={plan.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
              className={`relative flex flex-col overflow-hidden border p-8 transition-all duration-500 ${
                plan.popular
                  ? "border-[#C6FF00] bg-[#C6FF00] text-black"
                  : "border-white/10 bg-[#151515] text-white hover:border-white/25"
              }`}
            >
              {plan.popular && (
                <div className="absolute right-0 top-0 bg-black px-4 py-2 text-[9px] font-black uppercase tracking-[0.2em] text-[#C6FF00]">
                  Most Popular
                </div>
              )}

              <div>
                <p
                  className={`text-xs font-black uppercase tracking-[0.25em] ${
                    plan.popular
                      ? "text-black/50"
                      : "text-[#C6FF00]"
                  }`}
                >
                  {plan.name}
                </p>

                <div className="mt-8 flex items-end gap-2">
                  <span className="text-5xl font-black tracking-tight">
                    {plan.price}
                  </span>

                  <span
                    className={`pb-2 text-sm ${
                      plan.popular
                        ? "text-black/50"
                        : "text-white/30"
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>

                <p
                  className={`mt-5 min-h-[48px] text-sm leading-6 ${
                    plan.popular
                      ? "text-black/60"
                      : "text-white/40"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <div
                className={`my-8 h-px ${
                  plan.popular
                    ? "bg-black/15"
                    : "bg-white/10"
                }`}
              />

              <div className="flex flex-1 flex-col">
                <p
                  className={`mb-5 text-[10px] font-black uppercase tracking-[0.2em] ${
                    plan.popular
                      ? "text-black/50"
                      : "text-white/30"
                  }`}
                >
                  What's Included
                </p>

                <div className="space-y-4">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3"
                    >
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          plan.popular
                            ? "bg-black text-[#C6FF00]"
                            : "bg-[#C6FF00] text-black"
                        }`}
                      >
                        <Check size={12} strokeWidth={3} />
                      </span>

                      <span
                        className={`text-sm ${
                          plan.popular
                            ? "text-black/75"
                            : "text-white/60"
                        }`}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Select Plan */}
                <button
                  type="button"
                  onClick={() => selectPlan(plan)}
                  className={`group mt-10 flex w-full items-center justify-between px-5 py-4 text-xs font-black uppercase tracking-wider transition-all duration-300 ${
                    plan.popular
                      ? "bg-black text-white hover:bg-white hover:text-black"
                      : "bg-white text-black hover:bg-[#C6FF00]"
                  }`}
                >
                  Select {plan.name}

                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Plan Details Modal */}
      <AnimatePresence>
        {selectedPlan && !showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-5 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 30 }}
              className="relative w-full max-w-lg border border-white/10 bg-[#111111] p-7 text-white shadow-2xl md:p-10"
            >
              <button
                type="button"
                onClick={() => setSelectedPlan(null)}
                className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center border border-white/10 text-white/50 transition hover:border-[#C6FF00] hover:text-[#C6FF00]"
              >
                <X size={18} />
              </button>

              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#C6FF00]">
                Selected Membership
              </p>

              <h3 className="mt-4 text-4xl font-black uppercase">
                {selectedPlan.name}
              </h3>

              <div className="mt-3">
                <span className="text-3xl font-black">
                  {selectedPlan.price}
                </span>

                <span className="ml-2 text-sm text-white/40">
                  {selectedPlan.period}
                </span>
              </div>

              <p className="mt-5 text-sm leading-6 text-white/50">
                {selectedPlan.description}
              </p>

              <div className="my-7 h-px bg-white/10" />

              <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-white/40">
                Plan Includes
              </p>

              <div className="space-y-3">
                {selectedPlan.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 text-sm text-white/70"
                  >
                    <Check
                      size={16}
                      className="text-[#C6FF00]"
                    />
                    {feature}
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setShowForm(true)}
                className="mt-8 flex w-full items-center justify-center gap-3 bg-[#C6FF00] px-5 py-4 text-xs font-black uppercase tracking-wider text-black transition hover:bg-white"
              >
                Continue To Admission
                <ArrowUpRight size={17} />
              </button>
            </motion.div>
          </motion.div>
        )}

        {/* Admission Form */}
        {selectedPlan && showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/80 p-5 backdrop-blur-md"
          >
            <motion.form
              onSubmit={handleAdmission}
              initial={{ opacity: 0, scale: 0.94, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="relative w-full max-w-lg border border-white/10 bg-[#111111] p-7 text-white shadow-2xl md:p-10"
            >
              <button
                type="button"
                onClick={() => setSelectedPlan(null)}
                className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center border border-white/10 text-white/50 transition hover:border-[#C6FF00] hover:text-[#C6FF00]"
              >
                <X size={18} />
              </button>

              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#C6FF00]">
                Admission Enquiry
              </p>

              <h3 className="mt-4 text-3xl font-black uppercase">
                {selectedPlan.name} Plan
              </h3>

              <p className="mt-2 text-sm text-white/40">
                {selectedPlan.price} {selectedPlan.period}
              </p>

              <div className="mt-7 space-y-4">
                <div>
                  <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                    Full Name *
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full border border-white/10 bg-[#181818] px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#C6FF00]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                    WhatsApp Number *
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your WhatsApp number"
                    required
                    className="w-full border border-white/10 bg-[#181818] px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#C6FF00]"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                      Age
                    </label>

                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      placeholder="Your age"
                      className="w-full border border-white/10 bg-[#181818] px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#C6FF00]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                      Fitness Goal
                    </label>

                    <select
                      name="goal"
                      value={formData.goal}
                      onChange={handleChange}
                      className="w-full border border-white/10 bg-[#181818] px-4 py-4 text-sm text-white outline-none focus:border-[#C6FF00]"
                    >
                      <option value="">Select goal</option>
                      <option value="Weight Loss">Weight Loss</option>
                      <option value="Muscle Gain">Muscle Gain</option>
                      <option value="Strength">Strength</option>
                      <option value="General Fitness">
                        General Fitness
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="group mt-7 flex w-full items-center justify-center gap-3 bg-[#C6FF00] px-5 py-4 text-xs font-black uppercase tracking-wider text-black transition hover:bg-white"
              >
                Continue On WhatsApp
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </button>

              <p className="mt-4 text-center text-[10px] leading-5 text-white/25">
                Your admission details will be prepared and opened
                in WhatsApp for confirmation.
              </p>
            </motion.form>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Pricing