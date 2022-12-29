import React, { Component } from 'react';

// Import css files
import './PlaylistMenu.css'; // PlaylistMenu CSS

// Import utility functions
import { UserPlaylist } from '../../utils/types';

// Define type of props
interface IProps {
	playlists: UserPlaylist[];
}

export default class PlaylistMenu extends Component<IProps> {
	render() {
		return (
			<ul className='playlistMenu'>
				{this.props.playlists.map((playlist, index) => (
					<li key={index} className='playlistMenu-item'>
						{playlist.name}
					</li>
				))}
			</ul>
		);
	}
}
