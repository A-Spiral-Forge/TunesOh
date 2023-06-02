import { Track } from './tracks';

export interface User {
    id: string;
    name: string;
    uri: string;
    href: string;
    type: string;
}

export interface UserPlaylist {
    id: string;
    name: string;
    tracks: Track[];
}