import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, BadgeCheck, ShieldCheck, Sparkles, Wrench } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import FeatureGrid from '../components/FeatureGrid';
import StatsSection from '../components/StatsSection';
import usePageTitle from '../hooks/usePageTitle';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
} as const;

const features = [
  { icon: ShieldCheck, title: 'Peace of Mind', description: 'A full 3-year warranty on every easy chair and ladder we sell.' },
  { icon: Wrench, title: 'Easy Maintenance', description: 'Rust-proof frames and tough fabrics designed for real, everyday life.' },
  { icon: BadgeCheck, title: 'Built to Last', description: 'ISO-certified ladders and furniture made from quality materials.' },
  { icon: Sparkles, title: 'Timeless Design', description: 'Classic pieces that look at home in any interior, year after year.' },
];

function StoryBlock({
  eyebrow,
  title,
  children,
  image,
  imageAlt,
  reverse = false,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  image: string;
  imageAlt: string;
  reverse?: boolean;
}) {
  return (
    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">
      <motion.div {...fadeUp} transition={{ duration: 0.6 }} className={reverse ? 'lg:order-2' : ''}>
        <p className="eyebrow mb-4">{eyebrow}</p>
        <h3 className="font-serif text-2xl md:text-4xl leading-tight text-brand-900">{title}</h3>
        <div className="mt-6 space-y-5 text-sm md:text-base leading-relaxed text-brand-800/80">{children}</div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className={reverse ? 'lg:order-1' : ''}
      >
        <img src={image} alt={imageAlt} loading="lazy" className="aspect-[4/3] w-full object-cover" />
      </motion.div>
    </div>
  );
}

export default function About() {
  usePageTitle(
    'About Us | Veenu Furnitures',
    'Trusted since 1984 and home to South India\u2019s longest furniture showroom — learn the story behind Veenu Furnitures in Kulur, Mangaluru.'
  );

  return (
    <div className="w-full bg-white">
      <PageHero
        title="About Us"
        sub="Four decades of quality furniture, honest service and proudly Made-in-India craftsmanship."
        image="/images/about.webp"
        imageAlt="Inside the Veenu Furnitures showroom in Kulur"
      />

      {/* ─── INTRODUCTION ─── */}
      <section className="py-20 md:py-32">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
            <p className="eyebrow mb-4">About us</p>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight text-brand-900">
              A Mangalore family name since 1984.
            </h2>
          </motion.div>
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }} className="space-y-6 self-center">
            <p className="text-sm md:text-base leading-relaxed text-brand-800/80">
              What began in 1984 as a small furniture shop in Kulur has grown into one of Mangaluru&rsquo;s
              most trusted destinations for homes that value quality over trends.
            </p>
            <p className="text-sm md:text-base leading-relaxed text-brand-800/80">
              Today we are proud to be home to South India&rsquo;s longest furniture showroom — a space where
              you can sit in our easy chairs, test our ladders and take your time choosing pieces built to
              last generations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── STORY BLOCKS ─── */}
      <section className="bg-brand-100 py-20 md:py-32">
        <div className="container-site space-y-24 md:space-y-36">
          <StoryBlock
            eyebrow="Our Origin"
            title="It started with a simple promise."
            image="/images/hero.webp"
            imageAlt="Veenu Furnitures living room display"
          >
            <p>
              In 1984, we opened a modest furniture shop in Kulur with one promise: honest furniture at
              honest prices. No shortcuts, no gimmicks — just well-made products and fair dealing.
            </p>
            <p>
              More than forty years later, families who bought their first easy chair from us now bring their
              children and grandchildren to do the same. That kind of trust is not bought; it is earned,
              decade by decade.
            </p>
          </StoryBlock>

          <StoryBlock
            eyebrow="Our Philosophy"
            title="Quality you can feel, prices you can trust."
            image="/images/easy_1.webp"
            imageAlt="The Veenu couples two-seat easy chair"
            reverse
          >
            <p>
              We believe furniture should be touched before it is bought. Every product on our floor is
              chosen for its materials, finish and comfort — then backed by warranties we stand behind.
            </p>
            <p>
              We are equally proud that our furniture is Made in India. Supporting local manufacturing means
              better quality control and fairer prices for the families we serve.
            </p>
          </StoryBlock>

          <StoryBlock
            eyebrow="Our Showroom"
            title="South India's longest furniture showroom."
            image="/images/7step.webp"
            imageAlt="The classic Veenu easy chair with wooden handle"
          >
            <p>
              Walking through our showroom in Kulur is an experience in itself. Row after row of easy chairs,
              ladders and household essentials stretch further than almost anywhere in South India.
            </p>
            <p>
              Come visit, sit down, and let our experienced team help you find exactly what your home needs.
            </p>
            <Link to="/contact" className="btn-outline mt-2">
              Plan Your Visit
              <ArrowRight className="w-4 h-4" />
            </Link>
          </StoryBlock>
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section className="bg-white py-20 md:py-32">
        <div className="container-site">
          <SectionHeading
            eyebrow="Why Shop With Us"
            title="Every purchase, protected."
            lead="These are not marketing lines — they are commitments printed on every product we sell."
          />
          <div className="mt-14">
            <FeatureGrid features={features} />
          </div>
        </div>
      </section>

      {/* ─── QUALITY PHILOSOPHY ─── */}
      <section className="border-t border-brand-200 py-20 md:py-32">
        <div className="container-site">
          <motion.h2
            {...fadeUp}
            transition={{ duration: 0.7 }}
            className="max-w-5xl font-serif text-3xl md:text-5xl leading-tight text-brand-900"
          >
            Premium furniture with quality, craftsmanship, thoughtful design, and lasting value.
          </motion.h2>

          <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-start">
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
              <img
                src="/images/about.webp"
                alt="Furniture displays inside the Veenu Furnitures showroom"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }} className="space-y-6 self-center">
              <p className="text-sm md:text-base leading-relaxed text-brand-800/80">
                Quality is not a feature — it is the sum of hundreds of small decisions: the weave of a
                fabric seat, the depth of a powder coating, the strength of a hinge tested thousands of
                times.
              </p>
              <p className="text-sm md:text-base leading-relaxed text-brand-800/80">
                That is why our easy chairs fold smoothly after years of use, and why our ISO-certified
                ladders stay stable under real weight. Craftsmanship shows up quietly, in how long things
                last.
              </p>
              <p className="text-sm md:text-base leading-relaxed text-brand-800/80">
                And lasting value means you pay once for furniture that serves your family for decades —
                which is, we think, the most honest luxury of all.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
