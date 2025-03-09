import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";

type Question = {
  id: number;
  question: string;
  options: string[];
  imageUrl?: string;
};

const questions: Question[] = [
  {
    id: 1,
    question: "How would you describe your skin type?",
    options: ["Dry", "Oily", "Combination", "Normal", "Sensitive"],
    imageUrl:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80",
  },
  {
    id: 2,
    question: "What are your main skin concerns?",
    options: ["Acne", "Aging", "Hyperpigmentation", "Redness", "Dullness"],
    imageUrl:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80",
  },
  {
    id: 3,
    question: "How much time do you want to spend on your skincare routine?",
    options: [
      "Minimal (2-3 minutes)",
      "Short (5 minutes)",
      "Medium (10 minutes)",
      "Extensive (15+ minutes)",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
  },
  {
    id: 4,
    question: "What's your budget for skincare products?",
    options: [
      "Budget-friendly",
      "Mid-range",
      "High-end",
      "Mix of price points",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&q=80",
  },
  {
    id: 5,
    question: "Do you have any specific ingredients you want to include?",
    options: [
      "Retinol",
      "Vitamin C",
      "Hyaluronic Acid",
      "Niacinamide",
      "None specifically",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?w=800&q=80",
  },
];

const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [direction, setDirection] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = (currentQuestionIndex / questions.length) * 100;

  const handleAnswer = (answer: string) => {
    setAnswers({ ...answers, [currentQuestion.id]: answer });

    if (currentQuestionIndex < questions.length - 1) {
      setDirection(1);
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setDirection(0);
      }, 300);
    } else {
      // Quiz completed, navigate to results
      window.location.href = "/results";
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setDirection(-1);
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
        setDirection(0);
      }, 300);
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex flex-col">
      <header className="py-4 px-6 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold bg-gradient-to-r from-pink-300 to-purple-400 bg-clip-text text-transparent"
        >
          GlowSkin
        </Link>
        <div className="text-sm text-gray-500">
          Question {currentQuestionIndex + 1} of {questions.length}
        </div>
      </header>

      <div className="px-4 sm:px-6 lg:px-8 py-8 flex-grow flex flex-col justify-center items-center max-w-4xl mx-auto w-full">
        <div className="w-full mb-8">
          <Progress value={progress} className="h-2 bg-gray-200" />
        </div>

        <div className="w-full bg-white rounded-2xl shadow-xl overflow-hidden relative">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentQuestionIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "tween", duration: 0.3 }}
              className="p-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    {currentQuestion.question}
                  </h2>
                  <div className="space-y-3">
                    {currentQuestion.options.map((option, index) => (
                      <motion.button
                        key={index}
                        onClick={() => handleAnswer(option)}
                        className={`w-full text-left p-4 rounded-lg border border-gray-200 hover:border-pink-300 hover:bg-pink-50 transition-all ${answers[currentQuestion.id] === option ? "border-pink-500 bg-pink-50" : ""}`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {option}
                      </motion.button>
                    ))}
                  </div>
                </div>
                {currentQuestion.imageUrl && (
                  <div className="hidden md:block">
                    <img
                      src={currentQuestion.imageUrl}
                      alt="Question illustration"
                      className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex justify-between w-full">
          <Button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            variant="outline"
            className={`${currentQuestionIndex === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            Previous
          </Button>

          <div className="text-center text-gray-500">
            {currentQuestionIndex + 1} / {questions.length}
          </div>

          <Button
            onClick={() => (window.location.href = "/results")}
            variant="outline"
            className="opacity-0 pointer-events-none"
          >
            Skip
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
