import { motion } from 'motion/react';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import SectionHeading from './SectionHeading';
import { SITE } from '../data';

const galleryImages = [
  { src: '/images/easy_0.webp', alt: 'Easy chair with wooden handle' },
  { src: '/images/easy_3.webp', alt: 'Set of two easy chairs' },
  { src: '/images/7step.webp', alt: '7 step steel ladder' },
  { src: '/images/easy_4.webp', alt: "Couples two-seat easy chair" },
  { src: '/images/easy_2.webp', alt: 'Easy chair in pink fabric' },
  { src: '/images/easy_5.webp', alt: 'Kids easy chair' },
  { src: '/images/5step.webp', alt: '5 step aluminium ladder' },
  { src: '/images/easy_1.webp', alt: 'Classic Veenu easy chair' },
];

export default function SocialGallery() {
  return (
    <section className="bg-brand-100 py-20 md:py-28">
      <div className="container-site">
        <div className="flex flex-col gap-4 text-center items-center justify-center mb-12">
          <SectionHeading eyebrow="Social" title="Follow us on Instagram & Facebook" />
          <p className="max-w-2xl text-brand-800/80 text-sm md:text-base">
            Stay updated with our latest furniture collections, behind-the-scenes moments, and exclusive offers by following our social channels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Instagram Mockup Feed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full flex justify-center"
          >
            <div className="w-full max-w-md bg-white border border-brand-200 shadow-xl overflow-hidden flex flex-col h-[600px] rounded-3xl">
              {/* Top Bar */}
              <div className="p-4 border-b border-brand-100 flex items-center justify-between bg-white shrink-0">
                <div className="font-bold text-brand-900 tracking-tight text-lg">{SITE.instagram.handle.replace('@', '')}</div>
                <FaInstagram className="text-2xl text-brand-900" />
              </div>

              {/* Profile Stats */}
              <div className="p-5 flex gap-6 items-center shrink-0">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full border-2 border-brand-500 scale-105"></div>
                  <img src="/images/icon.png" alt="Veenu Furnitures" className="w-20 h-20 rounded-full object-cover p-1" />
                </div>
                <div className="flex-1 flex items-center justify-between text-center pr-2">
                  <div className="flex flex-col"><span className="font-bold text-lg leading-tight">7</span><span className="text-[13px] text-brand-800">posts</span></div>
                  <div className="flex flex-col"><span className="font-bold text-lg leading-tight">4</span><span className="text-[13px] text-brand-800">followers</span></div>
                  <div className="flex flex-col"><span className="font-bold text-lg leading-tight">29</span><span className="text-[13px] text-brand-800">following</span></div>
                </div>
              </div>

              {/* Bio & Actions */}
              <div className="px-5 pb-5 shrink-0">
                <div className="font-semibold text-sm mb-1">Veenu Furnitures</div>
                <div className="text-sm text-brand-800 whitespace-pre-line leading-relaxed mb-4">{SITE.instagram.bio}</div>
                <div className="flex gap-2">
                  <a href={SITE.instagram.url} target="_blank" rel="noopener noreferrer" className="flex-1 bg-brand-900 text-white rounded-lg py-2 text-sm font-semibold text-center hover:bg-brand-800 transition-colors">Follow</a>
                  <a href={SITE.instagram.url} target="_blank" rel="noopener noreferrer" className="flex-1 bg-brand-100 text-brand-900 rounded-lg py-2 text-sm font-semibold text-center hover:bg-brand-200 transition-colors">Message</a>
                </div>
              </div>

              {/* Photo Grid */}
              <div className="grid grid-cols-3 gap-0.5 overflow-y-auto flex-1 bg-white">
                {galleryImages.map((img, i) => (
                  <a
                    key={img.src}
                    href={SITE.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="aspect-square relative group block bg-brand-100"
                  >
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-brand-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <FaInstagram className="text-white text-xl" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Facebook Embed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full flex justify-center"
          >
            <div className="w-full max-w-md bg-white border border-brand-200 shadow-xl overflow-hidden flex flex-col h-[600px] rounded-3xl relative">
              <div className="absolute inset-0 bg-brand-100 animate-pulse -z-10" />
              <iframe
                src={`https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(SITE.facebook.url)}&tabs=timeline&width=450&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`}
                width="100%"
                height="100%"
                style={{ border: 'none', overflow: 'hidden', flex: 1, backgroundColor: 'white' }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="Veenu Furniture Facebook Page"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
