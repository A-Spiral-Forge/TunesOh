import React, { createContext, useContext, useEffect, useLayoutEffect, useState } from 'react';
import { User, UserPlaylist, UserDataInterface } from '../@types/user';
import { Favorite } from '../@types/tracks';
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
    const [favorites, setFavorites] = useState([] as Favorite[]);
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
        console.log(userJson);
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