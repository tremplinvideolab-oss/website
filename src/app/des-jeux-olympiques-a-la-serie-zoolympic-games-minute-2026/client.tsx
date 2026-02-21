
'use client';

import { useI18n } from "@/hooks/use-i18n";
import Link from "next/link";
import Image from 'next/image';
import type { Video } from "@/lib/definitions";
import { VideoCard } from "@/components/video-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ListChecks } from "lucide-react";

export default function ZoolympicGamesMinuteClient({ projectVideos }: { projectVideos: Video[] }) {
  const { dict } = useI18n();

  const sports = [
      "Patinage artistique", 
      "Biathlon", 
      "Curling", 
      "Surf", 
      "Slalom", 
      "Hockey sur glace", 
      "Short-track", 
      "Ski de bosse", 
      "Ski-cross", 
      "Snowboard slopestyle", 
      "Saut à ski", 
      "Skeleton", 
      "Luge", 
      "Bobsleigh", 
      "Free-ski big Air",
      "Ski de fond"
    ];

  return (
    <>
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="mb-8 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight">Zoolympic Games Minute : Les Jeux Olympiques 2026 des animaux</h1>
        </div>
      </div>
      
      <div className="w-full bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center mb-6">
            <Image 
                src="/images/thumb_mariah-la-raie-chante-hero.png" 
                alt="Zoolympic Games Minute Logo"
                width={512}
                height={512}
                className="rounded-lg shadow-lg"
            />
          </div>
          <div className="max-w-4xl mx-auto text-gray-800 space-y-6">
            <p className="leading-relaxed text-lg">
              Découvrez notre série consacrée aux Jeux Olympiques de Milan-Cortina 2026, mettant en scène des animaux dans différents sports ! 
            </p>
            <p className="leading-relaxed">
              Chaque jour, nous avons publié un épisode mettant en valeur une discipline différente.
            </p>
            
            <Card className="bg-muted/40 border-0 text-gray-800">
                <CardHeader>
                    <CardTitle>
                    Voici la liste des disciplines pour lesquelles nous avons conçu un épisode :
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="columns-2 sm:columns-3 gap-4">
                        {sports.map((sport, index) => (
                            <div key={index} className="flex items-start mb-2 break-inside-avoid">
                                <ListChecks className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-1" />
                                <span>{sport}</span>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            <p className="leading-relaxed mt-6">
                Mais Zoolympic Games Minute, c'est aussi une vidéo d'introduction se déroulant dans un train avec les différentes délégations, une vidéo de teasing, et une cérémonie d'ouverture avec une diva : Mariah La Raie qui interprète sa chanson "Héros" !
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
