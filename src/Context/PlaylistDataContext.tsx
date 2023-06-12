import React , { createContext, useContext, useState } from 'react';
import { useUserData } from './UserDataContext';

// Import types
import { PlaylistContextType, Playlist } from '../@types/playlists';

// Create context
const PlaylistDataContext = createContext<PlaylistContextType>({} as PlaylistContextType);

// Use context
const usePlaylistData = () => {
    const context = useContext(PlaylistDataContext);
    if (!context) {
        throw new Error('usePlaylistData must be used within a PlaylistDataProvider');
    }
    return context;
}

// Create provider
const PlaylistDataProvider = ({children} : {children?: React.ReactNode}) => {
    const { token } = useUserData();
    const [playlistData, setPlaylistData] = useState({} as Playlist);

    const getPlaylistData = async (playlistId: string) => {
        const response = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            },
        });

        if(!response.ok) {
            if(response.status === 401) {
                localStorage.removeItem('token');
                window.location.href = '/';
                window.location.reload();
            }
            return;
        }

        const data = await response.json();
        setPlaylistData({
            id: data.id,
            name: data.name,
            description: data.description,
            image: data.images[0],
            tracks: data.tracks.items.map((track: any) => {
                return {
                    id: track.track.id,
                    name: track.track.name,
                    artist_names: track.track.artists.map((artist: any) => artist.name),
                    duration: track.track.duration_ms,
                    image: track.track.album.images[0],
                    type: track.track.type,
                    uri: track.track.uri,
                    href: track.track.href,
                }
            }),
            total_tracks: data.tracks.items.length,
            uri: data.uri,
            href: data.href,
            type: data.type,
            collaborative: data.collaborative,
            owner: data.owner,
            public: data.public,
            spotify_url: data.external_urls.spotify,
        });
    }

    return (
        <PlaylistDataContext.Provider value={{playlistData, getPlaylistData}}>
            {children}
        </PlaylistDataContext.Provider>
    );
}

export { PlaylistDataProvider, usePlaylistData };