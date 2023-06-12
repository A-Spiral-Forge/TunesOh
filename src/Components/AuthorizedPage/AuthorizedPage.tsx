import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import components
import Home from '../Home/Home';
import Search from '../Search/Search';
import Favorites from '../Favorites/Favorites';
import PlaylistMenu from '../PlaylistMenu/PlaylistMenu';
import Album from '../Album/Album';
import Playlist from '../Playlist/Playlist';

const AuthorizedPage = () => {
    return (
        <Routes>
            <Route path='/search' element={<Search />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/playlists' element={<PlaylistMenu />} />
            <Route path='/album/:id' element={<Album />} />
            <Route path='/playlist/:id' element={<Playlist />} />
            <Route path='*' element={<Home />} />
        </Routes>
    );
}

export default AuthorizedPage;