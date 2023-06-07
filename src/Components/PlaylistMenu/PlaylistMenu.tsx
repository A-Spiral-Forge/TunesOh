import React from 'react';
import { useUserData } from '../../Context/UserDataContext';

// Import css files
import './PlaylistMenu.css'; // PlaylistMenu CSS


export default function PlaylistMenu () {
	const { playlists } = useUserData();

	return (
		<ul className='playlist-menu'>
			{playlists.map((playlist, index) => (
				<li key={index} className='playlist-menu--item'>
					<div className="playlist-item">
						<div className="playlist-item--image">
							<img src={playlist.images.url} alt={playlist.name} />
						</div>
						<div className="playlist-details">
							<div className="playlist-item--name">
								{playlist.name}
							</div>
							<div className="playlist-item--tracks">
								{playlist.tracks.total} tracks
							</div>
						</div>
					</div>
				</li>
			))}
		</ul>
	);
}
