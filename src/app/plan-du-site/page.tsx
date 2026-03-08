
import { getVideos, getProjects } from "@/lib/data";
import type { Metadata } from 'next';
import Link from 'next/link';
import type { Video, Project } from "@/lib/definitions";

export const metadata: Metadata = {
    title: 'Plan du site - Tremplin Video Lab',
    description: 'Retrouvez toutes les pages du site Tremplin Video Lab.',
    alternates: {
        canonical: '/plan-du-site',
    },
};

export default async function PlanDuSitePage() {
    const videos = await getVideos();
    const projects = await getProjects();

    const staticPages = [
        { href: '/', label: 'Accueil' },
        { href: '/videos', label: 'Vidéos' },
        { href: '/projets', label: 'Projets' },
        { href: '/mentions-legales', label: 'Mentions Légales' },
        { href: '/politique-de-confidentialite', label: 'Politique de confidentialité' },
    ];

    return (
        <div className="container mx-auto max-w-4xl px-4 py-8 md:py-12">
            <h1 className="font-headline text-4xl font-bold tracking-tight mb-8">Plan du site</h1>

            <div className="space-y-8">
                <section>
                    <h2 className="font-headline text-2xl font-bold mb-4 border-b pb-2">Pages principales</h2>
                    <ul className="list-disc list-inside space-y-2 pl-4">
                        {staticPages.map(page => (
                            <li key={page.href}><Link href={page.href} className="text-primary underline">{page.label}</Link></li>
                        ))}
                    </ul>
                </section>
                
                <section>
                    <h2 className="font-headline text-2xl font-bold mb-4 border-b pb-2">Projets</h2>
                     <ul className="list-disc list-inside space-y-2 pl-4">
                        {projects.map(project => (
                            <li key={project.id}><Link href={project.link} className="text-primary underline">{project.title}</Link></li>
                        ))}
                    </ul>
                </section>

                <section>
                    <h2 className="font-headline text-2xl font-bold mb-4 border-b pb-2">Toutes les vidéos</h2>
                    <ul className="list-disc list-inside space-y-2 pl-4">
                        {videos.map(video => (
                            <li key={video.id}><Link href={`/videos/${video.slug}`} className="text-primary underline">{video.title}</Link></li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    );
}
