import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import components
import Home from '../Home/Home';
import Search from '../Search/Search';
import Favorites from '../Favorites/Favorites';
import PlaylistMenu from '../PlaylistMenu/PlaylistMenu';

const AuthorizedPage = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/search' element={<Search />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/playlists' element={<PlaylistMenu />} />
        </Routes>
    );
}

export default AuthorizedPage;