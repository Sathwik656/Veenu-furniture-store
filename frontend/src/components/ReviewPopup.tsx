import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Star } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import { FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa';

export default function ReviewPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show the popup shortly after the page loads
    const timer = setTimeout(() => setIsOpen(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl max-h-[95dvh] overflow-y-auto overflow-x-hidden bg-brand-50 rounded-2xl shadow-2xl custom-scrollbar"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 p-2 text-gray-500 hover:text-gray-900 transition-colors bg-white/80 rounded-full hover:bg-white z-10 shadow-sm"
              aria-label="Close popup"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-4 sm:p-6 md:p-10 flex flex-col items-center text-center">
              {/* Header */}
              <div className="mb-2 mt-2 sm:mt-0">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-red-600 tracking-wider uppercase border-t-[3px] sm:border-t-4 border-red-600 inline-block pt-1">
                  Veenu
                </h2>
              </div>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base font-medium mb-1">
                Thank you for choosing Veenu Furniture!
              </p>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-brand-900 mb-4 sm:mb-6 leading-tight">
                Crafting comfort for your space.
              </h3>

              {/* Main Offer */}
              <div className="w-full bg-brand-100 py-2 sm:py-3 px-3 sm:px-4 rounded-xl mb-4 sm:mb-6 border border-brand-200">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-800 uppercase">
                  Get your <span className="text-[#6D2323]">₹200</span> reward!
                </h1>
              </div>

              {/* Steps Container */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 w-full mb-5 sm:mb-6">

                {/* Step 1: Google Review */}
                <a
                  href="https://share.google/yZRbNXZcNiZ0lE47k" // Replace with actual Google Review Link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-4 sm:p-5 bg-white rounded-xl border-2 border-gray-100 hover:border-blue-400 hover:shadow-lg transition-all group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 bg-blue-100 text-blue-800 text-[10px] sm:text-xs font-bold px-2 py-1 rounded-bl-lg">
                    Step 1
                  </div>
                  <FcGoogle className="w-10 h-10 sm:w-14 sm:h-14 mb-2 sm:mb-3 group-hover:scale-110 transition-transform" />
                  <div className="flex gap-1 mb-2 text-yellow-400">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                    ))}
                  </div>
                  <p className="font-bold text-brand-900 text-sm sm:text-base uppercase leading-tight">
                    Click Here to
                  </p>
                  <p className="font-bold text-brand-900 text-sm sm:text-base uppercase leading-tight">
                    Leave a 5-Star Review
                  </p>
                </a>

                {/* Step 2: WhatsApp */}
                <a
                  href="https://wa.me/917795505525?text=Hello,%20I%20have%20left%20a%205-star%20Google%20review.%20Here%20is%20my%20screenshot!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-4 sm:p-5 bg-white rounded-xl border-2 border-gray-100 hover:border-green-400 hover:shadow-lg transition-all group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 bg-green-100 text-green-800 text-[10px] sm:text-xs font-bold px-2 py-1 rounded-bl-lg">
                    Step 2
                  </div>
                  <div className="bg-[#25D366] rounded-full p-2.5 sm:p-3 mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
                    <FaWhatsapp className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <p className="font-bold text-brand-900 text-sm sm:text-base uppercase text-center leading-tight">
                    Screenshot & Send
                  </p>
                  <p className="font-bold text-brand-900 text-sm sm:text-base uppercase text-center leading-tight">
                    To WhatsApp
                  </p>
                </a>
              </div>

              {/* Guarantee Banner */}
              <div className="w-full border-[3px] border-brand-800 rounded-xl py-2 sm:py-3 px-4 sm:px-6 mb-2 sm:mb-6 max-w-md bg-white">
                <p className="text-base sm:text-lg md:text-xl font-bold text-brand-900">
                  Get guaranteed <span className="text-[#6D2323]">₹200</span> reward!
                </p>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
