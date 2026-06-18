import Hero from '../components/Hero';
import About from '../components/About';
import FeaturedProducts from '../components/FeaturedProducts';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Location from '../components/Location';

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <FeaturedProducts />
      <Testimonials />
      {/* <Contact /> */}
      <Location />
    </div>
  );
}
