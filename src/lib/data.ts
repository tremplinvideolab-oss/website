
import { Video, User, HomepageContent, Project } from './definitions';

// Simulate a database table for videos
let videos: Video[] = [
  {
    id: '1',
    title: 'Zoolympic Games #1 : Une course pleine de rebondissements !',
    description: 'Dans cette vidéo, un ours, un lapin, un renard, et une tortue prennent part à une course entre la France et l\'Italie.',
    descriptionLong: "",
    type: 'video-longue',
    thumbnailUrl: '/images/thumb_zoolympic_games_1b.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=pZEC2KPkmCs',
    createdAt: '2025-12-27T12:00:00Z',
    thumbnailHint: 'animation cartoon race animals',
    project: 'zoolympic-games',
  },
  {
    id: '2',
    title: 'Zoolympic World #1 : Un arbre prends vie et s\'anime durant les 4 saisons !',
    description: "Un lapin aux pouvoirs magiques, donne vie à un arbre qui s'anime durant les 4 saisons !",
    descriptionLong: "Un lapin aux pouvoirs magiques, donne vie à un arbre qui s'anime durant les 4 saisons !",
    type: 'video-longue',
    thumbnailUrl: '/images/thumb_zoolympic_world_1.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=nfk3BYiyP7I',
    createdAt: '2026-01-14T18:30:00Z',
    thumbnailHint: 'animation d\'arbre vivant en morphing 3D',
    project: 'zoolympic-world',

  },
  {
    id: '3',
    title: 'Short - Zoolympic World : Meilleurs voeux 2026 !',
    description: 'Dans cette vidéo, un hibou présente les voeux de la chaîne et annonce les projets à venir en 2026.',
    descriptionLong: "",
    type: 'video-short',
    thumbnailUrl: '/images/thumb_hibou_mery_xmas.png',
    videoUrl: 'https://www.youtube.com/shorts/2hfaPC9bB2Y',
    createdAt: '2026-01-01T12:00:00Z',
    thumbnailHint: 'journaliste hibou présentant les voeux de la chaîne',
    project: 'zoolympic-world',
  },
  {
    id: '4',
    title: 'Short - Zoolympic World : Déguster une bonne galette des rois !',
    description: 'Les personnages de Zoolympic World se retrouvent pour partager la traditionnelle galette des rois. Qui sera couronné roi ?',
    descriptionLong: "",
    type: 'video-short',
    thumbnailUrl: '/images/thumb_manger_la_galette.png',
    videoUrl: 'https://www.youtube.com/shorts/LOwffKm1LGI',
    createdAt: '2026-01-03T12:00:00Z',
    thumbnailHint: 'Des animaux déguste une galette des rois à la frangipane',
    project: 'zoolympic-world',
  },
  {
    id: '5',
    title: 'Short - Zoolympic World : Une bataille pour devenir le Roi !',
    description: 'Après avoir trouvé la fève, un combat amical à l\'épée s\'engage entre le Guépard et le Kangourou pour décider qui sera le vrai roi.',
    descriptionLong: "",
    type: 'video-short',
    thumbnailUrl: '/images/thumb_bataille_pour_devenir_roi.png',
    videoUrl: 'https://youtube.com/shorts/LOwffKm1LGI',
    createdAt: '2026-01-05T12:00:00Z',
    thumbnailHint: 'Un Guépard et un Kangourou livre une bataille pour devenir le roi',
    project: 'zoolympic-world',
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
  headline: 'Tremplin Video Lab conçoit des vidéos d\'animations à partir de scénarios originaux.',
  subheadline: 'Une approche pragmatique : combiner les outils de créations classiques et l\'IA générative pour atteindre le meilleur rapport qualité / temps de production.',
};

// Simulate a database table for projects
const projects: Project[] = [
    {
        id: 'zoolympic-games',
        title: "Zoolympic Games",
        description: "Des JO de Paris 2024 à ceux de Milan 2026, suivez des animaux anthropomorphes en compétition sur de multiples disciplines !",
        imageSrc: "/images/thumb_zoolympic_games_1b.jpg",
        imageHint: "cartoon animals race",
        link: "/des-jeux-olympiques-aux-zoolympic-games",
        logo:'/images/logo-projects/logo_zoolympic_games.png'
    },
    {
        id: 'zoolympic-world',
        title: "Zoolympic World",
        description: "Explorez l’univers des Zoolympics : découvrez nos personnages dans des contextes extra-sportifs et plongez dans les coulisses !",
        imageSrc: "/images/thumb_zoolympic_world_1.jpg",
        imageHint: "cartoon tree face",
        link: "/des-jeux-olympiques-au-zoolympic-world",
        logo:'/images/logo-projects/logo_zoolympic_world.png'
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

export async function updateHomepageContent(data: Omit<HomepageContent, 'headline' | 'subheadline'> & { headline?: string; subheadline?: string }): Promise<HomepageContent> {
  await delay(500);
  const { headline, subheadline } = data;
  if (headline) homepageContent.headline = headline;
  if (subheadline) homepageContent.subheadline = subheadline;
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
