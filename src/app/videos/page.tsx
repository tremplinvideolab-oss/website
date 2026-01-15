
'use client';
import { VideoCard } from "@/components/video-card";
import { getVideos } from "@/lib/data";
import { useI18n } from "@/hooks/use-i18n";
import { useState, useEffect } from 'react';
import type { Video } from '@/lib/definitions';
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
    <>
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="mb-8">
          <h1 className="font-headline text-4xl font-bold tracking-tight">{dict.videosPage.allVideos}</h1>
          <p className="text-muted-foreground mt-2 mb-12">
            Voici la liste de toutes nos vidéos partagées, à retrouver sur notre 
            <Link href="https://www.youtube.com/@TremplinVideoLab" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1 font-bold">
              chaîne YouTube
            </Link>.
          </p>
        </div>
      </div>

      <section className="w-full whitesection py-16">

        <div className="container mx-auto px-4">
          <div className="text-gray-800">
            <p className="leading-relaxed">
              Nous produisons nos vidéos en combinant des outils de création standards et des solutions d’IA générative.
              <br /><br />
              Cette approche nous permet de proposer, sur notre<Link href="https://www.youtube.com/@TremplinVideoLab" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1 font-bold">chaîne YouTube</Link>, des scénarios variés tout en garantissant une cohérence éditoriale et narrative d’une vidéo à l’autre.
            </p>
          </div>
        </div>
      </section>

      {videos.length > 0 ? (
        <div className="w-full bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {videos.map((video) => (
                  <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="container mx-auto px-4">
            <div className="text-center py-16 border rounded-lg">
                <h2 className="text-xl font-semibold">{dict.videosPage.noVideos}</h2>
                <p className="text-muted-foreground mt-2">{dict.videosPage.checkBack}</p>
            </div>
        </div>
      )}
    </>
  );
}
