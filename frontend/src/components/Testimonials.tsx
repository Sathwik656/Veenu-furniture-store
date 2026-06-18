import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { testimonials } from '../data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-brand-900 text-brand-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-brand-500 font-bold tracking-widest uppercase text-[10px] mb-3">
            Customer Reviews
          </h4>
          <h2 className="text-4xl font-serif text-white mb-6">
            Loved By Thousands
          </h2>
          <p className="text-brand-100/80 leading-relaxed text-sm">
            Don't just take our word for it. Discover what our community has to say about their Veenu experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-brand-800/50 p-8 border border-white/5 relative hover:bg-brand-800 transition-colors rounded-sm flex flex-col"
            >
              <div className="flex text-brand-500 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < testimonial.rating ? 'fill-current' : 'opacity-30'}`} />
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-8 text-brand-50/70 flex-1">
                &quot;{testimonial.content}&quot;
              </p>
              <div>
                <h4 className="font-semibold text-white text-sm">{testimonial.name}</h4>
                <p className="text-brand-500 text-[10px] uppercase tracking-widest mt-1">{testimonial.product}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
