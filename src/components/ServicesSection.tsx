import { motion } from "framer-motion";
import { Droplets, Sun, Scissors, Sparkles, ShieldCheck, Stethoscope } from "lucide-react";

const services = [
  { icon: Droplets, title: "Acne Treatment", desc: "Advanced acne solutions including medical facials, chemical peels, and laser therapies." },
  { icon: Sun, title: "Skin Brightening", desc: "Customized treatments for pigmentation, dark spots, and uneven skin tone." },
  { icon: Scissors, title: "Hair Care", desc: "Comprehensive hair loss solutions including PRP therapy and minoxidil guidance." },
  { icon: Sparkles, title: "Anti-Aging", desc: "Rejuvenation treatments including botox, fillers, and collagen-boosting therapies." },
  { icon: ShieldCheck, title: "Skin Allergy", desc: "Diagnosis and treatment of eczema, dermatitis, psoriasis, and other conditions." },
  { icon: Stethoscope, title: "Online Consultation", desc: "Get expert dermatology advice from the comfort of your home via video consultation." },
];

const ServicesSection = () => (
  <section id="services" className="py-20 md:py-28 bg-warm-gradient">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-sm font-semibold text-primary uppercase tracking-widest">What We Offer</span>
        <h2 className="text-3xl md:text-5xl font-heading font-bold mt-3">
          Our <span className="text-gradient-gold">Services</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="bg-card p-8 rounded-2xl border border-border hover:shadow-warm-lg transition-shadow duration-300 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
              <Icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
            </div>
            <h3 className="text-lg font-heading font-semibold mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
