import React, { createContext, useContext, useEffect, useState } from 'react';
import { useUserData } from './UserDataContext';

// Import types
import { IHome, HomeDataContextType } from '../@types/home';
import { Album } from '../@types/albums';
import { Playlist } from '../@types/playlists';
import { Category } from '../@types/categories';

const HomeDataContext = createContext<Partial<HomeDataContextType>>({});

const useHomeData = () => {
    const context = useContext(HomeDataContext);
    if (!context) {
        throw new Error('useHomeData must be used within a HomeDataProvider');
    }
    return context;
};

const HomeDataProvider = ({ children } : {children: React.ReactNode}) => {
    const { token } = useUserData();

    const [newReleases, setNewRelelases] = useState([] as Album[]);
    const [featuredPlaylists, setFeaturedPlalists] = useState([] as Playlist[]);
    const [categories, setCategories] = useState([] as Category[]);

    /**
     * Get new releases from Spotify API
     * @param token Spotify token
     * @returns Array of new releases
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

        const newReleases: Album[] = data.albums.items.map((album: any) => {
            return {
                id: album.id,
                name: album.name,
                artists: album.artists,
                images: album.images,
                release_date: album.release_date,
                total_tracks: album.total_tracks,
                type: album.type,
                uri: album.uri,
                album_type: album.album_type,
                href: album.href,
                spotify_url: album.external_urls.spotify
            }
        });

        return newReleases;
    }

    /**
     * Get featured playlists from Spotify API
     * @param token Spotify token
     * @returns Array of featured playlists
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

        const featuredPlaylists: Playlist[] = data.playlists.items.map((playlist: any) => {
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
                spotify_url: playlist.external_urls.spotify 
            }
        });

        return featuredPlaylists;
    }

    /**
     * Get categories from Spotify API
     * @param token Spotify token
     * @returns Array of categories
     */
    const getCategories = async (token:string) => {
        const request = new Request('https://api.spotify.com/v1/browse/categories', {
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

        const categories: Category[] = data.categories.items.map((category: any) => {
            return {
                id: category.id,
                name: category.name,
                href: category.href,
                images: category.icons,
                spotify_url: `https://open.spotify.com/browse/categories/${category.id}/playlists`,
                type: 'category',
            }
        });

        return categories;
    }

    useEffect(() => {
        getNewReleases(token).then((newReleases) => {
            setNewRelelases(newReleases);
        });
        getFeaturedPlaylists(token).then((featuredPlaylists) => {
            setFeaturedPlalists(featuredPlaylists);
        });
        getCategories(token).then((categories) => {
            setCategories(categories);
        });
    }
    , [token]);

    const homeData: IHome = {
        newReleases,
        featuredPlaylists,
        categories
    };
    
    return (
        <HomeDataContext.Provider value={{home: homeData}}>
            {children}
        </HomeDataContext.Provider>
    );
};

export { useHomeData, HomeDataProvider };