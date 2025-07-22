"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Play,
  Users,
  ShoppingBag,
  Truck,
  Shield,
  CreditCard,
  Gamepad2,
  Trophy,
  Zap,
  RefreshCw,
  TrendingUp,
} from "lucide-react";
import { ChannelStats } from "@/components/channel-stats";
import { AnimatedCounter } from "@/components/animated-counter";
import { DitherBackground } from "@/components/dither-background";
import { TextType } from "@/components/text-type";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  const videos = [
    {
      id: "1",
      title: "2:27 Of Random And Useless Obby Creator Facts",
      thumbnail: "/placeholder.svg?height=180&width=320&text=Obby+Facts",
      views: "523 views",
      duration: "2:27",
      uploadTime: "5 days ago",
      embedId: "dQw4w9WgXcQ",
    },
    {
      id: "2",
      title: "If Countries Had Obbies... 🌍 (Roblox Obby Creator)",
      thumbnail: "/placeholder.svg?height=180&width=320&text=Countries+Obbies",
      views: "818 views",
      duration: "8:45",
      uploadTime: "4 weeks ago",
      embedId: "dQw4w9WgXcQ",
    },
    {
      id: "3",
      title: "BUT THE WHEEL DECIDES WHAT I BUILD! (Obby Creator)",
      thumbnail: "/placeholder.svg?height=180&width=320&text=Wheel+Decides",
      views: "570 views",
      duration: "12:30",
      uploadTime: "1 month ago",
      embedId: "dQw4w9WgXcQ",
    },
    {
      id: "4",
      title: "The Ten Stages of Every Obby Creator Player",
      thumbnail: "/placeholder.svg?height=180&width=320&text=Ten+Stages",
      views: "21K views",
      duration: "6:15",
      uploadTime: "1 month ago",
      embedId: "dQw4w9WgXcQ",
    },
    {
      id: "5",
      title: "Playing Your Obbies! Pt 4 (Obby Creator)",
      thumbnail: "/placeholder.svg?height=180&width=320&text=Playing+Obbies",
      views: "1.2K views",
      duration: "15:22",
      uploadTime: "2 months ago",
      embedId: "dQw4w9WgXcQ",
    },
    {
      id: "6",
      title: "How to Get Every EASY EGG in THE *NEW* EGG HUNT!",
      thumbnail: "/placeholder.svg?height=180&width=320&text=Egg+Hunt",
      views: "1.5K views",
      duration: "9:18",
      uploadTime: "3 months ago",
      embedId: "dQw4w9WgXcQ",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    const refreshInterval = setInterval(() => {
      setLastUpdated(new Date());
    }, 300000);

    return () => {
      clearTimeout(timer);
      clearInterval(refreshInterval);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mb-6 mx-auto animate-pulse">
            <span className="text-white font-black text-2xl">P</span>
          </div>
          <div className="text-green-800 text-xl font-bold mb-4">
            <TextType text="Loading PIPPY's Universe..." speed={80} />
          </div>
          <div className="flex space-x-2 justify-center">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-bounce"></div>
            <div
              className="w-3 h-3 bg-green-500 rounded-full animate-bounce"
              style={{ animationDelay: "0.1s" }}
            ></div>
            <div
              className="w-3 h-3 bg-green-600 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 relative overflow-hidden">
      <DitherBackground />

      {/* Top Banner */}
      <div className="w-full bg-gradient-to-r from-green-100 via-white to-green-100 border-b-2 border-green-200 shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <img 
            src="/images/pippy-banner.png" 
            alt="PIPPY Banner" 
            className="w-full max-w-6xl mx-auto rounded-lg shadow-xl border-2 border-green-300 hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-green-200 bg-white/80 backdrop-blur-xl sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-green-400 via-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg border-2 border-green-200">
                  <span className="text-white font-black text-xl">P</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gray-400 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800 tracking-tight">
                  PIPPY
                </h1>
                <p className="text-sm text-gray-600 font-medium">
                  ● Offline • Roblox Obby Creator
                </p>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center mb-12">
              <div className="relative mb-8">
                  <div className="w-40 h-40 bg-gradient-to-br from-green-400 via-green-500 to-green-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-green-200 hover:scale-110 transition-transform duration-500 cursor-pointer">
                    <span className="text-white font-black text-5xl">P</span>
                  </div>
                <div className="absolute -bottom-2 -right-2 bg-gray-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  OFFLINE
                </div>
              </div>

              <h2 className="text-7xl font-black mb-6 tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-green-700 to-green-800">
                  <TextType text="PIPPY" speed={150} />
                </span>
                <span className="text-gray-800">OC</span>
              </h2>

              <div className="flex items-center space-x-3 mb-4">
                <p className="text-2xl text-gray-700 font-bold">@PippyOC</p>
                <Badge className="bg-green-100 text-green-700 border border-green-300">
                  Verified Creator
                </Badge>
              </div>

              <p className="text-xl text-gray-600 max-w-3xl leading-relaxed mb-6">
                <TextType
                  text="i like obby creator a bit too much... 🎮 Creating epic Roblox content and sharing obby secrets!"
                  speed={50}
                />
              </p>

              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <RefreshCw className="w-4 h-4 mr-1" />
                  <span>Last updated: {lastUpdated.toLocaleTimeString()}</span>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="w-4 h-4 mr-1 text-green-500" />
                  <span className="text-green-600">Growing Fast!</span>
                </div>
              </div>
            </div>

            <ChannelStats />

            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-lg px-10 py-4 shadow-lg hover:shadow-green-500/25 transition-all duration-300 hover:scale-105"
                >
                  <Play className="w-6 h-6 mr-3" />
                  Watch Latest Video
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-green-400 text-green-600 hover:bg-green-50 text-lg px-10 py-4 hover:scale-105 transition-all duration-300 bg-transparent"
                >
                  <Gamepad2 className="w-6 h-6 mr-3" />
                  Play My Obbies
                </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section with Rolling Gallery */}
      <section id="videos" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800 mb-6">
              <TextType text="Latest Roblox Content" speed={100} />
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-xl leading-relaxed">
              Check out my newest Obby Creator tutorials, gameplay, and epic
              builds! 🎮
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <Card key={video.id} className="overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-105 bg-white border border-green-200 group">
                <div className="aspect-video bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center relative overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded-md text-xs">
                    {video.duration}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                    {video.title}
                  </h4>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>{video.views}</span>
                    <span className="mx-2">•</span>
                    <span>{video.uploadTime}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Merch Section */}
      <section id="merch" className="py-20 px-4 bg-green-50/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800 mb-6">
              <TextType text="Official PIPPY Merch" speed={80} />
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-xl leading-relaxed">
              Rep the Obby Creator community with exclusive PIPPY merchandise!
              ✨
            </p>
          </div>

          <div className="flex justify-center items-center space-x-12 mb-16">
            {[
              {
                icon: Shield,
                text: "Secure Checkout",
                color: "text-green-600",
              },
              { icon: Truck, text: "Fast Shipping", color: "text-green-600" },
              {
                icon: CreditCard,
                text: "Money Back Guarantee",
                color: "text-green-600",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center text-gray-600 hover:text-green-600 transition-all duration-300 hover:scale-110"
              >
                <item.icon className={`w-6 h-6 mr-3 ${item.color}`} />
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Official PIPPY Roblox Tee",
                price: "$19.99",
                image: "PIPPY+Roblox+Tee",
                badge: "Best Seller",
              },
              {
                name: "Obby Creator Hoodie",
                price: "$39.99",
                image: "Obby+Creator+Hoodie",
                badge: "Limited Edition",
              },
              {
                name: "PIPPY Gaming Mug",
                price: "$12.99",
                image: "Gaming+Mug",
                badge: "New",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-105 bg-white border border-green-200 group"
              >
                <div className="aspect-square bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center relative overflow-hidden">
                  <img
                    src={`/placeholder.svg?height=300&width=300&text=${item.image}`}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 right-4 bg-green-500 text-white border-0">
                    {item.badge}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h4 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                    {item.name}
                  </h4>
                  <p className="text-gray-600 mb-6">
                    Premium quality with authentic PIPPY branding
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-green-600">
                      {item.price}
                    </span>
                      <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 hover:shadow-lg transition-all duration-300 hover:scale-105">
                        <ShoppingBag className="w-4 h-4 mr-2" />
                        Add to Cart
                      </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto text-center">
            <h3 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800 mb-8">
              <TextType text="About PIPPY" speed={120} />
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-4xl mx-auto">
              Hey there! I'm PIPPY, and I'm absolutely obsessed with Roblox Obby
              Creator! 🎮 I create tutorials, showcase amazing community builds,
              and share all the secrets I've discovered. Join our growing
              community of{" "}
              <AnimatedCounter
                end={1100}
                duration={2000}
                className="text-green-600 font-bold"
              />
              + obby enthusiasts and let's build something epic together!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Trophy,
                  title: "Expert Builder",
                  description:
                    "With hundreds of obbies created and countless hours in Obby Creator, I know all the tricks!",
                },
                {
                  icon: Users,
                  title: "Community First",
                  description:
                    "I love featuring community creations and helping fellow builders improve their skills.",
                },
                {
                  icon: Zap,
                  title: "Always Creating",
                  description:
                    "New videos every week with fresh content, tutorials, and the latest updates!",
                },
              ].map((item, index) => (
                  <Card key={index} className="p-8 bg-green-50/50 border border-green-200 hover:border-green-300 transition-all duration-500 hover:scale-105 group cursor-pointer">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-2xl text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-black text-lg">P</span>
                </div>
                <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-100">
                  PIPPY
                </span>
              </div>
              <p className="text-green-100 leading-relaxed">
                Creating epic Roblox content for the obby community! Join the
                adventure! 🚀
              </p>
            </div>

            {[
              {
                title: "Content",
                links: [
                  "Latest Videos",
                  "Obby Tutorials",
                  "Community Builds",
                  "Live Streams",
                ],
              },
              {
                title: "Shop",
                links: [
                  "Merchandise",
                  "Shipping Info",
                  "Returns",
                  "Size Guide",
                ],
              },
              {
                title: "Connect",
                links: ["YouTube", "Roblox Profile", "Discord", "Twitter"],
              },
            ].map((section, index) => (
              <div key={index}>
                <h5 className="font-bold text-lg mb-4 text-green-300">
                  {section.title}
                </h5>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="text-green-100 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-green-800 mt-12 pt-8 text-center">
            <p className="text-green-200">
              &copy; 2024 PIPPY. All rights reserved. | Not affiliated with
              Roblox Corporation
            </p>
            <p className="text-green-300 text-sm mt-2">
              Last updated: {lastUpdated.toLocaleString()} • Auto-refreshing
              every 5 minutes
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
