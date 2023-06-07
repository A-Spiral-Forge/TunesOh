import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

// CSS files import
import './SideNavbarMenu.css'; // SidebarMenu CSS

// Import components
import CreatePlaylistModal from '../CreatePlaylistModal/CreatePlaylistModal';

// Import utility functions
import { UserPlaylist } from '../../@types/user';
import { usePageHandler } from '../../Context/PageHandlerContext';

// Define props and state
interface IProps {
	handlePageChange: (page: string) => void;
	handlePlaylist: (playlist: UserPlaylist) => void;
}

export default function SideNavbarMenu(props: IProps) {
	const {page, setPage} = usePageHandler();
	const [modalOpen, setModalOpen] = useState<boolean>(false);

	const handleModalOpen = () => {
		setModalOpen(true);
	};

	const handleModalClose = (
		create: boolean | undefined,
		playlistName: string | undefined
	) => {
		if (create && playlistName) {
			// this.props.handlePlaylist({
			// 	id: new Date().getTime().toString(),
			// 	name: playlistName,
			// 	tracks: [],
			// });
		}

		setModalOpen(false);
	};

	return (
		<>
			<CreatePlaylistModal
				handleModalClose={handleModalClose}
				modalOpen={modalOpen}
			/>
			<Nav className='sidenav-menu flex-column'>
				{
					['Home', 'Search', 'Favorites', 'Playlists'].map((item, index) => (
						<Link
							to={`/${item.toLowerCase()}`}
							key={index}
							className='sidenav-link'
						>
							<Nav.Item
								className={
									page === item
										? 'sidenav-item active'
										: 'sidenav-item'
								}
								key={index}
								onClick={() => {
									setPage(item);
									props.handlePageChange(item);
								}}
							>
								<img
									src={`${process.env.PUBLIC_URL}/svg-icons/${item}Icon.svg`}
									alt=''
								/>
								{item}
							</Nav.Item>
						</Link>
					))
				}
			</Nav>
		</>
	);
}
