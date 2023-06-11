import React from 'react';
import { useSearchData } from '../../Context/SearchDataContext';

// CSS files import
import './SearchResults.css' // SearchResults CSS

// Import components
import ItemsList from '../ItemsList/ItemsList';

export default function SearchResults(props: any) {
    const { searchResults } = useSearchData();

    return (
        <div className='search-results'>
            <h3>Search Results</h3>
            {
                Object.entries(searchResults).map((entry: any, index: number) => {
                    return (
                        <ItemsList
                            key={index}
                            title={entry[0]}
                            items={entry[1]}
                            details={entry[0]}
                        />
                    );
                })
            }
        </div>
    );
}