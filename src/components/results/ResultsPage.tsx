import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

type Product = {
  id: string;
  name: string;
  brand: string;
  description: string;
  imageUrl: string;
  step: string;
};

const mockProducts: Product[] = [
  {
    id: "1",
    name: "Gentle Foaming Cleanser",
    brand: "GlowSkin",
    description:
      "A gentle foaming cleanser that removes impurities without stripping the skin.",
    imageUrl:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&q=80",
    step: "Cleanse",
  },
  {
    id: "2",
    name: "Brightening Toner",
    brand: "GlowSkin",
    description:
      "Alcohol-free toner that balances pH and prepares skin for the next steps.",
    imageUrl:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&q=80",
    step: "Tone",
  },
  {
    id: "3",
    name: "Hydrating Serum",
    brand: "GlowSkin",
    description: "Lightweight serum with hyaluronic acid for deep hydration.",
    imageUrl:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&q=80",
    step: "Treat",
  },
  {
    id: "4",
    name: "Daily Moisturizer",
    brand: "GlowSkin",
    description: "Oil-free moisturizer that hydrates without clogging pores.",
    imageUrl:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80",
    step: "Moisturize",
  },
  {
    id: "5",
    name: "SPF 50 Sunscreen",
    brand: "GlowSkin",
    description: "Broad-spectrum protection against UVA and UVB rays.",
    imageUrl:
      "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?w=400&q=80",
    step: "Protect",
  },
];

const ResultsPage = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Simulate API call to get personalized recommendations
    const timer = setTimeout(() => {
      setProducts(mockProducts);
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <header className="py-4 px-6 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold bg-gradient-to-r from-pink-300 to-purple-400 bg-clip-text text-transparent"
        >
          GlowSkin
        </Link>
        <Button
          variant="outline"
          className="border-pink-300 text-pink-600 hover:bg-pink-50"
          asChild
        >
          <Link to="/dashboard">Go to Dashboard</Link>
        </Button>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent inline-block">
              Your Personalized Skincare Routine
            </h1>
            <p className="text-xl text-gray-600">
              Based on your quiz answers, we've created a custom routine just
              for you.
            </p>
          </motion.div>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="w-16 h-16 border-4 border-pink-200 border-t-pink-500 rounded-full animate-spin mb-4"></div>
              <p className="text-gray-600">Analyzing your skin profile...</p>
            </div>
          ) : (
            <div>
              <Tabs defaultValue="morning" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="morning" className="text-lg py-3">
                    Morning Routine
                  </TabsTrigger>
                  <TabsTrigger value="evening" className="text-lg py-3">
                    Evening Routine
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="morning" className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product, index) => (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden">
                          <div className="relative pt-[56.25%] bg-gray-100">
                            <img
                              src={product.imageUrl}
                              alt={product.name}
                              className="absolute top-0 left-0 w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                            />
                            <div className="absolute top-2 left-2 bg-pink-100 text-pink-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                              Step {index + 1}: {product.step}
                            </div>
                          </div>
                          <CardContent className="p-4">
                            <h3 className="font-bold text-lg mb-1">
                              {product.name}
                            </h3>
                            <p className="text-sm text-gray-500 mb-2">
                              {product.brand}
                            </p>
                            <p className="text-gray-700 text-sm">
                              {product.description}
                            </p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="evening" className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products
                      .filter((p) => p.step !== "Protect")
                      .map((product, index) => (
                        <motion.div
                          key={product.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden">
                            <div className="relative pt-[56.25%] bg-gray-100">
                              <img
                                src={product.imageUrl}
                                alt={product.name}
                                className="absolute top-0 left-0 w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                              />
                              <div className="absolute top-2 left-2 bg-pink-100 text-pink-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                                Step {index + 1}: {product.step}
                              </div>
                            </div>
                            <CardContent className="p-4">
                              <h3 className="font-bold text-lg mb-1">
                                {product.name}
                              </h3>
                              <p className="text-sm text-gray-500 mb-2">
                                {product.brand}
                              </p>
                              <p className="text-gray-700 text-sm">
                                {product.description}
                              </p>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                  </div>
                </TabsContent>
              </Tabs>

              <div className="mt-12 text-center">
                <p className="text-gray-600 mb-6">
                  Ready to start your skincare journey?
                </p>
                <Button
                  className="bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white px-8 py-6 text-lg rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                  asChild
                >
                  <Link to="/dashboard">Track Your Progress</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ResultsPage;
