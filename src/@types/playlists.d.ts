import { Images } from "./images";
import { Tracks } from "./tracks";
import { User } from "./users";

export interface Playlist {
    id: string;
    name: string;
    description: string;
    image: Images;
    owner: User;
    tracks: Tracks;
    uri: string;
    collaborative: boolean;
    public: boolean | null;
    href: string;
    type: string;
    spotify_url: string;
}