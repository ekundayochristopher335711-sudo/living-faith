import { motion } from "framer-motion";
import { FormEvent, useState } from "react";

const journeySteps = [
  {
    title: "Welcome Home",
    desc: "We're thrilled you're considering visiting us! At Winners Chapel Iworoko, you'll find a warm, loving community eager to welcome you.",
    icon: "🏠",
  },
  {
    title: "What to Expect",
    desc: "A church where you never fail in anything you do — powerful praise, life-changing sermons rooted in God's word, and an atmosphere of faith that ignites your spirit.",
    icon: "✨",
  },
  {
    title: "Service Times",
    desc: "Sunday Worship — 1st Service: 6:30 AM, 2nd Service: 9:00 AM. Midweek Service — Wednesdays at 5:30 PM.",
    icon: "🕐",
  },
  {
    title: "Get Connected",
    desc: "Join a department, attend our Bible study groups, connect with a cell fellowship, and become part of the Winners family.",
    icon: "🤝",
  },
  {
    title: "Grow With Us",
    desc: "We believe in your destiny! From Foundation School to leadership training, we'll walk with you every step of the way.",
    icon: "🌱",
  },
];

export default function ImNewSection() {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    name: "",
    age: "",
    phone: "",
    address: "",
    prayer: "",
  });

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = `New visitor details:%0AName: ${form.name}%0AAge: ${form.age}%0APhone: ${form.phone}%0AAddress: ${form.address}%0APrayer request: ${form.prayer}`;
    window.open(`https://wa.me/238129374001?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="im-new" className="relative py-28 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-body text-xs tracking-[0.3em] uppercase text-gold">First Time?</span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mt-3">
            NEW <span className="text-gradient-gold">HERE?</span>
          </h2>
          <p className="font-body text-sm text-muted-foreground mt-4 max-w-lg mx-auto">
            Your journey of a thousand breakthroughs begins with a single step. We're here to guide you.
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <button
            type="button"
            onClick={() => setShowForm(true)}
            className="px-8 py-4 bg-red-600 text-white font-body font-bold text-sm tracking-widest uppercase rounded-full hover:bg-red-700 transition-all duration-300"
          >
            I'm New — Register
          </button>
        </div>

        {showForm && (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card glass-card-hover p-8 rounded-3xl mb-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: "Full Name", field: "name" as const, type: "text" },
                { label: "Age", field: "age" as const, type: "text" },
                { label: "Phone Number", field: "phone" as const, type: "tel" },
                { label: "Address", field: "address" as const, type: "text" },
              ].map((input) => (
                <label key={input.field} className="block text-sm text-muted-foreground">
                  <span className="font-body font-bold text-xs uppercase tracking-wider text-red-600">{input.label}</span>
                  <input
                    type={input.type}
                    value={form[input.field]}
                    onChange={(event) => handleChange(input.field, event.target.value)}
                    className="mt-2 w-full rounded-2xl border border-border/30 bg-background px-4 py-3 text-foreground outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20"
                    required
                  />
                </label>
              ))}
            </div>
            <label className="block text-sm text-muted-foreground mt-4">
              <span className="font-body font-bold text-xs uppercase tracking-wider text-red-600">Prayer Request</span>
              <textarea
                value={form.prayer}
                onChange={(event) => handleChange("prayer", event.target.value)}
                className="mt-2 w-full min-h-[140px] rounded-2xl border border-border/30 bg-background px-4 py-3 text-foreground outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20"
                required
              />
            </label>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                className="px-8 py-3 bg-red-600 text-white font-body font-bold text-sm uppercase rounded-full hover:bg-red-700 transition-all duration-300"
              >
                Send Prayer Request
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-8 py-3 border border-border/30 text-muted-foreground font-body text-sm uppercase rounded-full hover:border-gold hover:text-foreground transition-all duration-300"
              >
                Close Form
              </button>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Prayer requests will be sent to WhatsApp +238129374001.
            </p>
          </motion.form>
        )}

        <div className="space-y-4">
          {journeySteps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card glass-card-hover p-6 md:p-8 rounded-xl flex items-start gap-4"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-600/10 border border-red-600/20 flex items-center justify-center text-xl">
                {step.icon}
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-gold font-heading text-xs tracking-widest">0{i + 1}</span>
                  <h3 className="font-heading text-lg md:text-xl text-foreground">{step.title}</h3>
                </div>
                <p className="font-body text-sm text-muted-foreground mt-2 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
