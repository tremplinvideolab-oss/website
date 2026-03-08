import { MetadataRoute } from 'next';
import { getVideos, getProjects, getStaticPages } from '@/lib/data';
import type { Video, Project, StaticPage } from '@/lib/definitions';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://tremplin-video-lab.com';

  // Get all videos to create dynamic routes
  const videos: Video[] = await getVideos();
  const videoUrls = videos.map((video) => {
    return {
      url: `${baseUrl}/videos/${video.slug}`,
      lastModified: new Date(video.createdAt),
      changeFrequency: 'monthly' as 'monthly',
      priority: 0.8,
    };
  });

  const projects: Project[] = await getProjects();
  const projectUrls = projects.map((project) => ({
    url: `${baseUrl}${project.link}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as 'monthly',
    priority: 0.6,
  }));

  const staticPageData: StaticPage[] = await getStaticPages();
  
  const staticPageUrls = staticPageData.map((page) => {
    let changeFrequency: 'yearly' | 'monthly' | 'weekly' = 'monthly';
    let priority = 0.5;

    if (page.href === '/') {
      changeFrequency = 'weekly';
      priority = 1.0;
    } else if (page.href === '/videos') {
      changeFrequency = 'weekly';
      priority = 0.9;
    } else if (page.href === '/projets') {
      priority = 0.7;
    } else if (page.href === '/mentions-legales' || page.href === '/politique-de-confidentialite') {
      changeFrequency = 'yearly';
      priority = 0.3;
    } else if (page.href === '/plan-du-site') {
      priority = 0.4;
    }

    return {
      url: `${baseUrl}${page.href}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    };
  });
  
  return [...staticPageUrls, ...projectUrls, ...videoUrls];
}
