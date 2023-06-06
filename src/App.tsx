import React, { useEffect, useState } from 'react';
import { useUserData } from './Context/UserDataContext';
import './App.css';

// Import components
import UnauthorizedPage from './Components/UnauthorizedPage/Unauthorizedpage';
import AuthorizedPage from './Components/AuthorizedPage/AuthorizedPage';
import SidebarMenu from './Components/SidebarMenu/SidebarMenu';
import TopNavbar from './Components/TopNavbar/TopNavbar';

// Import utility functions
import { Favorite } from './@types/tracks';
import { UserPlaylist } from './@types/user';
import { HomeDataProvider } from './Context/HomeDataContext';

// Get token from URL
// const hash = window.location.hash
// 	.substring(1)
// 	.split('&')
// 	.reduce(function (initial: any, item) {
// 		if (item) {
// 			var parts = item.split('=');
// 			initial[parts[0]] = decodeURIComponent(parts[1]);
// 		}
// 		return initial;
// 	}, {});
// window.location.hash = '';

export default function App(props: any) {
	// constructor(props: any) {
	// 	super(props);

	// 	this.state = {
	// 		token: undefined,
	// 		page: 'home',
	// 		favorites: [],
	// 		playlists: [],
	// 	};

	// 	const localToken = localStorage.getItem('token');
	// 	if (localToken) {
	// 		this.state = {
	// 			...this.state,
	// 			token: localToken,
	// 		};
	// 	}

	// 	const favorites = localStorage.getItem('favorites');

	// 	if (favorites) {
	// 		this.state = {
	// 			...this.state,
	// 			favorites: JSON.parse(favorites),
	// 		}; 
	// 	}

	// 	const playlists = localStorage.getItem('playlists');

	// 	if (playlists) {
	// 		this.state = {
	// 			...this.state,
	// 			playlists: JSON.parse(playlists),
	// 		};
	// 	}
	// }

	// const [token, setToken] = useState<string | undefined>(undefined);
	const [favorites, setFavorites] = useState<Favorite[]>([]);
	const [playlists, setPlaylists] = useState<UserPlaylist[]>([]);
	
	const { token } = useUserData();

	useEffect(() => {
		console.log('token changed', token);
	}, [token]);

	const handlePageChange = (page: string) => {
		// setPage(page);
	};

	const handleFavorite = (favorite: Favorite, removeFavorite: boolean = false) => {
		const newfavorites = removeFavorite ? favorites.filter((fav) => fav.id !== favorite.id) : [...favorites, favorite];
		setFavorites(newfavorites);

		localStorage.setItem('favorites', JSON.stringify(favorites));
	}

	const handlePlaylist = (playlist: UserPlaylist, removePlaylist: boolean = false) => {
		const newplaylists = removePlaylist ? playlists.filter((ply) => ply.id !== playlist.id) : [...playlists, playlist];
		setPlaylists(newplaylists);

		localStorage.setItem('playlists', JSON.stringify(playlists));
	}

	return (
		<div className='App'>
			{!token && (
				<UnauthorizedPage />
			)}
			{token && (
				<HomeDataProvider>
					<div className='SidebarMenu'>
						<SidebarMenu handlePageChange={handlePageChange} playlists={playlists} handlePlaylist={handlePlaylist} />
					</div>
					<div className='main'>
						<TopNavbar />
						<div className='main__content'>
								<AuthorizedPage />
						</div>
					</div>
				</HomeDataProvider>
			)}
		</div>
	);
}
