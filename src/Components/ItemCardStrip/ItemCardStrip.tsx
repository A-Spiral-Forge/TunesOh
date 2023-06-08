import React from 'react';

// Import CSS file
import './ItemCardStrip.css';

export default function ItemCardStrip(props: any) {
	return (
		<a
			href={props.url}
			className='item-url-strip'
			target='_blank'
			rel='noreferrer noopener'
		>
			<div className='item-card-strip'>
				<div className='item-card-strip__image'>
					<img src={props.image_url} alt='' />
				</div>
				<div
					className='item-card-strip__text'
					title={props.name}
				>
					<div className='item-card-strip__title'>
						{props.name}
					</div>
					<div className='item-card-strip__artist'>
						{props.type}
					</div>
				</div>
				{/* <div
					className={
						'item-card-strip__favorite' +
						(props.isFavorite ? ' active' : '')
					}
				>
					<button className='item-card-strip__favorite-button'>
						<img
							src='/svg-icons/FavoritesIconUnfilled.svg'
							alt='<3'
						/>
					</button>
				</div> */}
			</div>
		</a>
	);
}
