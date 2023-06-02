import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';

// CSS files import
import './SideNavbarMenu.css'; // SidebarMenu CSS

// Import components
import CreatePlaylistModal from '../CreatePlaylistModal/CreatePlaylistModal';

// Import utility functions
import { UserPlaylist } from '../../@types/user';

// Define props and state
interface IProps {
	handlePageChange: (page: string) => void;
	handlePlaylist: (playlist: UserPlaylist) => void;
}

interface IState {
	active: string;
	modalOpen: boolean;
}

export default class SideNavbarMenu extends Component<IProps, IState> {
	state: IState = {
		active: 'home',
		modalOpen: false,
	};

	handleModalOpen = () => {
		this.setState({ modalOpen: true });
	};

	handleModalClose = (
		create: boolean | undefined,
		playlistName: string | undefined
	) => {
		if (create && playlistName) {
			this.props.handlePlaylist({
				id: new Date().getTime().toString(),
				name: playlistName,
				tracks: [],
			});
		}

		this.setState({ modalOpen: false });
	};

	render() {
		return (
			<Nav className='sidenav-menu flex-column'>
				<CreatePlaylistModal
					handleModalClose={this.handleModalClose}
					modalOpen={this.state.modalOpen}
				/>
				<Nav.Item
					className={
						this.state.active === 'home'
							? 'sidenav-item active'
							: 'sidenav-item'
					}
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
					className={
						this.state.active === 'search'
							? 'sidenav-item active'
							: 'sidenav-item'
					}
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
					className={
						this.state.active === 'favorites'
							? 'sidenav-item active'
							: 'sidenav-item'
					}
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
					className={
						this.state.active === 'playlists'
							? 'sidenav-item active'
							: 'sidenav-item'
					}
					onClick={this.handleModalOpen}
				>
					<img
						src={
							process.env.PUBLIC_URL +
							'/svg-icons/PlaylistsIcon.svg'
						}
						alt=''
					/>
					Create Playlists
				</Nav.Item>
			</Nav>
		);
	}
}
