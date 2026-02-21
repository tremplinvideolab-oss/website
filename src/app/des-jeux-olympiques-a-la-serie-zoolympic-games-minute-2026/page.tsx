
import { getVideos } from "@/lib/data";
import type { Metadata } from 'next';
import ZoolympicGamesMinuteClient from './client';

export const metadata: Metadata = {
    title: 'Zoolympic Games Minute 2026 - Tremplin Video Lab',
    description: 'Découvrez notre série sur les Jeux Olympiques de Milan-Cortina 2026, avec des animaux athlètes.',
    alternates: {
        canonical: '/des-jeux-olympiques-a-la-serie-zoolympic-games-minute-2026',
    },
};

export default async function ZoolympicGamesMinutePage() {
  const allVideos = await getVideos();
  const projectVideos = allVideos.filter(v => v.project === 'zoolympic-games-minute-2026');

  return <ZoolympicGamesMinuteClient projectVideos={projectVideos} />;
}
