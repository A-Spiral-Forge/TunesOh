import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useUserData } from './Context/UserDataContext';
import './App.css';

// Import components
import UnauthorizedPage from './Components/UnauthorizedPage/Unauthorizedpage';
import AuthorizedPage from './Components/AuthorizedPage/AuthorizedPage';
import SidebarMenu from './Components/SidebarMenu/SidebarMenu';
import TopNavbar from './Components/TopNavbar/TopNavbar';

// Import utility functions
import { HomeDataProvider } from './Context/HomeDataContext';

export default function App(props: any) {
	const { token } = useUserData();

	useEffect(() => {
		console.log('token changed', token);
	}, [token]);

	const handlePageChange = (page: string) => {
		// setPage(page);
	};

	const handleFavorite = (favorite: any, removeFavorite: boolean = false) => {
		// const newfavorites = removeFavorite ? favorites.filter((fav) => fav.id !== favorite.id) : [...favorites, favorite];
		// setFavorites(newfavorites);

		// localStorage.setItem('favorites', JSON.stringify(favorites));
	}

	const handlePlaylist = (playlist: any, removePlaylist: boolean = false) => {
		// const newplaylists = removePlaylist ? playlists.filter((ply) => ply.id !== playlist.id) : [...playlists, playlist];
		// setPlaylists(newplaylists);

		// localStorage.setItem('playlists', JSON.stringify(playlists));
	}

	return (
		<Router>
			<div className='App'>
				{!token && (
					<UnauthorizedPage />
				)}
				{token && (
					<HomeDataProvider>
						<div className='SidebarMenu'>
							<SidebarMenu handlePageChange={handlePageChange} playlists={[]}
							handlePlaylist={handlePlaylist} />
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
		</Router>
	);
}
