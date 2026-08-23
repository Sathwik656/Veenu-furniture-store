import { motion } from 'motion/react';

interface PageHeroProps {
  title: string;
  sub?: string;
  image?: string;
  imageAlt?: string;
}

export default function PageHero({ title, sub, image, imageAlt = '' }: PageHeroProps) {
  return (
    <section className="relative flex h-[42vh] min-h-[320px] items-end overflow-hidden bg-brand-900">
      {image && (
        <>
          <img src={image} alt={imageAlt} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-900/85 via-brand-900/40 to-brand-900/30" />
        </>
      )}
      <div className="container-site relative pb-14 md:pb-20 pt-28">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="eyebrow mb-3 text-white/70"
        >
          Veenu Furnitures
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-4xl md:text-6xl text-white"
        >
          {title}
        </motion.h1>
        {sub && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 max-w-2xl text-sm md:text-base leading-relaxed text-white/80"
          >
            {sub}
          </motion.p>
        )}
      </div>
    </section>
  );
}
