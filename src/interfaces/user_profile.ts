export interface UserProfile {
  id: string;
  name: string;
  username: string;
  email: string;
  avatar: string;
  coverImage?: string;
  bio: string;
  location: string;
  website?: string;
  joinedDate: Date;
  skills: string[];
  stats: {
    posts: number;
    followers: number;
    following: number;
  };
  socialLinks?: {
    twitter?: string;
    github?: string;
    linkedin?: string;
    instagram?: string;
  };
  availableForHire: boolean;
}