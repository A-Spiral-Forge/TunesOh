import React from 'react';
import { useUserData } from '../../Context/UserDataContext';

// Import css files
import './PlaylistMenu.css'; // PlaylistMenu CSS
import ItemsList from '../ItemsList/ItemsList';


export default function PlaylistMenu () {
	const { playlists } = useUserData();

	return (
		<ul className='playlist-menu'>
			<ItemsList 
				items={playlists}
				title='Your Playlists'
				renderComponent='strip'
			/>
		</ul>
	);
}
