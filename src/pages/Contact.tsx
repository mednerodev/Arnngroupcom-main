import { motion } from "motion/react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Phone, MapPin, Send, Sparkles, ArrowRight } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col">
      <Header />
      
      {/* Main Contact Section - 100vh on desktop */}
      <section className="relative flex-1 px-8 overflow-hidden bg-gradient-to-b from-[#0a0a0a] via-[#1a1a2e] to-[#0a0a0a]">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #2d3e5f 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 30% 50%, rgba(45, 62, 95, 0.2), transparent 70%), radial-gradient(circle at 70% 50%, rgba(147, 51, 234, 0.15), transparent 70%)'
            }}
          ></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-blue-400/50"
              style={{ 
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -40, 0],
                opacity: [0, 0.8, 0],
                scale: [0, 1.2, 0]
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        <div className="relative h-full flex flex-col justify-center py-12 lg:py-16">
          <div className="max-w-[1600px] mx-auto w-full">
            {/* Get In Touch Badge - Top */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8 lg:mb-12"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-white/90 uppercase tracking-[0.3em]" style={{ fontSize: '0.75rem', fontWeight: '500' }}>
                  Get In Touch
                </span>
              </div>
            </motion.div>

            {/* Two Column Layout - Connect With Us & Form */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              
              {/* LEFT SIDE - Connect With Us */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col"
              >
                <div className="mb-6 lg:mb-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full border backdrop-blur-xl mb-6"
                    style={{ 
                      backgroundColor: 'rgba(59,130,246,0.1)',
                      borderColor: 'rgba(59,130,246,0.3)'
                    }}
                  >
                    <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                    <span 
                      className="text-blue-400 uppercase tracking-[0.2em]"
                      style={{ fontSize: '0.75rem', fontWeight: '600' }}
                    >
                      Available 24/7
                    </span>
                  </motion.div>

                  <h2 
                    className="text-white mb-4"
                    style={{ 
                      fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', 
                      fontWeight: '800',
                      letterSpacing: '-0.02em',
                      lineHeight: '1.1'
                    }}
                  >
                    Connect With Us
                  </h2>

                  <p className="text-gray-400 leading-relaxed" style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1.125rem)' }}>
                    Whether you're interested in our services, seeking partnership opportunities, or have questions about our business divisions, we're here to help.
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="space-y-4 flex-1">
                  {/* Phone Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="group relative p-6 rounded-2xl backdrop-blur-xl border border-white/10 overflow-hidden"
                    style={{ background: 'linear-gradient(135deg, rgba(45,62,95,0.2), rgba(26,35,50,0.3))' }}
                  >
                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative flex items-start gap-5">
                      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white mb-2" style={{ fontSize: '1.125rem', fontWeight: '600' }}>
                          Phone Number
                        </h3>
                        <a 
                          href="tel:+97142971774" 
                          className="text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          +971 4 297 1774
                        </a>
                      </div>
                    </div>
                  </motion.div>

                  {/* Address Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="group relative p-6 rounded-2xl backdrop-blur-xl border border-white/10 overflow-hidden"
                    style={{ background: 'linear-gradient(135deg, rgba(45,62,95,0.2), rgba(26,35,50,0.3))' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative flex items-start gap-5">
                      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white mb-2" style={{ fontSize: '1.125rem', fontWeight: '600' }}>
                          Corporate Office
                        </h3>
                        <p className="text-gray-400 leading-relaxed" style={{ fontSize: '0.9375rem' }}>
                          Office No. 215,<br />
                          Al Makhawi Building, 2nd Floor,<br />
                          Oud Metha, Dubai<br />
                          United Arab Emirates
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* RIGHT SIDE - Let's Start a Conversation (Form) */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col"
              >
                <div className="mb-6 lg:mb-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-500/10 border border-blue-500/30 backdrop-blur-xl mb-6"
                  >
                    <Send className="w-4 h-4 text-blue-400" />
                    <span className="text-blue-400 uppercase tracking-[0.2em]" style={{ fontSize: '0.75rem', fontWeight: '600' }}>
                      Send a Message
                    </span>
                  </motion.div>

                  <h2 
                    className="text-white mb-4"
                    style={{ 
                      fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', 
                      fontWeight: '800',
                      letterSpacing: '-0.02em',
                      lineHeight: '1.1'
                    }}
                  >
                    Let's Start a Conversation
                  </h2>

                  <p className="text-gray-400 leading-relaxed" style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1.125rem)' }}>
                    Fill out the form below and we'll get back to you within 24 hours
                  </p>
                </div>

                {/* Form */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="relative flex-1"
                >
                  <div className="relative p-6 lg:p-8 rounded-3xl bg-gradient-to-br from-[#1a1a2e]/90 to-[#0a0a0a]/70 backdrop-blur-2xl border border-white/10 h-full">
                    {/* Glow Effect */}
                    <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-blue-500/20 opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Name & Email Row */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block mb-2 text-gray-300 tracking-wide" style={{ fontSize: '0.8125rem', fontWeight: '500' }}>
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all backdrop-blur-xl text-sm"
                            placeholder="John Doe"
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="block mb-2 text-gray-300 tracking-wide" style={{ fontSize: '0.8125rem', fontWeight: '500' }}>
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all backdrop-blur-xl text-sm"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      {/* Subject */}
                      <div>
                        <label htmlFor="subject" className="block mb-2 text-gray-300 tracking-wide" style={{ fontSize: '0.8125rem', fontWeight: '500' }}>
                          Subject *
                        </label>
                        <input
                          type="text"
                          id="subject"
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all backdrop-blur-xl text-sm"
                          placeholder="How can we help you?"
                        />
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="block mb-2 text-gray-300 tracking-wide" style={{ fontSize: '0.8125rem', fontWeight: '500' }}>
                          Message *
                        </label>
                        <textarea
                          id="message"
                          required
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all resize-none backdrop-blur-xl text-sm"
                          placeholder="Tell us more about your inquiry..."
                        />
                      </div>

                      {/* Status Messages */}
                      {submitStatus === 'success' && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-center"
                        >
                          ✓ Message sent successfully! We'll get back to you soon.
                        </motion.div>
                      )}
                      
                      {submitStatus === 'error' && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-center"
                        >
                          ✗ Failed to send message. Please try again.
                        </motion.div>
                      )}

                      {/* Submit Button */}
                      <motion.button
                        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                        type="submit"
                        disabled={isSubmitting}
                        className="group relative w-full px-6 py-3 rounded-full overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {/* Shine Effect */}
                        {!isSubmitting && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
                            animate={{ x: ['-100%', '200%'] }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                          />
                        )}
                        
                        <div className="relative flex items-center justify-center gap-2">
                          {isSubmitting ? (
                            <>
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                              />
                              <span className="text-white tracking-wide" style={{ fontSize: '0.9375rem', fontWeight: '700' }}>
                                Sending...
                              </span>
                            </>
                          ) : (
                            <>
                              <span className="text-white tracking-wide" style={{ fontSize: '0.9375rem', fontWeight: '700' }}>
                                Send Message
                              </span>
                              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-2 transition-transform duration-300" />
                            </>
                          )}
                        </div>
                      </motion.button>
                    </form>
                  </div>
                </motion.div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative py-16 lg:py-24 px-8 overflow-hidden bg-gradient-to-b from-[#0a0a0a] via-[#1a1a2e] to-[#0a0a0a]">
        <div className="relative max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-500/10 border border-blue-500/30 backdrop-blur-xl mb-8">
              <MapPin className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 uppercase tracking-[0.2em]" style={{ fontSize: '0.75rem', fontWeight: '600' }}>
                Find Us
              </span>
            </div>

            <h2 className="text-white mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: '800', letterSpacing: '-0.02em' }}>
              Visit Our Office
            </h2>
            <p className="text-gray-400 max-w-[600px] mx-auto" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)', fontWeight: '300' }}>
              Located in the heart of Dubai's business district
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
            
            <div className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden border border-white/10">
              {/* Google Maps Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.8097582377677!2d55.30838267559611!3d25.243331829830122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f42d46590d341%3A0x59ca699bcff41b8c!2sAl%20Makhawi%20Building!5e0!3m2!1sen!2sae!4v1763455651992!5m2!1sen!2sae"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[50%] opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
