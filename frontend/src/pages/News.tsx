import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import usePageTitle from '../hooks/usePageTitle';
import { newsPosts } from '../data';

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });
}

export function NewsCard({ post }: { post: (typeof newsPosts)[number] }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className="group flex h-full flex-col bg-white border border-brand-200 hover:border-brand-500/50 transition-colors"
    >
      <Link to={`/news/${post.slug}`} className="relative block aspect-[16/10] overflow-hidden bg-brand-100">
        <img
          src={post.image}
          alt={post.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col p-6 lg:p-8">
        <p className="text-[11px] uppercase tracking-[0.15em] text-brand-800/50">
          {formatDate(post.date)} &bull; {post.category}
        </p>
        <h3 className="mt-3 font-serif text-xl leading-snug text-brand-900">
          <Link to={`/news/${post.slug}`} className="hover:text-brand-600 transition-colors">
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-800/70">{post.excerpt}</p>
        <Link
          to={`/news/${post.slug}`}
          className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-500 hover:text-brand-600 transition-colors"
        >
          Read More
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </motion.article>
  );
}

export default function News() {
  usePageTitle(
    'News & Updates | Veenu Furnitures',
    'Stories, guides and updates from Veenu Furnitures — Mangaluru\u2019s trusted furniture shop since 1984.'
  );

  const [featured, ...rest] = newsPosts;

  return (
    <div className="w-full bg-brand-50 pt-16 md:pt-20">
      <PageHero
        title="News & Updates"
        sub="Stories from our showroom, buying guides and care tips — everything we've learned in four decades of furniture."
        image="/images/hero.webp"
        imageAlt="Veenu Furnitures living room display"
      />

      {/* Featured article */}
      <section className="py-16 md:py-24">
        <div className="container-site">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 overflow-hidden border border-brand-200 bg-white lg:grid-cols-2"
          >
            <Link to={`/news/${featured.slug}`} className="relative block min-h-[260px] overflow-hidden bg-brand-100">
              <img
                src={featured.image}
                alt={featured.imageAlt}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </Link>
            <div className="flex flex-col justify-center p-8 lg:p-14">
              <p className="eyebrow mb-4">Featured</p>
              <p className="text-[11px] uppercase tracking-[0.15em] text-brand-800/50">
                {formatDate(featured.date)} &bull; {featured.category}
              </p>
              <h2 className="mt-4 font-serif text-2xl md:text-4xl leading-tight text-brand-900">
                <Link to={`/news/${featured.slug}`} className="hover:text-brand-600 transition-colors">
                  {featured.title}
                </Link>
              </h2>
              <p className="mt-5 text-sm md:text-base leading-relaxed text-brand-800/70">{featured.excerpt}</p>
              <Link to={`/news/${featured.slug}`} className="btn-outline mt-8 self-start">
                Read Article
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.article>

          {/* Grid */}
          <div className="mt-16">
            <SectionHeading title="More stories" />
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((post) => (
                <NewsCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
