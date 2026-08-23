import { motion } from 'motion/react';
import { Navigation } from 'lucide-react';
import { SITE } from '../data';

export default function MapSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className="overflow-hidden border border-brand-200 bg-white"
    >
      <div className="h-[300px] sm:h-[380px] lg:h-[440px] w-full">
        <iframe
          src={SITE.mapsEmbed}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Map showing the location of Veenu Furniture & Ladder in Kulur, Mangaluru"
        />
      </div>
      <div className="flex flex-col items-center justify-between gap-6 border-t border-brand-200 bg-brand-50 p-6 sm:flex-row sm:px-10">
        <div className="text-center sm:text-left">
          <h3 className="font-serif text-xl text-brand-900">Veenu Furniture &amp; Ladder</h3>
          <p className="mt-1 text-sm text-brand-800/70">{SITE.addressLines.slice(1).join(' ')}</p>
        </div>
        <a
          href={SITE.mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Get directions to Veenu Furniture & Ladder on Google Maps"
          className="btn-primary whitespace-nowrap"
        >
          <Navigation className="w-4 h-4" />
          Get Directions
        </a>
      </div>
    </motion.div>
  );
}
