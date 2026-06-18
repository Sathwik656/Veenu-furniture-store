import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate('/products');
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen md:h-[100vh] md:min-h-[700px] flex flex-col md:flex-row items-stretch pt-20 bg-brand-50 border-b border-brand-200 overflow-hidden">

      {/* Left Content Box */}
      <div className="w-full md:w-[450px] lg:w-[500px] py-12 md:py-0 flex flex-col justify-center px-8 md:px-12 border-b md:border-b-0 border-r-0 md:border-r border-brand-200 bg-white/50 z-10 shrink-0 backdrop-blur-md">
        <div className="mb-6 inline-flex items-center px-3 py-1 bg-brand-100 rounded-full text-[10px] uppercase font-bold tracking-wider text-brand-800/70 w-max">
          Est. 1984 &bull; Premium Quality
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-[1.1] mb-6 text-brand-900"
        >
          Beautiful <span className="italic font-normal text-brand-800">Furniture</span> for Every Home
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-sm font-medium mb-10 text-brand-800/60 max-w-[320px] leading-relaxed"
        >
          Discover premium furniture crafted for comfort, style, and uncompromising durability. Elevate your living space with our handcrafted collection.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="flex flex-col space-y-6"
        >
          <button
            onClick={handleExplore}
            className="group flex items-center space-x-3 text-brand-900 font-bold uppercase text-xs tracking-widest w-fit"
          >
            <span>Explore Our Catalog</span>
            <span className="w-8 h-[1px] bg-brand-900 group-hover:w-12 transition-all"></span>
          </button>

          <button
            onClick={scrollToContact}
            className="group flex items-center space-x-3 text-brand-800/60 hover:text-brand-900 font-bold uppercase text-xs tracking-widest w-fit transition-colors"
          >
            <span>Contact Us</span>
            <span className="w-4 h-[1px] bg-brand-800/60 px-1 opacity-0 transition-opacity group-hover:opacity-100"></span>
          </button>
        </motion.div>
      </div>

      {/* Right Image Box */}
      <div className="flex-1 relative bg-brand-100 min-h-[400px] md:min-h-0">
        <img
          src="/images/hero.png"
          alt="Premium furniture living room"
          className="w-full h-full object-cover"
        />
        {/* Subtle gradient overlay to merge perfectly into the theme */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"></div>
      </div>
    </section>
  );
}
