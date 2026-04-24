import { motion } from "framer-motion";

const galleryImages = Array.from({ length: 20 }, (_, index) => ({
  src: new URL(`../assets/gallery/gallery-${index + 1}.png`, import.meta.url).href,
  alt: `Gallery image ${index + 1}`,
}));

export default function GallerySection() {
  return (
    <section id="gallery" className="relative py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-body font-bold text-xs tracking-[0.3em] uppercase text-gold">Moments</span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mt-3">
            OUR <span className="text-gradient-gold">GALLERY</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative overflow-hidden rounded-xl group cursor-pointer ${
                i === 0 ? "row-span-2 aspect-[3/4]" : "aspect-square"
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-background/30 group-hover:bg-background/10 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-10 rounded-full bg-glass/10 backdrop-blur-sm border border-glass/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://whatsapp.com/channel/0029Vb8EeZdAu3aTqHxMdA1L"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-red-600 text-white font-body font-bold text-sm tracking-widest uppercase rounded-full hover:bg-red-700 transition-all duration-300"
          >
            View From Channel
          </a>
        </div>
      </div>
    </section>
  );
}
