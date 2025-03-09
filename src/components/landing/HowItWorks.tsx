import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type StepProps = {
  number: number;
  title: string;
  description: string;
  imageSrc: string;
  alt: string;
};

const Step = ({ number, title, description, imageSrc, alt }: StepProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center text-center max-w-xs mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: number * 0.2 }}
    >
      <div className="relative mb-6">
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-300 to-pink-400 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
          {number}
        </div>
        {number < 3 && (
          <div
            className="absolute top-8 left-full w-16 h-0.5 bg-pink-200 hidden md:block"
            style={{ width: "calc(100% - 4rem)" }}
          ></div>
        )}
      </div>
      <motion.div
        className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col"
        whileHover={{ scale: 1.03 }}
      >
        <img
          src={imageSrc}
          alt={alt}
          className="w-32 h-32 object-contain mx-auto mb-4"
        />
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </motion.div>
    </motion.div>
  );
};

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="py-20 bg-gradient-to-b from-pink-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            How It Works
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Three simple steps to your personalized skincare routine
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <Step
            number={1}
            title="Take the Skin Quiz"
            description="Answer a few questions about your skin type, concerns, and goals to help our AI understand your needs."
            imageSrc="https://api.dicebear.com/7.x/avataaars/svg?seed=quiz"
            alt="Quiz icon"
          />
          <Step
            number={2}
            title="Get AI Recommendations"
            description="Our advanced AI analyzes your answers and generates a personalized skincare routine just for you."
            imageSrc="https://api.dicebear.com/7.x/avataaars/svg?seed=ai"
            alt="AI icon"
          />
          <Step
            number={3}
            title="Track Your Progress"
            description="Follow your routine and track your skin's progress over time, with adjustments as needed."
            imageSrc="https://api.dicebear.com/7.x/avataaars/svg?seed=track"
            alt="Progress tracking icon"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
