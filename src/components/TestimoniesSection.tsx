import { motion } from "framer-motion";
import { useState } from "react";

const testimonies = [
  {
    name: "Sister Grace",
    text: "God did it for me! After 7 years of waiting, I received my miracle baby. The covenant of fruitfulness is real!",
    category: "Miracle Baby",
  },
  {
    name: "Brother Emmanuel",
    text: "I was diagnosed with a terminal illness, but through the prophetic word, I received total healing. My doctors were amazed!",
    category: "Divine Healing",
  },
  {
    name: "Sister Faith",
    text: "From owing millions in debt to financial freedom in just 3 months. The covenant of prosperity works!",
    category: "Financial Breakthrough",
  },
  {
    name: "Brother Daniel",
    text: "I got my dream job after 2 years of unemployment. The seed I sowed at Shiloh broke the barrier!",
    category: "Career Breakthrough",
  },
  {
    name: "Sister Blessing",
    text: "My marriage was restored miraculously. What God has joined, no man can put asunder!",
    category: "Restoration",
  },
];

export default function TestimoniesSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="testimonies" className="relative py-28 px-4 bg-gradient-section">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-body font-bold text-xs tracking-[0.3em] uppercase text-gold">God Did It</span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mt-3">
            ALTAR OF <span className="text-gradient-gold">TESTIMONY</span>
          </h2>
          <p className="font-body font-bold text-sm text-muted-foreground mt-4 max-w-lg mx-auto">
            Lives transformed, destinies restored, miracles manifested. These are real stories from our congregation.
          </p>
        </motion.div>

        {/* Featured testimony */}
        <motion.div
          key={active}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 md:p-12 rounded-2xl glow-gold mb-8"
        >
          <div className="text-center">
            <span className="font-body font-bold text-[10px] tracking-[0.3em] uppercase text-red-600 bg-red-600/10 px-3 py-1 rounded-full">
              {testimonies[active].category}
            </span>
            <blockquote className="font-body font-bold text-lg md:text-xl text-foreground/90 mt-6 leading-relaxed italic">
              "{testimonies[active].text}"
            </blockquote>
            <p className="font-heading font-bold text-sm text-red-600 mt-6 tracking-wider">
              — {testimonies[active].name}
            </p>
          </div>
        </motion.div>

        {/* Testimony dots */}
        <div className="flex justify-center gap-3">
          {testimonies.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === active ? "bg-gold w-8" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>

        {/* Testimony grid below */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
          {testimonies.slice(0, 3).map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card glass-card-hover p-6 rounded-xl cursor-pointer"
              onClick={() => setActive(i)}
            >
              <span className="font-body text-[10px] tracking-wider uppercase text-gold">{t.category}</span>
              <p className="font-body text-sm text-muted-foreground mt-2 line-clamp-3 italic">"{t.text}"</p>
              <p className="font-heading text-xs text-foreground mt-3">— {t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
