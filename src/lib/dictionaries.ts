
export const dictionaries = {
  en: {
    siteHeader: {
      home: 'Home',
      videos: 'Videos',
      projets: 'Projects',
      adminLogin: 'Admin Login',
      toggleMenu: 'Toggle Menu'
    },
    siteFooter: {
      builtWithPassion: 'Built with passion.'
    },
    homePage: {
      exploreVideos: 'Explore Videos',
      latestVideos: 'Latest Videos',
      viewAll: 'View All',
      noVideos: 'No videos available yet.'
    },
    videosPage: {
      allVideos: 'Videos created by Tremplin Video Lab',
      browse: 'Browse our full collection of amazing content.',
      noVideos: 'No Videos Yet',
      checkBack: 'Check back later for new content!',
    },
    projetsPage: {
      title: 'Our Projects',
      description: 'Tremplin Video lab: varied video concepts but linked projects!',
      zoolympicGamesDescription: "From the Paris 2024 Olympic Games to Milan 2026: anthropomorphic animals compete in various sports!",
      zoolympicWorldDescription: 'Explore the world of Zoolympics, meet the characters and go behind the scenes.',
      learnMore: 'Learn more'
    },
    loginPage: {
      title: 'Admin Login',
      description: 'Enter your credentials to access the dashboard.',
      emailLabel: 'Email',
      passwordLabel: 'Password',
      signIn: 'Sign In',
      successTitle: 'Login Successful',
      successDescription: 'Welcome back, Admin!',
    },
    videoCard: {
      posted: 'ago'
    }
  },
  fr: {
    siteHeader: {
      home: 'Accueil',
      videos: 'Vidéos',
      projets: 'Projets',
      adminLogin: 'Connexion',
      toggleMenu: 'Basculer le menu'
    },
    siteFooter: {
      builtWithPassion: 'Construit avec passion.'
    },
    homePage: {
      exploreVideos: 'Explorer les vidéos',
      latestVideos: 'Dernières vidéos',
      viewAll: 'Voir tout',
      noVideos: 'Aucune vidéo disponible pour le moment.'
    },
    videosPage: {
      allVideos: 'Les vidéos créées par Tremplin Video Lab',
      browse: 'Parcourez notre collection complète de contenus incroyables.',
      noVideos: 'Pas encore de vidéos',
      checkBack: 'Revenez plus tard pour du nouveau contenu !',
    },
    projetsPage: {
      title: 'Les projets de Tremplin Video Lab',
      description: 'Tremplin Video lab : des concepts de vidéos variées mais des projets liés !',
      zoolympicGamesDescription: "Des JO de Paris 2024 à Milan 2026 : des animaux anthropomorphes s'affrontent dans des sports variés !",
      zoolympicWorldDescription: "Explorez le monde des Zoolympics : rencontrez nos personnages dans un cadre non-sportifs et découvrez les coulisses !",
      learnMore: 'En savoir plus'
    },
    loginPage: {
      title: 'Connexion',
      description: 'Entrez vos identifiants pour accéder au tableau de bord.',
      emailLabel: 'Email',
      passwordLabel: 'Mot de passe',
      signIn: 'Se connecter',
      successTitle: 'Connexion réussie',
      successDescription: 'Bon retour, Admin !',
    },
    videoCard: {
      posted: 'il y a'
    }
  },
};

export type Locale = keyof typeof dictionaries;
