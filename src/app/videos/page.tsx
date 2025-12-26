import { VideoCard } from "@/components/video-card";
import { getVideos } from "@/lib/data";

export default async function VideosPage() {
  const videos = await getVideos();

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-8">
        <h1 className="font-headline text-4xl font-bold tracking-tight">All Videos</h1>
        <p className="text-muted-foreground mt-2">Browse our full collection of amazing content.</p>
      </div>

      {videos.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 border rounded-lg">
            <h2 className="text-xl font-semibold">No Videos Yet</h2>
            <p className="text-muted-foreground mt-2">Check back later for new content!</p>
        </div>
      )}
    </div>
  );
}
