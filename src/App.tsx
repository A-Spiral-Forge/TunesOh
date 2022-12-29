import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

// Import components
import SidebarMenu from './components/SidebarMenu/SidebarMenu';
import TopNavbar from './components/TopNavbar/TopNavbar';
import Home from './components/Home/Home';
import Search from './components/Search/Search';
import Favorites from './components/Favorites/Favorites';

// Import utility functions
import { Favorite, UserPlaylist } from './utils/types';

// Define type of state
interface IState {
	token: string | undefined;
	page: string;
	favorites: Favorite[];
	playlists: UserPlaylist[];
}

// Spotify API
const authEndpoint = 'https://accounts.spotify.com/authorize';
const clientId =
	process.env.REACT_APP_SPOTIFY_CLIENT_ID ||
	'aad899b6de3a4ee8a3f25828e6e52429';
const redirectUri = 'http://localhost:3000';
const scopes = ['user-read-currently-playing'];

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

export default class App extends Component<any, IState> {
	constructor(props: any) {
		super(props);

		this.state = {
			token: undefined,
			page: 'home',
			favorites: [],
			playlists: [],
		};

		const localToken = localStorage.getItem('token');
		if (localToken) {
			this.state = {
				...this.state,
				token: localToken,
			};
		}

		const favorites = localStorage.getItem('favorites');

		if (favorites) {
			this.state = {
				...this.state,
				favorites: JSON.parse(favorites),
			};
		}

		const playlists = localStorage.getItem('playlists');

		if (playlists) {
			this.state = {
				...this.state,
				playlists: JSON.parse(playlists),
			};
		}
	}

	componentDidMount() {
		let _token = hash.access_token;

		if (_token) {
			this.setState({
				...this.state,
				token: _token,
			});
			localStorage.setItem('token', _token);
		}
	}

	handlePageChange = (page: string) => {
		this.setState({
			...this.state,
			page: page,
		});
	};

	handleFavorite = (favorite: Favorite, removeFavorite: boolean = false) => {
		const favorites = removeFavorite ? this.state.favorites.filter((fav) => fav.id !== favorite.id) : [...this.state.favorites, favorite];
		this.setState({
			...this.state,
			favorites: favorites,
		});

		localStorage.setItem('favorites', JSON.stringify(favorites));
	}

	handlePlaylist = (playlist: UserPlaylist, removePlaylist: boolean = false) => {
		const playlists = removePlaylist ? this.state.playlists.filter((ply) => ply.id !== playlist.id) : [...this.state.playlists, playlist];
		this.setState({
			...this.state,
			playlists: playlists,
		});

		localStorage.setItem('playlists', JSON.stringify(playlists));
	}

	render() {
		return (
			<div className='App'>
				{!this.state.token && (
					<div className='start'>
						<a
							className='btn btn--loginApp-link'
							href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
								'%20'
							)}&response_type=token&show_dialog=true`}
						>
							Login to 
							<img src={process.env.PUBLIC_URL + 'svg-icons/SpotifyIcon.svg'} alt='' className='spotifyIcon' />
						</a>
					</div>
				)}
				{this.state.token && (
					<Router>
						<div className='SidebarMenu'>
							<SidebarMenu handlePageChange={this.handlePageChange} playlists={this.state.playlists} handlePlaylist={this.handlePlaylist} />
						</div>
						<div className='main'>
							<TopNavbar />
							<div className='main__content'>
								{this.state.page === 'home' && <Home handleFavorite={this.handleFavorite} favorites={this.state.favorites} />}
								{this.state.page === 'search' && <Search handleFavorite={this.handleFavorite} favorites={this.state.favorites} />}
								{this.state.page === 'favorites' && <Favorites favorites={this.state.favorites} handleFavorite={this.handleFavorite} />}
							</div>
						</div>
					</Router>
				)}
			</div>
		);
	}
}
