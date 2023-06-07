import React, { Component } from 'react';

// CSS files import
import './SearchResults.css' // SearchResults CSS

// Import components
import ItemsList from '../ItemsList/ItemsList';

// Import utility functions
import { formatTitleToCamelCase } from '../../Utils/format-data';
import { Album } from '../../@types/albums';
import { Artist } from '../../@types/artists';
import { Playlist } from '../../@types/playlists';
import { Track as Favorite } from '../../@types/tracks';

// Define props and state types
interface IProps {
    handleFavorites: (favorite: Favorite, removeFavorite: boolean) => void;
    searchResults: {
        albums: Album[];
        artists: Artist[];
        playlists: Playlist[];
    };
    favorites: Favorite[];
}

export default class SearchResults extends Component<IProps> {
    render() {
        return (
            <div className='search-results'>
                <h3>Search Results</h3>
                <ItemsList
                    title={formatTitleToCamelCase('albums')}
                    items={this.props.searchResults.albums}
                    renderComponent='strip'
                    handleFavorite={this.props.handleFavorites}
                    favorites={this.props.favorites}
                />
                <ItemsList
                    title={formatTitleToCamelCase('artists')}
                    items={this.props.searchResults.artists}
                    renderComponent='strip'
                    handleFavorite={this.props.handleFavorites}
                    favorites={this.props.favorites}
                />
                <ItemsList
                    title={formatTitleToCamelCase('playlists')}
                    items={this.props.searchResults.playlists}
                    renderComponent='strip'
                    handleFavorite={this.props.handleFavorites}
                    favorites={this.props.favorites}
                />
            </div>
        );
    }
}