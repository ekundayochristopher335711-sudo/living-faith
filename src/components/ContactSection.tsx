import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-28 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-body font-bold text-xs tracking-[0.3em] uppercase text-gold">Reach Us</span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mt-3">
            GET IN <span className="text-gradient-gold">TOUCH</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card glass-card-hover p-8 rounded-xl text-center"
          >
            <span className="text-3xl block mb-3">📍</span>
            <h3 className="font-heading font-bold text-base text-foreground">Location</h3>
            <p className="font-body font-bold text-sm text-muted-foreground mt-2 leading-relaxed">
              Winners Chapel, Iworoko Road, behind Olawuwo Filling Station,
              <br />Iworoko-Ekiti, Ekiti State, Nigeria
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card glass-card-hover p-8 rounded-xl text-center"
          >
            <span className="text-3xl block mb-3">📞</span>
            <h3 className="font-heading font-bold text-base text-foreground">Phone</h3>
            <p className="font-body font-bold text-sm text-muted-foreground mt-2">+2348129374001</p>
            <a
              href="https://wa.me/2348129374001"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 font-body font-bold text-xs tracking-wider uppercase text-red-600 hover:text-red-700 transition-colors"
            >
              Chat on WhatsApp →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card glass-card-hover p-8 rounded-xl text-center"
          >
            <span className="text-3xl block mb-3">✉️</span>
            <h3 className="font-heading font-bold text-base text-foreground">Email</h3>
            <p className="font-body font-bold text-sm text-muted-foreground mt-2">info@winnersiworoko.org</p>
          </motion.div>
        </div>

        {/* Map placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 glass-card rounded-2xl overflow-hidden aspect-[21/9]"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.0!2d5.35!3d7.63!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMzcnNDguMCJOIDXCsDIxJzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg) saturate(0.3)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Church location"
          />
        </motion.div>
      </div>
    </section>
  );
}
