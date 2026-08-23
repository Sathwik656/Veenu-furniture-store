import { useEffect, useRef } from 'react';
import { animate, motion, useInView, useReducedMotion } from 'motion/react';
import SectionHeading from './SectionHeading';
import { stats } from '../data';

function CountUp({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!inView || !ref.current) return;
    if (reduceMotion || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      ref.current.textContent = String(value);
      return;
    }
    const controls = animate(0, value, {
      duration: 1.6,
      ease: 'easeOut',
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = Math.round(v).toString();
      },
    });
    return () => controls.stop();
  }, [inView, value, reduceMotion]);

  return <span ref={ref}>0</span>;
}

export default function StatsSection() {
  return (
    <section className="bg-brand-900 py-20 md:py-28">
      <div className="container-site">
        <SectionHeading
          eyebrow="The Veenu Difference"
          title="A name Mangalore has trusted for generations."
          align="center"
          dark
        />

        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="font-serif text-5xl md:text-6xl text-white">
                <CountUp value={stat.value} />
                {stat.suffix}
              </p>
              <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-100/60">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
