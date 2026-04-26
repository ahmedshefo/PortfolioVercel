"use client";

import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, MessageSquare, Github, Instagram } from "lucide-react";
import { useState, FormEvent } from "react";

import { OrbBackground } from "./SectionBackgrounds";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    
    // Replace this URL with your actual Formspree endpoint URL
    // e.g., "https://formspree.io/f/xabcdefg"
    const FORMSPREE_ENDPOINT = "https://formspree.io/f/xyklawjv"; 

    if (!FORMSPREE_ENDPOINT) {
      alert("Please configure the Formspree endpoint in the code to receive emails.");
      setStatus("idle");
      return;
    }

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        alert("Failed to send message.");
        setStatus("idle");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while sending the message.");
      setStatus("idle");
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-white dark:bg-transparent">
      <OrbBackground />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Column: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-bold tracking-[0.4em] text-[10px] sm:text-xs uppercase mb-4 block text-center lg:text-left">Get in Touch</span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-gray-950 dark:text-white mb-8 leading-[0.9] text-center lg:text-left">
              Let's Talk <br />
              <span className="text-accent underline decoration-accent/30 underline-offset-8 italic">Data.</span>
            </h2>
            <p className="text-base sm:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-md mx-auto lg:mx-0 leading-relaxed text-center lg:text-left">
              Have a project in mind or just want to chat about business intelligence? Feel free to reach out.
            </p>

            <div className="space-y-6 sm:space-y-8 mb-16 lg:mb-0">
              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 sm:gap-6 group text-center sm:text-left">
                <div className="w-12 sm:w-14 h-12 sm:h-14 bg-gray-100 dark:bg-white/5 rounded-2xl flex items-center justify-center text-gray-400 group-hover:text-accent group-hover:bg-accent/10 transition-all duration-300">
                  <Mail className="w-5 sm:w-6 h-5 sm:h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Email Me</p>
                  <p className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">a.shefoo3333@gmail.com</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 sm:gap-6 group text-center sm:text-left">
                <div className="w-12 sm:w-14 h-12 sm:h-14 bg-gray-100 dark:bg-white/5 rounded-2xl flex items-center justify-center text-gray-400 group-hover:text-accent group-hover:bg-accent/10 transition-all duration-300">
                  <MessageSquare className="w-5 sm:w-6 h-5 sm:h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/ahmed-shefoo" target="_blank" rel="noopener noreferrer" className="text-base sm:text-lg font-bold text-gray-900 dark:text-white hover:text-accent transition-colors">
                    in/ahmed-shefoo
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 sm:gap-6 group text-center sm:text-left">
                <div className="w-12 sm:w-14 h-12 sm:h-14 bg-gray-100 dark:bg-white/5 rounded-2xl flex items-center justify-center text-gray-400 group-hover:text-accent group-hover:bg-accent/10 transition-all duration-300">
                  <Github className="w-5 sm:w-6 h-5 sm:h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">GitHub</p>
                  <a href="https://github.com/ahmedshefo" target="_blank" rel="noopener noreferrer" className="text-base sm:text-lg font-bold text-gray-900 dark:text-white hover:text-accent transition-colors">
                    github.com/ahmedshefo
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 sm:gap-6 group text-center sm:text-left">
                <div className="w-12 sm:w-14 h-12 sm:h-14 bg-gray-100 dark:bg-white/5 rounded-2xl flex items-center justify-center text-gray-400 group-hover:text-accent group-hover:bg-accent/10 transition-all duration-300">
                  <Instagram className="w-5 sm:w-6 h-5 sm:h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Instagram</p>
                  <a href="https://instagram.com/elfeel_analyst" target="_blank" rel="noopener noreferrer" className="text-base sm:text-lg font-bold text-gray-900 dark:text-white hover:text-accent transition-colors">
                    @elfeel_analyst
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 sm:gap-6 group text-center sm:text-left">
                <div className="w-12 sm:w-14 h-12 sm:h-14 bg-gray-100 dark:bg-white/5 rounded-2xl flex items-center justify-center text-gray-400 group-hover:text-accent group-hover:bg-accent/10 transition-all duration-300">
                  <MapPin className="w-5 sm:w-6 h-5 sm:h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Location</p>
                  <p className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">Cairo, Egypt (Remote Ready)</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-accent/20 blur-[100px] opacity-20 pointer-events-none" />
            <form 
              onSubmit={handleSubmit}
              className="relative bg-white dark:bg-white/5 p-6 sm:p-8 md:p-12 rounded-[2rem] sm:rounded-[2.5rem] border border-gray-100 dark:border-white/10 shadow-2xl backdrop-blur-3xl"
            >
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-2">Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="John Doe"
                    className="w-full bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 outline-none focus:border-accent transition-colors text-sm sm:text-base text-gray-900 dark:text-white"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-2">Email</label>
                  <input 
                    type="email" 
                    required
                    placeholder="john@example.com"
                    className="w-full bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 outline-none focus:border-accent transition-colors text-sm sm:text-base text-gray-900 dark:text-white"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="space-y-2 mb-4 sm:mb-6">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-2">Subject</label>
                <input 
                  type="text" 
                  required
                  placeholder="Business Inquiry"
                  className="w-full bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 outline-none focus:border-accent transition-colors text-sm sm:text-base text-gray-900 dark:text-white"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                />
              </div>

              <div className="space-y-2 mb-6 sm:mb-8">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-2">Message</label>
                <textarea 
                  required
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 outline-none focus:border-accent resize-none transition-colors text-sm sm:text-base text-gray-900 dark:text-white"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <button 
                type="submit"
                disabled={status === "sending" || status === "success"}
                className="w-full py-5 bg-accent text-white dark:text-black rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:bg-accent/90 hover:shadow-xl hover:shadow-accent/20 transition-all flex items-center justify-center gap-3 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "idle" && <><span className="relative z-10">Send Message</span> <Send className="w-4 h-4" /></>}
                {status === "sending" && <span>Sending...</span>}
                {status === "success" && <span>Message Sent!</span>}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
