
'use client';
import { VideoCard } from "@/components/video-card";
import { getVideos } from "@/lib/data";
import { useI18n } from "@/hooks/use-i18n";
import { useState, useEffect } from 'react';
import type { Video } from '@/lib/definitions';

export default function VideosPage() {
  const { dict } = useI18n();
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    async function fetchVideos() {
      const fetchedVideos = await getVideos();
      setVideos(fetchedVideos);
    }
    fetchVideos();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-8">
        <h1 className="font-headline text-4xl font-bold tracking-tight">{dict.videosPage.allVideos}</h1>
        <p className="text-muted-foreground mt-2">{dict.videosPage.browse}</p>
      </div>

      {videos.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 border rounded-lg">
            <h2 className="text-xl font-semibold">{dict.videosPage.noVideos}</h2>
            <p className="text-muted-foreground mt-2">{dict.videosPage.checkBack}</p>
        </div>
      )}
    </div>
  );
}
