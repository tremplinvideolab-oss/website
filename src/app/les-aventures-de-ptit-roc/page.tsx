
import { getVideos } from "@/lib/data";
import type { Metadata } from 'next';
import PtitRocClient from './client';

export const metadata: Metadata = {
    title: 'Les Aventures de P\'tit Roc - Tremplin Video Lab',
    description: 'Découvrez les aventures de P\'tit Roc, un petit caillou pas comme les autres, devenu vivant grâce à la magie d\'un dessin d\'enfant.',
    alternates: {
        canonical: '/les-aventures-de-ptit-roc',
    },
};

export default async function PtitRocPage() {
  const allVideos = await getVideos();
  const projectVideos = allVideos.filter(v => v.project === 'ptit-roc');

  return <PtitRocClient projectVideos={projectVideos} />;
}
