import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import components
import Home from '../Home/Home';
import Search from '../Search/Search';
import Favorites from '../Favorites/Favorites';

// Import utility functions

// Define type of state

// Get token from URL

const AuthorizedPage = () => {
    return (
        <Router>
            <Routes>
                {/* <Route path='/' element={<Home />} />
                <Route path='/search' element={<Search />} />
                <Route path='/favorites' element={<Favorites />} /> */}
            </Routes>
            {/* {this.state.page === 'home' && <Home handleFavorite={this.handleFavorite} favorites={this.state.favorites} />}
            {this.state.page === 'search' && <Search handleFavorite={this.handleFavorite} favorites={this.state.favorites} />}
            {this.state.page === 'favorites' && <Favorites favorites={this.state.favorites} handleFavorite={this.handleFavorite} />} */}
        </Router>
    );
}

export default AuthorizedPage;