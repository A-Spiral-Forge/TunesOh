import React, { createContext, useContext, useState } from 'react';
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
    const [newReleases, setNewRelelases] = useState([] as Album[]);
    const [featuredPlaylists, setFeaturedPlalists] = useState([] as Playlist[]);
    const [categories, setCategories] = useState([] as Category[]);

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