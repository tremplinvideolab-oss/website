import { MetadataRoute } from 'next';
import { getVideos } from '@/lib/data';
import type { Video } from '@/lib/definitions';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://tremplin-video-lab.com';

  // Get all videos to create dynamic routes
  const videos: Video[] = await getVideos();
  const videoUrls = videos.map((video) => {
    return {
      url: `${baseUrl}/videos/${video.id}`,
      lastModified: new Date(video.createdAt),
      changeFrequency: 'monthly' as 'monthly',
      priority: 0.8,
    };
  });

  // Define static pages
  const staticPages = [
    { 
        url: baseUrl, 
        lastModified: new Date(), 
        changeFrequency: 'weekly' as 'weekly',
        priority: 1.0
    },
    { 
        url: `${baseUrl}/videos`, 
        lastModified: new Date(),
        changeFrequency: 'weekly' as 'weekly',
        priority: 0.9
    },
    { 
        url: `${baseUrl}/projets`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as 'monthly',
        priority: 0.7
    },
    { 
        url: `${baseUrl}/des-jeux-olympiques-aux-zoolympic-games`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as 'monthly',
        priority: 0.6
    },
    { 
        url: `${baseUrl}/des-jeux-olympiques-au-zoolympic-world`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as 'monthly',
        priority: 0.6
    },
  ];

  return [...staticPages, ...videoUrls];
}
