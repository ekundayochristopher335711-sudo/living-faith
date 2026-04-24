import { motion } from "framer-motion";

const events = [
  {
    title: "Shiloh 2025",
    subtitle: "Annual International Convention",
    date: "December 2025",
    desc: "The largest gathering of faith. A time of prophetic declarations, supernatural encounters, and divine turnaround.",
    highlight: true,
  },
  {
    title: "Night of Encounter",
    subtitle: "Monthly Power Night",
    date: "Every Last Friday",
    desc: "A night of deep worship, intense prayer, and prophetic ministration for breakthrough.",
    highlight: false,
  },
  {
    title: "Covenant Day of Exemption",
    subtitle: "Special Sunday Service",
    date: "Coming Soon",
    desc: "A day of divine exemption from every evil agenda. Come expecting your miracle!",
    highlight: false,
  },
  {
    title: "Youth Alive Convention",
    subtitle: "Youth Ministry",
    date: "Quarterly",
    desc: "Empowering young people to take charge and dominate in every sphere of life.",
    highlight: false,
  },
];

export default function EventsSection() {
  return (
    <section id="events" className="relative py-28 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-body text-xs tracking-[0.3em] uppercase text-gold">Upcoming</span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mt-3">
            EVENTS & <span className="text-gradient-gold">PROGRAMS</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`glass-card glass-card-hover p-6 md:p-8 rounded-xl flex flex-col md:flex-row md:items-center gap-4 ${
                event.highlight ? "border-gold/20 glow-gold" : ""
              }`}
            >
              <div className="flex-shrink-0 text-center md:text-left md:w-32">
                <span className="font-body font-bold text-[10px] tracking-wider uppercase text-red-600 bg-red-600/10 px-2 py-1 rounded-full">
                  {event.date}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="font-heading text-xl text-foreground">{event.title}</h3>
                <p className="font-body text-xs text-gold mt-1 tracking-wider uppercase">{event.subtitle}</p>
                <p className="font-body text-sm text-muted-foreground mt-2 leading-relaxed">{event.desc}</p>
              </div>
              {event.highlight && (
                <div className="flex-shrink-0">
                  <span className="inline-block font-body font-bold text-[10px] tracking-wider uppercase bg-red-600 text-white px-4 py-2 rounded-lg glow-accent">
                    Featured
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
