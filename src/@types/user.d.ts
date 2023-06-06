import { Dispatch, SetStateAction } from 'react';
import { Track, Favorite } from './tracks';
import { Image } from './images';

export type User = {
    id: string,
    name: string,
    uri: string,
    href: string,
    type: string,
    images: Image[],
}

export interface UserPlaylist {
    id: string,
    name: string,
    tracks: Track[],
}

export interface UserDataInterface {
    user: User,
    playlists: UserPlaylist[],
    favorites: Favorite[],
    token: string,
    setToken: Dispatch<SetStateAction<string>>,
}