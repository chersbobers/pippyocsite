export async function GET() {
  // Simulate API response with dynamic data
  const mockData = {
    subscribers: 1100 + Math.floor(Math.random() * 50),
    totalViews: 45000 + Math.floor(Math.random() * 1000),
    videoCount: 38,
    latestVideo: {
      title: "2:27 Of Random And Useless Obby Creator Facts",
      views: 523 + Math.floor(Math.random() * 100),
      uploadTime: "5 days ago",
      likes: 96,
    },
  }

  return Response.json(mockData)
}
