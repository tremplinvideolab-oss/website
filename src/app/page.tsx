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
import { ArrowRight, Youtube, Facebook, Instagram } from 'lucide-react';
import { useI18n } from '@/hooks/use-i18n';
import { useEffect, useState } from 'react';
import type { Video, HomepageContent } from '@/lib/definitions';
import { FullLogo } from '@/components/logo-full';

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.5.04-4.87-1.1-6.73-3.04-1.25-1.3-2.07-2.82-2.31-4.5-1.51.02-3.02.01-4.53.01v-4.13c1.44.02 2.88.02 4.32.02.16-1.18.49-2.32 1.02-3.39.6-1.17 1.41-2.22 2.4-3.11 1.08-1 2.33-1.74 3.73-2.27.02-2.56-.01-5.12.01-7.68z" />
    </svg>
);

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
      <div className="container mx-auto px-4 py-8">
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
            <div className="w-2/5 mx-auto my-6 h-[3px] bg-border mb-8" />
            <h1 className="font-headline text-xl font-bold tracking-tight mb-6 mt-5">
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

      <section className="w-full bg-muted/40 py-5">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Link href="https://www.youtube.com/@TremplinVideoLab?sub_confirmation=1" target="_blank" rel="noopener noreferrer" className="group block px-8 py-5 rounded-lg border bg-card text-card-foreground hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                    <div className="flex flex-col items-center text-center gap-4">
                        <Youtube className="h-12 w-12 text-red-600 group-hover:scale-110 transition-transform" />
                        <h3 className="font-headline text-xl font-bold">La chaîne Youtube !</h3>
                    </div>
                </Link>
                <Link href="https://www.facebook.com/profile.php?id=61586480589051" target="_blank" rel="noopener noreferrer" className="group block px-8 py-5 rounded-lg border bg-card text-card-foreground hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                    <div className="flex flex-col items-center text-center gap-4">
                        <Facebook className="h-12 w-12 group-hover:scale-110 transition-transform" />
                        <h3 className="font-headline text-xl font-bold">Notre Facebook</h3>
                    </div>
                </Link>
                <Link href="https://www.instagram.com/tremplinvideolab/" target="_blank" rel="noopener noreferrer" className="group block px-8 py-5 rounded-lg border bg-card text-card-foreground hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                    <div className="flex flex-col items-center text-center gap-4">
                        <Instagram className="h-12 w-12 group-hover:scale-110 transition-transform" />
                        <h3 className="font-headline text-xl font-bold">Notre Instagram</h3>
                    </div>
                </Link>
                <Link href="https://www.tiktok.com/@tremplinvideolab" target="_blank" rel="noopener noreferrer" className="group block px-8 py-5 rounded-lg border bg-card text-card-foreground hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                    <div className="flex flex-col items-center text-center gap-4">
                        <TikTokIcon className="h-12 w-12 group-hover:scale-110 transition-transform" />
                        <h3 className="font-headline text-xl font-bold">Notre TikTok</h3>
                    </div>
                </Link>
            </div>
        </div>
      </section>

      <section className="w-full bg-white py-16 md:py-24 border-y">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-gray-800">
            <h2 className="font-headline text-[20px] font-bold tracking-tight mb-6">
              Qui sommes-nous ?
            </h2>
            <p className="leading-relaxed">
            Nous sommes une équipe de deux indépendants qui combine ses expertises pour produire des vidéos et développer des applications, en associant des outils de création standards à l’intelligence artificielle générative.
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
            À court terme, nos efforts se concentrent sur deux projets phares : <a href="/des-jeux-olympiques-aux-zoolympic-games" className="text-primary hover:underline font-bold">Zoolympic Games</a> et son <i>spin-off</i>, <a href="/des-jeux-olympiques-au-zoolympic-world" className="text-primary hover:underline font-bold">Zoolympic World</a>. 
            <br/><br/>
            Parallèlement, nous développons un troisième projet actuellement en phase de conception. Nous partagerons davantage d'informations lorsqu’il atteindra un niveau de maturité suffisamment important.
            <br/><br/>
            La production régulière de vidéos pour notre <a href="https://www.youtube.com/@TremplinVideoLab?sub_confirmation=1" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">chaîne YouTube</a> nous permet d’expérimenter progressivement différents aspects de la conception de cinématiques, de renforcer notre savoir-faire et d’accélérer le développement de ce futur projet.
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
