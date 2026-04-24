import { motion } from "framer-motion";
import bishopImg from "@/assets/bishop-oyedepo.jpeg";
import pastorMichealImg from "@/assets/pastors/pastor-micheal.png";
import pastorOlatImg from "@/assets/pastors/pastor-olat.png";

const residentPastor = {
  role: "Resident Pastor",
  name: "Pastor Micheal",
  bio: "Shepherding the flock at Winners Chapel Iworoko with passion and dedication to the mandate of liberation.",
  image: pastorMichealImg,
};

const assistantPastors = [
  {
    role: "Assistant Pastor",
    name: "Pastor Olat",
    bio: "Supporting the vision with committed service and spiritual oversight of the local assembly.",
    image: pastorOlatImg,
  },
  {
    role: "Assistant Pastor",
    name: "Pastor Daniel",
    bio: "A committed minister leading our outreach and discipleship programs.",
    image: null,
  },
  {
    role: "Assistant Pastor",
    name: "Pastor Esther",
    bio: "Desiring to see every member empowered through prayer and ministry.",
    image: null,
  },
  {
    role: "Assistant Pastor",
    name: "Pastor Samuel",
    bio: "Bringing strong pastoral care, counsel, and leadership to the church family.",
    image: null,
  },
];

export default function LeadershipSection() {
  return (
    <section id="leadership" className="relative py-28 px-4 bg-gradient-section">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-body font-bold text-xs tracking-[0.3em] uppercase text-gold">Our Leaders</span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mt-3">
            DIVINE <span className="text-gradient-gold">LEADERSHIP</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card glass-card-hover p-8 md:p-12 rounded-2xl mb-8 glow-gold group"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-40 h-40 md:w-52 md:h-52 rounded-2xl overflow-hidden border border-gold/20 flex-shrink-0 group-hover:border-gold/40 transition-colors duration-500">
              <img
                src={bishopImg}
                alt="Bishop David O. Oyedepo"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-heading font-bold text-2xl md:text-3xl text-foreground">Bishop David O. Oyedepo</h3>
              <p className="font-body font-bold text-sm tracking-[0.2em] uppercase text-gold mt-2">General Overseer — Living Faith Church Worldwide</p>
              <p className="font-body font-bold text-sm text-muted-foreground mt-4 leading-relaxed max-w-lg">
                A man of uncommon faith, Bishop Oyedepo is the visionary behind Winners Chapel, a global ministry impacting millions across nations. His prophetic mandate has birthed a movement of prosperity, healing, and kingdom advancement.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="glass-card glass-card-hover p-8 md:p-12 rounded-2xl mb-8"
        >
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-full lg:w-1/3 rounded-3xl overflow-hidden border border-border/20">
              <img src={residentPastor.image} alt={residentPastor.name} className="w-full h-full object-cover" />
            </div>
            <div className="text-center lg:text-left">
              <span className="font-body font-bold text-xs tracking-[0.3em] uppercase text-gold">Resident Pastor</span>
              <h3 className="font-heading font-bold text-3xl text-foreground mt-4">{residentPastor.name}</h3>
              <p className="font-body font-bold text-sm text-muted-foreground mt-4 leading-relaxed max-w-xl">
                {residentPastor.bio}
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {assistantPastors.map((leader, i) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card glass-card-hover p-6 rounded-3xl"
            >
              {leader.image ? (
                <div className="overflow-hidden rounded-3xl mb-5 border border-border/20">
                  <img src={leader.image} alt={leader.name} className="w-full h-56 object-cover" />
                </div>
              ) : (
                <div className="w-full h-56 rounded-3xl bg-secondary flex items-center justify-center mb-5">
                  <span className="font-heading text-4xl text-muted-foreground">{leader.name.split(" ").map((s) => s[0]).join("")}</span>
                </div>
              )}
              <h3 className="font-heading text-xl text-foreground text-center">{leader.name}</h3>
              <p className="font-body text-xs tracking-[0.2em] uppercase text-gold mt-2 text-center">{leader.role}</p>
              <p className="font-body text-sm text-muted-foreground mt-4 text-center leading-relaxed">{leader.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
