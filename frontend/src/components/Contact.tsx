import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-brand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-brand-500 font-bold tracking-widest uppercase text-[10px] mb-3">
              Get in Touch
            </h4>
            <h2 className="text-4xl font-serif text-brand-900 mb-6">
              Let's Discuss Your Space
            </h2>
            <p className="text-brand-800/80 leading-relaxed mb-12 text-sm max-w-md">
              Whether you need styling advice, order support, or simply want to say hello, our dedicated team is ready to assist you.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full border border-brand-200 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-brand-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-900 mb-1 text-sm">Our Showroom</h4>
                  <p className="text-xs text-brand-800/70 leading-relaxed">
                    123 Design Boulevard<br/>
                    Creative District, NY 10001<br/>
                    United States
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full border border-brand-200 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-brand-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-900 mb-1 text-sm">Phone Number</h4>
                  <p className="text-xs text-brand-800/70 mt-1">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full border border-brand-200 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-brand-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-900 mb-1 text-sm">Email Address</h4>
                  <p className="text-xs text-brand-800/70 mt-1">hello@veenufurnitures.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 md:p-10 border border-brand-200 rounded-sm shadow-xl shadow-brand-200/20"
          >
            <h3 className="text-2xl font-serif text-brand-900 mb-8">Send a Message</h3>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-brand-800/70 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 bg-brand-50/50 border border-brand-200 focus:outline-none focus:border-brand-500 text-sm transition-colors rounded-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-widest text-brand-800/70 mb-2">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 bg-brand-50/50 border border-brand-200 focus:outline-none focus:border-brand-500 text-sm transition-colors rounded-sm"
                    placeholder="(555) 000-0000"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-brand-800/70 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 bg-brand-50/50 border border-brand-200 focus:outline-none focus:border-brand-500 text-sm transition-colors rounded-sm"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-brand-800/70 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 bg-brand-50/50 border border-brand-200 focus:outline-none focus:border-brand-500 text-sm transition-colors resize-none rounded-sm"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-4 bg-brand-500 text-white text-xs uppercase tracking-widest font-bold hover:bg-brand-600 transition-colors flex items-center justify-center space-x-2 rounded-sm shadow-lg shadow-brand-900/5 mt-4"
              >
                <span>Send Message</span>
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
