import React from 'react';

// CSS files import
import './Search.css'; // Search CSS

// Import components
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';

export default function Search() {
	return (
		<div className='search'>
			<SearchBar />
			<SearchResults />
		</div>
	);
}
