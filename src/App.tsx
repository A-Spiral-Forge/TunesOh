import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

// Import components
import SidebarMenu from './components/SidebarMenu/SidebarMenu';
import TopNavbar from './components/TopNavbar/TopNavbar';
import Home from './components/Home/Home';
import Search from './components/Search/Search';

// Define type of state
interface IState {
	token: string | undefined;
	page: string;
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
	state: IState = {
		token: undefined,
		page: 'home',
	};

	constructor(props: any) {
		super(props);
		this.state = {
			token: undefined,
			page: 'home',
		};

		const localToken = localStorage.getItem('token');
		if (localToken) {
			this.state = {
				token: localToken,
				page: 'home',
			};
		}
	}

	componentDidMount() {
		let _token = hash.access_token;
		console.log(_token);
		if (_token) {
			this.setState({
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
							<SidebarMenu handlePageChange={this.handlePageChange} />
						</div>
						<div className='main'>
							<TopNavbar />
							<div className='main__content'>
								{this.state.page === 'home' && <Home />}
								{this.state.page === 'search' && <Search />}
								{this.state.page === 'favorites' && <div>Favorites</div>}
								{this.state.page === 'playlists' && <div>Playlists</div>}
							</div>
						</div>
					</Router>
				)}
			</div>
		);
	}
}
