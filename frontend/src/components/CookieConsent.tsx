import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent !== 'accepted') {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
    // Potentially disable analytics here or other non-essential cookies
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5, type: 'spring', damping: 15, stiffness: 100 }}
        className="fixed bottom-0 left-0 z-50 w-full bg-brand-900 text-white p-4 shadow-lg"
      >
        <div className="container-site flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex-1 text-center sm:text-left">
            <p className="text-sm">
              We use cookies to ensure you get the best experience on our website. By continuing to use this site, you agree to our{' '}
              <Link to="/privacy-policy" className="underline hover:text-brand-500 transition-colors">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={acceptCookies}
              className="btn-primary !bg-brand-500 !hover:bg-brand-600 !px-5 !py-2 text-xs"
            >
              Accept
            </button>
            <button
              onClick={declineCookies}
              className="btn-outline !border-white/20 !text-white !hover:bg-white/10 !px-5 !py-2 text-xs"
            >
              Decline
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="p-1 text-white/70 hover:text-white transition-colors sm:hidden"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
