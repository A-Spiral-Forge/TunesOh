import { Album } from "./albums";
import { Category } from "./categories";
import { Playlist } from "./playlist";

export interface IHome {
    newReleases: Album[],
    featuredPlaylists: Playlist[],
    categories: Category[],
}

export type HomeDataContextType = {
    home: IHome,
};