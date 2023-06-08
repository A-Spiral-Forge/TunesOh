import { Images } from './images';

export interface Album {
    id: string;
    name: string;
    artists: string[];
    image: Images;
    release_date: string;
    total_tracks: number;
    type: string;
    uri: string;
    album_type: 'album' | 'single' | 'compilation';
    href: string;
    spotify_url: string;
}