import React, { createContext, useContext, useState } from 'react';
import { useUserData } from './UserDataContext';

// Import types
import { Album, AlbumContextType } from '../@types/albums';

// Create context
const AlbumDataContext = createContext<AlbumContextType>({} as AlbumContextType);

// Use context
export const useAlbumData = () => useContext(AlbumDataContext);

// Create provider
export const AlbumDataProvider = (props: any) => {
    const { token } = useUserData();
    const [albumData, setAlbumData] = useState<Album>({} as Album);

    const getAlbumData = async (id: string) => {
        const response = await fetch(`https://api.spotify.com/v1/albums/${id}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });

        if(!response.ok) {
            if(response.status === 401) {
                localStorage.removeItem('token');
                window.location.reload();
            }
            return;
        }

        const data = await response.json();

        setAlbumData({
            id: data.id,
            name: data.name,
            image: data.images[0],
            release_date: data.release_date,
            total_tracks: data.total_tracks,
            artists: data.artists.map((artist: any) => artist.name),
            type: data.type,
            uri: data.uri,
            album_type: data.album_type,
            href: data.href,
            spotify_url: data.external_urls.spotify,
            tracks: data.tracks.items.map((track: any) => ({
                id: track.id,
                name: track.name,
                duration: track.duration_ms,
                artist_names: track.artists.map((artist: any) => artist.name),
                type: track.type,
                uri: track.uri,
                href: track.href,
                spotify_url: track.external_urls.spotify,
                image: data.images[0],
            })),
        });
    }

    return (
        <AlbumDataContext.Provider value={{ albumData, getAlbumData }}>
            {props.children}
        </AlbumDataContext.Provider>
    );
}