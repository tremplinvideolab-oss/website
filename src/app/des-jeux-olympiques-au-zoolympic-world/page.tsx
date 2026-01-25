
import { getVideos } from "@/lib/data";
import type { Metadata } from 'next';
import ZoolympicWorldClient from './client';

export const metadata: Metadata = {
    title: 'Zoolympic World - Tremplin Video Lab',
    description: 'Découvrez nos animaux athlètes dans des contextes extra-sportifs.',
    alternates: {
        canonical: '/des-jeux-olympiques-au-zoolympic-world',
    },
};

export default async function ZoolympicWorldPage() {
  const allVideos = await getVideos();
  const projectVideos = allVideos.filter(v => v.project === 'zoolympic-world');

  return <ZoolympicWorldClient projectVideos={projectVideos} />;
}
