'use client';

import Image from 'next/image';
import type { Video } from "@/lib/definitions";
import { VideoCard } from "@/components/video-card";

export default function PtitRocClient({ projectVideos }: { projectVideos: Video[] }) {
  return (
    <>
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="mb-8 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight">Les Aventures de P'tit Roc</h1>
        </div>
      </div>
      
      <div className="w-full bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center mb-6">
            <Image 
                src="/images/thumb-ptit-roc-un-voyage-epique.jpg" 
                alt="P'tit Roc"
                width={600}
                height={338}
                className="rounded-lg shadow-lg"
            />
          </div>
          <div className="max-w-4xl mx-auto text-gray-800 space-y-6">
            <p className="leading-relaxed text-lg">
              Découvrez P'tit Roc, un petit caillou devenu vivant grâce à la magie d'un dessin d'enfant.
            </p>
            <p className="leading-relaxed">
              P'tit Roc est un personnage qui a pris vie grâce à un petit garçon qui a simplement dessiné des yeux sur un caillou avec un mystérieux marqueur. Mais ce n'est que le début de l'aventure !
            </p>
            <p className="leading-relaxed">
              Malheureusement, le petit garçon perd P'tit Roc, qui doit alors affronter tous les malheurs du monde lors d'un voyage épique. Suivez ses péripéties dans une histoire surprenante pour tout public.
            </p>
          </div>
        </div>
      </div>

      {projectVideos.length > 0 && (
        <section className="bg-muted/40 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="font-headline text-3xl font-bold tracking-tight mb-8">
              Vidéos du projet :
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectVideos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
