import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, User, Mail, Phone, MessageSquare, CheckCircle, Loader2 } from "lucide-react";

const BookingSection = () => {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", date: "", time: "", concern: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission (nodemailer requires backend — placeholder)
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="booking" className="py-20 md:py-28 bg-warm-gradient">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Schedule a Visit</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-3">
            Book Your <span className="text-gradient-gold">Consultation</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Fill in the form below and we'll confirm your appointment via email.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl mx-auto"
        >
          {submitted ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-16 bg-card rounded-3xl border border-border shadow-warm"
            >
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="font-heading text-2xl font-bold mb-2">Booking Received!</h3>
              <p className="text-muted-foreground">
                We'll confirm your appointment shortly via email/WhatsApp.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-card p-8 md:p-10 rounded-3xl border border-border shadow-warm-lg space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium mb-2">
                    <User className="h-4 w-4 text-primary" /> Full Name
                  </label>
                  <input
                    name="name" required value={form.name} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium mb-2">
                    <Mail className="h-4 w-4 text-primary" /> Email
                  </label>
                  <input
                    name="email" type="email" required value={form.email} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                    placeholder="you@email.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium mb-2">
                    <Phone className="h-4 w-4 text-primary" /> Phone
                  </label>
                  <input
                    name="phone" type="tel" required value={form.phone} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium mb-2">
                    <Calendar className="h-4 w-4 text-primary" /> Preferred Date
                  </label>
                  <input
                    name="date" type="date" required value={form.date} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium mb-2">
                  <Clock className="h-4 w-4 text-primary" /> Preferred Time
                </label>
                <select
                  name="time" required value={form.time} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                >
                  <option value="">Select a time slot</option>
                  <option>9:00 AM - 10:00 AM</option>
                  <option>10:00 AM - 11:00 AM</option>
                  <option>11:00 AM - 12:00 PM</option>
                  <option>2:00 PM - 3:00 PM</option>
                  <option>3:00 PM - 4:00 PM</option>
                  <option>4:00 PM - 5:00 PM</option>
                  <option>6:00 PM - 7:00 PM</option>
                </select>
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium mb-2">
                  <MessageSquare className="h-4 w-4 text-primary" /> Skin/Hair Concern
                </label>
                <textarea
                  name="concern" rows={3} value={form.concern} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all resize-none"
                  placeholder="Briefly describe your concern..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-semibold text-base hover:shadow-warm-lg transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Calendar className="h-5 w-5" />}
                {loading ? "Submitting..." : "Book Consultation"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default BookingSection;
