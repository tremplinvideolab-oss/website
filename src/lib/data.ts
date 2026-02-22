
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

function getYouTubeVideoId(url: string): string | null {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|shorts\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2]?.length === 11) ? match[2] : null;
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
  },
  {
    id: '11',
    slug: 'zoolympic-games-minute-2026-video-d-introduction',
    title: "Zoolympic Games Minute 2026 : Vidéo d'introduction",
    description: 'Vidéo de teasing de la VIP qui sera présente à la cérémonie d\'ouverture des Zoolympic Games 2026.',
    descriptionLong: 'Cette vidéo a été faite dans le but d\'annoncer que les Zoolympic Games Minute arrivent pendant les Jeux Olympiques 2026 de Milan-Cortina.\n\nL\'objectif était d\'annoncer qu\'une nouvelle vidéo longue serait posté sur la chaîne chaque jour pendant toute la durée des Jeux olympiques de Milan 2026.\n\nDes athlètes, de la compétition et de l’intensité au quotidien avec la série Zoolympic Games Minute.',
    type: 'video-longue',
    thumbnailUrl: '/images/thumb_train.png',
    videoUrl: 'https://youtu.be/T3SGrhoQq1g',
    createdAt: '2026-02-01T12:00:00Z',
    thumbnailHint: 'zoolympic games introduction',
    project: 'zoolympic-games-minute-2026'
  },
  {
    id: '12',
    slug: 'zoolympic-games-minute-2026-teaser',
    title: 'Zoolympic Games Minute 2026 : Teaser',
    description: 'Vidéo de teasing des Zoolympic Games Minute 2026.',
    descriptionLong: 'Cette vidéo a été faite dans le but d\'annoncer que les Zoolympic Games Minute arrivent pendant les Jeux Olympiques 2026 de Milan-Cortina.\n\nL\'objectif était d\'annoncer qu\'une nouvelle vidéo longue serait posté sur la chaîne chaque jour pendant toute la durée des Jeux olympiques de Milan 2026.\n\nDes athlètes, de la compétition et de l’intensité au quotidien avec la série Zoolympic Games Minute.',
    type: 'video-longue',
    thumbnailUrl: '/images/thumb_bande_annonce_zoolympic_games_minute_2026.png',
    videoUrl: 'https://youtu.be/zyZLj0xF46g',
    createdAt: '2026-02-02T12:00:00Z',
    thumbnailHint: 'zoolympic games teaser',
    project: 'zoolympic-games-minute-2026'
  },
  {
    id: '13',
    slug: 'zoolympic-games-minute-2026-ceremonie-d-ouverture',
    title: "Zoolympic Games Minute 2026 : Cérémonie d'ouverture",
    description: 'Cérémonie d’ouverture des Zoolympic Games : Les Jeux Olympiques 2026 des animaux.',
    descriptionLong: 'Cette vidéo représente la cérémonie d’ouverture des Jeux Olympiques des animaux : Les Zoolympic Games !\n\nNous avons imaginé un moment légendaire : la diva Mariah La Raie, inspirée de Mariah Carey, monte sur scène pour interpréter sa chanson « Héros » dans le stade de San Siro à Milan, à l’occasion des Jeux olympiques de Milan-Cortina 2026.\n\nUne performance inspirée des grandes cérémonies d’ouverture, mais en version Zoolympic Games, sous la forme d’un véritable clip musical.',
    type: 'video-longue',
    thumbnailUrl: '/images/thumb_mariah-la-raie-chante-hero.png',
    videoUrl: 'https://youtu.be/FuP5XC1zZrM',
    createdAt: '2026-02-03T12:00:00Z',
    thumbnailHint: 'opening ceremony stingray',
    project: 'zoolympic-games-minute-2026'
  },
  {
    id: '14',
    slug: 'zoolympic-games-minute-2026-clip-rien-n-est-impossible',
    title: "Zoolympic Games Minute 2026 : Clip 'Rien n'est impossible'",
    description: 'Clip musical de la seconde chanson de notre artiste virtuelle : Mariah La Raie.',
    descriptionLong: 'Pour clôturer les Zoolympic Games Minute 2026, nous avons créé une chanson originale dont les paroles reprennent les moments forts de notre série consacrée aux Jeux Olympiques 2026 des animaux.\n\nLa chanson Rien n’est impossible ! est interprétée par Mariah La Raie, notre diva et artiste virtuelle.\n\nMariah La Raie était déjà l’interprète de la chanson Héros, présentée lors de la cérémonie d’ouverture de nos Jeux Olympiques des animaux.',
    type: 'video-longue',
    thumbnailUrl: '/images/thumb_rien_n_est_impossible.png',
    videoUrl: 'https://youtu.be/gCkfrwZeu5g',
    createdAt: '2026-02-22T12:00:00Z',
    thumbnailHint: 'music clip',
    project: 'zoolympic-games-minute-2026'
  },
  {
    id: '15',
    slug: 'zoolympic-games-minute-2026-patinage-artistique',
    title: 'Episode 1 - Zoolympic Games Minute 2026 : Patinage artistique',
    description: 'Deux animaux au talent exceptionnel participent à l’épreuve de danse sur glace en patinage artistique.',
    descriptionLong: 'Dans ce premier épisode, nous avons choisi de mettre en lumière un couple de patineurs artistiques composé d’un hippopotame et d’un tapir.\n\nTout se passe à merveille jusqu’à ce qu’un petit problème digestif de l’hippopotame vienne contrecarrer les plans de nos patineurs !\n\nUne pie commente l’épreuve, tandis que deux quokkas les encouragent.',
    type: 'video-longue',
    thumbnailUrl: '/images/thumb_patinage.png',
    videoUrl: 'https://youtu.be/nyiunFAsEIg',
    createdAt: '2026-02-05T12:00:00Z',
    thumbnailHint: 'figure skating animals',
    project: 'zoolympic-games-minute-2026'
  },
  {
    id: '16',
    slug: 'zoolympic-games-minute-2026-hockey-sur-glace',
    title: 'Episode 2 - Zoolympic Games Minute 2026 : Hockey sur glace',
    description: 'Hockey sur glace entre 2 équipes de castors !',
    descriptionLong: 'Les Castors Rouges mènent au score dans ce Zoolympic Games spécial Hockey sur glace.\n\nTout semble sous contrôle… jusqu’à la disqualification du meilleur joueur.\n\nEt là, c\'est pas de la tarte ! Le match bascule, la tension monte, et rien ne se passe comme prévu dans ce Zoolympic Games Minute spécial hockey sur glace.',
    type: 'video-longue',
    thumbnailUrl: '/images/thumb_hockey.png',
    videoUrl: 'https://youtu.be/7t9-9xCA3BE',
    createdAt: '2026-02-06T12:00:00Z',
    thumbnailHint: 'ice hockey animals',
    project: 'zoolympic-games-minute-2026'
  },
  {
    id: '17',
    slug: 'zoolympic-games-minute-2026-curling',
    title: 'Episode 3 - Zoolympic Games Minute 2026 : Curling',
    description: 'Une torue joue au curling sur un étang gelé.',
    descriptionLong: 'La tortue s’entraîne au curling sur un étang gelé.\nTout se passe bien… jusqu’à ce que la glace se fende sous le poids de la pierre.\n\nEt là, c’est la panique : un étrange silure apparaît sous la glace.',
    type: 'video-longue',
    thumbnailUrl: '/images/thumb_curling.png',
    videoUrl: 'https://youtu.be/yDFAiBsKqCw',
    createdAt: '2026-02-07T12:00:00Z',
    thumbnailHint: 'curling animals',
    project: 'zoolympic-games-minute-2026'
  },
  {
    id: '18',
    slug: 'zoolympic-games-minute-2026-biathlon',
    title: 'Episode 4 - Zoolympic Games Minute 2026 : Biathlon',
    description: 'Un suricate surdoué participe à l\'épreuve de bitahlon.',
    descriptionLong: 'Le suricate est le grand favori et il prend rapidement la tête de la course.\nTout semble joué, la victoire lui tend les bras… jusqu’au dernier tir, où tout bascule.\n\nUn ultime passage au pas de tir qui change tout dans cet épisode des Zoolympic Games Minute consacré au biathlon.',
    type: 'video-longue',
    thumbnailUrl: '/images/thumb_biathlon.png',
    videoUrl: 'https://youtu.be/Eh-t4bJP5pE',
    createdAt: '2026-02-08T12:00:00Z',
    thumbnailHint: 'biathlon animals',
    project: 'zoolympic-games-minute-2026'
  },
  {
    id: '19',
    slug: 'zoolympic-games-minute-2026-surf',
    title: 'Episode 5 - Zoolympic Games Minute 2026 : Surf',
    description: 'Un bouc s\échauffe au surf, mais chute avant l\'épreuve.',
    descriptionLong: 'Le bouc s’échauffe au surf avant l’épreuve.\nTout se passe bien jusqu’à la chute.\n\nLe doute s’installe et la douleur aussi, mais ses amis sont là pour l’encourager et le remotiver.\n\nVa-t-il réussir à s’en remettre et revenir plus fort dans cet épisode des Zoolympic Games Minute consacré au surf ?',
    type: 'video-longue',
    thumbnailUrl: '/images/thumb_surf.png',
    videoUrl: 'https://www.youtube.com/watch?v=ZK1v1LiK1r0',
    createdAt: '2026-02-09T12:00:00Z',
    thumbnailHint: 'surfing animals',
    project: 'zoolympic-games-minute-2026'
  },
  {
    id: '20',
    slug: 'zoolympic-games-minute-2026-short-track',
    title: 'Episode 6 - Zoolympic Games Minute 2026 : Short-track',
    description: 'Un lièvre ultra-rapide participe à l\'épreuve de shorttrack.',
    descriptionLong: 'Le lièvre, grand favori, s’élance et atteint rapidement sa vitesse maximale.\n\nTout est parfait jusqu’à ce qu’un mystérieux personnage lui tire dessus avec un lance-pierre. Et là, tout bascule.\n\nLa course se renverse en une seconde, la chute surprend tout le monde, et une question reste en suspens : qui a fait ça et pourquoi ?',
    type: 'video-longue',
    thumbnailUrl: '/images/thumb_shorttrack.png',
    videoUrl: 'https://www.youtube.com/watch?v=3s8hmm05qnM',
    createdAt: '2026-02-10T12:00:00Z',
    thumbnailHint: 'short track animals',
    project: 'zoolympic-games-minute-2026'
  },
  {
    id: '21',
    slug: 'zoolympic-games-minute-2026-slalom',
    title: 'Episode 7 - Zoolympic Games Minute 2026 : Slalom',
    description: 'Un guépard skieur fait une sortie de ski avant que le bus n\'amène les athlètes au départ de l\'épreuve.',
    descriptionLong: 'Profitant d’une pause du bus, un guépard skieur s’élance pour un tour de slalom.\nTout se passe bien jusqu’à ce qu’un problème imprévu surgisse, et les choses s’accélèrent rapidement pour lui.\n\nLa montre tourne : le bus va-t-il l’attendre ou sera-t-il en retard pour le départ de l’épreuve ?\n\nArrivera-t-il à temps avant le départ du bus dans cet épisode des Zoolympic Games Minute consacré au slalom ?',
    type: 'video-longue',
    thumbnailUrl: '/images/thumb_slalom.png',
    videoUrl: 'https://www.youtube.com/watch?v=iGZZqEqilDg',
    createdAt: '2026-02-11T12:00:00Z',
    thumbnailHint: 'slalom animals',
    project: 'zoolympic-games-minute-2026'
  },
  {
    id: '22',
    slug: 'zoolympic-games-minute-2026-bobsleigh',
    title: 'Episode 8 - Zoolympic Games Minute 2026 : Bobsleigh',
    description: 'Quatre moutons coiffeurs font du bobsleigh dans une parodie du film Rasta Rockett !',
    descriptionLong: 'Quatre moutons coiffeurs débarquent aux Zoolympic Games 2026.\n\nIls se lancent dans l’épreuve de bobsleigh avec une confiance légendaire. Tout semble sous contrôle jusqu’à ce que la réalité les rattrape.\n\nUne parodie déjantée inspirée du film Rasta Rockett, entre vitesse, style et situations improbables, dans cet épisode des Zoolympic Games Minute consacré au bobsleigh.',
    type: 'video-longue',
    thumbnailUrl: '/images/thumb_bobsleigh.png',
    videoUrl: 'https://www.youtube.com/watch?v=CVG1J9ZF268',
    createdAt: '2026-02-12T12:00:00Z',
    thumbnailHint: 'bobsleigh animals',
    project: 'zoolympic-games-minute-2026'
  },
  {
    id: '23',
    slug: 'zoolympic-games-minute-2026-ski-de-fond',
    title: 'Episode 9 - Zoolympic Games Minute 2026 : Ski de fond',
    description: 'Mariah La Raie fait une sortie en ski de fond avant de participer à un rendez-vous royal.',
    descriptionLong: 'Après la cérémonie d’ouverture, Mariah La Raie, la diva qui a interprété son titre « Héros », s’accorde un moment de détente en ski de fond.\n\nTout semble calme jusqu’à ce qu’un rendez-vous l’attende avec un délégué du roi.\n\nEntre neige, glamour et protocole, va-t-elle arriver à temps et surtout, que lui veut le roi ?\n\nDu « Volare » de Mariah Carey au « Vole La Raie » de notre Mariah, le roi des Zoolympic Games ne cache pas son admiration pour ces deux grandes divas aux univers bien différents.',
    type: 'video-longue',
    thumbnailUrl: '/images/thumb_ski_fond.png',
    videoUrl: 'https://www.youtube.com/watch?v=WDQMWhFIerw',
    createdAt: '2026-02-13T12:00:00Z',
    thumbnailHint: 'cross-country skiing animals',
    project: 'zoolympic-games-minute-2026'
  },
  {
    id: '24',
    slug: 'zoolympic-games-minute-2026-saut-a-ski',
    title: 'Episode 10 - Zoolympic Games Minute 2026 : Saut à ski',
    description: 'Un écureuil blanc décide de s\acheter des skis et de s\'entrainer pour participer aux Jeux !',
    descriptionLong: 'Au centre de stockage de noisettes, un écureuil blanc annonce fièrement avoir acheté des skis.\nSes collègues se moquent de lui.\n\nMais l’écureuil ne lâche rien et s’entraîne sous la direction d’un coach très particulier : un cerf aux méthodes étranges et aux exercices improbables.\nJusqu’où cet entraînement peut-il le mener ?\n\nUn nouvel épisode des Zoolympic Games Minute consacré au saut à ski, placé sous le signe de l’humour.',
    type: 'video-longue',
    thumbnailUrl: '/images/thumb_saut_a_ski.png',
    videoUrl: 'https://www.youtube.com/watch?v=infTgldGLcs',
    createdAt: '2026-02-14T12:00:00Z',
    thumbnailHint: 'ski jumping animals',
    project: 'zoolympic-games-minute-2026'
  },
  {
    id: '25',
    slug: 'zoolympic-games-minute-2026-ski-de-bosses',
    title: 'Episode 11 - Zoolympic Games Minute 2026 : Ski de bosses',
    description: 'Un wallaby fait du ski de bosse.',
    descriptionLong: 'Une descente pleine d’énergie sur les bosses avec un wallaby plein de rebonds et un koala observateur.\n\nUn épisode des Zoolympic Games Minute consacré au ski de bosses, placé sous le signe de la vitesse et du spectacle.',
    type: 'video-longue',
    thumbnailUrl: '/images/thumb_ski_de_bosses.png',
    videoUrl: 'https://www.youtube.com/watch?v=BREKyLUWc84',
    createdAt: '2026-02-15T12:00:00Z',
    thumbnailHint: 'mogul skiing animals',
    project: 'zoolympic-games-minute-2026'
  },
  {
    id: '26',
    slug: 'zoolympic-games-minute-2026-skeleton',
    title: 'Episode 12 - Zoolympic Games Minute 2026 : Skeleton',
    description: 'Un rhinocéros participe à une descente de skeleton.',
    descriptionLong: 'Skeleton — Jour 12 des Zoolympic Games 2026.\nUne discipline où tout se joue sur la vitesse, le courage et la trajectoire dans les virages pour notre rhinocéros.\n\nUn épisode des Zoolympic Games Minute consacré au skeleton.',
    type: 'video-longue',
    thumbnailUrl: '/images/thumb_skeleton.png',
    videoUrl: 'https://www.youtube.com/watch?v=1gTYKshX79M',
    createdAt: '2026-02-16T12:00:00Z',
    thumbnailHint: 'skeleton animals',
    project: 'zoolympic-games-minute-2026'
  },
  {
    id: '27',
    slug: 'zoolympic-games-minute-2026-snowboard-slopestyle',
    title: 'Episode 13- Zoolympic Games Minute 2026 : Snowboard slopestyle',
    description: 'Un écureuil participe à l\épreuve de Snowboard slopestyle.',
    descriptionLong: 'Snowboard slopestyle — Jour 13 des Zoolympic Games 2026.\nDes modules, des rails et de grands sauts pour enchaîner les tricks les plus spectaculaires.\n\nQui réalisera le run le plus propre et le plus stylé ?',
    type: 'video-longue',
    thumbnailUrl: '/images/thumb_snowboard_slopestyle.png',
    videoUrl: 'https://www.youtube.com/watch?v=rW7PvbjsuYk',
    createdAt: '2026-02-17T12:00:00Z',
    thumbnailHint: 'snowboard animals',
    project: 'zoolympic-games-minute-2026'
  },
  {
    id: '28',
    slug: 'zoolympic-games-minute-2026-luge',
    title: 'Episode 14 - Zoolympic Games Minute 2026 : Luge',
    description: 'Une vache participe à l\épreuve de luge.',
    descriptionLong: 'Luge — Jour 14 des Zoolympic Games 2026.\nUne descente ultra-rapide, des virages serrés et une course au centième sur la piste de glace.\n\nQui ira le plus vite aujourd’hui dans cet épisode des Zoolympic Games Minute consacré à la luge ?',
    type: 'video-longue',
    thumbnailUrl: '/images/thumb_luge.png',
    videoUrl: 'https://www.youtube.com/watch?v=b1aYxBv6eSA',
    createdAt: '2026-02-18T12:00:00Z',
    thumbnailHint: 'luge animals',
    project: 'zoolympic-games-minute-2026'
  },
  {
    id: '29',
    slug: 'zoolympic-games-minute-2026-ski-cross',
    title: 'Episode 15 - Zoolympic Games Minute 2026 : Ski-cross',
    description: 'Un run de ski cross hilarant entre un capybara et trois autruches !',
    descriptionLong: 'Trois autruches et un capybara s’élancent sur la piste de ski-cross.\n\nEntre départ explosif, vitesse, rivalité et trajectoires douteuses, la course peut basculer à tout moment dans cet épisode des Zoolympic Games Minute consacré au ski-cross.\n\nQui franchira la ligne d’arrivée en premier ?',
    type: 'video-longue',
    thumbnailUrl: '/images/thumb_ski_cross.png',
    videoUrl: 'https://www.youtube.com/watch?v=5mgGVh2O-NE',
    createdAt: '2026-02-19T12:00:00Z',
    thumbnailHint: 'ski cross animals',
    project: 'zoolympic-games-minute-2026'
  },
  {
    id: '30',
    slug: 'zoolympic-games-minute-2026-free-ski-big-air',
    title: 'Episode 16 - Zoolympic Games Minute 2026 : Free-ski Big Air',
    description: 'Le rhinocéros participe à l\'épreuve de Big Air.',
    descriptionLong: 'Un run de freeski big air avec une seule règle : envoyer du lourd pour notre rhinocéros.\n\nHabituellement pratiquant du skeleton, le rhinocéros réussira-t-il sa reconversion en freeski big air dans cet épisode des Zoolympic Games Minute ?',
    type: 'video-longue',
    thumbnailUrl: '/images/thumb_freeski_big_air.png',
    videoUrl: 'https://www.youtube.com/watch?v=IDfZiy2M2SQ',
    createdAt: '2026-02-20T12:00:00Z',
    thumbnailHint: 'freeski animals',
    project: 'zoolympic-games-minute-2026'
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
      id: 'zoolympic-games-minute-2026',
      title: "Zoolympic Games Minutes : Les Jeux Olympiques 2026 des animaux",
      description: "En savoir plus sur notre projet Zoolympic Games Minute : 1 vidéo par jour durant toute la durée des Jeux Olympiques 2026 des anmaux !",
      imageSrc: '/images/thumb_mariah-la-raie-chante-hero.png',
      imageHint: "jeux olympiques des animaux 2026",
      link: "/des-jeux-olympiques-a-la-serie-zoolympic-games-minute-2026",
      logo:'/images/thumb_mariah-la-raie-chante-hero.png'
    }
    ,
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
        id: 'zoolympic-games',
        title: "Zoolympic Games 2024/2025",
        description: "Des JO de Paris 2024 à ceux de Milan 2026, suivez des animaux anthropomorphes en compétition sur de multiples disciplines !",
        imageSrc: "/images/thumb_zoolympic_games_1b.jpg",
        imageHint: "cartoon animals race",
        link: "/des-jeux-olympiques-aux-zoolympic-games",
        logo:'/images/logo-projects/logo_zoolympic_games.png'
    },
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
  
  const videoId = getYouTubeVideoId(videoData.videoUrl);
  const thumbnailUrl = videoId ? `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg` : videoData.thumbnailUrl;

  const newVideo: Video = {
    ...videoData,
    id: `vid_${Date.now()}`,
    slug: generateSlug(videoData.title),
    createdAt: new Date().toISOString(),
    thumbnailUrl: thumbnailUrl,
  };
  videos.unshift(newVideo);
  return newVideo;
}
