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

export default async function Home() {
  const latestVideos = await getLatestVideos();
  const homepageContent = await getHomepageContent();

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <section className="text-center py-16 md:py-24">
        <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter mb-4">
          {homepageContent.headline}
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-8">
          {homepageContent.subheadline}
        </p>
        <Button asChild size="lg">
          <Link href="/videos">
            Explore Videos <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </section>

      <section className="py-16 md:py-24 border-t">
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-headline text-3xl font-bold tracking-tight">
            Latest Videos
          </h2>
          <Button variant="outline" asChild>
            <Link href="/videos">View All</Link>
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
          <p>No videos available yet.</p>
        )}
      </section>
    </div>
  );
}
