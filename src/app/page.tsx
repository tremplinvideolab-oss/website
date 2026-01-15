
'use client';
import Image from 'next/image';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { getLatestVideos, getHomepageContent } from '@/lib/data';
import { VideoCard } from '@/components/video-card';
import { ArrowRight } from 'lucide-react';
import { useI18n } from '@/hooks/use-i18n';
import { useEffect, useState } from 'react';
import type { Video, HomepageContent } from '@/lib/definitions';
import { FullLogo } from '@/components/logo-full';

export default function Home() {
  const { dict, locale } = useI18n();
  const [latestVideos, setLatestVideos] = useState<Video[]>([]);
  const [homepageContent, setHomepageContent] = useState<HomepageContent>({
    headline: '',
    subheadline: '',
  });

  useEffect(() => {
    async function fetchData() {
      const [videos, content] = await Promise.all([
        getLatestVideos(),
        getHomepageContent(),
      ]);
      setLatestVideos(videos);
      setHomepageContent(content);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="container mx-auto px-4 pt-8">
        <section className="text-center">
          <div className="border bg-card text-card-foreground p-8 rounded-lg">
            <div className="flex justify-center items-center gap-4 md:gap-8 mb-8 flex-wrap">
              <div className="w-24 h-24 md:w-28 md:h-28 flex-shrink-0">
                <FullLogo className="text-foreground w-full h-full" />
              </div>
              <div className="font-headline text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter">
                Tremplin Video Lab
              </div>
            </div>
            
            <h2 className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground whitespace-pre-line font-bold">
              {homepageContent.subheadline}
            </h2>
          </div>
        </section>
      </div>

      <section className="w-full bg-white py-16 md:py-24 border-y">
        <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-gray-800">
                <h1 className="text-xl font-bold tracking-tight mb-6">
                Tremplin Video Lab conçoit des vidéos d'animations à partir de scénarios originaux.
                </h1>
                <hr className="w-1/2 mx-auto border-border mb-12" />
                <h2 className="text-xl font-bold tracking-tight mb-6">
                Qui sommes-nous ?
                </h2>
                <p className="leading-relaxed">
                Notre équipe réunit deux freelances qui associent leurs compétences pour produire des vidéos et développer des applications en combinant outils de création standards et intelligence artificielle générative. Objectif : obtenir le meilleur rapport qualité / temps de production, tout en assurant un rendu professionnel, rapide et adapté à tes usages (contenus marketing, réseaux sociaux, démonstrations produit, prototypes, etc.).
                </p>
            </div>
        </div>
        <br/>
        <br/>
        <br/>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-gray-800">
            <h2 className="font-headline text-xl font-bold tracking-tight mb-6">
              Quels sont nos objectifs ?
            </h2>
            <p className="leading-relaxed">
             Même si dans un premier temps les projets <a href="/des-jeux-olympiques-aux-zoolympic-games" className="text-primary hover:underline font-bold">Zoolympic Games</a> et son dérivé <em className='italic'>(spin-off)</em> <a href="/des-jeux-olympiques-au-zoolympic-world" className="text-primary hover:underline font-bold">Zoolympic World</a> sont les deux projets principaux de l'équipe, nous travaillons sur un projet en phase de conception, sur lequel nous communiquerons une fois qu'il sera dans une phase suffisamment avancée.
            <br/><br/>
             La création des vidéos de notre <a href="https://www.youtube.com/@TremplinVideoLab" target="_blank" rel="noopener noreferrer">chaîne Youtube</a> nous permettrons de tester petit à petit diverses pans de la conception de cinématiques pour progresser sur notre projet et vous le proposer très prochainement.


             </p>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-16 md:py-24">
        <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
                <h2 className="font-headline text-3xl font-bold tracking-tight">
                {dict.homePage.latestVideos}
                </h2>
                <Button variant="outline" asChild>
                <Link href="/videos">{dict.homePage.viewAll}</Link>
                </Button>
            </div>
            {latestVideos.length > 0 ? (
                <Carousel
                opts={{
                    align: 'start',
                    loop: true,
                }}
                className="w-full"
                >
                <CarouselContent>
                    {latestVideos.map((video) => (
                    <CarouselItem
                        key={video.id}
                        className="md:basis-1/2 lg:basis-1/3"
                    >
                        <div className="p-1">
                        <VideoCard video={video} />
                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden sm:flex" />
                <CarouselNext className="hidden sm:flex" />
                </Carousel>
            ) : (
                <p>{dict.homePage.noVideos}</p>
            )}
        </div>
      </section>
    </>
  );
}
