
import { getProjects } from "@/lib/data";
import type { Metadata } from 'next';
import ProjetsClient from './client';

export const metadata: Metadata = {
    title: 'Nos Projets - Tremplin Video Lab',
    description: 'Découvrez les projets et univers de Tremplin Video Lab.',
    alternates: {
        canonical: '/projets',
    },
};

export default async function ProjetsPage() {
  const projects = await getProjects();
  const sortedProjects = [...projects].sort((a, b) => a.position - b.position);

  return <ProjetsClient projects={sortedProjects} />;
}
