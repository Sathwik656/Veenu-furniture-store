import { motion } from 'motion/react';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import PageHero from '../components/PageHero';
import ContactForm from '../components/ContactForm';
import MapSection from '../components/MapSection';
import SectionHeading from '../components/SectionHeading';
import usePageTitle from '../hooks/usePageTitle';
import { SITE } from '../data';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
} as const;

export default function Contact() {
  usePageTitle(
    'Contact Us | Veenu Furnitures',
    `Have inquiries? Reach out to Veenu Furnitures in Kulur, Mangaluru. Call ${SITE.phoneDisplay} or send us a message.`
  );

  return (
    <div className="w-full bg-white pt-16 md:pt-20">
      <PageHero
        title="Have inquiries?"
        sub="Reach out to us — for product questions, availability, delivery or anything else. We reply fast on WhatsApp."
        image="/images/easy_1.webp"
        imageAlt="The classic Veenu easy chair"
      />

      {/* Form + details */}
      <section className="py-16 md:py-28">
        <div className="container-site grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20 items-start">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
            <p className="eyebrow mb-4">Send a Message</p>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight text-brand-900">
              Tell us what your home needs.
            </h2>
            <p className="mt-5 max-w-md text-sm md:text-base leading-relaxed text-brand-800/70">
              Fill in the form and your enquiry opens directly in WhatsApp — the fastest way to reach our
              team.
            </p>
            <div className="mt-10 border border-brand-200 bg-brand-50 p-6 lg:p-10">
              <ContactForm />
            </div>
          </motion.div>

          <motion.aside {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }} className="space-y-8 lg:sticky lg:top-28">
            <div className="border border-brand-200 p-8">
              <h3 className="font-serif text-xl text-brand-900">Main Showroom</h3>
              <ul className="mt-6 space-y-6 text-sm">
                <li className="flex gap-4">
                  <MapPin className="w-5 h-5 shrink-0 text-brand-500" />
                  <span className="leading-relaxed text-brand-800/80">{SITE.addressLines.join(' ')}</span>
                </li>
                <li>
                  <a href={SITE.phoneHref} className="flex gap-4 hover:text-brand-600 transition-colors">
                    <Phone className="w-5 h-5 shrink-0 text-brand-500" />
                    <span>{SITE.phoneDisplay}</span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${SITE.email}`} className="flex gap-4 break-all hover:text-brand-600 transition-colors">
                    <Mail className="w-5 h-5 shrink-0 text-brand-500" />
                    <span>{SITE.email}</span>
                  </a>
                </li>
                <li className="flex gap-4">
                  <Clock className="w-5 h-5 shrink-0 text-brand-500" />
                  <span className="text-brand-800/60 italic">Open daily — call to confirm today's hours.</span>
                </li>
              </ul>
            </div>

            <div className="bg-brand-100 p-8">
              <h3 className="font-serif text-xl text-brand-900">Prefer to chat?</h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-800/70">
                Message us on WhatsApp with a photo of what you&rsquo;re looking for — we&rsquo;ll tell you
                right away if we have it in stock.
              </p>
              <a
                href={SITE.whatsapp('Hello Veenu Furnitures! I have an enquiry.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-6"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.aside>
        </div>
      </section>

      {/* Map */}
      <section className="pb-16 md:pb-28">
        <div className="container-site">
          <SectionHeading eyebrow="Find Us" title="Visit our showroom" />
          <div className="mt-12">
            <MapSection />
          </div>
        </div>
      </section>
    </div>
  );
}
