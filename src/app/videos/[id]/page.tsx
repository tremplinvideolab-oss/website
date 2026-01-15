
'use client';
import { useState, useEffect } from 'react';
import { getVideoById } from '@/lib/data';
import type { Video } from '@/lib/definitions';
import { notFound } from 'next/navigation';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';

function getYouTubeVideoId(url: string) {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);

    if (match && match[2].length === 11) {
        return match[2];
    } else {
        return null;
    }
}


export default function VideoPage({ params }: { params: { id: string } }) {
  const [video, setVideo] = useState<Video | null | undefined>(undefined);

  useEffect(() => {
    async function fetchVideo() {
      const fetchedVideo = await getVideoById(params.id);
      setVideo(fetchedVideo);
    }
    fetchVideo();
  }, [params.id]);

  if (video === undefined) {
    return <div className="container mx-auto px-4 py-8 md:py-12 text-center">Loading...</div>;
  }

  if (video === null) {
    notFound();
  }
  
  const videoId = getYouTubeVideoId(video.videoUrl);

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8 md:py-12">
      <div className="mb-6">
        <h1 className="font-headline text-3xl md:text-4xl font-bold tracking-tight mb-2">{video.title}</h1>
        <Badge variant="outline">
            Published on {format(new Date(video.createdAt), 'PPP')}
        </Badge>
      </div>

      {videoId ? (
        <>
          {video.type === 'video-short' ? (
            <div className="flex justify-center mb-6">
              <div className="overflow-hidden rounded-lg shadow-xl">
                <iframe
                  width="320"
                  height="568"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ) : (
            <div className="mb-6 overflow-hidden rounded-lg shadow-xl">
              <AspectRatio ratio={16 / 9}>
                  <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  ></iframe>
              </AspectRatio>
            </div>
          )}
        </>
      ) : (
        <div className="mb-6 p-8 text-center bg-muted rounded-lg">
            <p className='text-muted-foreground'>Video player is not available for this entry.</p>
        </div>
      )}


      <div>
        <h2 className="font-headline text-2xl font-bold mb-3">Description</h2>
        <p className="text-muted-foreground leading-relaxed">{video.description}</p>
      </div>
    </div>
  );
}
