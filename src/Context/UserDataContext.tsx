import React, { createContext, useContext, useEffect, useLayoutEffect, useState } from 'react';
import { User, UserPlaylist, UserDataInterface } from '../@types/user';
import { Track } from '../@types/tracks';
import { Image } from '../@types/images';

// Import types

const UserDataContext = createContext<UserDataInterface>({} as UserDataInterface);

const useUserData = () => {
    const context = useContext(UserDataContext);
    if (!context) {
        throw new Error('useUserData must be used within a UserDataProvider');
    }
    return context;
}

const UserDataProvider = ({children} : {children: React.ReactNode}) => {
    const [user, setUser] = useState<User>({} as User);
    const [playlists, setPlaylists] = useState([] as UserPlaylist[]);
    const [favorites, setFavorites] = useState([] as Track[]);
    const [token, setToken] = useState('');

    const getUserData = async (token: string) => {
        const userResponse = await fetch('https://api.spotify.com/v1/me', {
            headers: {
                'Authorization': 'Bearer ' + token,
            },
        });

        if(!userResponse.ok) {
            localStorage.removeItem('token');
            window.location.reload();
            return;
        }

        const userJson = await userResponse.json();
        setUser({
            id: userJson.id,
            name: userJson.display_name,
            uri: userJson.uri,
            href: userJson.href,
            type: userJson.type,
            images: userJson.images.map((image: any) => {
                return {
                    url: image.url,
                    height: image.height,
                    width: image.width,
                } as Image;
            }),
        });
    };

    const getPlaylists = async (token: string) => {
        const playlistsResponse = await fetch('https://api.spotify.com/v1/me/playlists', {
            headers: {
                'Authorization': 'Bearer ' + token,
            },
        });

        if(!playlistsResponse.ok) {
            localStorage.removeItem('token');
            window.location.reload();
            return;
        }

        const playlistsJson = await playlistsResponse.json();
        setPlaylists(playlistsJson.items.map((playlist: any) => {
            return {
                id: playlist.id,
                name: playlist.name,
                description: playlist.description,
                type: playlist.type,
                image: playlist.images.length > 0 ? playlist.images[0] : '',
                tracks: {
                    href: playlist.tracks.href,
                    total: playlist.tracks.total,
                },
                url: `/playlist/${playlist.id}`,
            };
        }));
    };

    const getFavorites = async (token: string) => {
        const favoritesResponse = await fetch('https://api.spotify.com/v1/me/tracks', {
            headers: {
                'Authorization': 'Bearer ' + token,
            },
        });

        if(!favoritesResponse.ok) {
            if(favoritesResponse.status === 401) {
                localStorage.removeItem('token');
                window.location.reload();
            }
            return;
        }

        const favoritesJson = await favoritesResponse.json();
        setFavorites(favoritesJson.items.map((favorite: any) => {
            return {
                id: favorite.track.id,
                name: favorite.track.name,
                type: favorite.track.type,
                uri: favorite.track.uri,
                duration_ms: favorite.track.duration_ms,
                image: favorite.track.album.images.length > 0 ? favorite.track.album.images[0] : '',
                artist_names: favorite.track.artists.map((artist: any) => {
                    return artist.name;
                }),
                album_name: favorite.track.album.name,
                url: `/track/${favorite.track.id}`
            };
        }));
    };

    useLayoutEffect(() => {
        const localToken = localStorage.getItem('token');
        if (localToken) {
            setToken(localToken);
            return;
        }

        const hash = window.location.hash
            .substring(1)
            .split('&')
            .reduce(function (initial: any, item) {
                if (item) {
                    var parts = item.split('=');
                    initial[parts[0]] = decodeURIComponent(parts[1]);
                }
                return initial;
            }, {});

        window.location.hash = '';
        setToken(hash.access_token);
    }, []);

    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {
        if (token) {
            getUserData(token);
            getPlaylists(token);
            getFavorites(token);
            localStorage.setItem('token', token);
        }
    }, [token]);

    const value: UserDataInterface = {
        user,
        playlists,
        favorites,
        token,
        setToken,
    };

    return (
        <UserDataContext.Provider value={value}>
            {children}
        </UserDataContext.Provider>
    );
}

export { useUserData, UserDataProvider };