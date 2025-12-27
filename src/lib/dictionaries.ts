
export const dictionaries = {
  en: {
    siteHeader: {
      home: 'Home',
      videos: 'Videos',
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
      allVideos: 'All Videos',
      browse: 'Browse our full collection of amazing content.',
      noVideos: 'No Videos Yet',
      checkBack: 'Check back later for new content!',
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
      allVideos: 'Toutes les vidéos',
      browse: 'Parcourez notre collection complète de contenus incroyables.',
      noVideos: 'Pas encore de vidéos',
      checkBack: 'Revenez plus tard pour du nouveau contenu !',
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
