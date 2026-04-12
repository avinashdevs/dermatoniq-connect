import { motion } from "framer-motion";
import { GraduationCap, Award, Heart, Instagram } from "lucide-react";
import doctorImg from "@/assets/doctor-abirame.jpg";

const highlights = [
  { icon: GraduationCap, label: "MD (Govt. Stanley Medical College)" },
  { icon: Award, label: "Certified Dermatologist" },
  { icon: Heart, label: "Holistic Skin & Hair Care" },
];

const AboutSection = () => (
  <section id="about" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Doctor Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-warm-gold/20 to-primary/10 blur-xl" />
            <img
              src={doctorImg}
              alt="Dr. N.K. Abirame"
              className="relative rounded-3xl w-full max-w-md object-cover shadow-warm-lg"
            />
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-5 py-3 rounded-2xl shadow-warm font-heading text-sm font-semibold">
              41.5K+ Followers ✨
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Meet Your Dermatologist</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-3 mb-6">
            Dr. N.K. <span className="text-gradient-gold">Abirame</span>
          </h2>
          <p className="text-muted-foreground font-subheading text-base md:text-lg leading-relaxed mb-6">
            A passionate dermatologist based in <strong>Karur, Tamil Nadu</strong>, Dr. Abirame
            believes in a holistic approach to skin and hair care. With an MD from the prestigious
            Govt. Stanley Medical College, she combines modern dermatology science with
            personalized care to deliver the best results for her patients.
          </p>

          <div className="flex flex-col gap-3 mb-8">
            {highlights.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">{label}</span>
              </div>
            ))}
          </div>

          <a
            href="https://www.instagram.com/dr.abirame.nk.dermatologist?igsh=MXEydWUwemowN3NkeQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white px-6 py-3 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <Instagram className="h-4 w-4" />
            @dermatoniq
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
