import { Album } from "./album";
import { Playlist } from "./playlist";
import { Artist } from "./artist";

export interface SearchData {
    Albums: Album[];
    Playlists: Playlist[];
    Artists: Artist[];
}

export type SearchContextType = {
    searchResults: SearchData;
    handleSearchFormSubmit: (query: string) => void;
}