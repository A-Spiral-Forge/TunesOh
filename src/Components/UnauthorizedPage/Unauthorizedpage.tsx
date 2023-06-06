import React from 'react';

// Import components

// Import utility functions

// Define props and state types

// Spotify API authentication
const authEndpoint = 'https://accounts.spotify.com/authorize';
const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID || 'aad899b6de3a4ee8a3f25828e6e52429';
const redirectUri = 'http://localhost:3000';
const scopes = ['user-read-currently-playing'];

const UnauthorizedPage = () => {
    return (
        <div className='start'>
            <a
                className='btn btn--loginApp-link'
                href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
                    '%20'
                )}&response_type=token&show_dialog=true`}
            >
                Login to 
                <img src={process.env.PUBLIC_URL + 'svg-icons/SpotifyIcon.svg'} alt='' className='spotifyIcon' />
            </a>
        </div>
    );
}

export default UnauthorizedPage;