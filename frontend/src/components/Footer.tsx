import { Link } from 'react-router-dom';
import { FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { Mail, MapPin, Phone } from 'lucide-react';
import { SITE, products } from '../data';

export default function Footer() {
  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <footer className="bg-brand-900 text-brand-100/70">
      <div className="container-site py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="inline-block mb-6">
              <img src="/images/logo_main.webp" alt="Veenu Furnitures" className="h-18 w-auto object-contain" />
            </Link>
            <p className="mb-6 text-sm leading-relaxed">
              Premium furniture and ladders from Mangalore. Trusted by families since 1984 and home to South
              India&rsquo;s longest furniture showroom.
            </p>
            <div className="flex gap-3">
              <a
                href={SITE.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Veenu Furnitures on Instagram"
                className="flex h-10 w-10 items-center justify-center border border-white/15 hover:bg-white/10 hover:text-white transition-colors"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href={SITE.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Veenu Furniture on Facebook"
                className="flex h-10 w-10 items-center justify-center border border-white/15 hover:bg-white/10 hover:text-white transition-colors"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a
                href={SITE.whatsapp('Hello Veenu Furnitures!')}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Veenu Furnitures on WhatsApp"
                className="flex h-10 w-10 items-center justify-center border border-white/15 hover:bg-white/10 hover:text-white transition-colors"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>
            </div>
          </div>

          <nav aria-label="Quick links">
            <h3 className="mb-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/news" className="hover:text-white transition-colors">News & Updates</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </nav>

          <nav aria-label="Product categories">
            <h3 className="mb-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">Products</h3>
            <ul className="space-y-3 text-sm">
              {categories.map((cat) => (
                <li key={cat}>
                  <Link to={`/products?cat=${encodeURIComponent(cat)}`} className="hover:text-white transition-colors">
                    {cat === 'Outdoor' ? 'Easy Chairs' : cat}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="mb-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 w-4 h-4 shrink-0 text-brand-500" />
                <span>{SITE.addressLines.join(' ')}</span>
              </li>
              <li>
                <a href={SITE.phoneHref} className="flex items-center gap-3 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 shrink-0 text-brand-500" />
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 break-all hover:text-white transition-colors">
                  <Mail className="w-4 h-4 shrink-0 text-brand-500" />
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Veenu Furnitures. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
