
import { notFound } from 'next/navigation';
import { getVideoBySlug } from '@/lib/data';
import type { Metadata } from 'next';
import VideoClient from './client';

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.id;
  const video = await getVideoBySlug(slug);

  if (!video) {
    return {
      title: 'Video Not Found',
    }
  }

  return {
    title: video.title,
    description: video.description,
    alternates: {
      canonical: `/videos/${slug}`,
    },
  }
}

export default async function VideoPage({ params }: Props) {
  const slug = params.id as string;
  const video = await getVideoBySlug(slug);

  if (!video) {
    notFound();
  }

  return <VideoClient video={video} />;
}
