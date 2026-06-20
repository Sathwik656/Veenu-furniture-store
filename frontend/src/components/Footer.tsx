import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-stone-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-serif text-white font-bold mb-6">Veenu.</h2>
            <p className="text-sm leading-relaxed mb-6">
              Curating premium, sustainable, and modern furniture pieces for homes and offices that inspire. Crafted with passion, designed for life.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/veenu_furnitures/" className="hover:text-white transition-colors" target="_blank"><Instagram className="w-5 h-5" /></a>
              <a href="https://www.facebook.com/Veenufurniture/" className="hover:text-white transition-colors" target="_blank"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors" target="_blank"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-bold tracking-widest uppercase text-[10px] mb-6 border-l-2 border-brand-500 pl-3">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Shop All Products</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Customer Reviews</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold tracking-widest uppercase text-[10px] mb-6 border-l-2 border-brand-500 pl-3">Support</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Care Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold tracking-widest uppercase text-[10px] mb-6 border-l-2 border-brand-500 pl-3">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-500 shrink-0" />
                <span>Veenu Furniture & Ladder - Kulur</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-500 shrink-0" />
                <span>+91 7795505525</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand-500 shrink-0" />
                <span>veenufurnituredm@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-stone-800 text-sm text-center text-stone-500 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Veenu Furnitures. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <span>Designed with precision</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
