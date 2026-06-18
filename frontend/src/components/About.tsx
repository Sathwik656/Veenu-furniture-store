import { motion } from 'motion/react';
import { Sofa, ShieldCheck, Tag, ThumbsUp } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-brand-600 mb-4" />,
      title: "Quality Materials",
      description: "We source only premium woods, fabrics, and metals ensuring lasting durability."
    },
    {
      icon: <Tag className="w-8 h-8 text-brand-600 mb-4" />,
      title: "Affordable Pricing",
      description: "Luxury furniture doesn't always have to come with a luxury price tag."
    },
    {
      icon: <Sofa className="w-8 h-8 text-brand-600 mb-4" />,
      title: "Modern Designs",
      description: "Timeless and contemporary pieces curated by our expert interior designers."
    },
    {
      icon: <ThumbsUp className="w-8 h-8 text-brand-600 mb-4" />,
      title: "Trusted Service",
      description: "Unparalleled customer support and seamless delivery to your doorstep."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              <img
                src="/images/about.png"
                alt="Veenu Showroom"
                className="w-full object-cover rounded-sm shadow-xl aspect-[4/5]"
              />
              <div className="absolute -bottom-8 -right-8 bg-brand-900 border-8 border-white text-white p-8 hidden md:block">
                <p className="text-4xl font-serif font-bold">42+</p>
                <p className="text-sm tracking-wider uppercase mt-2 text-brand-100">Years of Excellence</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <h4 className="text-brand-500 font-bold tracking-widest uppercase text-[10px] mb-4 relative pl-12 before:content-[''] before:absolute before:left-0 before:top-1/2 before:w-8 before:h-[1px] before:bg-brand-500">
              About The Brand
            </h4>
            <h2 className="text-4xl lg:text-5xl font-serif text-brand-900 mb-8 leading-[1.1]">
              Crafting Spaces That <span className="italic font-normal">Tell A Story.</span>
            </h2>
            <p className="text-brand-800/80 leading-relaxed mb-6 text-sm">
              At Veenu Furnitures, we believe that your home is an extension of your personality. That's why we obsess over every curve, material, and stitch to deliver furniture that doesn't just fill a space, but elevates it.
            </p>
            <p className="text-brand-800/80 leading-relaxed mb-10 text-sm">
              VEENU FURNITURES has been a trusted brand since 1984. Home to South India’s longest furniture showroom, we offer quality, service, and proudly Made-in-India furniture. From plush sofas to elegant dining sets, our expertly crafted pieces combine style, comfort, and lasting durability.
            </p>
            <div className="border-l border-brand-500 pl-6 my-8">
              <p className="font-serif text-2xl italic text-brand-900">
                &quot;Simplicity is the ultimate sophistication.&quot;
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-brand-50 p-8 hover:bg-brand-100/50 transition-colors duration-300"
            >
              {highlight.icon}
              <h3 className="text-xl font-serif font-bold text-brand-900 mb-3">{highlight.title}</h3>
              <p className="text-sm text-brand-800/70 leading-relaxed">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
