import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-pink-300 to-purple-400 bg-clip-text text-transparent">
            GlowSkin
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="text-gray-800 hover:text-pink-500 transition-colors"
          >
            Home
          </Link>
          <a
            href="#how-it-works"
            className="text-gray-800 hover:text-pink-500 transition-colors"
          >
            How It Works
          </a>
          <a
            href="#pricing"
            className="text-gray-800 hover:text-pink-500 transition-colors"
          >
            Pricing
          </a>
          <a
            href="#testimonials"
            className="text-gray-800 hover:text-pink-500 transition-colors"
          >
            Testimonials
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Link
            to="/login"
            className="text-gray-800 hover:text-pink-500 transition-colors hidden md:inline-block"
          >
            Sign In
          </Link>
          <Button
            className="bg-gradient-to-r from-green-200 to-green-300 hover:from-green-300 hover:to-green-400 text-gray-800 font-medium transition-all duration-300 transform hover:scale-105"
            asChild
          >
            <Link to="/quiz">Get Started Free</Link>
          </Button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
