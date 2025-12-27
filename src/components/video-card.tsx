
'use client';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import type { Video } from '@/lib/definitions';
import { PlayCircle } from 'lucide-react';
import Link from 'next/link';
import { Badge } from './ui/badge';
import { formatDistanceToNow, formatDistanceToNowStrict } from 'date-fns';
import { fr } from 'date-fns/locale';
import { useI18n } from '@/hooks/use-i18n';

interface VideoCardProps {
  video: Video;
}

export function VideoCard({ video }: VideoCardProps) {
  const { locale, dict } = useI18n();
  
  const postedAt = () => {
    if (locale === 'fr') {
      return formatDistanceToNowStrict(new Date(video.createdAt), { addSuffix: true, locale: fr });
    }
    return formatDistanceToNow(new Date(video.createdAt), { addSuffix: true });
  }

  return (
    <Card className="overflow-hidden h-full flex flex-col group transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="p-0">
        <Link href={`/videos/${video.id}`} className="relative block">
          <Image
            src={video.thumbnailUrl}
            alt={`Thumbnail for ${video.title}`}
            width={600}
            height={400}
            className="aspect-video w-full object-cover"
            data-ai-hint={video.thumbnailHint}
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <PlayCircle className="h-16 w-16 text-white/80" />
          </div>
        </Link>
      </CardHeader>
      <CardContent className="p-4 flex-grow flex flex-col">
        <CardTitle className="font-headline text-lg leading-tight mb-2">
          <Link href={`/videos/${video.id}`} className="hover:text-primary transition-colors">
            {video.title}
          </Link>
        </CardTitle>
        <CardDescription className="flex-grow text-sm mb-4 line-clamp-3">
          {video.description}
        </CardDescription>
        <div className="mt-auto">
          <Badge variant="outline">{postedAt()}</Badge>
        </div>
      </CardContent>
    </Card>
  );
}
