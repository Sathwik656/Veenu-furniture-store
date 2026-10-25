import PageHero from '../components/PageHero';
import usePageTitle from '../hooks/usePageTitle';
import { SITE } from '../data';

export default function Disclaimer() {
  usePageTitle(
    'Disclaimer | Veenu Furnitures',
    'General information and product disclaimer for Veenu Furnitures website.'
  );

  return (
    <div className="w-full bg-white pt-16 md:pt-20">
      <PageHero title="Disclaimer" />
      <section className="py-16 md:py-24">
        <div className="container-site max-w-3xl space-y-6 text-sm md:text-base leading-relaxed text-brand-800/80">
          <h1 className="font-serif text-3xl text-brand-900 pb-2 border-b border-brand-200">
            Website &amp; Product Disclaimer
          </h1>

          <p>
            The information provided by Veenu Furnitures (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
            on our website is for general informational purposes only. All information on the site is provided in
            good faith, however we make no representation or warranty of any kind, express or implied, regarding
            the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
          </p>

          <h2 className="font-serif text-2xl text-brand-900 pt-4">1. Product Descriptions &amp; Colors</h2>
          <p>
            We strive to display the colors, features, specifications, and details of the products available on the
            website as accurately as possible. However, we do not guarantee that the colors, dimensions, or details will
            be accurate, complete, reliable, current, or free of other errors, as actual colors depend on your monitor
            and display settings.
          </p>

          <h2 className="font-serif text-2xl text-brand-900 pt-4">2. External Links Disclaimer</h2>
          <p>
            The site may contain links to external websites such as Flipkart or Google Maps. Such external links are not
            investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness
            by us. We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any
            information offered by third-party websites linked through the site.
          </p>

          <h2 className="font-serif text-2xl text-brand-900 pt-4">3. Warranty &amp; Product Use</h2>
          <p>
            Product warranties apply strictly to manufacturing defects for selected items as explicitly stated on the
            product page (such as our 3-year warranty on ladders and easy chairs). Damages resulting from unauthorized
            alterations, normal wear and tear, improper assembly, neglect, or commercial over-use are excluded.
          </p>

          <h2 className="font-serif text-2xl text-brand-900 pt-4">4. Advertising &amp; Affiliate Disclosure</h2>
          <p>
            This site may display advertisements provided by third-party ad networks (such as Google AdSense). These ad
            networks use cookies and tracking technologies to deliver targeted advertisements based on user visits to this
            and other sites across the internet.
          </p>

          <h2 className="font-serif text-2xl text-brand-900 pt-4">5. Contact Us</h2>
          <p>
            If you have any questions or concerns regarding this Disclaimer, please contact us at{' '}
            <a href={`mailto:${SITE.email}`} className="underline hover:text-brand-600 transition-colors">
              {SITE.email}
            </a>{' '}
            or call {SITE.phoneDisplay}.
          </p>
        </div>
      </section>
    </div>
  );
}
