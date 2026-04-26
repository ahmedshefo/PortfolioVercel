import { motion } from "motion/react";
import { Star, Quote, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { testimonials } from "../constants";
import { SparkBackground } from "../components/SectionBackgrounds";

const Testimonials = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 dark:bg-[#050505] relative overflow-hidden">
      <SparkBackground />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-accent text-[10px] font-black uppercase tracking-[0.3em] mb-6"
          >
            Trust <ChevronRight className="w-3 h-3" /> Proof
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black text-gray-900 dark:text-white italic tracking-tighter leading-[0.9]"
          >
            Client <br /> Feedback.
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: idx * 0.1,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="bg-white dark:bg-white/[0.03] p-12 rounded-[4rem] border border-gray-100 dark:border-white/5 relative group hover:border-accent/40 transition-all duration-700 flex flex-col justify-between hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.4)]"
            >
              <div>
                <Quote className="absolute top-12 right-12 w-24 h-24 text-accent/5 group-hover:text-accent/15 transition-all duration-700 transform group-hover:scale-110 group-hover:-rotate-6" />
                
                <div className="flex gap-1.5 mb-10 text-accent">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current drop-shadow-[0_0_10px_rgba(190,242,100,0.4)]" />
                  ))}
                </div>

                <p className="text-2xl md:text-3xl font-medium text-gray-800 dark:text-gray-200 mb-16 italic leading-relaxed tracking-tight relative z-10">
                  <span className="text-7xl text-accent/10 absolute -top-12 -left-10 font-serif select-none pointer-events-none">"</span>
                  {testimonial.content}
                </p>
              </div>

              <div className="flex items-center gap-6 pt-10 border-t border-gray-50 dark:border-white/5">
                <div className="relative shrink-0">
                  <div className="w-20 h-20 rounded-3xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000 border border-gray-100 dark:border-white/10 p-1.5 bg-white dark:bg-white/5 shadow-sm">
                    <img 
                      src={testimonial.avatar || `https://ui-avatars.com/api/?name=${testimonial.name}`} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover rounded-2xl transform scale-100 group-hover:scale-110 transition-transform duration-1000"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-accent rounded-2xl flex items-center justify-center border-4 border-white dark:border-black shadow-xl scale-0 group-hover:scale-100 transition-transform duration-500 delay-200">
                    <Quote className="w-3.5 h-3.5 text-white dark:text-black fill-current" />
                  </div>
                </div>
                <div className="flex flex-col min-w-0">
                  <h4 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tighter leading-none mb-2">
                    {testimonial.name}
                  </h4>
                  <div className="flex flex-col gap-1.5">
                    <span className="text-xs font-black text-accent uppercase tracking-[0.2em] flex items-center gap-2">
                      {testimonial.role}
                      <span className="w-1.5 h-1.5 bg-accent/40 rounded-full" />
                    </span>
                    <span className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest leading-none truncate">
                      {testimonial.company}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-24 text-center"
        >
          <div className="p-16 bg-accent rounded-[4rem] flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-black text-white dark:text-black mb-8 italic tracking-tighter">
              Ready to be the next success story?
            </h2>
            <Link 
              to="/contact"
              className="px-12 py-5 bg-black text-white rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-transform"
            >
              Get in touch
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
