"use client"

export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating Roblox-style blocks */}
      <div
        className="absolute top-20 left-10 w-8 h-8 bg-green-400/20 rotate-12 animate-bounce"
        style={{ animationDelay: "0s", animationDuration: "3s" }}
      ></div>
      <div
        className="absolute top-40 right-20 w-6 h-6 bg-blue-400/20 rotate-45 animate-bounce"
        style={{ animationDelay: "1s", animationDuration: "4s" }}
      ></div>
      <div
        className="absolute bottom-40 left-20 w-10 h-10 bg-purple-400/20 rotate-90 animate-bounce"
        style={{ animationDelay: "2s", animationDuration: "5s" }}
      ></div>
      <div
        className="absolute bottom-20 right-10 w-7 h-7 bg-yellow-400/20 rotate-180 animate-bounce"
        style={{ animationDelay: "0.5s", animationDuration: "3.5s" }}
      ></div>

      {/* Floating circles */}
      <div
        className="absolute top-60 left-1/4 w-4 h-4 bg-green-500/30 rounded-full animate-ping"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-80 right-1/3 w-3 h-3 bg-blue-500/30 rounded-full animate-ping"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-60 left-1/3 w-5 h-5 bg-purple-500/30 rounded-full animate-ping"
        style={{ animationDelay: "0s" }}
      ></div>
    </div>
  )
}
