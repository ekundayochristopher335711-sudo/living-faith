import { motion } from "framer-motion";
import { useState } from "react";

export default function PrayerRequestSection() {
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="prayer" className="relative py-28 px-4 bg-gradient-section">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="font-body text-xs tracking-[0.3em] uppercase text-gold">We Believe With You</span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mt-3">
            PRAYER <span className="text-gradient-gold">REQUEST</span>
          </h2>
          <p className="font-body text-sm text-muted-foreground mt-4">
            "The effectual fervent prayer of a righteous man availeth much" — James 5:16
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card p-8 md:p-10 rounded-2xl space-y-6"
        >
          {/* Floating label input - Name */}
          <div className="relative">
            <input
              type="text"
              required
              id="prayer-name"
              onFocus={() => setFocused("name")}
              onBlur={(e) => !e.target.value && setFocused(null)}
              className="w-full bg-transparent border-b border-border/50 pb-2 pt-5 font-body text-foreground placeholder-transparent focus:outline-none focus:border-red-600/50 transition-colors peer"
              placeholder="Name"
            />
            <label
              htmlFor="prayer-name"
              className={`absolute left-0 transition-all duration-300 font-body font-bold text-muted-foreground ${
                focused === "name" ? "top-0 text-[10px] tracking-wider uppercase text-red-600" : "top-5 text-sm"
              } peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:tracking-wider peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:text-red-600`}
            >
              Your Name
            </label>
          </div>

          {/* Floating label input - Email */}
          <div className="relative">
            <input
              type="email"
              id="prayer-email"
              onFocus={() => setFocused("email")}
              onBlur={(e) => !e.target.value && setFocused(null)}
              className="w-full bg-transparent border-b border-border/50 pb-2 pt-5 font-body text-foreground placeholder-transparent focus:outline-none focus:border-red-600/50 transition-colors peer"
              placeholder="Email"
            />
            <label
              htmlFor="prayer-email"
              className={`absolute left-0 transition-all duration-300 font-body font-bold text-muted-foreground ${
                focused === "email" ? "top-0 text-[10px] tracking-wider uppercase text-red-600" : "top-5 text-sm"
              } peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:tracking-wider peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:text-red-600`}
            >
              Email (Optional)
            </label>
          </div>

          {/* Floating label textarea */}
          <div className="relative">
            <textarea
              required
              rows={4}
              id="prayer-request"
              onFocus={() => setFocused("request")}
              onBlur={(e) => !e.target.value && setFocused(null)}
              className="w-full bg-transparent border-b border-border/50 pb-2 pt-5 font-body text-foreground placeholder-transparent focus:outline-none focus:border-red-600/50 transition-colors resize-none peer"
              placeholder="Request"
            />
            <label
              htmlFor="prayer-request"
              className={`absolute left-0 transition-all duration-300 font-body font-bold text-muted-foreground ${
                focused === "request" ? "top-0 text-[10px] tracking-wider uppercase text-red-600" : "top-5 text-sm"
              } peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:tracking-wider peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:text-red-600`}
            >
              Your Prayer Request
            </label>
          </div>

          <motion.button
            type="submit"
            whileTap={{ scale: 0.98 }}
            className={`w-full py-4 font-body font-bold text-sm tracking-widest uppercase rounded-xl transition-all duration-500 ${
              submitted
                ? "bg-red-500/20 text-red-600 border border-red-500/30"
                : "bg-red-600 text-white hover:bg-red-700 glow-accent"
            }`}
          >
            {submitted ? (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                ✓ Prayer Request Received — God is at work
              </motion.span>
            ) : (
              "Submit Prayer Request"
            )}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
