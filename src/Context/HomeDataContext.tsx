import React, { createContext, useContext, useEffect, useState } from 'react';
import { useUserData } from './UserDataContext';

// Import types
import { HomeDataContextType } from '../@types/home';
import { Album } from '../@types/albums';
import { Playlist } from '../@types/playlists';

const HomeDataContext = createContext<HomeDataContextType>({} as HomeDataContextType);

const useHomeData = () => {
    const context = useContext(HomeDataContext);
    if (!context) {
        throw new Error('useHomeData must be used within a HomeDataProvider');
    }
    return context;
};

const HomeDataProvider = ({ children } : {children?: React.ReactNode}) => {
    const { token } = useUserData();

    const [newReleases, setNewRelelases] = useState([] as Album[]);
    const [featuredPlaylists, setFeaturedPlalists] = useState([] as Playlist[]);

    /**
     * Get new releases from Spotify API
     * @param token Spotify token
     */
    const getNewReleases = async (token:string) => {
        const request = new Request('https://api.spotify.com/v1/browse/new-releases', {
            method: 'GET',
            headers: new Headers({
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            })
        });

        const response = await fetch(request);
        const data = await response.json();

        if(!response.ok) {
            if(data.error.status === 401) {
                localStorage.removeItem('token');
            }
            window.location.reload();
        }

        setNewRelelases(data.albums.items.map((album: any) => {
            return {
                id: album.id,
                name: album.name,
                artists: album.artists,
                image: album.images[0],
                release_date: album.release_date,
                total_tracks: album.total_tracks,
                uri: album.uri,
                href: album.href,
                type: album.type,
                spotify_url: album.external_urls.spotify,
                url: '/album/' + album.id,
            }
        }));
    }

    /**
     * Get featured playlists from Spotify API
     * @param token Spotify token
     */
    const getFeaturedPlaylists = async (token:string) => {
        const request = new Request('https://api.spotify.com/v1/browse/featured-playlists', {
            method: 'GET',
            headers: new Headers({
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            })
        });

        const response = await fetch(request);
        const data = await response.json();

        if(!response.ok) {
            if(data.error.status === 401) {
                localStorage.removeItem('token');
            }
            window.location.reload();
        }

        setFeaturedPlalists(data.playlists.items.map((playlist: any) => {
            return {
                id: playlist.id,
                name: playlist.name,
                description: playlist.description,
                image: playlist.images[0],
                owner: playlist.owner,
                tracks: playlist.tracks,
                uri: playlist.uri,
                href: playlist.href,
                type: playlist.type,
                spotify_url: playlist.external_urls.spotify,
                url: '/playlist/' + playlist.id,
            }
        }));
    }

    useEffect(() => {
        if(token) {
            getNewReleases(token);
            getFeaturedPlaylists(token);
        }
    }
    , [token]);

    const homeData: HomeDataContextType = {
        'New Releases': newReleases,
        'Featured Playlists': featuredPlaylists,
    };
    
    return (
        <HomeDataContext.Provider value={homeData}>
            {children}
        </HomeDataContext.Provider>
    );
};

export { useHomeData, HomeDataProvider };