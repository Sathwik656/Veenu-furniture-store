import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { testimonials } from '../data';
import SectionHeading from './SectionHeading';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-site">
        <SectionHeading
          eyebrow="Customer Reviews"
          title="Loved by families across Mangalore"
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, idx) => (
            <motion.figure
              key={testimonial.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="flex flex-col border border-brand-200 bg-brand-50 p-8 lg:p-10"
            >
              <div className="flex gap-1 text-brand-500" aria-label={`${testimonial.rating} out of 5 stars`}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < testimonial.rating ? 'fill-current' : 'opacity-30'}`} />
                ))}
              </div>
              <blockquote className="mt-6 flex-1 text-sm leading-relaxed text-brand-800/80">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>
              <figcaption className="mt-8 border-t border-brand-200 pt-5">
                <p className="text-sm font-semibold text-brand-900">{testimonial.name}</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-brand-800/50">
                  Purchased: {testimonial.product}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-brand-800/60">
          Rated by our customers on{' '}
          <a
            href="https://share.google/yZRbNXZcNiZ0lE47k"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline hover:text-brand-600 transition-colors"
          >
            Google Reviews
          </a>
        </p>
      </div>
    </section>
  );
}
