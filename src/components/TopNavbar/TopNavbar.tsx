import React, { Component } from 'react';
import { Navbar, Dropdown} from 'react-bootstrap';

// Import CSS files
import './TopNavbar.css'; // TopNavbar CSS

export default class TopNavbar extends Component {
	render() {
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
							src={process.env.PUBLIC_URL + '/main-images/user.jpg'}
							alt='User'
						/>
						<span className='user-name'>User</span>
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
}
