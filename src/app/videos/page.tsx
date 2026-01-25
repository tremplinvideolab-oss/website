
import { getVideos } from "@/lib/data";
import type { Metadata } from 'next';
import VideosClient from './client';

export const metadata: Metadata = {
    title: 'Toutes les vidéos - Tremplin Video Lab',
    description: 'Parcourez toutes les vidéos créées par Tremplin Video Lab.',
    alternates: {
        canonical: '/videos',
    },
};

export default async function VideosPage() {
  const videos = await getVideos();
  return <VideosClient videos={videos} />;
}
