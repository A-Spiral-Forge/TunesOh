import React, { Component } from 'react';

// Import CSS file
import './ItemCardSquare.css';

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

export default class ItemCardSquare extends Component<IProps> {
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
				className='item-url-square'
				target='_blank'
				rel='noreferrer noopener'
			>
				<div className='item-card-square'>
					<div className='item-card-square__image'>
						<img src={this.props.image_url} alt='' />
						<div
							className={
								'item-card-square__favorite' +
								(this.props.isFavorite ? ' active' : '')
							}
							onClick={this.preventLinkPropogation}
						>
							<button className='btn btn-outline-light btn-sm'>
								<img
									src={
										process.env.PUBLIC_URL +
										'/svg-icons/FavoritesIconUnfilled.svg'
									}
									alt='<3'
									onClick={this.changeFavoriteStatus.bind(
										this
									)}
								/>
							</button>
						</div>
					</div>
					<div className='item-card-square__title'>
						{this.props.name}
					</div>
					<div
						className='item-card-square__artist'
						title={this.props.type}
					>
						{this.props.type}
					</div>
				</div>
			</a>
		);
	}
}
