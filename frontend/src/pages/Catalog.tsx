import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import ProductCard from '../components/ProductCard';
import PageHero from '../components/PageHero';
import usePageTitle from '../hooks/usePageTitle';
import { products } from '../data';

export default function Catalog() {
  usePageTitle(
    'Our Products | Veenu Furnitures',
    'Browse premium easy chairs and ISO-certified step ladders from Veenu Furnitures — trusted Mangalore quality with a 3-year warranty.'
  );

  const categories = useMemo(() => ['All', ...new Set(products.map((p) => p.category))], []);
  const [searchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(() => {
    const cat = searchParams.get('cat');
    return cat && categories.includes(cat) ? cat : 'All';
  });
  const [searchQuery, setSearchQuery] = useState('');

  // Keep filters in sync with ?cat= deep links (e.g. footer category links)
  useEffect(() => {
    const cat = searchParams.get('cat');
    setActiveCategory(cat && categories.includes(cat) ? cat : 'All');
  }, [searchParams, categories]);

  const filteredProducts = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return products.filter((product) => {
      const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
      const matchesSearch =
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.description.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="w-full bg-white pt-16 md:pt-20">
      <PageHero
        title="Our Products"
        sub="Easy chairs built for comfort and ladders built for safety — every piece backed by our 3-year warranty."
        image="/images/easy_3.webp"
        imageAlt="A pair of Veenu easy chairs"
      />

      <section className="py-16 md:py-24">
        <div className="container-site">
          {/* Category filter */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6 border-b border-brand-200 pb-8 lg:flex-row lg:items-center lg:justify-between"
          >
            <div
              className="flex flex-wrap gap-2"
              role="group"
              aria-label="Filter products by category"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  aria-pressed={activeCategory === cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all ${
                    activeCategory === cat
                      ? 'bg-brand-900 text-white'
                      : 'bg-brand-100 text-brand-800 hover:bg-brand-200'
                  }`}
                >
                  {cat === 'Outdoor' ? 'Easy Chairs' : cat}
                </button>
              ))}
            </div>

            <div className="relative w-full lg:w-72 shrink-0">
              <Search className="absolute left-0 top-1/2 w-4 h-4 -translate-y-1/2 text-brand-800/50" />
              <input
                type="search"
                placeholder="Search products..."
                aria-label="Search products"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border-b border-brand-200 bg-transparent py-2.5 pl-7 pr-4 text-sm focus:border-brand-500 focus:outline-none placeholder:text-brand-800/40 transition-colors"
              />
            </div>
          </motion.div>

          {/* Grid */}
          {filteredProducts.length > 0 ? (
            <motion.div layout className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div className="mt-12 border border-dashed border-brand-200 bg-brand-50 py-24 text-center">
              <SlidersHorizontal className="mx-auto mb-4 w-6 h-6 text-brand-800/40" />
              <p className="text-sm text-brand-800/70">No products found matching your criteria.</p>
              <button
                onClick={() => {
                  setActiveCategory('All');
                  setSearchQuery('');
                }}
                className="mt-4 text-xs font-bold uppercase tracking-widest text-brand-500 underline hover:text-brand-600 transition-colors"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
