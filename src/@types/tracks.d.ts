import { Images } from './images';

export interface Tracks {
    href: string,
    total: number,
}

export interface Track {
    id: string,
	name: string,
	type: string,
    url: string,
    image: Images,
    artist_names: string[],
    duration_ms: number,
    album_name: string,
}