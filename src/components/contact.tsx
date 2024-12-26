import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-black text-white flex items-center justify-center min-h-screen"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-16">Get in Touch</h2>

        {/* Contact Information */}
        <div className="space-y-6">
          <div className="flex items-center justify-left space-x-4">
            <Mail className="w-6 h-6 text-indigo-400" />
            <span>balakrish4521@gmail.com</span>
          </div>
          <div className="flex items-center justify-left space-x-4">
            <Phone className="w-6 h-6 text-green-400" />
            <span>+91 93618 88150</span>
          </div>
          <div className="flex items-center justify-left space-x-4">
            <MapPin className="w-6 h-6 text-red-400" />
            <span>Dindigul, Tamilnadu</span>
          </div>
        </div>
        <div className="space-y-6 mt-6">
          <div className="flex items-center justify-left space-x-4">
            <Instagram className="w-6 h-6 text-pink-500" />
            <a
              href="https://www.instagram.com/iambalaaaaa__?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow us on Instagram
            </a>
          </div>
          <div className="flex items-center justify-left space-x-4">
            <Linkedin className="w-6 h-6 text-blue-500" />
            <a
              href="https://www.linkedin.com/in/balakrishnan45/"
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect with us on LinkedIn
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
