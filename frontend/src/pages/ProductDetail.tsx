import { Link, useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, BadgeCheck, Check, ExternalLink, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import NotFound from './NotFound';
import ProductCard from '../components/ProductCard';
import usePageTitle from '../hooks/usePageTitle';
import { SITE, products } from '../data';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);

  usePageTitle(
    product ? `${product.name} | Veenu Furnitures` : 'Product | Veenu Furnitures',
    product ? `${product.name} — ₹${product.price.toLocaleString('en-IN')}. Enquire with Veenu Furnitures, Mangaluru.` : undefined
  );

  if (!product) return <NotFound />;

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <div className="w-full bg-white pt-16 md:pt-20">
      <section className="py-12 md:py-20">
        <div className="container-site">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-800/60 hover:text-brand-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>

          <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-start">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden border border-brand-200 bg-brand-100"
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="aspect-[4/3] w-full object-cover"
              />
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="eyebrow">{product.category === 'Outdoor' ? 'Easy Chairs' : product.category}</p>
              <h1 className="mt-3 font-serif text-3xl md:text-4xl lg:text-5xl leading-tight text-brand-900">
                {product.name}
              </h1>
              <p className="mt-6 font-serif text-3xl text-brand-900">
                ₹{product.price.toLocaleString('en-IN')}
              </p>

              <p className="mt-8 text-sm md:text-base leading-relaxed text-brand-800/80">
                {product.description}
              </p>

              {product.features && (
                <ul className="mt-8 space-y-3">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-brand-800/90">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100">
                        <Check className="w-3 h-3 text-brand-600" strokeWidth={3} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              )}

              {/* CTAs */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href={SITE.whatsapp(`Hello Veenu Furnitures! I'm interested in the "${product.name}" (₹${product.price.toLocaleString('en-IN')}). Could you share more details?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex-1"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  Enquire Now
                </a>
                <a href={SITE.phoneHref} className="btn-outline flex-1">
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>

              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-500 hover:text-brand-600 transition-colors"
              >
                Also available on Flipkart
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <p className="mt-8 flex items-center gap-2 border-t border-brand-200 pt-6 text-sm text-brand-800/70">
                <BadgeCheck className="w-4 h-4 text-brand-500" />
                Backed by our 3-year warranty &amp; showroom support in Kulur, Mangaluru.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="border-t border-brand-200 bg-brand-50 py-16 md:py-24">
          <div className="container-site">
            <div className="flex items-end justify-between gap-6">
              <h2 className="font-serif text-2xl md:text-3xl text-brand-900">You may also like</h2>
              <Link
                to="/products"
                className="group hidden sm:inline-flex items-center gap-2 pb-1 text-xs font-bold uppercase tracking-widest text-brand-800 hover:text-brand-900"
              >
                View All
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((rel, idx) => (
                <ProductCard key={rel.id} product={rel} index={idx} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
