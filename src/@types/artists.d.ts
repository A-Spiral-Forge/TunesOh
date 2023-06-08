import { Images } from './images';

export interface Artist {
    id: string;
    name: string;
    href: string;
    uri: string;
    type: string;
    popularity: number;
    image: Images;
    genres: string[];
    followers: number;
    spotify_url: string;
}