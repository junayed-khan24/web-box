import React from "react";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Column 1 */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Digital Agency</h2>
            <p className="text-sm leading-relaxed">
              We create innovative digital solutions to help your business grow in the modern world.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-pink-500 transition">Home</a></li>
              <li><a href="#" className="hover:text-pink-500 transition">About</a></li>
              <li><a href="#" className="hover:text-pink-500 transition">Services</a></li>
              <li><a href="#" className="hover:text-pink-500 transition">Contact</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-pink-500 transition">Web Design</a></li>
              <li><a href="#" className="hover:text-pink-500 transition">Development</a></li>
              <li><a href="#" className="hover:text-pink-500 transition">SEO Optimization</a></li>
              <li><a href="#" className="hover:text-pink-500 transition">Branding</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-pink-500 transition"><Facebook size={22} /></a>
              <a href="#" className="hover:text-pink-500 transition"><Twitter size={22} /></a>
              <a href="#" className="hover:text-pink-500 transition"><Instagram size={22} /></a>
              {/* <a href="#" className="hover:text-pink-500 transition"><Mail size={22} /></a> */}
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Digital Agency. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
