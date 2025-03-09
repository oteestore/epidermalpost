import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

type TestimonialProps = {
  name: string;
  role: string;
  quote: string;
  rating: number;
  imageSrc: string;
  delay: number;
};

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex space-x-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <motion.svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill={i < rating ? "#FFD700" : "#E2E8F0"}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.1 * i }}
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </motion.svg>
      ))}
    </div>
  );
};

const TestimonialCard = ({
  name,
  role,
  quote,
  rating,
  imageSrc,
  delay,
}: TestimonialProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: delay }}
      whileHover={{ y: -10 }}
      className="px-2"
    >
      <Card className="bg-white/80 backdrop-blur-sm border border-pink-100 shadow-md hover:shadow-xl transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <img
              src={imageSrc}
              alt={name}
              className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-pink-200"
            />
            <div>
              <h4 className="font-bold text-gray-800">{name}</h4>
              <p className="text-sm text-gray-500">{role}</p>
            </div>
          </div>
          <StarRating rating={rating} />
          <p className="italic text-gray-700 font-serif">"{quote}"</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Skincare Enthusiast",
      quote:
        "The personalized routine completely transformed my skin. I've never received so many compliments!",
      rating: 5,
      imageSrc:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
      delay: 0,
    },
    {
      name: "Michael Chen",
      role: "Busy Professional",
      quote:
        "As someone who never had time for skincare, this made it so easy to follow a routine that actually works.",
      rating: 4,
      imageSrc:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
      delay: 0.1,
    },
    {
      name: "Aisha Patel",
      role: "Beauty Blogger",
      quote:
        "I've tried dozens of skincare apps, but this is the only one that truly understood my combination skin needs.",
      rating: 5,
      imageSrc:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&q=80",
      delay: 0.2,
    },
    {
      name: "James Wilson",
      role: "Skincare Newbie",
      quote:
        "The educational content helped me understand why certain ingredients work for my skin type. Game changer!",
      rating: 5,
      imageSrc:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
      delay: 0.3,
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-b from-white to-pink-50"
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
            What Our Users Say
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Join thousands of happy users who have transformed their skincare
            routine
          </motion.p>
        </div>

        <div className="flex overflow-x-auto pb-8 -mx-2 scrollbar-hide">
          <div className="flex space-x-6 px-2 min-w-max">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-80">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
