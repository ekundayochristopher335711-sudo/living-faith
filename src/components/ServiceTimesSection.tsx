import { motion } from "framer-motion";

const services = [
  {
    day: "Sunday",
    title: "Covenant Day of Open Doors",
    times: ["1st Service — 7:30 AM", "2nd Service — 9:30 AM"],
    icon: "☀️",
    highlight: true,
  },
  {
    day: "Tuesday",
    title: "Covenant Hour of Prayer",
    times: ["5:30 AM — 6:30 AM"],
    icon: "🙏",
    highlight: false,
  },
  {
    day: "Wednesday",
    title: "Midweek Service",
    times: ["5:30 PM"],
    icon: "📖",
    highlight: false,
  },
  {
    day: "Thursday",
    title: "Hour of Visitation",
    times: ["5:30 AM — 6:30 AM"],
    icon: "⭐",
    highlight: false,
  },
  {
    day: "Friday",
    title: "Night of Encounter",
    times: ["10:00 PM"],
    icon: "🔥",
    highlight: false,
  },
];

export default function ServiceTimesSection() {
  return (
    <section id="services" className="relative py-28 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-body text-xs tracking-[0.3em] uppercase text-gold">Join Us</span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mt-3">
            SERVICE <span className="text-gradient-gold">TIMES</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.day}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`glass-card glass-card-hover p-6 rounded-xl ${
                service.highlight ? "lg:col-span-1 border-gold/20 glow-gold" : ""
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{service.icon}</span>
                <div>
                  <h3 className="font-heading text-lg text-foreground">{service.day}</h3>
                  {service.highlight && (
                    <span className="text-[10px] font-body tracking-wider uppercase text-gold bg-gold/10 px-2 py-0.5 rounded-full">
                      Upcoming
                    </span>
                  )}
                </div>
              </div>
              <p className="font-body text-sm text-muted-foreground mb-3">{service.title}</p>
              {service.times.map((time) => (
                <p key={time} className="font-body text-xs text-foreground/80">{time}</p>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
