import { Images } from './images';
import { Track } from './tracks';

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
    tracks?: Track[];
}

export type AlbumContextType = {
    albumData: Album;
    getAlbumData: (id: string) => void;
};