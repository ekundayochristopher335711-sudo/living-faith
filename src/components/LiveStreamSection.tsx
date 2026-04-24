import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function getNextSunday() {
  const now = new Date();
  const day = now.getDay();
  const daysUntilSunday = day === 0 ? 7 : 7 - day;
  const nextSunday = new Date(now);
  nextSunday.setDate(now.getDate() + daysUntilSunday);
  nextSunday.setHours(6, 30, 0, 0);
  return nextSunday;
}

function useCountdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const target = getNextSunday();
      const diff = target.getTime() - Date.now();
      if (diff <= 0) return;
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return timeLeft;
}

export default function LiveStreamSection() {
  const countdown = useCountdown();

  return (
    <section id="live" className="relative py-28 px-4 bg-gradient-section">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-body text-xs tracking-[0.3em] uppercase text-gold">Live</span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mt-3">
            JOIN <span className="text-gradient-gold">LIVE SERVICE</span>
          </h2>
        </motion.div>

        {/* Video placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 aspect-video max-w-3xl mx-auto glass-card rounded-2xl overflow-hidden relative group cursor-pointer"
        >
          <img
            src="https://images.unsplash.com/photo-1507692049790-de58290a4334?w=1200&q=80"
            alt="Live service"
            className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-red-600/20 border border-red-600/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 glow-gold">
              <svg className="w-8 h-8 text-foreground ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="font-body text-xs tracking-wider uppercase text-foreground/80">Live</span>
          </div>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10"
        >
          <p className="font-body text-sm text-muted-foreground mb-4 tracking-wider uppercase">
            Next Service In
          </p>
          <div className="flex justify-center gap-4 md:gap-6">
            {[
              { value: countdown.days, label: "Days" },
              { value: countdown.hours, label: "Hours" },
              { value: countdown.minutes, label: "Min" },
              { value: countdown.seconds, label: "Sec" },
            ].map((unit) => (
              <div key={unit.label} className="glass-card p-4 rounded-xl min-w-[70px]">
                <div className="font-heading text-2xl md:text-3xl text-gradient-gold">
                  {String(unit.value).padStart(2, "0")}
                </div>
                <div className="font-body text-[10px] text-muted-foreground tracking-wider uppercase mt-1">
                  {unit.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.a
          href="https://youtu.be/02BpQ-bB30s?si=wCm5DguQNSmW-jc8"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="inline-block mt-8 px-10 py-4 bg-red-600 text-white font-body font-bold text-sm tracking-widest uppercase rounded-xl hover:bg-red-700 transition-all duration-300 glow-accent"
        >
          Join Live Service
        </motion.a>
      </div>
    </section>
  );
}
