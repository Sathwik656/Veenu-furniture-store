import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ProductCard from './ProductCard';
import { products } from '../data';

const CATEGORIES = ['All', 'Outdoor', 'Ladders', 'Sofa', 'Dining', 'Bedroom', 'Office',];

export default function ProductCatalog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="catalog" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-none mb-12">
          <h2 className="text-4xl lg:text-5xl font-serif text-brand-900 mb-4">
            Our Collections
          </h2>
          <p className="text-brand-800/80 leading-relaxed mb-12 text-base md:text-lg max-w-2xl">
            Explore our curated selection of high-quality furniture designed to elevate your living spaces. Craftsmanship and timeless design in every piece.
          </p>

          {/* Filters & Search */}
          <div className="flex flex-col lg:flex-row justify-between items-end gap-6 border-b border-brand-200 pb-4">

            {/* Categories */}
            <div className="flex flex-wrap justify-start gap-4">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 text-sm transition-all rounded-full ${activeCategory === cat
                    ? 'bg-[#292524] text-white'
                    : 'bg-transparent text-[#57534E] hover:text-[#292524]'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full lg:w-72 shrink-0 border-b border-brand-200 pb-1">
              <Search className="w-5 h-5 text-brand-800/60 absolute left-0 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-4 py-2 text-sm bg-transparent focus:outline-none placeholder:text-brand-800/40"
              />
            </div>

          </div>
        </div>

        {/* Grid */}
        {filteredProducts.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="text-center py-24 bg-brand-50 border border-brand-100 border-dashed">
            <p className="text-brand-600 font-medium">No products found matching your criteria.</p>
            <button
              onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
              className="mt-4 text-brand-900 underline hover:text-brand-600 transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
