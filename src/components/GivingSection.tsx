import { motion } from "framer-motion";

const givingOptions = [
  {
    title: "Tithes",
    desc: "Honour the Lord with your substance and the first fruits of all your increase",
    icon: "💎",
  },
  {
    title: "Offerings",
    desc: "Sow generously and reap bountifully. Your seed is your future harvest",
    icon: "🌱",
  },
  {
    title: "Special Seed",
    desc: "Targeted giving for specific breakthroughs and covenant blessings",
    icon: "🔥",
  },
];

export default function GivingSection() {
  return (
    <section id="giving" className="relative py-28 px-4 bg-gradient-section">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-body text-xs tracking-[0.3em] uppercase text-gold">Partner With Us</span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mt-3">
            GIVING & <span className="text-gradient-gold">DONATIONS</span>
          </h2>
          <p className="font-body text-sm text-muted-foreground mt-4 max-w-lg mx-auto">
            "Give, and it shall be given unto you; good measure, pressed down, and shaken together" — Luke 6:38
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {givingOptions.map((option, i) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card glass-card-hover p-8 rounded-xl text-center group"
            >
              <span className="text-4xl block mb-4 group-hover:scale-110 transition-transform duration-300">{option.icon}</span>
              <h3 className="font-heading text-xl text-foreground">{option.title}</h3>
              <p className="font-body text-xs text-muted-foreground mt-3 leading-relaxed">{option.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bank details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass-card p-8 rounded-xl max-w-2xl mx-auto"
        >
          <h3 className="font-heading font-bold text-lg text-foreground text-center mb-6">Bank Details</h3>
          <div className="space-y-4">
            {[
              { label: "Bank", value: "Zenith Bank" },
              { label: "Account Name", value: "Living Faith Church Iworoko" },
              { label: "Account Number", value: "1014880673" },
            ].map((detail) => (
              <div key={detail.label} className="flex items-center justify-between py-2 border-b border-border/30">
                <span className="font-body font-bold text-xs text-muted-foreground tracking-wider uppercase">{detail.label}</span>
                <span className="font-body font-bold text-sm text-foreground">{detail.value}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-center gap-2">
            {["Secure", "Trusted", "Covenant"].map((badge) => (
              <span key={badge} className="font-body font-bold text-[10px] tracking-wider uppercase text-red-600 bg-red-600/10 px-3 py-1 rounded-full border border-red-600/20">
                {badge}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
