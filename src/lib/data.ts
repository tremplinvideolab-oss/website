import { Video, User, HomepageContent } from './definitions';

// Simulate a database table for videos
let videos: Video[] = [
  {
    id: '1',
    title: 'Zoolympic Game : A race full of twists and turns !',
    description: 'In this video, a bear, a rabbit, a fox, and a turtle take part in a race between France and Italy.',
    thumbnailUrl: 'https://storage.googleapis.com/aifirebase-12d3c.appspot.com/user_images/zoolympic_game_2.webp',
    videoUrl: 'https://www.youtube.com/watch?v=pZEC2KPkmCs',
    createdAt: '2024-07-22T10:00:00Z',
    thumbnailHint: 'cartoon race animals',
  },
  {
    id: '2',
    title: 'The Serenity of Nature',
    description: 'Immerse yourself in the calming sounds and beautiful sights of the natural world.',
    thumbnailUrl: 'https://picsum.photos/seed/vid2/600/400',
    videoUrl: '#',
    createdAt: '2024-07-21T14:30:00Z',
    thumbnailHint: 'nature landscape',
  },
  {
    id: '3',
    title: 'Architectural Marvels',
    description: 'A look at some of the most innovative and breathtaking architectural designs.',
    thumbnailUrl: 'https://picsum.photos/seed/vid3/600/400',
    videoUrl: '#',
    createdAt: '2024-07-20T18:00:00Z',
    thumbnailHint: 'city architecture',
  },
  {
    id: '4',
    title: 'Deep Dive into AI',
    description: 'Understanding the fundamentals of Artificial Intelligence and its future potential.',
    thumbnailUrl: 'https://picsum.photos/seed/vid4/600/400',
    videoUrl: '#',
    createdAt: '2024-07-19T09:00:00Z',
    thumbnailHint: 'space galaxy',
  },
  {
    id: '5',
    title: 'The Art of Minimalism',
    description: 'Learn how to declutter your life and find joy in simplicity.',
    thumbnailUrl: 'https://picsum.photos/seed/vid5/600/400',
    videoUrl: '#',
    createdAt: '2024-07-18T12:00:00Z',
    thumbnailHint: 'minimalist design',
  },
];

// Simulate a database table for users
let users: User[] = [
  {
    id: 'usr_1',
    name: 'Admin User',
    email: 'admin@videovers.com',
    role: 'Admin',
    avatarUrl: 'https://picsum.photos/seed/avatar1/100/100',
    joinedAt: '2024-01-15T09:00:00Z',
  },
  {
    id: 'usr_2',
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    role: 'Member',
    avatarUrl: 'https://picsum.photos/seed/avatar2/100/100',
    joinedAt: '2024-03-22T15:30:00Z',
  },
  {
    id: 'usr_3',
    name: 'John Smith',
    email: 'john.smith@example.com',
    role: 'Member',
    avatarUrl: 'https://picsum.photos/seed/avatar3/100/100',
    joinedAt: '2024-05-10T11:00:00Z',
  },
];

// Simulate a database table for homepage content
let homepageContent: HomepageContent = {
  headline: 'Bienvenue chez Tremplin Video Lab',
  subheadline: 'Votre nouvelle destination pour découvrir et partager des vidéos incroyables. Explorez notre collection organisée par des créateurs du monde entier.',
};

// Simulate API latency
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function getVideos(): Promise<Video[]> {
  await delay(100);
  return [...videos].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

export async function getVideoById(id: string): Promise<Video | undefined> {
  await delay(100);
  return videos.find(v => v.id === id);
}

export async function getLatestVideos(limit: number = 3): Promise<Video[]> {
  await delay(100);
  return [...videos]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, limit);
}

export async function getUsers(): Promise<User[]> {
  await delay(100);
  return users;
}

export async function getHomepageContent(): Promise<HomepageContent> {
  await delay(50);
  return homepageContent;
}

export async function updateHomepageContent(data: HomepageContent): Promise<HomepageContent> {
  await delay(500);
  homepageContent = { ...data };
  console.log('Updated homepage content:', homepageContent);
  return homepageContent;
}

export async function addVideo(videoData: Omit<Video, 'id' | 'createdAt'>): Promise<Video> {
  await delay(1000);
  const newVideo: Video = {
    ...videoData,
    id: `vid_${Date.now()}`,
    createdAt: new Date().toISOString(),
  };
  videos.unshift(newVideo);
  return newVideo;
}
