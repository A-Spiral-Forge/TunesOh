export interface Tracks {
    href: string;
    total: number;
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