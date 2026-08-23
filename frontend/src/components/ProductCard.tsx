import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
    >
      <Link
        to={`/products/${product.id}`}
        className="group flex h-full flex-col bg-white border border-brand-200 hover:border-brand-500/50 hover:shadow-xl hover:shadow-brand-900/5 transition-all duration-300"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-brand-100">
          <img
            src={product.imageUrl}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <span className="absolute bottom-0 left-0 flex w-full translate-y-full items-center justify-center gap-1.5 bg-brand-900/90 py-2.5 text-[11px] font-bold uppercase tracking-widest text-white backdrop-blur-sm transition-transform duration-300 group-hover:translate-y-0">
            View Details
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
        <div className="flex items-start justify-between gap-4 p-5">
          <div>
            <h3 className="font-medium text-sm text-brand-900">{product.name}</h3>
            <p className="mt-1 text-[11px] uppercase tracking-[0.15em] text-brand-800/50">{product.category}</p>
          </div>
          <span className="font-serif text-lg text-brand-900 whitespace-nowrap">
            ₹{product.price.toLocaleString('en-IN')}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
