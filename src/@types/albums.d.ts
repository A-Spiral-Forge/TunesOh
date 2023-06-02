import { Artist } from './artists';
import { Images } from './images';

export interface Album {
    id: string;
    name: string;
    artists: Artist[];
    images: Images[];
    release_date: string;
    total_tracks: number;
    type: string;
    uri: string;
    album_type: 'album' | 'single' | 'compilation';
    href: string;
    spotify_url: string;
}