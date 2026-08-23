import { Link, useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import NotFound from './NotFound';
import { NewsCard, formatDate } from './News';
import usePageTitle from '../hooks/usePageTitle';
import { SITE, newsPosts } from '../data';

export default function NewsArticle() {
  const { slug } = useParams<{ slug: string }>();
  const post = newsPosts.find((p) => p.slug === slug);

  usePageTitle(
    post ? `${post.title} | Veenu Furnitures` : 'Article | Veenu Furnitures',
    post?.excerpt
  );

  if (!post) return <NotFound />;

  const others = newsPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="w-full bg-brand-50 pt-16 md:pt-20">
      {/* Hero */}
      <section className="relative flex h-[52vh] min-h-[360px] items-end overflow-hidden bg-brand-900">
        <img src={post.image} alt={post.imageAlt} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-900/90 via-brand-900/40 to-brand-900/25" />
        <div className="container-site relative pb-14 pt-28">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70"
          >
            {post.category} &bull; {formatDate(post.date)}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-4xl font-serif text-3xl md:text-5xl leading-tight text-white"
          >
            {post.title}
          </motion.h1>
        </div>
      </section>

      {/* Body */}
      <section className="py-16 md:py-24">
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-3xl space-y-6"
          >
            <p className="font-serif text-xl md:text-2xl leading-relaxed text-brand-900">{post.excerpt}</p>
            {post.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-sm md:text-base leading-relaxed text-brand-800/80">
                {paragraph}
              </p>
            ))}

            <div className="border-t border-brand-200 pt-8 mt-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <Link
                to="/news"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-800/60 hover:text-brand-900 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to News
              </Link>
              <a
                href={SITE.whatsapp(`Hello Veenu Furnitures! I just read your article "${post.title}".`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Ask Us About This
              </a>
            </div>
          </motion.div>

          {/* More articles */}
          {others.length > 0 && (
            <div className="mt-20 border-t border-brand-200 pt-16">
              <h2 className="font-serif text-2xl md:text-3xl text-brand-900">More stories</h2>
              <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {others.map((other) => (
                  <NewsCard key={other.slug} post={other} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
