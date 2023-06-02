import React, { Component } from 'react';

// Import CSS file
import './ItemCardStrip.css';

// Import utility functions
import { Favorite } from '../../@types/tracks';

// Define types
interface IProps {
	id: string;
	url: string;
	name: string;
	image_url: string;
	type: string;
	isFavorite: boolean;
    handleFavorite: (favorite: Favorite, removeFavorite: boolean) => void;
}

export default class ItemCardStrip extends Component<IProps> {
	preventLinkPropogation = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		e.preventDefault();
	};

	changeFavoriteStatus = () => {
		this.props.handleFavorite(
			{
				id: this.props.id,
				name: this.props.name,
				images:[{url: this.props.image_url, width: null, height: null}],
				type: this.props.type,
				spotify_url: this.props.url,
			},
			this.props.isFavorite
		);
	};

	render() {
		return (
			<a
				href={this.props.url}
				className='item-url-strip'
				target='_blank'
				rel='noreferrer noopener'
			>
				<div className='item-card-strip'>
					<div className='item-card-strip__image'>
						<img src={this.props.image_url} alt='' />
					</div>
					<div
						className='item-card-strip__text'
						title={this.props.name}
					>
						<div className='item-card-strip__title'>
							{this.props.name}
						</div>
						<div className='item-card-strip__artist'>
							{this.props.type}
						</div>
					</div>
					<div
						className={
							'item-card-strip__favorite' +
							(this.props.isFavorite ? ' active' : '')
						}
                        onClick={this.preventLinkPropogation}
					>
						<button className='item-card-strip__favorite-button'>
							<img
								src='/svg-icons/FavoritesIconUnfilled.svg'
								alt='<3'
                                onClick={this.changeFavoriteStatus.bind(this)}
							/>
						</button>
					</div>
				</div>
			</a>
		);
	}
}
