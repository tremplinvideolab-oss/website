
import { getVideos } from "@/lib/data";
import type { Metadata } from 'next';
import ZoolympicGamesClient from "./client";

export const metadata: Metadata = {
    title: 'Zoolympic Games - Tremplin Video Lab',
    description: 'Des Jeux Olympiques de Paris 2024 aux JO 2026 de Milan Cortina !',
    alternates: {
        canonical: '/des-jeux-olympiques-aux-zoolympic-games',
    },
};

export default async function ZoolympicGamesPage() {
  const allVideos = await getVideos();
  const projectVideos = allVideos.filter(v => v.project === 'zoolympic-games');

  return <ZoolympicGamesClient projectVideos={projectVideos} />;
}
