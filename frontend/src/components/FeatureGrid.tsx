import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: Feature[];
}

export default function FeatureGrid({ features }: FeatureGridProps) {
  return (
    <div className="grid grid-cols-1 gap-px overflow-hidden border border-brand-200 bg-brand-200 sm:grid-cols-2 lg:grid-cols-4">
      {features.map((feature, i) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="group bg-white p-8 lg:p-10 hover:bg-brand-50 transition-colors duration-300"
        >
          <feature.icon className="w-7 h-7 text-brand-500" strokeWidth={1.5} />
          <h3 className="mt-6 font-serif text-xl text-brand-900">{feature.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-brand-800/70">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
