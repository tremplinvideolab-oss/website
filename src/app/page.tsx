
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
    subheadline: 'Votre nouvelle destination pour découvrir et partager des vidéos incroyables. Explorez notre collection organisée par des créateurs du monde entier.',
  } : {
    headline: 'Welcome to Tremplin Video Lab',
    subheadline: 'Your new destination for discovering and sharing incredible videos. Explore our curated collection from creators around the globe.',
  };


  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <section className="text-center py-16 md:py-24">
        <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter mb-4">
          {content.headline}
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-8">
          {content.subheadline}
        </p>
        <Button asChild size="lg">
          <Link href="/videos">
            {dict.homePage.exploreVideos} <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
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
  );
}
