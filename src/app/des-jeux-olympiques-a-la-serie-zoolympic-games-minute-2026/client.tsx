
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
      { name: "Patinage artistique", url: "https://youtu.be/nyiunFAsEIg" },
      { name: "Hockey sur glace", url: "https://youtu.be/7t9-9xCA3BE" },
      { name: "Curling", url: "https://youtu.be/yDFAiBsKqCw" },
      { name: "Biathlon", url: "https://youtu.be/Eh-t4bJP5pE" },
      { name: "Surf", url: "https://www.youtube.com/watch?v=ZK1v1LiK1r0" },
      { name: "Short-track", url: "https://www.youtube.com/watch?v=3s8hmm05qnM" },
      { name: "Slalom", url: "https://www.youtube.com/watch?v=iGZZqEqilDg" },
      { name: "Bobsleigh", url: "https://www.youtube.com/watch?v=CVG1J9ZF268" },
      { name: "Ski de fond", url: "https://www.youtube.com/watch?v=WDQMWhFIerw" },
      { name: "Saut à ski", url: "https://www.youtube.com/watch?v=infTgldGLcs" },
      { name: "Ski de bosses", url: "https://www.youtube.com/watch?v=BREKyLUWc84" },
      { name: "Skeleton", url: "https://www.youtube.com/watch?v=1gTYKshX79M" },
      { name: "Snowboard slopestyle", url: "https://www.youtube.com/watch?v=rW7PvbjsuYk" },
      { name: "Luge", url: "https://www.youtube.com/watch?v=b1aYxBv6eSA" },
      { name: "Ski-cross", url: "https://www.youtube.com/watch?v=5mgGVh2O-NE" },
      { name: "Free-ski Big Air", url: "https://www.youtube.com/watch?v=IDfZiy2M2SQ" },
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
                      Liste des disciplines sportives pour lesquelles nous avons réalisé des épisodes
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="columns-2 sm:columns-3 gap-4">
                        {sports.map((sport, index) => (
                            <div key={index} className="flex items-start mb-2 break-inside-avoid">
                                <ListChecks className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-1" />
                                <a href={sport.url} target="_blank" rel="noopener noreferrer" className="underline">
                                    {sport.name}
                                </a>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            <div className="leading-relaxed mt-6 space-y-2">
              <p>Mais en plus de ces <b>16 épisodes de la série</b>, Zoolympic Games Minute 2026 c'est aussi :</p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li><a href="https://youtu.be/T3SGrhoQq1g" className="underline">une vidéo d'introduction</a> se déroulant dans un train avec les différentes délégations se rendant aux Zoolympic Games, et teasant la VIP</li>
                <li><a href="https://youtu.be/zyZLj0xF46g" className="underline">une vidéo de teasing</a> annonçant que durant la période des Jeux Olympiques 2026, nous publierons une vidéo par jour</li>
                <li><a href="https://youtu.be/FuP5XC1zZrM" className="underline">une cérémonie d'ouverture</a> des jeux olympiques des animaux 2026 avec une diva : Mariah La Raie qui interprète sa chanson "Héros" !</li>
                <li><a href="https://youtu.be/gCkfrwZeu5g" className="underline">un clip musical Rien n'est impossible</a> interprété là encore par Mariah La Raie.</li>
              </ul>
            </div>
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
