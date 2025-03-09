import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";

type RoutineStep = {
  id: string;
  name: string;
  completed: boolean;
  imageUrl: string;
  time: string;
};

const Dashboard = () => {
  const [morningRoutine, setMorningRoutine] = useState<RoutineStep[]>([
    {
      id: "1",
      name: "Gentle Foaming Cleanser",
      completed: true,
      imageUrl:
        "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&q=80",
      time: "Morning",
    },
    {
      id: "2",
      name: "Brightening Toner",
      completed: true,
      imageUrl:
        "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&q=80",
      time: "Morning",
    },
    {
      id: "3",
      name: "Hydrating Serum",
      completed: false,
      imageUrl:
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&q=80",
      time: "Morning",
    },
    {
      id: "4",
      name: "Daily Moisturizer",
      completed: false,
      imageUrl:
        "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80",
      time: "Morning",
    },
    {
      id: "5",
      name: "SPF 50 Sunscreen",
      completed: false,
      imageUrl:
        "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?w=400&q=80",
      time: "Morning",
    },
  ]);

  const [eveningRoutine, setEveningRoutine] = useState<RoutineStep[]>([
    {
      id: "6",
      name: "Makeup Remover",
      completed: true,
      imageUrl:
        "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&q=80",
      time: "Evening",
    },
    {
      id: "7",
      name: "Gentle Foaming Cleanser",
      completed: true,
      imageUrl:
        "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&q=80",
      time: "Evening",
    },
    {
      id: "8",
      name: "Exfoliating Toner",
      completed: true,
      imageUrl:
        "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&q=80",
      time: "Evening",
    },
    {
      id: "9",
      name: "Retinol Serum",
      completed: false,
      imageUrl:
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&q=80",
      time: "Evening",
    },
    {
      id: "10",
      name: "Night Cream",
      completed: false,
      imageUrl:
        "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80",
      time: "Evening",
    },
  ]);

  const toggleStep = (id: string, time: string) => {
    if (time === "Morning") {
      setMorningRoutine(
        morningRoutine.map((step) =>
          step.id === id ? { ...step, completed: !step.completed } : step,
        ),
      );
    } else {
      setEveningRoutine(
        eveningRoutine.map((step) =>
          step.id === id ? { ...step, completed: !step.completed } : step,
        ),
      );
    }
  };

  const morningProgress =
    (morningRoutine.filter((step) => step.completed).length /
      morningRoutine.length) *
    100;
  const eveningProgress =
    (eveningRoutine.filter((step) => step.completed).length /
      eveningRoutine.length) *
    100;
  const overallProgress =
    ((morningRoutine.filter((step) => step.completed).length +
      eveningRoutine.filter((step) => step.completed).length) /
      (morningRoutine.length + eveningRoutine.length)) *
    100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <header className="py-4 px-6 flex justify-between items-center bg-white shadow-sm">
        <Link
          to="/"
          className="text-2xl font-bold bg-gradient-to-r from-pink-300 to-purple-400 bg-clip-text text-transparent"
        >
          GlowSkin
        </Link>
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            className="border-pink-300 text-pink-600 hover:bg-pink-50"
            asChild
          >
            <Link to="/results">View Routine</Link>
          </Button>
          <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
            Profile
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent inline-block">
              Your Skincare Dashboard
            </h1>
            <p className="text-xl text-gray-600">
              Track your progress and maintain your skincare routine
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Today's Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Overall</span>
                    <span>{Math.round(overallProgress)}%</span>
                  </div>
                  <Progress value={overallProgress} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Streak</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <span className="text-3xl font-bold mr-2">7</span>
                  <span className="text-gray-500">days</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Keep it up! You're building healthy habits.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Skin Goals</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Hydration</span>
                    <span>65%</span>
                  </div>
                  <Progress value={65} className="h-2" />

                  <div className="flex justify-between text-sm mt-3">
                    <span>Texture</span>
                    <span>40%</span>
                  </div>
                  <Progress value={40} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="morning" className="w-full">
            <div className="bg-white rounded-lg overflow-hidden mb-8">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger
                  value="morning"
                  className="text-lg py-3 data-[state=active]:bg-pink-50 rounded-none"
                >
                  Morning Routine
                </TabsTrigger>
                <TabsTrigger
                  value="evening"
                  className="text-lg py-3 data-[state=active]:bg-blue-50 rounded-none"
                >
                  Evening Routine
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="morning" className="space-y-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Morning Steps</h3>
                <div className="flex items-center">
                  <div className="w-32 mr-3">
                    <Progress value={morningProgress} className="h-2" />
                  </div>
                  <span className="text-sm text-gray-500">
                    {Math.round(morningProgress)}% Complete
                  </span>
                </div>
              </div>

              {morningRoutine.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.01 }}
                >
                  <Card
                    className={`border-l-4 ${step.completed ? "border-l-green-500" : "border-l-gray-300"}`}
                  >
                    <CardContent className="p-4 flex items-center">
                      <div className="flex-shrink-0 mr-4">
                        <img
                          src={step.imageUrl}
                          alt={step.name}
                          className="w-12 h-12 rounded-full object-cover border border-gray-200"
                        />
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-medium">{step.name}</h4>
                        <p className="text-sm text-gray-500">
                          Step {index + 1}
                        </p>
                      </div>
                      <Button
                        variant={step.completed ? "default" : "outline"}
                        size="sm"
                        className={
                          step.completed
                            ? "bg-green-500 hover:bg-green-600"
                            : ""
                        }
                        onClick={() => toggleStep(step.id, step.time)}
                      >
                        {step.completed ? "Completed" : "Mark Complete"}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </TabsContent>

            <TabsContent value="evening" className="space-y-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Evening Steps</h3>
                <div className="flex items-center">
                  <div className="w-32 mr-3">
                    <Progress value={eveningProgress} className="h-2" />
                  </div>
                  <span className="text-sm text-gray-500">
                    {Math.round(eveningProgress)}% Complete
                  </span>
                </div>
              </div>

              {eveningRoutine.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.01 }}
                >
                  <Card
                    className={`border-l-4 ${step.completed ? "border-l-green-500" : "border-l-gray-300"}`}
                  >
                    <CardContent className="p-4 flex items-center">
                      <div className="flex-shrink-0 mr-4">
                        <img
                          src={step.imageUrl}
                          alt={step.name}
                          className="w-12 h-12 rounded-full object-cover border border-gray-200"
                        />
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-medium">{step.name}</h4>
                        <p className="text-sm text-gray-500">
                          Step {index + 1}
                        </p>
                      </div>
                      <Button
                        variant={step.completed ? "default" : "outline"}
                        size="sm"
                        className={
                          step.completed
                            ? "bg-green-500 hover:bg-green-600"
                            : ""
                        }
                        onClick={() => toggleStep(step.id, step.time)}
                      >
                        {step.completed ? "Completed" : "Mark Complete"}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
