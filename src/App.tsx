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
import { SearchDataProvider } from './Context/SearchDataContext';

export default function App(props: any) {
	const { token } = useUserData();

	useEffect(() => {
		console.log('token changed', token);
	}, [token]);

	return (
		<Router>
			<div className='App'>
				{!token && (
					<UnauthorizedPage />
				)}
				{token && (
					<HomeDataProvider>
						<SearchDataProvider>
							<div className='SidebarMenu'>
								<SidebarMenu />
							</div>
							<div className='main'>
								<TopNavbar />
								<div className='main__content'>
										<AuthorizedPage />
								</div>
							</div>
						</SearchDataProvider>
					</HomeDataProvider>
				)}
			</div>
		</Router>
	);
}
