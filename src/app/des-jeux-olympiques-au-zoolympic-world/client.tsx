
'use client';

import { useI18n } from "@/hooks/use-i18n";
import Link from "next/link";
import Image from 'next/image';
import type { Video } from "@/lib/definitions";
import { VideoCard } from "@/components/video-card";

export default function ZoolympicWorldClient({ projectVideos }: { projectVideos: Video[] }) {
  const { dict } = useI18n();

  return (
    <>
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="mb-8 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight">Zoolympic World : Des vidéos des personnages des Zoolympic Games dans des contextes variés</h1>
        </div>
      </div>
      
      <div className="w-full bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center mb-6">
            <Image 
                src="/images/logo-projects/logo_zoolympic_world.png" 
                alt="Zoolympic World Logo"
                width={512}
                height={512}
            />
            </div>
            <div className="text-gray-800 space-y-6">
              <p className="leading-relaxed">
                Zoolympic World : découvrez nos animaux athlètes dans des contextes extra-sportifs.
              </p>
              <p className="leading-relaxed">
                Au-delà de la compétition, nos personnages ont une vie, des habitudes et des centres d’intérêt qui dépassent le seul cadre du sport.
              </p>
              <p className="leading-relaxed">
                C’est pourquoi, en amont des Jeux Olympiques de Milan-Cortina 2026, nous lançons — en complément de <Link href="/des-jeux-olympiques-aux-zoolympic-games" className="text-primary hover:underline font-bold">Zoolympic Games</Link> — une série de vidéos qui met en scène nos animaux dans leur quotidien.
              </p>
              <p className="leading-relaxed">
                Galettes, duels amicaux à l’épée, balades en forêt… leurs passe-temps pourraient vous surprendre, tout comme les lieux dans lesquels ils peuvent être amenés à évoluer.
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
