/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'; 
import { useParams } from 'react-router-dom';
import { usePlaylistData } from '../../Context/PlaylistDataContext';

// Import styles
import './Playlist.css';

// Import components
import ItemsList from '../ItemsList/ItemsList';

export default function Playlist() {
    const { id } = useParams();
    const { playlistData, getPlaylistData } = usePlaylistData();

    useEffect(() => {
        getPlaylistData(id || '');
    }, [id]);

    return (
        <div className="playlist">
            <div className="playlist__header">
                <div className="playlist__header__image">
                    <img src={playlistData.image?.url} alt={playlistData.name} />
                </div>
                <div className="playlist__header__info">
                    <div className="playlist__header__type">
                        Playlist
                    </div>
                    <h2>{playlistData.name}</h2>
                    <div className="playlist__header__info__meta">
                        <span>{playlistData.owner?.display_name} • </span>
                        <span>{playlistData.total_tracks} tracks</span>
                    </div>
                </div>
            </div>
            <div className="playlist__tracks">
                <div className="playlist__tracks__header">
                    Tracks • {playlistData.total_tracks} tracks
                </div>
                <div className="playlist__tracks__list">
                    <ItemsList
                        items={playlistData.tracks || []}
                        type='track'
                        renderComponent='strip'
                    />
                </div>
            </div>
        </div>
    );
}