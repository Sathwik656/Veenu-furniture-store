import React from 'react';
import { motion } from 'motion/react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  index?: number;
  key?: React.Key;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white border border-brand-200 p-4 rounded-sm flex flex-col group cursor-pointer hover:shadow-xl hover:shadow-brand-200/50 transition-all h-full"
    >
      <div className="flex-1 bg-brand-100 rounded-sm mb-4 flex items-center justify-center relative overflow-hidden aspect-[4/3]">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-brand-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {product.featured && (
          <span className="absolute top-3 left-3 text-[10px] font-bold uppercase bg-white text-brand-900 px-2 py-1 rounded-sm shadow-sm">
            Featured
          </span>
        )}

        {/* Quick View Button overlay */}
        <a 
          href={product.link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-0 left-0 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-brand-500/95 text-white flex justify-center items-center py-2.5 backdrop-blur-md cursor-pointer hover:bg-brand-600"
        >
          <span className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">
            View Details
          </span>
        </a>
      </div>

      <div className="flex justify-between items-start mt-auto">
        <div>
          <h3 className="font-semibold text-sm text-brand-900">{product.name}</h3>
          <p className="text-[10px] text-brand-800/50 uppercase tracking-widest mt-1">
            {product.category}
          </p>
        </div>
        <span className="font-serif font-bold text-brand-900">₹{product.price}</span>
      </div>
    </motion.div>
  );
}