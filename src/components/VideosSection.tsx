import { motion } from "framer-motion";
import { Play } from "lucide-react";

const videos = [
  { src: "/videos/video1.mp4", title: "Hello from Dr. Abirame", desc: "Meet your dermatologist" },
  { src: "/videos/video2.mp4", title: "Holistic Approach", desc: "Skin & hair care philosophy" },
  { src: "/videos/video3.mp4", title: "Skin Education", desc: "Tips for healthy skin" },
];

const VideosSection = () => (
  <section id="videos" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-sm font-semibold text-primary uppercase tracking-widest">Educational Content</span>
        <h2 className="text-3xl md:text-5xl font-heading font-bold mt-3">
          Learn from <span className="text-gradient-gold">Dr. Abirame</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {videos.map(({ src, title, desc }, i) => (
          <motion.div
            key={src}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            className="rounded-2xl overflow-hidden bg-card border border-border shadow-warm group"
          >
            <div className="relative aspect-[9/16] max-h-[420px] bg-foreground/5">
              <video
                src={src}
                controls
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="font-heading font-semibold text-base mb-1">{title}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default VideosSection;
