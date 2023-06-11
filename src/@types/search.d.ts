import { Album } from "./album";
import { Playlist } from "./playlist";
import { Artist } from "./artist";
import { Track } from "./tracks";

export interface SearchData {
    Tracks: Track[],
    Albums: Album[];
    Playlists: Playlist[];
    Artists: Artist[];
}

export type SearchContextType = {
    searchResults: SearchData;
    handleSearchFormSubmit: (query: string) => void;
}