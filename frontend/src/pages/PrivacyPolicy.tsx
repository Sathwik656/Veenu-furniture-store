import PageHero from '../components/PageHero';
import usePageTitle from '../hooks/usePageTitle';
import { SITE } from '../data';

export default function PrivacyPolicy() {
  usePageTitle(
    'Privacy Policy | Veenu Furnitures',
    'How Veenu Furnitures handles your information when you use our website.'
  );

  return (
    <div className="w-full bg-white pt-16 md:pt-20">
      <PageHero title="Privacy Policy" />
      <section className="py-16 md:py-24">
        <div className="container-site max-w-3xl space-y-6 text-sm md:text-base leading-relaxed text-brand-800/80">
          <p>
            Veenu Furnitures respects your privacy. This policy explains what information this website
            collects and how it is used.
          </p>
          <h2 className="font-serif text-2xl text-brand-900 pt-4">Enquiries</h2>
          <p>
            When you contact us through our enquiry form, the details you enter (name, email, phone number
            and message) are passed to us through WhatsApp so we can respond to you directly. We use them
            only to answer your enquiry and never sell or share them with third parties.
          </p>
          <h2 className="font-serif text-2xl text-brand-900 pt-4">Analytics</h2>
          <p>
            This website uses Google Analytics and Umami to understand anonymous usage patterns — such as
            which pages are visited — so we can improve the site. These services may set cookies in your
            browser. You can block or delete cookies through your browser settings at any time.
          </p>
          <h2 className="font-serif text-2xl text-brand-900 pt-4">External Links</h2>
          <p>
            Our product pages link to external marketplaces such as Flipkart, where purchases are processed
            under that platform&rsquo;s own privacy policy. We encourage you to review it before buying.
          </p>
          <h2 className="font-serif text-2xl text-brand-900 pt-4">Contact</h2>
          <p>
            Questions about this policy? Reach us at{' '}
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
