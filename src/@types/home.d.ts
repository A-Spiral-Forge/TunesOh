import { Album } from "./albums";
import { Playlist } from "./playlist";

export interface IHome {
    newReleases: Album[],
    featuredPlaylists: Playlist[],
}

export type HomeDataContextType = {
    'New Releases': Album[],
    'Featured Playlists': Playlist[],
};