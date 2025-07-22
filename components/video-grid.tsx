"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye, Clock, Star, Play } from "lucide-react"
import { YouTubeEmbed } from "@next/third-parties/google"

interface Video {
  id: string
  title: string
  views: string
  uploadTime: string
  thumbnail: string
  isNew?: boolean
  rating?: number
}

export function VideoGrid() {
  const [videos, setVideos] = useState<Video[]>([
    {
      id: "1",
      title: "2:27 Of Random And Useless Obby Creator Facts",
      views: "523 views",
      uploadTime: "5 days ago",
      thumbnail: "obby-facts",
      isNew: true,
      rating: 96,
    },
    {
      id: "2",
      title: "If Countries Had Obbies... 🌍 (Roblox Obby Creator)",
      views: "818 views",
      uploadTime: "4 weeks ago",
      thumbnail: "countries-obbies",
      rating: 94,
    },
    {
      id: "3",
      title: "BUT THE WHEEL DECIDES WHAT I BUILD! (Obby Creator)",
      views: "570 views",
      uploadTime: "1 month ago",
      thumbnail: "wheel-decides",
      rating: 92,
    },
    {
      id: "4",
      title: "The Ten Stages of Every Obby Creator Player",
      views: "21K views",
      uploadTime: "1 month ago",
      thumbnail: "ten-stages",
      rating: 98,
    },
    {
      id: "5",
      title: "Playing Your Obbies! Pt 4 (Obby Creator)",
      views: "1.2K views",
      uploadTime: "2 months ago",
      thumbnail: "playing-obbies",
      rating: 95,
    },
    {
      id: "6",
      title: "How to Get Every EASY EGG in THE *NEW* EGG HUNT!",
      views: "1.5K views",
      uploadTime: "3 months ago",
      thumbnail: "egg-hunt",
      rating: 97,
    },
  ])

  const [featuredVideo, setFeaturedVideo] = useState(videos[0])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Simulate periodic updates to view counts
    const interval = setInterval(() => {
      setVideos((prev) =>
        prev.map((video) => ({
          ...video,
          views: updateViewCount(video.views),
        })),
      )
    }, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [])

  const updateViewCount = (currentViews: string): string => {
    const num = Number.parseInt(currentViews.replace(/[^\d]/g, ""))
    const increment = Math.floor(Math.random() * 10) + 1
    const newNum = num + increment

    if (newNum >= 1000) {
      return `${(newNum / 1000).toFixed(1)}K views`
    }
    return `${newNum} views`
  }

  const refreshVideos = () => {
    setIsLoading(true)
    setTimeout(() => {
      // Simulate fetching new data
      setVideos((prev) =>
        prev.map((video) => ({
          ...video,
          views: updateViewCount(video.views),
        })),
      )
      setIsLoading(false)
    }, 2000)
  }

  return (
    <section id="videos" className="py-20 px-4 bg-black/10 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 mb-6">
            Latest Roblox Content
          </h3>
          <p className="text-white/80 max-w-2xl mx-auto text-xl leading-relaxed mb-6">
            Check out my newest Obby Creator tutorials, gameplay, and epic builds! 🎮
          </p>
          <button
            onClick={refreshVideos}
            disabled={isLoading}
            className="text-green-400 hover:text-green-300 transition-colors duration-300 flex items-center mx-auto"
          >
            <Eye className={`w-4 h-4 mr-2 ${isLoading ? "animate-spin" : ""}`} />
            {isLoading ? "Updating..." : "Refresh Videos"}
          </button>
        </div>

        {/* Featured Video */}
        <div className="max-w-5xl mx-auto mb-16">
          <Card className="overflow-hidden shadow-2xl bg-black/20 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500">
            <div className="aspect-video relative group">
              <YouTubeEmbed videoid="dQw4w9WgXcQ" height={400} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Badge className="absolute top-4 left-4 bg-red-500/90 text-white animate-pulse">🔴 FEATURED</Badge>
            </div>
            <CardContent className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h4 className="text-3xl font-bold text-white mb-3 hover:text-green-400 transition-colors duration-300">
                    {featuredVideo.title}
                  </h4>
                  <p className="text-white/70 text-lg leading-relaxed">
                    Did you know these crazy facts about Obby Creator? Some of these will absolutely blow your mind!
                    Join me as I reveal the most random and useless (but fun) facts about our favorite game!
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-8 text-white/60">
                <div className="flex items-center">
                  <Eye className="w-5 h-5 mr-2 text-green-400" />
                  <span className="font-medium">{featuredVideo.views}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-blue-400" />
                  <span>{featuredVideo.uploadTime}</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-5 h-5 mr-2 text-yellow-400" />
                  <span>{featuredVideo.rating}% liked</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.slice(1).map((video, index) => (
            <Card
              key={video.id}
              className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-black/20 backdrop-blur-sm border border-white/10 hover:border-white/20 group"
            >
              <div className="aspect-video bg-gradient-to-br from-green-900/20 to-blue-900/20 flex items-center justify-center relative overflow-hidden">
                <img
                  src={`/placeholder.svg?height=200&width=300&text=${video.thumbnail}`}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Play className="w-12 h-12 text-white" />
                </div>
                {video.isNew && <Badge className="absolute top-3 right-3 bg-green-500 animate-pulse">NEW</Badge>}
              </div>
              <CardContent className="p-6">
                <h4 className="font-bold text-lg mb-3 line-clamp-2 text-white group-hover:text-green-400 transition-colors duration-300">
                  {video.title}
                </h4>
                <div className="space-y-2 text-sm text-white/60">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Eye className="w-4 h-4 mr-1 text-green-400" />
                      <span>{video.views}</span>
                    </div>
                    <span>{video.uploadTime}</span>
                  </div>
                  {video.rating && (
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 text-yellow-400" />
                      <span>{video.rating}% liked</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
