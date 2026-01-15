
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
      <div className="container mx-auto px-4 py-8 md:py-12">
        <section className="text-center pt-16 md:pt-24 mb-16">
          <div className="border bg-card text-card-foreground p-8 rounded-lg">
            <div className="flex justify-center items-center gap-4 md:gap-8 mb-8 flex-wrap">
              <div className="w-24 h-24 md:w-28 md:h-28 flex-shrink-0">
                <FullLogo className="text-foreground w-full h-full" />
              </div>
              <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter">
                {homepageContent.headline}
              </h1>
            </div>
            
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground whitespace-pre-line">
              {homepageContent.subheadline}
            </p>
          </div>
        </section>
      </div>

      <section className="bg-white text-gray-800 py-16 md:py-24 border-y">
        <div className="container mx-auto px-4">
          <h2 className="font-headline text-xl font-bold tracking-tight text-left max-w-4xl mx-auto leading-relaxed">
          Tremplin Video Lab est un laboratoire indépendant spécialisé dans le test et la comparaison des meilleurs outils d’IA générative du marché. Nous explorons en continu les solutions de création vidéo, de montage, de génération d’images, de voix IA et d’automatisation, afin d’identifier les outils les plus efficaces selon chaque besoin.
          <br /><br />
          Notre équipe réunit deux freelances qui associent leurs compétences pour produire des vidéos et développer des applications en combinant outils de création standards et intelligence artificielle générative. Objectif : obtenir le meilleur rapport qualité / temps de production, tout en assurant un rendu professionnel, rapide et adapté à tes usages (contenus marketing, réseaux sociaux, démonstrations produit, prototypes, etc.).
          </h2>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <section className="py-16 md:py-24">
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
        </section>
      </div>
    </>
  );
}
