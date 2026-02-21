
import { skip } from 'node:test';
import { Video, User, HomepageContent, Project } from './definitions';
import { Skeleton } from '@/components/ui/skeleton';
import { AirVent, FolderOpenDot } from 'lucide-react';

function generateSlug(text: string): string {
    const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
    const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
    const p = new RegExp(a.split('').join('|'), 'g')

    return text.toString().toLowerCase()
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
        .replace(/&/g, '-and-') // Replace & with 'and'
        .replace(/[^\w\-]+/g, '') // Remove all non-word chars
        .replace(/\-\-+/g, '-') // Replace multiple - with single -
        .replace(/^-+/, '') // Trim - from start of text
        .replace(/-+$/, '') // Trim - from end of text
}

// Simulate a database table for videos
let videos: Video[] = [
  {
    id: '1',
    slug: 'zoolympic-games-1-une-course-pleine-de-rebondissements',
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
    slug: 'zoolympic-world-1-un-arbre-prends-vie-et-s-anime-durant-les-4-saisons',
    title: 'Zoolympic World #1 : Un arbre prends vie et s\'anime durant les 4 saisons !',
    description: "Un lapin aux pouvoirs magiques, donne vie à un arbre qui s'anime durant les 4 saisons !",
    descriptionLong: "Dans cette vidéo d\’animation, un lapin explore une forêt énigmatique. Au fil de sa promenade, il donne vie à l\’arbre en le métamorphosant en une créature animée.\n\n Les saisons se succèdent, de l\’été au printemps en passant par l\’automne et l\’hiver, et l\’arbre traverse chacune de ces étapes avec résilience, affrontant les épreuves du temps, mais aussi la présence d’un loup prédateur inquiétant.\n\nPortée par une musique classique, l\’histoire met en lumière le rayonnement de l\’arbre, symbole de sympathie et de bienveillance.",
    type: 'video-longue',
    thumbnailUrl: '/images/thumb_zoolympic_world_1_arbre_prends_vie.png',
    videoUrl: 'https://www.youtube.com/watch?v=nfk3BYiyP7I',
    createdAt: '2026-01-14T18:30:00Z',
    thumbnailHint: 'animation d\'arbre vivant en morphing 3D',
    project: 'zoolympic-world',

  },
  {
    id: '3',
    slug: 'short-zoolympic-world-meilleurs-voeux-2026',
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
    slug: 'short-zoolympic-world-deguster-une-bonne-galette-des-rois',
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
    slug: 'short-zoolympic-world-une-bataille-pour-devenir-le-roi',
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
    slug: 'zoolympic-games-2-un-destin-en-or-pour-notre-kangourou-aux-jeux-olympiques',
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
    slug: 'short-morphing-rapide-de-l-arbre-durant-les-4-saisons',
    title: 'Short - Morphing rapide de l\'arbre durant les 4 saisons !',
    description: "Version raccourcie de notre video de l'arbre qui s'anime durant les 4 saisons.",
    descriptionLong: "Cette vidéo est un court extrait au format short de notre vidéo longue \"Cet arbre prends vie !\", durant laquelle un arbre s'anime en morphing durant les 4 saisons de l'année sur un air de musique classique qui appartient à Tremplin Video Lab !",
    type: 'video-short',
    thumbnailUrl: '/images/thumb_zoolympic_world_1_arbre_prends_vie.png',
    videoUrl: 'https://www.youtube.com/shorts/vEhDhHvMNko',
    createdAt: '2026-01-18T13:30:00Z',
    thumbnailHint: 'animation d\'arbre vivant en morphing 3D',
    project: 'zoolympic-world',

  },
  {
    id: '8',
    slug: 'short-ping-pong-les-freres-lebrun-n-ont-qu-a-bien-se-tenir',
    title: 'Short - Ping-pong : les frères Lebrun n\'ont qu\'à bien se tenir !',
    description: "Dans cette vidéo, un Kangourou et une pieuvre jouent au ping-pong !",
    descriptionLong: "Nous avons fait ce short, en relation avec notre troisième vidéo longue \"un destin en or\".\n\nEn effet, nous avons décidé ne pas mettre ce sport dans la vidéo longue, mais plutôt d'en faire un short à part entière.\n\nNotre Kangourou continue de manquer de chance dans cette partie de ping-pong étonnante !",
    type: 'video-short',
    thumbnailUrl: '/images/thumb_short_ping_pong.png',
    videoUrl: 'https://www.youtube.com/shorts/LL5-pKU3ML8',
    createdAt: '2026-01-20T18:30:00Z',
    thumbnailHint: 'ping-pong entre deux animaux (Kangourou et une pieuvre)',
    project: 'zoolympic-world',

  },
  {
    id: '9',
    slug: 'zoolympic-world-2-les-petites-souris-clip-d-animation',
    title: 'Zoolympic World #2 - Les petites souris 🐭🌙 - Clip d\'animation ( Zoolympic World #2 )',
    description: "Un clip musical d'animation racontant l'histoire de petites souris de manière poétique!",
    descriptionLong: "Bien que spécialisé dans un premier temps dans la publication de vidéos, la création de musiques fait aussi partie de nos missions.\n\nDans ce tout premier clip musical sur notre chaîne youtube, retrouvez la chanson \"Les petites souris\" qui rêvent en silence d'un ciel infini !",
    type: 'video-longue',
    thumbnailUrl: '/images/thumb_petites_souris.png',
    videoUrl: 'https://www.youtube.com/watch?v=ymcL213x62Q',
    createdAt: '2026-01-25T13:30:00Z',
    thumbnailHint: 'petites souris Zoolympic World avion fromage nuit kangourou grapin lit livres',
    project: 'zoolympic-world',

  },
  {
    id: '10',
    slug: 'short-un-kangourou-dans-une-cuisine',
    title: 'Short - un kangourou dans une cuisine !',
    description: "Short extrait de la video Zoolympic Games #2 : un destin en or pour notre Kangourou aux Jeux Olympiques",
    descriptionLong: "Ce short est un short de transition entre notre video \"un kangourou aux jeux olympiques\" ( un destin en or - Zoolympic Games #2) et notre premier clip musical !\n\nEn effet, la fin de notre précédente vidéo longue se terminait par le début de la suivante : Le clip musical les Petites Souris !",
    type: 'video-short',
    thumbnailUrl: '/images/thumb_kangourou_dans_cuisine.png',
    videoUrl: 'https://www.youtube.com/shorts/s_AWTy2zdNs',
    createdAt: '2026-01-24T12:30:00Z',
    thumbnailHint: 'ping-pong entre deux animaux (Kangourou et une pieuvre)',
    project: 'zoolympic-world',

  }
  ,
  {
    id: '11',
    slug: 'short-un-kangourou-dans-une-cuisine',
    title: 'Short - un kangourou dans une cuisine !',
    description: "Short extrait de la video Zoolympic Games #2 : un destin en or pour notre Kangourou aux Jeux Olympiques",
    descriptionLong: "Ce short est un short de transition entre notre video \"un kangourou aux jeux olympiques\" ( un destin en or - Zoolympic Games #2) et notre premier clip musical !\n\nEn effet, la fin de notre précédente vidéo longue se terminait par le début de la suivante : Le clip musical les Petites Souris !",
    type: 'video-short',
    thumbnailUrl: '/images/thumb_kangourou_dans_cuisine.png',
    videoUrl: 'https://www.youtube.com/shorts/s_AWTy2zdNs',
    createdAt: '2026-01-24T12:30:00Z',
    thumbnailHint: 'ping-pong entre deux animaux (Kangourou et une pieuvre)',
    project: 'zoolympic-world',

  }
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
        imageSrc: "/images/thumb_zoolympic_world_1_arbre_prends_vie.png",
        imageHint: "cartoon tree face",
        link: "/des-jeux-olympiques-au-zoolympic-world",
        logo:'/images/logo-projects/logo_zoolympic_world.png'
    },
    {
      id: 'zoolympic-games-minute-2026',
      title: "Zoolympic Games Minutes : Les Jeux Olympiques 2026 des animaux",
      description: "Découvrez notre série consacré aux jeux olympiques de milan-cortina 2026 mettant en scène des animaux dans différents sports ! Chaque jour, nous avons publié un épisode mettant un valeur une discipline différente : Patinage artistique, Biathlon, curling, surf, slalom, hockey sur glace, shorttrack, ski de bosse, ski-cross, snowboard slopestyle, saut à ski, Skeleton, luge, bobsleigh, free-ski big Air, ski de fond\n\nMais Zoolympic Games Minute, c'est aussi une vidéo d'introduction se déroulant dans un train avec les différentes délégation, une vidéo de teasing, et une cérémonie d'ouverture avec une diva : Mariah La Raie qui interpréte sa chanson Héros !",
      imageSrc: '/images/thumb_mariah-la-raie-chante-hero.png',
      imageHint: "jeux olympiques des animaux 2026",
      link: "/des-jeux-olympiques-a-la-serie-zoolympic-games-minute-2026",
      logo:'/images/thumb_mariah-la-raie-chante-hero.png'
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

export async function getVideoBySlug(slug: string): Promise<Video | undefined> {
  await delay(100);
  return videos.find(v => v.slug === slug);
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

export async function addVideo(videoData: Omit<Video, 'id' | 'createdAt' | 'slug'>): Promise<Video> {
  await delay(1000);
  const newVideo: Video = {
    ...videoData,
    id: `vid_${Date.now()}`,
    slug: generateSlug(videoData.title),
    createdAt: new Date().toISOString(),
  };
  videos.unshift(newVideo);
  return newVideo;
}
