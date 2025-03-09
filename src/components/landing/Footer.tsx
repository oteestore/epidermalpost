import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <motion.div
          className="h-1 w-full bg-gradient-to-r from-pink-300 via-purple-300 to-green-300 mb-12"
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent inline-block">
              GlowSkin
            </h3>
            <p className="text-gray-600 mb-4">
              Your personalized skincare journey powered by AI technology.
            </p>
            <div className="flex space-x-4">
              {["twitter", "facebook", "instagram", "youtube"].map((social) => (
                <motion.a
                  key={social}
                  href={`#${social}`}
                  className="text-gray-400 hover:text-pink-500 transition-colors"
                  whileHover={{ scale: 1.2 }}
                >
                  <span className="sr-only">{social}</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-gray-800">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About Us", "How It Works", "Pricing", "Blog"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-gray-600 hover:text-pink-500 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-gray-800">Support</h4>
            <ul className="space-y-2">
              {["FAQ", "Contact Us", "Privacy Policy", "Terms of Service"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-gray-600 hover:text-pink-500 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-gray-800">
              Subscribe to Our Newsletter
            </h4>
            <p className="text-gray-600 mb-4">
              Get the latest skincare tips and updates.
            </p>
            <div className="flex">
              <Input
                type="email"
                placeholder="Your email"
                className="rounded-l-md focus:ring-pink-500 focus:border-pink-500 border-gray-300"
              />
              <Button className="bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white rounded-l-none">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} GlowSkin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
