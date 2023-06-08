import React from 'react';
import { useHomeData } from '../../Context/HomeDataContext';

// Import CSS files
import './Home.css';

// Import components
import ItemsList from '../ItemsList/ItemsList';

export default function Home() {
	const homeData = useHomeData();
	const data = [homeData['New Releases'], homeData['Featured Playlists'], homeData['Categories']];

	return (
		<div className='home'>
			{
				['New Releases', 'Featured Playlists', 'Categories'].map((title, index) => {
					return (
						<ItemsList
							key={index}
							title={title}
							items={data[index]}
							renderComponent='square'
						/>
					);
				})
			}
		</div>
	);
}
