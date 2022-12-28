import React, { Component } from 'react';

// Import CSS files
import './Home.css';

// Import components
import ItemsList from '../ItemsList/ItemsList';

// Import utility functions
import {
	getNewReleases,
	getFeaturedPlaylists,
	getCategories,
} from '../../utils/home-data';
import { Album, Playlist, Category } from '../../utils/types';
import { formatTitleToCamelCase } from '../../utils/format-data';

// Define props and state types
interface State {
	error: any;
	isLoaded: boolean;
	token: string;
	titles: string[];
	new_releases: Album[];
	featured_playlists: Playlist[];
	categories: Category[];
}

export default class Home extends Component<any, State> {
	tempSongs = {};

	constructor(props: any) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			token: localStorage.getItem('token') || '',
			titles: ['new-releases', 'featured-playlists', 'categories'],
			new_releases: [],
			featured_playlists: [],
			categories: [],
		};
	}

	async componentDidMount() {
		const token = localStorage.getItem('token');

		if (token) {
			console.log(this.state);

			const newReleases: Album[] = this.state.new_releases.length === 0 ? await getNewReleases(token) : this.state.new_releases;
			const featuredPlaylists: Playlist[] = this.state.featured_playlists.length === 0 ? await getFeaturedPlaylists(
				token
			) : this.state.featured_playlists;
			const categories: Category[] = this.state.categories.length === 0 ? await getCategories(token) : this.state.categories;
			this.setState({
				...this.state,
				isLoaded: true,
				new_releases: newReleases,
				featured_playlists: featuredPlaylists,
				categories: categories,
			});
		}
	}

	render() {
		if (this.state.error) {
			return <div>Error: {this.state.error.message}</div>;
		} else if (!this.state.isLoaded) {
			return <div>Loading...</div>;
		} else {
			return (
				<div className='home'>
					<ItemsList
						title={formatTitleToCamelCase(this.state.titles[0])}
						items={this.state.new_releases}
						renderComponent='square'
					/>
					<ItemsList
						title={formatTitleToCamelCase(this.state.titles[1])}
						items={this.state.featured_playlists}
						renderComponent='square'
					/>
					<ItemsList
						title={formatTitleToCamelCase(this.state.titles[2])}
						items={this.state.categories}
						renderComponent='square'
					/>
				</div>
			);
		}
	}
}
