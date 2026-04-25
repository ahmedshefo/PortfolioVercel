import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { testimonials } from "../constants";

import { SparkBackground } from "./SectionBackgrounds";

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-gray-50 dark:bg-white/[0.02]">
      <SparkBackground />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 bg-accent/10 rounded-full text-accent text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] mb-6"
          >
            Testimonials
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 italic tracking-tighter"
          >
            What people say.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: idx * 0.1,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="group bg-white dark:bg-white/[0.02] p-8 sm:p-10 lg:p-12 rounded-[2.5rem] sm:rounded-[3.5rem] border border-gray-100 dark:border-white/5 relative flex flex-col h-full hover:border-accent/40 transition-all duration-700 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.4)]"
            >
              <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-accent/5 rounded-bl-[6rem] -z-10 transition-all duration-700 group-hover:bg-accent/10 opacity-0 group-hover:opacity-100" />
              <Quote className="absolute top-8 right-8 sm:top-10 sm:right-10 w-10 h-10 sm:w-12 sm:h-12 text-accent/5 group-hover:text-accent/20 transition-all duration-700 transform group-hover:scale-110 group-hover:-rotate-6" />
              
              <div className="flex gap-1 mb-8 sm:mb-10 text-accent">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current drop-shadow-[0_0_10px_rgba(190,242,100,0.5)]" />
                ))}
              </div>

              <div className="flex-grow">
                <p className="text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 font-medium leading-relaxed italic text-base sm:text-lg lg:text-xl tracking-tight relative z-10">
                  {testimonial.content}
                </p>
              </div>

              <div className="pt-8 sm:pt-10 mt-auto border-t border-gray-50 dark:border-white/5 flex items-center gap-4 sm:gap-6">
                <div className="relative shrink-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl sm:rounded-3xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000 border border-gray-100 dark:border-white/10 p-1 bg-white dark:bg-white/5 shadow-sm group-hover:shadow-accent/20">
                    <img 
                      src={testimonial.avatar || `https://ui-avatars.com/api/?name=${testimonial.name}`} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover rounded-xl sm:rounded-2xl transform scale-100 group-hover:scale-110 transition-transform duration-1000"
                    />
                  </div>
                </div>
                <div className="flex flex-col min-w-0">
                  <h4 className="font-black text-gray-900 dark:text-white uppercase tracking-tighter text-base sm:text-lg leading-tight truncate">
                    {testimonial.name}
                  </h4>
                  <div className="flex flex-col mt-1">
                    <span className="text-[10px] sm:text-[11px] font-black text-accent uppercase tracking-[0.2em] flex items-center gap-2 whitespace-nowrap">
                      {testimonial.role}
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest leading-none mt-1 truncate">
                      {testimonial.company}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
