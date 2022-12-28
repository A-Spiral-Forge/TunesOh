import React, { Component } from 'react';

// CSS files import
import './Search.css'; // Search CSS

// Import components
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';

// Import utils
import { getSearchResults } from '../../utils/search-data';
import { Album, Playlist, Artist } from '../../utils/types';

// Define props and state types
interface IState {
    searchResults: {
        albums: Album[];
        artists: Artist[];
        playlists: Playlist[];
    };
}

interface ISearchResults {
    albums: Album[];
    artists: Artist[];
    playlists: Playlist[];
}

export default class Search extends Component<any, IState> {
    state = {
        searchResults: {
            albums: [],
            artists: [],
            playlists: [],
        },
    };

    handleSearchInput = (searchInput: string) => {
        const token = localStorage.getItem('token');

        getSearchResults(token, searchInput).then((searchResults: ISearchResults | undefined) => {

            if(searchResults === undefined) return;

            this.setState({
                searchResults: {
                    albums: searchResults.albums,
                    artists: searchResults.artists,
                    playlists: searchResults.playlists,
                },
            });
        });
    };

    render() {
        return (
            <div className='search'>
                <SearchBar handleSearchInput={this.handleSearchInput}/>
                <SearchResults searchResults={this.state.searchResults}/>
            </div>
        );
    }
}