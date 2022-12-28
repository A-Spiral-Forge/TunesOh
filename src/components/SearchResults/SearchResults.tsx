import React, { Component } from 'react';

// CSS files import
import './SearchResults.css' // SearchResults CSS

// Import components
import ItemsList from '../ItemsList/ItemsList';

// Import utility functions
import { formatTitleToCamelCase } from '../../utils/format-data';

export default class SearchResults extends Component<any> {
    render() {
        return (
            <div className='search-results'>
                <h3>Search Results</h3>
                <ItemsList
                    title={formatTitleToCamelCase('albums')}
                    items={this.props.searchResults.albums}
                    renderComponent='strip'
                />
                <ItemsList
                    title={formatTitleToCamelCase('artists')}
                    items={this.props.searchResults.artists}
                    renderComponent='strip'
                />
                <ItemsList
                    title={formatTitleToCamelCase('playlists')}
                    items={this.props.searchResults.playlists}
                    renderComponent='strip'
                />
            </div>
        );
    }
}