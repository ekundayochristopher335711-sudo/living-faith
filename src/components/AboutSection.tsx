import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-28 px-4">
      <div className="section-divider mb-20 max-w-xl mx-auto" />
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1510590337019-5ef8d3d32116?w=800&q=80"
              alt="Church worship"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-xl glass-card flex items-center justify-center">
            <span className="font-heading font-bold text-3xl text-gradient-gold">40+</span>
            <span className="font-body font-bold text-xs text-muted-foreground ml-1">Years of<br/>Faith</span>
          </div>
        </motion.div>

        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="font-body font-bold text-xs tracking-[0.3em] uppercase text-gold">About Us</span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mt-3 leading-tight">
            A COMMISSION
            <br />
            <span className="text-gradient-gold">OF FAITH</span>
          </h2>
          <p className="font-body font-bold text-muted-foreground mt-6 leading-relaxed text-base">
            We are a faith-based, word-driven commission dedicated to the liberation of mankind 
            through the preaching of the word of faith. Living Faith Church (Winners Chapel) 
            Iworoko is a vibrant community where lives are transformed through the power of God's word.
          </p>
          <p className="font-body font-bold text-muted-foreground mt-4 leading-relaxed text-base">
            Under the visionary leadership of Bishop David Oyedepo, we believe in the covenant 
            of prosperity, divine health, and supernatural breakthroughs. Every service is an 
            encounter with the living God.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { value: "1981", label: "Founded" },
              { value: "Global", label: "Reach" },
              { value: "∞", label: "Miracles" },
            ].map((stat) => (
              <div key={stat.label} className="text-center glass-card p-4 rounded-xl">
                <div className="font-heading font-bold text-xl text-gradient-gold">{stat.value}</div>
                <div className="font-body font-bold text-xs text-muted-foreground mt-1 tracking-wider uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
