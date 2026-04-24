import { motion } from "framer-motion";

const sermons = [
  {
    title: "The Power of Faith",
    speaker: "Bishop David Oyedepo",
    category: "Faith",
    href: "https://youtu.be/02BpQ-bB30s?si=wCm5DguQNSmW-jc8",
    image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=600&q=80",
  },
  {
    title: "Walking in Prosperity",
    speaker: "Bishop David Oyedepo",
    category: "Prosperity",
    href: "https://youtu.be/yj02x6LxUBQ?si=113r4Oin1ZlCd6h8",
    image: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=600&q=80",
  },
  {
    title: "Divine Health is Your Right",
    speaker: "Bishop David Oyedepo",
    category: "Healing",
    href: "https://youtu.be/UE4mEm8DcBY?si=CiO5xolrwDxBcjDz",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
  },
  {
    title: "Dominion Through the Word",
    speaker: "Bishop David Oyedepo",
    category: "Faith",
    href: "https://youtu.be/3AK5CZ8kJGo?si=lqqk27QjZ-c4SYjo",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80",
  },
];

const categories = ["All", "Faith", "Prosperity", "Healing"];

export default function SermonsSection() {
  return (
    <section id="sermons" className="relative py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="font-body font-bold text-xs tracking-[0.3em] uppercase text-gold">The Word</span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mt-3">
            SERMONS & <span className="text-gradient-gold">MESSAGES</span>
          </h2>
        </motion.div>

        {/* Category filter */}
        <div className="flex justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`font-body font-bold text-xs tracking-wider uppercase px-4 py-2 rounded-lg transition-all duration-300 ${
                cat === "All"
                  ? "bg-red-600/20 text-foreground border border-red-600/30"
                  : "text-muted-foreground hover:text-foreground hover:bg-glass/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {sermons.map((sermon, i) => (
            <a
              key={sermon.title}
              href={sermon.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card glass-card-hover rounded-xl overflow-hidden cursor-pointer"
              >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={sermon.image}
                  alt={sermon.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors duration-300" />
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-gold/30 border border-gold/50 flex items-center justify-center">
                    <svg className="w-5 h-5 text-foreground ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="font-body text-[10px] tracking-wider uppercase bg-gold/20 text-foreground px-2 py-1 rounded-md border border-gold/20">
                    {sermon.category}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-heading text-sm text-foreground leading-tight">{sermon.title}</h3>
                <p className="font-body text-xs text-muted-foreground mt-1">{sermon.speaker}</p>
              </div>
            </motion.div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
