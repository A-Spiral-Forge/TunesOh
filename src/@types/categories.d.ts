import { Images } from "./images";

export interface Category {
    id: string;
    name: string;
    href: string;
    images: Images[];
    uri: string;
    spotify_url: string;
    type: string;
}