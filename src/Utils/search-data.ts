import { SearchData } from "../@types/search";

export const getSearchResults = async (token: string|null, query: string) => {
    const response = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=album,playlist,artist`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    const data = await response.json();

    if(!response.ok) {
        alert('Error: ' + data.error.message);
        localStorage.removeItem('token');
        window.location.reload();
        return;
    }

    const {albums, playlists, artists} = data;
    const searchData: SearchData = {
        albums: albums.items.map((album: any) => {
            return {
                id: album.id,
                name: album.name,
                images: album.images,
                artist: album.artists,
                release_date: album.release_date,
                total_tracks: album.total_tracks,
                type: album.type,
                uri: album.uri,
                album_type: album.album_type,
                href: album.href,
                spotify_url: album.external_urls.spotify,
            };
        }),
        playlists: playlists.items.map((playlist: any) => {
            return {
                id: playlist.id,
                name: playlist.name,
                description: playlist.description,
                images: playlist.images,
                owner: playlist.owner,
                tracks: playlist.tracks,
                uri: playlist.uri,
                collaborative: playlist.collaborative,
                public: playlist.public,
                href: playlist.href,
                type: playlist.type,
                spotify_url: playlist.external_urls.spotify,
            };
        }),
        artists: artists.items.map((artist: any) => {
            return {
                id: artist.id,
                name: artist.name,
                href: artist.href,
                uri: artist.uri,
                type: artist.type,
                popularity: artist.popularity,
                images: artist.images,
                genres: artist.genres,
                followers: artist.followers.total,
                spotify_url: artist.external_urls.spotify,
            };
        }),
    };

    return searchData;
}