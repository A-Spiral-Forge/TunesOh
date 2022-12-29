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

export interface Playlist {
    id: string;
    name: string;
    description: string;
    images: Images[];
    owner: User;
    tracks: Tracks;
    uri: string;
    collaborative: boolean;
    public: boolean | null;
    href: string;
    type: string;
    spotify_url: string;
}

export interface Artist {
    id: string;
    name: string;
    href: string;
    uri: string;
    type: string;
    popularity: number;
    images: Images[];
    genres: string[];
    followers: number;
    spotify_url: string;
}

export interface User {
    id: string;
    name: string;
    uri: string;
    href: string;
    type: string;
}

export interface Tracks {
    href: string;
    total: number;
}

export interface Images {
    height: number | null;
    width: number | null;
    url: string;
}

export interface Category {
    id: string;
    name: string;
    href: string;
    images: Images[];
    uri: string;
    spotify_url: string;
    type: string;
}

export interface Favorite {
	id: string;
	name: string;
	type: string;
    active?: boolean;
    spotify_url: string;
    images: Images[];
}

export interface Track {
    id: string;
    name: string;
    artists: Artist[];
    album: string;
    duration: number;
    uri: string;
}

export interface UserPlaylist {
    id: string;
    name: string;
    tracks: Track[];
}