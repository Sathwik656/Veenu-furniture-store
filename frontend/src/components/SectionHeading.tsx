import { motion } from 'motion/react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: 'left' | 'center';
  dark?: boolean;
}

export default function SectionHeading({ eyebrow, title, lead, align = 'left', dark = false }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}
    >
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className={`font-serif text-3xl md:text-4xl lg:text-5xl leading-tight ${dark ? 'text-white' : 'text-brand-900'}`}>
        {title}
      </h2>
      {lead && (
        <p className={`mt-5 text-sm md:text-base leading-relaxed ${dark ? 'text-brand-100/70' : 'text-brand-800/70'}`}>
          {lead}
        </p>
      )}
    </motion.div>
  );
}
