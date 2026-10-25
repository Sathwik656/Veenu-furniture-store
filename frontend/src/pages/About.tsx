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
            title="It started with a simple promise in 1984."
            image="/images/Showroom.jpeg"
            imageAlt="Veenu Furnitures Showroom in Mangaluru"
          >
            <p>
              The story of Veenu Furnitures began over four decades ago in the coastal city of Mangaluru. In 1984,
              we opened a modest furniture shop in Kulur with a single, unshakeable promise: to provide honest
              furniture at honest prices. In those early days, we focused on selecting pieces that weren't
              just beautiful, but built with the structural integrity required to withstand the test of time
              and the humid Mangaluru climate.
            </p>
            <p>
              No shortcuts, no flashy marketing gimmicks — just well-made products, fair dealing, and a
              deep commitment to the families who walked through our doors. As our reputation for quality
              spread across South India, so did our ambitions. We expanded our collection to include
              specialized household utility items, becoming a trusted name for everything from
              signature easy chairs to heavy-duty household ladders.
            </p>
            <p>
              Today, more than forty years later, that foundation of trust remains our most valuable asset.
              Families who bought their first home furnishing from us decades ago now bring their children
              and grandchildren to our showroom. We've furnished generations of homes, and that kind of trust
              is not something that can be bought; it is earned through consistent quality, year after year,
              and decade after decade.
            </p>
          </StoryBlock>

          <StoryBlock
            eyebrow="Our Philosophy"
            title="Quality you can feel, durability you can trust."
            image="/images/easy_1.webp"
            imageAlt="The Veenu classic easy chair with wooden armrest"
            reverse
          >
            <p>
              We believe that furniture is an investment in your home&rsquo;s comfort and should be
              experienced in person before it is bought. At Veenu Furnitures, we emphasize the tactile
              nature of our products. Every item on our showroom floor has been carefully vetted for its
              material quality, structural finish, and ergonomic comfort — then backed by warranties
              that we stand behind without hesitation.
            </p>
            <p>
              We are equally proud that our signature products are Made in India. Supporting local
              craftsmanship and domestic manufacturing means better quality control, faster response
              to our customers' needs, and fairer prices for the families we serve. By choosing
              Indian-made materials, we ensure that our furniture is tailored to the specific needs and
              environment of our local region.
            </p>
            <p>
              Whether it's the precise weave of the fabric on our easy chairs or the anti-slip grip on our
              ISO-certified aluminium ladders, every detail is considered. Our philosophy is simple:
              provide furniture that we would be proud to have in our own homes. This dedication to excellence
              is why we've remained a leader in the Mangaluru furniture market for over 40 years.
            </p>
          </StoryBlock>

          <StoryBlock
            eyebrow="Our Showroom"
            title="Explore South India's longest furniture showroom."
            image="/images/7step.webp"
            imageAlt="Veenu heavy duty steel ladder display"
          >
            <p>
              Walking through our main showroom in Kulur is an experience that sets us apart. We take pride
              in hosting one of South India&rsquo;s longest dedicated furniture displays — a vast space where
              you can truly explore. Row after row of easy chairs, professional-grade ladders, and
              essential household utilities stretch further than almost anywhere else in the region.
            </p>
            <p>
              This expansive space allows us to showcase our entire collection in a way that lets you
              compare different models, materials, and sizes side-by-side. We encourage you to come visit,
              take a seat, test the stability of our ladders, and feel the weight of our quality for yourself.
            </p>
            <p>
              Our experienced team is always on hand to provide technical advice, share care tips, and
              help you find exactly what your home requires. We believe in helping you choose the right
              piece for your specific needs — ensuring that what you buy today remains a functional part
              of your home for many years to come.
            </p>
            <Link to="/contact" className="btn-outline mt-2">
              Plan Your Showroom Visit
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
