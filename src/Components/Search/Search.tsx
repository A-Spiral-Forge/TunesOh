import React, { Component } from 'react';

// CSS files import
import './Search.css'; // Search CSS

// Import components
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';

// Import utils
import { getSearchResults } from '../../Utils/search-data';
import { Album } from '../../@types/albums';
import { Artist } from '../../@types/artists';
import { Playlist } from '../../@types/playlists';
import { Favorite } from '../../@types/tracks';

// Define props and state types
interface IProps {
	handleFavorite: (favorite: Favorite, removeFavorite: boolean) => void;
	favorites: Favorite[];
}

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

export default class Search extends Component<IProps, IState> {
	state = {
		searchResults: {
			albums: [],
			artists: [],
			playlists: [],
		},
	};

	handleSearchInput = (searchInput: string) => {
		const token = localStorage.getItem('token');

		getSearchResults(token, searchInput).then(
			(searchResults: ISearchResults | undefined) => {
				if (searchResults === undefined) return;

				this.setState({
					searchResults: {
						albums: searchResults.albums,
						artists: searchResults.artists,
						playlists: searchResults.playlists,
					},
				});
			}
		);
	};

	render() {
		return (
			<div className='search'>
				<SearchBar handleSearchInput={this.handleSearchInput} />
				<SearchResults
					searchResults={this.state.searchResults}
					handleFavorites={this.props.handleFavorite}
					favorites={this.props.favorites}
				/>
			</div>
		);
	}
}
