import React from 'react';

// Import CSS files
import './Home.css';

// Import components
import ItemsList from '../ItemsList/ItemsList';

// Import utility functions
import { formatTitleToCamelCase } from '../../Utils/format-data';

export default function Home() {

	return (
		<div className='home'>
			{
				['New Releases', 'Featured Playlists', 'Categories'].map((title, index) => {
					return (
						<ItemsList
							key={index}
							title={formatTitleToCamelCase(title)}
							items={[]}
							renderComponent='square'
						/>
					);
				})
			}
		</div>
	);
}
