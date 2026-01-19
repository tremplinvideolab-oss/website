
import { Video, User, HomepageContent, Project } from './definitions';

// Simulate a database table for videos
let videos: Video[] = [
  {
    id: '1',
    title: 'Zoolympic Games #1 : Une course pleine de rebondissements !',
    description: 'Dans cette vidéo, un ours, un lapin, un renard, et une tortue prennent part à une course entre la France et l\'Italie.',
    descriptionLong: 'Dans cette vidéo, une course est organisée de Paris jusqu’aux sites des Jeux Olympiques de Milan–Cortina 2026.\nL\’ours, le lapin, le renard et la tortue s’affrontent dans une compétition haletante, riche en rebondissements.\n\nSur la neige comme sur la glace, à skis, en luge, en patins ou en bobsleigh, nos animaux relèvent chaque défi avec brio.\n Malgré son statut de grand favori, l’ours n’hésite pas à mettre toutes les chances de son côté pour tenter de décrocher la victoire !\n\nQui sera le vainqueur ?',
    type: 'video-longue',
    thumbnailUrl: '/images/thumb_zoolympic_games_1b.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=pZEC2KPkmCs',
    createdAt: '2025-12-28T12:00:00Z',
    thumbnailHint: 'animation cartoon race animals',
    project: 'zoolympic-games',
  },
  {
    id: '2',
    title: 'Zoolympic World #1 : Un arbre prends vie et s\'anime durant les 4 saisons !',
    description: "Un lapin aux pouvoirs magiques, donne vie à un arbre qui s'anime durant les 4 saisons !",
    descriptionLong: "Dans cette vidéo d\’animation, un lapin explore une forêt énigmatique. Au fil de sa promenade, il donne vie à l\’arbre en le métamorphosant en une créature animée.\n\n Les saisons se succèdent, de l\’été au printemps en passant par l\’automne et l\’hiver, et l\’arbre traverse chacune de ces étapes avec résilience, affrontant les épreuves du temps, mais aussi la présence d’un loup prédateur inquiétant.\n\nPortée par une musique classique, l\’histoire met en lumière le rayonnement de l\’arbre, symbole de sympathie et de bienveillance.",
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
    descriptionLong: "Pour bien démarrer l\u2019ann\u00e9e 2026, l\u2019\u00e9quipe de Tremplin Video Lab a choisi de vous pr\u00e9senter ses v\u0153ux au travers d\u2019une vid\u00e9o au format short, la premi\u00e8re d\u2019une longue s\u00e9rie \u00e0 d\u00e9couvrir sur notre cha\u00eene YouTube.\n\nDans ce premier \u00e9pisode, notre hibou journaliste prend la parole devant la tour Eiffel pour partager les v\u0153ux de la cha\u00eene et lever le voile sur les projets \u00e0 venir...",
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
    descriptionLong: "Le deuxième short de la chaîne YouTube s’inscrit lui aussi dans un rendez-vous incontournable du calendrier : l’Épiphanie.\n\nCertes, il ne s’agit pas de la galette de Lionel Bonnamy, mais nos Zoolympics ont tout de même pu se régaler… et couronner un roi !",
    type: 'video-short',
    thumbnailUrl: '/images/thumb_manger_la_galette.png',
    videoUrl: 'https://www.youtube.com/shorts/1XhrMfWy2io',
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
  {
    id: '6',
    title: 'Zoolympic Games #2 : Un destin en or pour notre Kangourou aux Jeux Olympiques ?',
    description: 'Un Kangourou affronte d\'autres animaux dans des sports olympiques en espérant décrocher une médaille aux JO !',
    descriptionLong: "Découvrez notre 3e vidéo longue d’animation, une création originale où un kangourou se mesure à une galerie d’animaux hauts en couleur à travers plusieurs disciplines sportives : boxe, tennis, basket, gymnastique et natation.\n\nDéterminé à viser l\'or olympique, parviendra-t-il à décrocher une médaille face à un singe, un éléphant, un guépard, un chat, un suricate, une tortue, un chien, une loutre et un cochon ?\n\nUne chose est certaine : notre kangourou a décidément quelques problèmes dentaires… et cela promet des scènes aussi drôles que surprenantes !",
    type: 'video-longue',
    thumbnailUrl: '/images/thumb_zoolympic_games_2.png',
    videoUrl: 'https://youtube.com/shorts/LOwffKm1LGI',
    createdAt: '2026-01-17T10:30:00Z',
    thumbnailHint: 'Un Kangourou aux jeux olympiques',
    project: 'zoolympic-games',
  }, 
  {
    id: '7',
    title: 'Short - Morphing rapide de l\'arbre durant les 4 saisons !',
    description: "Version raccourcie de notre video de l'arbre qui s'anime durant les 4 saisons.",
    descriptionLong: "Cette vidéo est un court extrait au format short de notre vidéo longue \"Cet arbre prends vie !\", durant laquelle un arbre s'anime en morphing durant les 4 saisons de l'année sur un air de musique classique qui appartient à Tremplin Video Lab !",
    type: 'video-short',
    thumbnailUrl: '/images/thumb_zoolympic_world_1.jpg',
    videoUrl: 'https://www.youtube.com/shorts/vEhDhHvMNko',
    createdAt: '2026-01-18T13:30:00Z',
    thumbnailHint: 'animation d\'arbre vivant en morphing 3D',
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
