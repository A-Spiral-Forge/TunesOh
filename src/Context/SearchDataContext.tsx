import React, { createContext, useContext } from 'react';
import { useUserData } from './UserDataContext';

// Import types
import { SearchContextType, SearchData } from '../@types/search';

// Create a context for the search data
const SearchDataContext = createContext<SearchContextType>({} as SearchContextType);

// Custom hook for consuming the SearchDataContext
const useSearchData = () => {
	const context = useContext(SearchDataContext);
    if (!context) {
        throw new Error('useSearchData must be used within a SearchDataProvider');
    }
    return context;
};

// Create a provider for components to consume and subscribe to changes
const SearchDataProvider = ({ children }: { children: React.ReactNode }) => {
	const { token } = useUserData();

    const [searchResults, setSearchResults] = React.useState<SearchData>({} as SearchData);

    const getSearchResults = async (token: string, query: string) => {
        const response = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=album,playlist,artist`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        const data = await response.json();

        if(!response.ok) {
            if(response.status === 401) {
                localStorage.removeItem('token');
                window.location.reload();
            }
            return;
        }

        const {albums, playlists, artists} = data;
        
        setSearchResults({
            Albums: albums.items.map((album: any) => ({
                id: album.id,
                name: album.name,
                image: album.images.length > 0 ? album.images[0] : {
                    url: 'https://via.placeholder.com/150',
                },
                type: album.type,
                uri: album.uri,
            })),
            Playlists: playlists.items.map((playlist: any) => ({
                id: playlist.id,
                name: playlist.name,
                image: playlist.images.length > 0 ? playlist.images[0] : {
                    url: 'https://via.placeholder.com/150',
                },
                type: playlist.type,
                uri: playlist.uri,
            })),
            Artists: artists.items.map((artist: any) => ({
                id: artist.id,
                name: artist.name,
                image: artist.images.length > 0 ? artist.images[0] : {
                    url: 'https://via.placeholder.com/150',
                },
                type: artist.type,
                uri: artist.uri,
            })),
        });
    }

    const handleSearchFormSubmit = async (query: string) => {
        getSearchResults(token, query);
    };

	const value: SearchContextType = {
        searchResults,
        handleSearchFormSubmit,
    };

	return (
		<SearchDataContext.Provider value={value}>
			{children}
		</SearchDataContext.Provider>
	);
};

export { SearchDataProvider, useSearchData };