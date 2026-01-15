
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

  const content = locale === 'fr' ? {
    headline: 'Bienvenue chez Tremplin Video Lab',
    subheadline: `Tremplin Video Lab est un jeune laboratoire de test des outils d'IA générative du marché,

L'équipe est composée de deux indépendants unissant leurs efforts pour proposer des vidéos et applications réalisées en essayant de trouver le meilleur rapport qualité / temps passés, et en utilisant les outils de créations standards et l'IA générative`,
  } : {
    headline: 'Welcome to Tremplin Video Lab',
    subheadline: 'Your new destination for discovering and sharing incredible videos. Explore our curated collection from creators around the globe.',
  };


  return (
    <>
      <div className="container mx-auto px-4 py-8 md:py-12">
        <section className="text-center pt-16 md:pt-24 mb-16">
          <div className="border bg-card text-card-foreground p-8 rounded-lg">
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-6">
              {homepageContent.headline}
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground whitespace-pre-line">
              {homepageContent.subheadline}
            </p>
          </div>
        </section>

        <section className="py-12">
            <div className="max-w-4xl mx-auto">
                <div className="aspect-[4/3] relative">
                     <FullLogo className="text-foreground w-full h-full" />
                </div>
            </div>
        </section>

        <section className="py-8 md:py-12 border-t">
          <h2 className="font-headline text-3xl font-bold tracking-tight mb-4">
              L'équipe est composée de deux indépendants unissant leurs efforts pour proposer des vidéos et applications réalisées en essayant de trouver le meilleur rapport qualité / temps passés, et en utilisant les outils de créations standards et l'IA générative
          </h2>
        </section>

        <section className="py-16 md:py-24 border-t">
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
