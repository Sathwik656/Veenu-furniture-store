import { motion } from 'motion/react';
import { MapPin, Navigation } from 'lucide-react';

export default function Location() {
  const mapUrl = "https://www.google.com/maps/place/Veenu+Furniture+%26+Ladder+-+Kulur/@12.9191187,74.8273732,17.25z/data=!4m6!3m5!1s0x3ba35104ea7795fd:0x3851df8070d73fdc!8m2!3d12.9190687!4d74.8320799!16s%2Fg%2F11f61q2kfc";

  return (
    <section id="location" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-brand-500 font-bold tracking-widest uppercase text-[10px] mb-3 flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4" />
              Find Us
            </h4>
            <h2 className="text-4xl font-serif text-brand-900 mb-6">
              Visit Our Store
            </h2>
            <p className="text-brand-800/80 leading-relaxed text-sm max-w-2xl mx-auto">
              Find Veenu Furniture & Ladder – Kulur on Google Maps.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative bg-white rounded-sm shadow-xl shadow-brand-200/20 border border-brand-200 overflow-hidden"
        >
          {/* Map Container */}
          <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
            <iframe
              src="https://maps.google.com/maps?q=Veenu%20Furniture%20%26%20Ladder%20-%20Kulur&t=&z=17&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Veenu Furniture & Ladder Location"
              aria-label="Interactive map showing the location of Veenu Furniture & Ladder in Kulur"
            ></iframe>
          </div>

          {/* Action Bar */}
          <div className="bg-brand-50 p-6 sm:px-10 border-t border-brand-200 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <h3 className="text-brand-900 font-serif text-xl mb-1">Veenu Furniture & Ladder</h3>
              <p className="text-sm text-brand-800/70">Kulur, Mangaluru, Karnataka</p>
            </div>
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-brand-500 text-white text-xs uppercase tracking-widest font-bold hover:bg-brand-600 transition-colors rounded-sm shadow-lg shadow-brand-900/5 whitespace-nowrap"
              aria-label="Get directions to Veenu Furniture & Ladder on Google Maps"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Directions</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
