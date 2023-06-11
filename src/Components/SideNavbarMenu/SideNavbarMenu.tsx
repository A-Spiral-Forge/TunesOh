import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

// CSS files import
import './SideNavbarMenu.css'; // SidebarMenu CSS

export default function SideNavbarMenu(props: any) {
	const location = useLocation();
	const page = location.pathname.slice(1);

	return (
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
								page === item.toLowerCase()
									? 'sidenav-item active'
									: 'sidenav-item'
							}
							key={index}
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
	);
}
