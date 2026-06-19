import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About Us', href: '/#about' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-brand-200 ${isScrolled ? 'bg-white/90 backdrop-blur-md' : 'bg-white/80 backdrop-blur-md'
        }`}
    >
      <div className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex justify-between items-center transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'}`}>
        <Link to="/" className="flex items-center group">
          <img
            src="/images/logo.png"
            alt="Veenu Furnitures"
            className="h-38 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center">
          <div className="flex space-x-8">
            {navLinks.map((link) => {
              const isActive = (link.href === '/' && location.pathname === '/' && !location.hash) ||
                (link.href === '/products' && location.pathname === '/products') ||
                (location.hash === link.href.split('/')[1]);

              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-sm transition-colors relative pb-1 ${isActive ? 'text-brand-900' : 'text-brand-800/80 hover:text-brand-900'}`}
                  onClick={(e) => {
                    if (link.href.includes('#')) {
                      const id = link.href.split('#')[1];
                      // Handled by standard anchor behavior if we use right hash layout, 
                      // but we are using React Router so let's let standard Link handle it 
                      // and then scroll into view explicitly.
                      setTimeout(() => {
                        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }
                  }}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-brand-900 rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <button className="text-brand-800 hover:text-brand-500 transition-colors">
            <User className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-brand-900"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-brand-100 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-lg font-medium text-brand-900"
                  onClick={(e) => {
                    if (link.href.includes('#')) {
                      const id = link.href.split('#')[1];
                      setTimeout(() => {
                        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }
                    setMobileMenuOpen(false);
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
