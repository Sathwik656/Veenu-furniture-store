import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';

export default function NotFound() {
  usePageTitle('Page Not Found | Veenu Furnitures');

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-brand-50 px-4 pt-16 text-center">
      <div>
        <p className="eyebrow mb-4">404</p>
        <h1 className="font-serif text-3xl md:text-5xl text-brand-900">This page has moved out.</h1>
        <p className="mx-auto mt-5 max-w-md text-sm md:text-base leading-relaxed text-brand-800/70">
          The page you&rsquo;re looking for doesn&rsquo;t exist. Perhaps our catalog or showroom will have
          what you need instead.
        </p>
        <Link to="/" className="btn-primary mt-10">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
