
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
      <div className="container mx-auto px-4">
        <section className="text-center">
          <div className="border bg-card text-card-foreground p-8 rounded-lg">
            <div className="flex justify-center items-center gap-4 md:gap-8 mb-8 flex-wrap">
              <div className="w-24 h-24 md:w-28 md:h-28 flex-shrink-0">
                <FullLogo className="text-foreground w-full h-full" />
              </div>
              <div className="font-headline text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter">
                Tremplin Video Lab
              </div>
              <div className="w-full">
            <div className="w-2/5 mx-auto my-6 h-[3px] bg-border" />
            <h1 className="font-headline text-xl font-bold tracking-tight mb-6">
              Tremplin Video Lab conçoit des vidéos d'animations à partir de scénarios originaux.
            </h1>
            <p className="leading-relaxed">
              Une approche pragmatique : combiner les outils de créations classiques et l'IA générative pour atteindre le meilleur rapport qualité / temps de production.
            </p>
          </div>
            </div>
          </div>
        </section>
      </div>



      <section className="w-full bg-white py-16 md:py-24 border-y">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-gray-800">
            <h2 className="font-headline text-[20px] font-bold tracking-tight mb-6">
              Qui sommes-nous ?
            </h2>
            <p className="leading-relaxed">
            Nous sommes une équipe de deux freelances qui combine ses expertises pour produire des vidéos et développer des applications, en associant des outils de création standards à l’intelligence artificielle générative.
            <br/><br/>
            Notre ambition : offrir le meilleur équilibre entre qualité et délais de production, tout en garantissant un rendu de qualité, rapide et adapté à vos usages (marketing, réseaux sociaux, démonstrations produit, prototypes, etc.).
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
            À court terme, nos efforts se concentrent sur deux projets phares : <a href="/des-jeux-olympiques-aux-zoolympic-games" className="text-primary hover:underline font-bold">Zoolympic Games</a> et son <i className="font-bold">(spin-off)</i>, <a href="/des-jeux-olympiques-au-zoolympic-world" className="text-primary hover:underline font-bold">Zoolympic World</a>. 
            <br/><br/>
            Parallèlement, nous développons un troisième projet actuellement en phase de conception. Nous partagerons davantage d'informations lorsqu’il atteindra un niveau de maturité suffisamment important.
            <br/><br/>
            La production régulière de vidéos pour notre <a href="https://www.youtube.com/@TremplinVideoLab" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">chaîne YouTube</a> nous permet d’expérimenter progressivement différents aspects de la conception de cinématiques, de renforcer notre savoir-faire et d’accélérer le développement de ce futur projet.
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
