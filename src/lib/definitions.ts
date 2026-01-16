export type Video = {
  id: string;
  title: string;
  description: string;
  descriptionLong: string;
  type: string;
  thumbnailUrl: string;
  videoUrl: string;
  createdAt: string; // ISO 8601 date string
  thumbnailHint: string;
  project: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'Member';
  avatarUrl: string;
  joinedAt: string; // ISO 8601 date string
};

export type HomepageContent = {
  headline: string;
  subheadline: string;
};

export type Project = {
    id: string;
    title: string;
    description: string;
    imageSrc: string;
    imageHint: string;
    link: string;
    logo: string;
};
