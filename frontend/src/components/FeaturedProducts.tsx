import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';
import { products } from '../data';

export default function FeaturedProducts() {
  const featured = products.filter(p => p.featured).slice(0, 6);
  const navigate = useNavigate();

  return (
    <section id="featured" className="py-24 bg-brand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
          <div className="max-w-2xl">
            <h4 className="text-brand-500 font-bold tracking-widest uppercase text-[10px] mb-2">
              Handpicked Edits
            </h4>
            <h2 className="text-3xl font-serif text-brand-900">
              Popular Collection
            </h2>
          </div>
          <button 
            onClick={() => navigate('/products')}
            className="mt-6 md:mt-0 group flex items-center space-x-2 text-brand-800 hover:text-brand-900 transition-colors uppercase text-[10px] font-bold tracking-widest"
          >
            <span>View Complete Catalog</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((product, idx) => (
            <ProductCard key={product.id} product={product} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}
