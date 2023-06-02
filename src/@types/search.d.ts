import { Album } from "./album";
import { Playlist } from "./playlist";
import { Artist } from "./artist";

export interface SearchData {
    albums: Album[];
    playlists: Playlist[];
    artists: Artist[];
}