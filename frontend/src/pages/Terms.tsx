import PageHero from '../components/PageHero';
import usePageTitle from '../hooks/usePageTitle';
import { SITE } from '../data';

export default function Terms() {
  usePageTitle(
    'Terms of Use | Veenu Furnitures',
    'Terms of use for the Veenu Furnitures website.'
  );

  return (
    <div className="w-full bg-white pt-16 md:pt-20">
      <PageHero title="Terms of Use" />
      <section className="py-16 md:py-24">
        <div className="container-site max-w-3xl space-y-6 text-sm md:text-base leading-relaxed text-brand-800/80">
          <p>
            Welcome to the Veenu Furnitures website. By browsing this site you agree to the following terms.
          </p>
          <h2 className="font-serif text-2xl text-brand-900 pt-4">Product Information</h2>
          <p>
            We work hard to keep product photos, descriptions and prices accurate. Colours may vary slightly
            depending on your screen, and prices or availability can change without notice. For the latest
            details on any item, please contact us before purchasing.
          </p>
          <h2 className="font-serif text-2xl text-brand-900 pt-4">Purchases</h2>
          <p>
            Some products on this site link to external marketplaces such as Flipkart. Purchases made there
            are governed by that platform&rsquo;s own terms, pricing and return policies. Enquiries made
            through our forms or WhatsApp do not constitute an order until confirmed by our team.
          </p>
          <h2 className="font-serif text-2xl text-brand-900 pt-4">Warranty</h2>
          <p>
            Selected products carry a 3-year manufacturer warranty as stated on their product pages. The
            warranty covers manufacturing defects; normal wear and tear and misuse are not covered.
          </p>
          <h2 className="font-serif text-2xl text-brand-900 pt-4">Liability</h2>
          <p>
            Content on this site is provided for general information about our products and showroom. We
            accept no liability for decisions made based on it — when in doubt, visit us in Kulur,
            Mangaluru or call {SITE.phoneDisplay}.
          </p>
        </div>
      </section>
    </div>
  );
}
