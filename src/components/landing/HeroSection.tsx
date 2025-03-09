import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [text, setText] = useState("");
  const fullText = "Discover the best products for your skin type in minutes.";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 50);

      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-white to-pink-50 overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Your Personalized Skincare Routine, Powered by AI.
            </h1>
            <p className="text-xl text-gray-700 mb-8 h-16">
              {text}
              <span className="animate-pulse">|</span>
            </p>
            <Button
              className="bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white px-8 py-6 text-lg rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              asChild
            >
              <Link to="/quiz">Start Your Free Skin Quiz</Link>
            </Button>
          </motion.div>

          <div className="relative">
            <motion.div
              className="absolute top-0 right-0 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
              animate={{
                x: [0, 30, 0],
                y: [0, 15, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 8,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
              animate={{
                x: [0, -20, 0],
                y: [0, 20, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 10,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
              animate={{
                x: [0, 15, 0],
                y: [0, -25, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 12,
                ease: "easeInOut",
              }}
            />
            <motion.img
              src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&q=80"
              alt="Skincare products"
              className="relative z-10 rounded-2xl shadow-2xl max-w-full mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
