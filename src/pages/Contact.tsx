import { motion } from "motion/react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Phone, MapPin, Mail, Clock, Send, CheckCircle, ArrowRight } from "lucide-react";
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
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'YOUR_ACCESS_KEY_HERE',
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

  const contactCards = [
    {
      icon: Phone,
      title: "Phone",
      content: "+971 4 297 1774",
      link: "tel:+97142971774",
      color: "from-blue-500 to-blue-600",
      delay: 0.1
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@arnngroup.com",
      link: "mailto:info@arnngroup.com",
      color: "from-indigo-500 to-indigo-600",
      delay: 0.2
    },
    {
      icon: MapPin,
      title: "Office Location",
      content: "Office No. 215, Al Makhawi Building, Oud Metha, Dubai",
      link: null,
      color: "from-purple-500 to-purple-600",
      delay: 0.3
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Sunday - Thursday, 9:00 AM - 6:00 PM GST",
      link: null,
      color: "from-violet-500 to-violet-600",
      delay: 0.4
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/40 flex flex-col relative overflow-hidden">
      {/* Solar System Background Animation */}
      <div className="fixed inset-0 pointer-events-none opacity-30">
        {/* Central Sun */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-yellow-300 to-orange-400 blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Orbital Rings */}
        {[200, 350, 500, 650].map((size, index) => (
          <div
            key={`ring-${index}`}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-blue-300/20 rounded-full"
            style={{
              width: `${size}px`,
              height: `${size}px`,
            }}
          />
        ))}

        {/* Planet 1 - Small Blue */}
        <motion.div
          className="absolute top-1/2 left-1/2"
          style={{ marginLeft: '-6px', marginTop: '-6px' }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div
            className="w-3 h-3 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg"
            style={{
              transform: 'translateX(100px)',
            }}
          />
        </motion.div>

        {/* Planet 2 - Medium Purple */}
        <motion.div
          className="absolute top-1/2 left-1/2"
          style={{ marginLeft: '-8px', marginTop: '-8px' }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div
            className="w-4 h-4 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 shadow-lg"
            style={{
              transform: 'translateX(175px) rotate(45deg)',
            }}
          />
        </motion.div>

        {/* Planet 3 - Large Indigo */}
        <motion.div
          className="absolute top-1/2 left-1/2"
          style={{ marginLeft: '-10px', marginTop: '-10px' }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div
            className="w-5 h-5 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 shadow-lg"
            style={{
              transform: 'translateX(250px) rotate(120deg)',
            }}
          />
        </motion.div>

        {/* Planet 4 - Small Cyan */}
        <motion.div
          className="absolute top-1/2 left-1/2"
          style={{ marginLeft: '-5px', marginTop: '-5px' }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 65,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div
            className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 shadow-lg"
            style={{
              transform: 'translateX(325px) rotate(200deg)',
            }}
          />
        </motion.div>

        {/* Scattered Stars */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className={`absolute w-1 h-1 rounded-full bg-blue-400 ${i >= 10 ? 'hidden md:block' : ''}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Floating Asteroids */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`asteroid-${i}`}
            className={`absolute w-2 h-2 rounded-full bg-gradient-to-br from-slate-300 to-slate-400 ${i >= 3 ? 'hidden md:block' : ''}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-8 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/40 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200/40 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="relative max-w-[1200px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-blue-200/50 shadow-lg shadow-blue-100/50 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-blue-600 uppercase tracking-wider" style={{ fontSize: '0.8125rem', fontWeight: '600' }}>
              We'd Love to Hear From You
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-900 mb-6"
            style={{ 
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', 
              fontWeight: '800',
              letterSpacing: '-0.03em',
              lineHeight: '1.1'
            }}
          >
            Get In Touch
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 max-w-[700px] mx-auto leading-relaxed"
            style={{ fontSize: 'clamp(1.0625rem, 1.5vw, 1.25rem)' }}
          >
            We're here to help and answer any questions you might have. We look forward to hearing from you.
          </motion.p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: card.delay }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="relative h-full bg-white/70 backdrop-blur-xl p-6 rounded-2xl border border-gray-200/50 shadow-lg shadow-gray-200/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-blue-200/30 hover:border-blue-300/50">
                  {/* Gradient Hover Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-4 shadow-lg`}
                  >
                    <card.icon className="w-7 h-7 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-gray-900 mb-3" style={{ fontSize: '1.125rem', fontWeight: '700' }}>
                    {card.title}
                  </h3>

                  {/* Content */}
                  {card.link ? (
                    <a 
                      href={card.link}
                      className="text-gray-600 hover:text-blue-600 transition-colors break-words"
                      style={{ fontSize: '0.9375rem', lineHeight: '1.6' }}
                    >
                      {card.content}
                    </a>
                  ) : (
                    <p className="text-gray-600" style={{ fontSize: '0.9375rem', lineHeight: '1.6' }}>
                      {card.content}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            
            {/* Left Side - Info (2 columns) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 mb-6"
                >
                  <Send className="w-4 h-4" />
                  <span className="uppercase tracking-wider" style={{ fontSize: '0.75rem', fontWeight: '600' }}>
                    Send Message
                  </span>
                </motion.div>

                <h2 
                  className="text-gray-900 mb-4"
                  style={{ 
                    fontSize: 'clamp(2rem, 3.5vw, 3rem)', 
                    fontWeight: '800',
                    letterSpacing: '-0.02em',
                    lineHeight: '1.1'
                  }}
                >
                  Let's Start a Conversation
                </h2>
                
                <p className="text-gray-600 leading-relaxed" style={{ fontSize: '1.0625rem' }}>
                  Whether you're interested in our services, seeking partnership opportunities, or have questions about our business divisions, we're here to help.
                </p>
              </div>

              {/* Feature List */}
              <div className="space-y-4">
                {[
                  { title: "Quick Response", desc: "We respond within 24 business hours" },
                  { title: "Expert Support", desc: "Connect with industry professionals" },
                  { title: "Tailored Solutions", desc: "Customized to your business needs" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-200/50">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-gray-900 mb-1" style={{ fontSize: '1rem', fontWeight: '700' }}>
                        {item.title}
                      </h4>
                      <p className="text-gray-600" style={{ fontSize: '0.9375rem' }}>
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Side - Form (3 columns) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="relative bg-white/70 backdrop-blur-xl p-8 lg:p-10 rounded-3xl border border-gray-200/50 shadow-2xl shadow-blue-200/20">
                {/* Decorative corner gradient */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-bl-full blur-2xl" />
                
                <form onSubmit={handleSubmit} className="relative space-y-6">
                  {/* Name & Email Row */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    >
                      <label 
                        htmlFor="name" 
                        className="block mb-2.5 text-gray-700"
                        style={{ fontSize: '0.9375rem', fontWeight: '600' }}
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all"
                        placeholder="John Doe"
                        style={{ fontSize: '0.9375rem' }}
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.15 }}
                    >
                      <label 
                        htmlFor="email" 
                        className="block mb-2.5 text-gray-700"
                        style={{ fontSize: '0.9375rem', fontWeight: '600' }}
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all"
                        placeholder="john@example.com"
                        style={{ fontSize: '0.9375rem' }}
                      />
                    </motion.div>
                  </div>

                  {/* Subject */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <label 
                      htmlFor="subject" 
                      className="block mb-2.5 text-gray-700"
                      style={{ fontSize: '0.9375rem', fontWeight: '600' }}
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all"
                      placeholder="How can we help you?"
                      style={{ fontSize: '0.9375rem' }}
                    />
                  </motion.div>

                  {/* Message */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.25 }}
                  >
                    <label 
                      htmlFor="message" 
                      className="block mb-2.5 text-gray-700"
                      style={{ fontSize: '0.9375rem', fontWeight: '600' }}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all resize-none"
                      placeholder="Tell us more about your inquiry..."
                      style={{ fontSize: '0.9375rem' }}
                    />
                  </motion.div>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-4 rounded-xl bg-green-50 border border-green-200 text-green-700 text-center flex items-center justify-center gap-2"
                    >
                      <CheckCircle className="w-5 h-5" />
                      <span>Message sent successfully! We'll get back to you soon.</span>
                    </motion.div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-center"
                    >
                      Failed to send message. Please try again.
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white overflow-hidden shadow-lg shadow-blue-300/50 hover:shadow-xl hover:shadow-blue-400/60 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {/* Button shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    
                    <span className="relative flex items-center justify-center gap-2" style={{ fontSize: '1rem', fontWeight: '700' }}>
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </span>
                  </motion.button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-8 bg-gradient-to-b from-transparent to-blue-50/30">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-blue-200/50 shadow-lg shadow-blue-100/50 mb-6">
              <MapPin className="w-4 h-4 text-blue-600" />
              <span className="text-blue-600 uppercase tracking-wider" style={{ fontSize: '0.8125rem', fontWeight: '600' }}>
                Find Us
              </span>
            </div>

            <h2 
              className="text-gray-900 mb-4"
              style={{ 
                fontSize: 'clamp(2rem, 3.5vw, 3rem)', 
                fontWeight: '800',
                letterSpacing: '-0.02em'
              }}
            >
              Visit Our Office
            </h2>
            <p className="text-gray-600 max-w-[600px] mx-auto" style={{ fontSize: '1.0625rem' }}>
              Located in the heart of Dubai's business district
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden border border-gray-200 shadow-2xl shadow-gray-300/50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.8097582377677!2d55.30838267559611!3d25.243331829830122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f42d46590d341%3A0x59ca699bcff41b8c!2sAl%20Makhawi%20Building!5e0!3m2!1sen!2sae!4v1763455651992!5m2!1sen!2sae"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}