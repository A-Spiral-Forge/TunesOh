import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useUserData } from './Context/UserDataContext';
import './App.css';

// Import components
import UnauthorizedPage from './Components/UnauthorizedPage/Unauthorizedpage';
import AuthorizedPage from './Components/AuthorizedPage/AuthorizedPage';
import SidebarMenu from './Components/SidebarMenu/SidebarMenu';
import TopNavbar from './Components/TopNavbar/TopNavbar';

// Import utility functions
import Compose from './Context/Compose';
import { HomeDataProvider } from './Context/HomeDataContext';
import { SearchDataProvider } from './Context/SearchDataContext';
import { AlbumDataProvider } from './Context/AlbumDataContext';
import { PlaylistDataProvider } from './Context/PlaylistDataContext';
import Player from './Components/Player/Player';

export default function App(props: any) {
	const { token } = useUserData();

	return (
		<Router>
			<div className='App'>
				{!token && (
					<UnauthorizedPage />
				)}
				{token && (
					<Compose components={[HomeDataProvider, SearchDataProvider, AlbumDataProvider, PlaylistDataProvider]}>
						<div className='SidebarMenu'>
								<SidebarMenu />
						</div>
						<div className='main'>
							<TopNavbar />
							<div className='main__content'>
								<AuthorizedPage />
								<Player />
							</div>
						</div>
					</Compose>
				)}
			</div>
		</Router>
	);
}
