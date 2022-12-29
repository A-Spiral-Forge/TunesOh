import React, { Component } from 'react';

// Import Components
import ItemsList from '../ItemsList/ItemsList';

// Import CSS file
import './Favorites.css';

// Import utility functions
import { Favorite } from '../../utils/types';

// Define types
interface IProps {
    favorites: Favorite[];
    handleFavorite: (favorite: Favorite, removeFavorite: boolean) => void;
}

export default class Favorites extends Component<IProps> {
    render() {
        return (
            <div className="favorites">
                <ItemsList
                    title="Favorites"
                    items={this.props.favorites}
                    renderComponent="strip"
                    handleFavorite={this.props.handleFavorite}
                    favorites={this.props.favorites}
                />
            </div>
        );
    }
}