import React, {useEffect, useState} from 'react';
import { Navbar, Dropdown} from 'react-bootstrap';
import { useUserData } from '../../Context/UserDataContext';

// Import CSS files
import './TopNavbar.css'; // TopNavbar CSS

export default function TopNavbar(props: any) {
	const { user } = useUserData();
	const [name, setName] = useState<string>('');
	const [profileImage, setProfileImage] = useState<string>('');

	useEffect(() => {
		setName(user.name ? user.name : 'Guest');
		setProfileImage(
			user.images && user.images.length > 0
				? user.images[0].url
				: `${process.env.PUBLIC_URL}/main-images/User.jpg`
		);
	}, [user]);

	return (
		<Navbar
			className='topnav'
			data-mdb-color='dark'
			role='navigation'
			data-mdb-hidden='false'
			data-mdb-accordion='true'
		>
			<Dropdown className='user' align='end'>
				<Dropdown.Toggle
					id='dropdown-basic'
					className='user-dropdown'
				>
					<img
						src={profileImage}
						alt='User'
					/>
					<span className='user-name'>{name}</span>
				</Dropdown.Toggle>

				<Dropdown.Menu>
					<Dropdown.Item href='#/action-1'>Profile</Dropdown.Item>
					<Dropdown.Item href='#/action-2'>Settings</Dropdown.Item>
					<Dropdown.Item href='#/action-3'>Logout</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</Navbar>
	);
}
