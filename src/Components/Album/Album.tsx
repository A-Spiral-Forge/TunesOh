/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAlbumData } from '../../Context/AlbumDataContext';

// Import styles
import './Album.css';
import ItemsList from '../ItemsList/ItemsList';

export default function Album() {
	const { id } = useParams();
	const { albumData, getAlbumData } = useAlbumData();

	useEffect(() => {
		console.log(id);
		getAlbumData(id || '');
	}, [id]);

	return (
		<div className='album'>
			<div className='album__header'>
				<div className='album__header__image'>
					<img src={albumData.image?.url} alt={albumData.name} />
				</div>
				<div className='album__header__info'>
                    <div className='album__header__type'>
                        Album
                    </div>
					<h2>{albumData.name}</h2>
					<div className='album__header__info__artists'>
                        { albumData.artists?.join(' • ') }
                    </div>
					<div className='album__header__info__meta'>
						<span>{albumData.release_date} • </span>
						<span>
							{albumData.total_tracks} track
							{albumData.total_tracks > 1 ? 's' : ''}
						</span>
					</div>
				</div>
			</div>
			<div className='album__tracks'>
				<div className='album__tracks__header'>
                    Tracks • {albumData.total_tracks} tracks
                </div>
				<div className='album__tracks__list'>
                    <ItemsList
                        items={albumData.tracks || []}
                        type='track'
                        renderComponent='strip'
                    />
                </div>
			</div>
		</div>
	);
}
