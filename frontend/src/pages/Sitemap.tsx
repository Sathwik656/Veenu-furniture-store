import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import usePageTitle from '../hooks/usePageTitle';
import { products, newsPosts } from '../data';

export default function Sitemap() {
  usePageTitle(
    'HTML Sitemap | Veenu Furnitures',
    'Overview of all pages, categories, and products on Veenu Furnitures website.'
  );

  return (
    <div className="w-full bg-white pt-16 md:pt-20">
      <PageHero title="HTML Sitemap" sub="Quick navigation across all main pages, categories, and articles." />
      <section className="py-16 md:py-24">
        <div className="container-site max-w-4xl">
          <h1 className="font-serif text-3xl text-brand-900 pb-4 mb-8 border-b border-brand-200">
            Site Map &amp; Page Directory
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Main Pages */}
            <div>
              <h2 className="font-serif text-xl text-brand-900 mb-4 pb-2 border-b border-brand-200">
                Main Navigation
              </h2>
              <ul className="space-y-3 text-sm text-brand-800">
                <li><Link to="/" className="hover:text-brand-500 transition-colors">Home Page</Link></li>
                <li><Link to="/about" className="hover:text-brand-500 transition-colors">About Us</Link></li>
                <li><Link to="/products" className="hover:text-brand-500 transition-colors">Complete Products Catalog</Link></li>
                <li><Link to="/news" className="hover:text-brand-500 transition-colors">News &amp; Buying Guides</Link></li>
                <li><Link to="/contact" className="hover:text-brand-500 transition-colors">Contact Us &amp; Location</Link></li>
              </ul>

              <h2 className="font-serif text-xl text-brand-900 mt-8 mb-4 pb-2 border-b border-brand-200">
                Legal &amp; Trust Pages
              </h2>
              <ul className="space-y-3 text-sm text-brand-800">
                <li><Link to="/privacy-policy" className="hover:text-brand-500 transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-brand-500 transition-colors">Terms of Use</Link></li>
                <li><Link to="/disclaimer" className="hover:text-brand-500 transition-colors">Disclaimer</Link></li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <h2 className="font-serif text-xl text-brand-900 mb-4 pb-2 border-b border-brand-200">
                Products &amp; Furniture
              </h2>
              <ul className="space-y-3 text-sm text-brand-800">
                {products.map((p) => (
                  <li key={p.id}>
                    <Link to={`/products/${p.id}`} className="hover:text-brand-500 transition-colors">
                      {p.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Articles & Guides */}
            <div>
              <h2 className="font-serif text-xl text-brand-900 mb-4 pb-2 border-b border-brand-200">
                Articles &amp; Blog Posts
              </h2>
              <ul className="space-y-3 text-sm text-brand-800">
                {newsPosts.map((post) => (
                  <li key={post.slug}>
                    <Link to={`/news/${post.slug}`} className="hover:text-brand-500 transition-colors">
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
