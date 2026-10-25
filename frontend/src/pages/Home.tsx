import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Award,
  BadgeCheck,
  HeartHandshake,
  Sofa,
  Tag,
  Truck,
} from 'lucide-react';
import ProductCard from '../components/ProductCard';
import SectionHeading from '../components/SectionHeading';
import StatsSection from '../components/StatsSection';
import Testimonials from '../components/Testimonials';
import MapSection from '../components/MapSection';
import usePageTitle from '../hooks/usePageTitle';
import { products } from '../data';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
} as const;

const whyUs = [
  { icon: Award, title: 'Trusted since 1984', description: 'Four decades of serving homes across Mangaluru with furniture that lasts.' },
  { icon: Sofa, title: 'Quality materials', description: 'Premium woods, fabrics and metals chosen for everyday family life.' },
  { icon: BadgeCheck, title: '3-year warranty', description: 'Every easy chair and ladder we sell carries a full three-year warranty.' },
  { icon: Truck, title: 'Doorstep delivery', description: 'Careful delivery of your order straight to your home.' },
  { icon: Tag, title: 'Honest pricing', description: 'Premium quality without the premium price tag.' },
  { icon: HeartHandshake, title: 'Personal service', description: 'A friendly, experienced team that helps you choose right — not just once, but for decades.' },
];

export default function Home() {
  usePageTitle(
    'Veenu Furnitures | Furniture Shop in Mangalore',
    'Buy high-quality easy chairs and aluminium step ladders from Veenu Furnitures. Trusted furniture shop in Mangalore since 1984.'
  );
  const featured = products.filter((p) => p.featured).slice(0, 6);

  return (
    <div className="w-full">
      {/* ─── HERO ─── */}
      <section className="relative flex min-h-[88vh] items-end overflow-hidden bg-brand-900">
        <img
          src="/images/hero.webp"
          alt="Veenu Furnitures living room with premium easy chairs"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-900/90 via-brand-900/35 to-brand-900/20" />

        <div className="container-site relative pb-20 md:pb-28 pt-40">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow mb-5 text-white/75"
          >
            Est. 1984 &bull; Kulur, Mangaluru
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-3xl font-serif text-4xl leading-[1.1] text-white sm:text-5xl lg:text-6xl"
          >
            Beautiful furniture for every home.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-xl text-sm md:text-base leading-relaxed text-white/80"
          >
            Premium easy chairs, ladders and more — trusted by families since 1984 and home to South
            India&rsquo;s longest furniture showroom.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Link to="/products" className="btn-primary">
              Explore Our Collection
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/40 text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-brand-900 transition-colors"
            >
              Our Story
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── INTRODUCTION ─── */}
      <section className="bg-white py-20 md:py-32" id="intro">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
            <p className="eyebrow mb-4">Welcome to Veenu Furnitures</p>
            <h1 className="font-serif text-3xl md:text-5xl leading-tight text-brand-900">
              Furniture that feels like it was always meant for your home.
            </h1>
            <p className="mt-8 text-sm md:text-base leading-relaxed text-brand-800/80">
              At Veenu Furnitures, we don't just sell furniture; we provide the comfort your home deserves.
              Since 1984, we have dedicated ourselves to sourcing, crafting, and delivering high-quality
              furniture that combines traditional aesthetics with modern durability. Whether you are
              furnishing a new apartment, upgrading your balcony, or looking for practical household
              tools like our signature aluminium ladders, we are here to guide you with decades of expertise.
            </p>
            <Link to="/about" className="btn-outline mt-10">
              Read Our Full Story
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }} className="space-y-6 self-center">
            <p className="text-sm md:text-base leading-relaxed text-brand-800/80">
              VEENU FURNITURES has been a trusted brand in Mangaluru for over 40 years. As the home of
              South India&rsquo;s longest furniture showroom, we offer an unparalleled variety of
              quality, service, and proudly Made-in-India products. We prioritize transparency and
              honesty, ensuring that every purchase you make is backed by our comprehensive warranty
              and commitment to lasting value.
            </p>
            <p className="text-sm md:text-base leading-relaxed text-brand-800/80">
              Our range of easy chairs, designed for ultimate relaxation, are crafted with premium
              materials that resist wear and tear while providing ergonomic support. Complementing these,
              our ISO-certified step ladders are built with heavy-duty steel and aluminium,
              focusing on safety features that offer peace of mind during everyday tasks. From
              ergonomically designed office chairs to cosy outdoor loungers and durable home utility items,
              our collection evolves to meet your changing needs while maintaining the same
              dedication to quality that our founders established in 1984.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="bg-brand-100 py-20 md:py-32">
        <div className="container-site grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20 items-start">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="lg:sticky lg:top-28">
            <img
              src="/images/about.webp"
              alt="Inside the Veenu Furnitures showroom"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </motion.div>

          <div>
            <SectionHeading eyebrow="Crafting Homes With Purpose" title="Why choose Veenu Furnitures?" />
            <ul className="mt-12 space-y-9">
              {whyUs.map((item, i) => (
                <motion.li
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="flex gap-5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-brand-500/30 bg-white">
                    <item.icon className="w-5 h-5 text-brand-500" strokeWidth={1.5} />
                  </span>
                  <div>
                    <h3 className="font-medium text-base text-brand-900">{item.title}</h3>
                    <p className="mt-1.5 max-w-md text-sm leading-relaxed text-brand-800/70">{item.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── FEATURED PRODUCTS ─── */}
      <section className="bg-white py-20 md:py-32">
        <div className="container-site">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Handpicked Edits"
              title="Popular collection"
              lead="A few favourites from our shelves — every piece backed by our 3-year warranty."
            />
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }} className="shrink-0">
              <Link to="/products" className="group inline-flex items-center gap-2 pb-1 text-xs font-bold uppercase tracking-widest text-brand-800 hover:text-brand-900">
                View Complete Catalog
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((product, idx) => (
              <ProductCard key={product.id} product={product} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <StatsSection />

      {/* ─── TESTIMONIALS ─── */}
      <Testimonials />

      {/* ─── VISIT US ─── */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Find Us"
            title="Visit our showroom"
            lead="Walk through South India's longest furniture showroom and see, sit and test everything yourself."
          />
          <div className="mt-12">
            <MapSection />
          </div>
        </div>
      </section>
    </div>
  );
}
