import React from 'react';

// Import CSS file
import './ItemCardSquare.css';

export default function ItemCardSquare(props: any) {
	return (
		<a
			href={props.url}
			className='item-url-square'
			target='_blank'
			rel='noreferrer noopener'
		>
			<div className='item-card-square'>
				<div className='item-card-square__image'>
					<img src={props.image_url} alt='' />
					<div
						className={
							'item-card-square__favorite' +
							(props.isFavorite ? ' active' : '')
						}
					>
						<button className='btn btn-outline-light btn-sm'>
							<img
								src={
									process.env.PUBLIC_URL +
									'/svg-icons/FavoritesIconUnfilled.svg'
								}
								alt='<3'
							/>
						</button>
					</div>
				</div>
				<div className='item-card-square__title'>
					{props.name}
				</div>
				<div
					className='item-card-square__artist'
					title={props.type}
				>
					{props.type}
				</div>
			</div>
		</a>
	);
}
