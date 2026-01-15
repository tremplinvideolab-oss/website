
import { Video, User, HomepageContent, Project } from './definitions';

// Simulate a database table for videos
let videos: Video[] = [
  {
    id: '1',
    title: 'Zoolympic Games #1 : Une course pleine de rebondissements !',
    description: 'Dans cette vidéo, un ours, un lapin, un renard, et une tortue prennent part à une course entre la France et l\'Italie.',
    thumbnailUrl: '/images/thumb_zoolympic_games_1.png',
    videoUrl: 'https://www.youtube.com/watch?v=pZEC2KPkmCs',
    createdAt: '2025-12-27T12:00:00Z',
    thumbnailHint: 'animation cartoon race animals',
  },
  {
    id: '2',
    title: 'Zoolympic World #1 : Un arbre prends vie et s\'anime durant les 4 saisons !',
    description: "Un lapin aux pouvoirs magiques, donne vie à un arbre qui s'anime durant les 4 saisons !",
    thumbnailUrl: '/images/thumb_zoolympic_world_1.png',
    videoUrl: 'https://www.youtube.com/watch?v=nfk3BYiyP7I',
    createdAt: '2026-01-14T18:30:00Z',
    thumbnailHint: 'animatec tree',
  },
];

// Simulate a database table for users
let users: User[] = [
  {
    id: 'usr_1',
    name: 'Admin User',
    email: 'admin@videovers.com',
    avatarUrl: 'https://picsum.photos/seed/avatar1/100/100',
    role: 'Admin',
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
  headline: 'Tremplin Video Lab',
  subheadlineH1: `Tremplin Video Lab conçoit des vidéos d'animations 3D à partir de scénarios originaux.`,
  subheadlineH2: `Une approche pragmatique : combiner les outils de créations classiques et l\'IA générative pour atteindre le meilleur rapport qualité / temps de production.`,
};

// Simulate a database table for projects
const projects: Project[] = [
    {
        id: 'zoolympic-games',
        title: "Zoolympic Games",
        description: "Des JO de Paris 2024 à Milan 2026 : des animaux anthropomorphes s'affrontent dans des sports variés !",
        imageSrc: "/images/thumb_zoolympic_games_1.png",
        imageHint: "cartoon animals race",
        link: "/des-jeux-olympiques-aux-zoolympic-games"
    },
    {
        id: 'zoolympic-world',
        title: "Zoolympic World",
        description: "Explorez le monde des Zoolympics : rencontrez nos personnages dans un cadre non-sportifs et découvrez les coulisses !",
        imageSrc: "/images/thumb_zoolympic_world_1.png",
        imageHint: "cartoon tree face",
        link: "/des-jeux-olympiques-au-zoolympic-world"
    }
];

// Simulate API latency
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function getProjects(): Promise<Project[]> {
    await delay(100);
    return projects;
}

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
