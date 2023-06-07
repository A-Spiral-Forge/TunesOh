import { Dispatch, SetStateAction } from 'react';
import { Favorite } from './tracks';
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
    tracks: {
        href: string,
        total: number,
    },
    description: string,
    images: Image,
    type: string,
}

export interface UserDataInterface {
    user: User,
    playlists: UserPlaylist[],
    favorites: Favorite[],
    token: string,
    setToken: Dispatch<SetStateAction<string>>,
}