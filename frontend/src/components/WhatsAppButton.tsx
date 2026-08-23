import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'motion/react';
import { SITE } from '../data';

export default function WhatsAppButton() {
  return (
    <motion.a
      href={SITE.whatsapp('Hello Veenu Furnitures! I have an enquiry.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.4 }}
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 hover:bg-[#1EBE5D] transition-transform duration-300"
    >
      <FaWhatsapp className="w-7 h-7" />
    </motion.a>
  );
}
