import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';

// CSS files import
import './SideNavbarMenu.css'; // SidebarMenu CSS

// Define state
interface IState {
	active: string;
}

export default class SidebarMenu extends Component<any, IState> {
	state:IState = {
		active: 'home',
	};

	render() {
		return (
			<Nav className='sidenav-menu flex-column'>
				<Nav.Item
					className={this.state.active === 'home' ? 'sidenav-item active' : 'sidenav-item'}
					onClick={() => {
						this.setState({ active: 'home' });
						this.props.handlePageChange('home');
					}}
				>
					<img
						src={process.env.PUBLIC_URL + '/svg-icons/HomeIcon.svg'}
						alt=''
					/>
					Home
				</Nav.Item>
				<Nav.Item
					className={this.state.active === 'search' ? 'sidenav-item active' : 'sidenav-item'}
					onClick={() => {
						this.setState({ active: 'search' });
						this.props.handlePageChange('search');
					}}
				>
					<img
						src={
							process.env.PUBLIC_URL + '/svg-icons/SearchIcon.svg'
						}
						alt=''
					/>
					Search
				</Nav.Item>
				<Nav.Item
					className={this.state.active === 'favorites' ? 'sidenav-item active' : 'sidenav-item'}
					onClick={() => {
						this.setState({ active: 'favorites' });
						this.props.handlePageChange('favorites');
					}}
				>
					<img
						src={
							process.env.PUBLIC_URL +
							'/svg-icons/FavoritesIcon.svg'
						}
						alt=''
					/>
					Favorites
				</Nav.Item>
				<Nav.Item
					className={this.state.active === 'playlists' ? 'sidenav-item active' : 'sidenav-item'}
					onClick={() => {
						this.setState({ active: 'playlists' });
						this.props.handlePageChange('playlists');
					}}
				>
					<img
						src={
							process.env.PUBLIC_URL +
							'/svg-icons/PlaylistsIcon.svg'
						}
						alt=''
					/>
					Playlists
				</Nav.Item>
			</Nav>
		);
	}
}
