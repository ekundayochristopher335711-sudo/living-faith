import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "next-themes";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageOpacity = useTransform(scrollYProgress, [0, 0.6], [0.2, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.6, 0.9]);
  const particleColor = theme === "dark" ? "bg-slate-400/40" : "bg-red-600/40";

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1438032005730-c779502df39b?w=1920&q=80')`,
          opacity: imageOpacity,
        }}
      />

      {/* Dark gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background"
        style={{ opacity: overlayOpacity }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${particleColor}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div style={{ y: textY }} className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-body text-xs tracking-[0.4em] uppercase text-red-600 mb-6"
          >
            Welcome to
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tight leading-[0.9] text-glow"
          >
            <span className="text-gradient-gold">LIVING FAITH</span>
            <br />
            <span className="text-foreground">CHURCH</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-6 font-body text-sm md:text-base tracking-[0.35em] uppercase text-muted-foreground"
          >
            Winners Chapel Iworoko
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-4 font-body text-sm text-muted-foreground/70 max-w-lg mx-auto italic"
          >
            "Come and experience God like never before"
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          <a
            href="#im-new"
            className="glass-card glass-card-hover px-8 py-3.5 font-body text-sm tracking-widest uppercase text-foreground"
          >
            I'm New
          </a>
          <a
            href="https://youtu.be/02BpQ-bB30s?si=wCm5DguQNSmW-jc8"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 bg-gold/20 border border-gold/30 text-foreground font-body text-sm tracking-widest uppercase rounded-xl hover:bg-gold/30 transition-all duration-300 glow-gold-hover"
          >
            Join Live
          </a>
          <a
            href="#prayer"
            className="px-8 py-3.5 bg-accent text-accent-foreground font-body text-sm tracking-widest uppercase rounded-xl hover:bg-accent/80 transition-all duration-300 glow-accent"
          >
            Prayer Request
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute -bottom-20 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border border-gold/30 flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 rounded-full bg-gold/50" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
