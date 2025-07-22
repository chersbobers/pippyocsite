"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Eye, Gamepad2, TrendingUp } from "lucide-react";
import { AnimatedCounter } from "./animated-counter";
import ClickSpark from "./ClickSpark";

interface ChannelData {
  subscribers: number;
  totalViews: number;
  videoCount: number;
  obbiesCreated: number;
}

export function ChannelStats() {
  const [stats, setStats] = useState<ChannelData>({
    subscribers: 1100,
    totalViews: 45000,
    videoCount: 38,
    obbiesCreated: 150,
  });
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsUpdating(true);
      setTimeout(() => {
        setStats((prev) => ({
          subscribers: prev.subscribers + Math.floor(Math.random() * 3),
          totalViews: prev.totalViews + Math.floor(Math.random() * 50),
          videoCount: prev.videoCount,
          obbiesCreated: prev.obbiesCreated + Math.floor(Math.random() * 1),
        }));
        setIsUpdating(false);
      }, 1000);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const statItems = [
    {
      icon: Users,
      value: stats.subscribers,
      label: "Subscribers",
      suffix: "",
    },
    {
      icon: Eye,
      value: stats.totalViews,
      label: "Total Views",
      suffix: "",
    },
    {
      icon: Gamepad2,
      value: stats.videoCount,
      label: "Videos",
      suffix: "",
    },
    {
      icon: TrendingUp,
      value: stats.obbiesCreated,
      label: "Obbies Created",
      suffix: "+",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {statItems.map((item, index) => (
        <ClickSpark key={index} sparkColor="#10b981">
          <Card
            className={`bg-white/80 backdrop-blur-sm border border-green-200 hover:border-green-300 transition-all duration-500 hover:scale-105 group cursor-pointer ${
              isUpdating ? "animate-pulse" : ""
            }`}
          >
            <CardContent className="pt-8 pb-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-black text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                <AnimatedCounter end={item.value} duration={2000} />
                {item.suffix}
              </div>
              <p className="text-gray-600 font-medium text-sm uppercase tracking-wider">
                {item.label}
              </p>
              {isUpdating && (
                <div className="mt-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-ping mx-auto"></div>
                </div>
              )}
            </CardContent>
          </Card>
        </ClickSpark>
      ))}
    </div>
  );
}
