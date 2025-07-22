"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight, Play, Eye, Clock } from "lucide-react"

interface Video {
  id: string
  title: string
  thumbnail: string
  views: string
  duration: string
  uploadTime: string
  embedId: string
}

interface RollingGalleryProps {
  videos: Video[]
}

export function RollingGallery({ videos }: RollingGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (direction === "left") {
      setCurrentIndex((prev) => (prev > 0 ? prev - 1 : videos.length - 1))
    } else {
      setCurrentIndex((prev) => (prev < videos.length - 1 ? prev + 1 : 0))
    }
  }

  useEffect(() => {
    if (scrollRef.current) {
      const scrollAmount = currentIndex * 320
      scrollRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      })
    }
  }, [currentIndex])

  return (
    <div className="relative">
      {/* Video Player Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full">
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.embedId}`}
                title={selectedVideo.title}
                className="w-full h-full"
                allowFullScreen
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{selectedVideo.title}</h3>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Eye className="w-4 h-4 mr-1" />
                  {selectedVideo.views}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {selectedVideo.uploadTime}
                </div>
              </div>
            </div>
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 bg-black/50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/70 transition-colors"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Gallery */}
      <div className="relative bg-green-50/50 rounded-2xl p-6 border border-green-200">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-gray-900">Latest Videos</h3>
          <div className="flex space-x-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 bg-green-100 hover:bg-green-200 rounded-full transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-green-700" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 bg-green-100 hover:bg-green-200 rounded-full transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-green-700" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex space-x-4 overflow-x-auto scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {videos.map((video, index) => (
            <div
              key={video.id}
              className={`flex-shrink-0 w-80 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group ${
                index === currentIndex ? "ring-2 ring-green-400 scale-105" : ""
              }`}
              onClick={() => setSelectedVideo(video)}
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Play className="w-12 h-12 text-white" />
                </div>
                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-green-700 transition-colors">
                  {video.title}
                </h4>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center">
                    <Eye className="w-4 h-4 mr-1" />
                    {video.views}
                  </div>
                  <span>{video.uploadTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-green-500" : "bg-green-200"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
