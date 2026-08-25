import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { FaWhatsapp } from 'react-icons/fa';
import { SITE } from '../data';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'News & Updates', href: '/news' },
  { name: 'Contact Us', href: '/contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  const isActive = (href: string) =>
    href === '/' ? location.pathname === '/' : location.pathname.startsWith(href);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-brand-200">
      <div className="container-site flex h-14 md:h-18 items-center justify-between">
        <Link to="/" aria-label="Veenu Furnitures — Home" className="flex items-center">
          <img src="/images/logo_main.webp" alt="Veenu Furnitures" className="h-6 md:h-10 w-auto object-contain" />
        </Link>

        <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              aria-current={isActive(link.href) ? 'page' : undefined}
              className={`relative pb-1 text-xs font-semibold uppercase tracking-widest transition-colors ${isActive(link.href) ? 'text-brand-900' : 'text-brand-800/60 hover:text-brand-900'
                }`}
            >
              {link.name}
              {isActive(link.href) && (
                <span className="absolute -bottom-0.5 left-0 w-full h-[1.5px] bg-brand-500" />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <a href={SITE.phoneHref} className="text-sm font-medium text-brand-800 hover:text-brand-900 transition-colors">
            {SITE.phoneDisplay}
          </a>
          <a
            href={SITE.whatsapp('Hello Veenu Furnitures! I have an enquiry.')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-[#1EBE5D] transition-all"
          >
            <FaWhatsapp className="text-lg" />
            WhatsApp Us
          </a>
        </div>

        <button
          className="lg:hidden p-2 text-brand-900"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            aria-label="Mobile navigation"
            className="lg:hidden overflow-hidden border-t border-brand-100 bg-white"
          >
            <div className="container-site flex flex-col py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`border-b border-brand-100 py-4 text-base font-medium ${isActive(link.href) ? 'text-brand-500' : 'text-brand-900'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href={SITE.whatsapp('Hello Veenu Furnitures! I have an enquiry.')}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-4 text-sm font-semibold text-white"
              >
                <FaWhatsapp className="text-xl" />
                WhatsApp Us — {SITE.phoneDisplay}
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
