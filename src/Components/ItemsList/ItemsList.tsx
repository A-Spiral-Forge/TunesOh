import React, { Component} from "react";

// Import CSS file
import "./ItemsList.css";

// Import components
import ItemCardSquare from "../ItemCardSquare/ItemCardSquare";
import ItemCardStrip from "../ItemCardStrip/ItemCardStrip";

// Import utility functions
import { Album } from "../../@types/albums";
import { Playlist } from "../../@types/playlists";
import { Category } from "../../@types/categories";
import { Favorite } from "../../@types/tracks";

// Define types
interface IProps {
    title: string;
    items: Album[] | Playlist[] | Category[] | Favorite[];
    renderComponent?: 'square' | 'strip';
    handleFavorite: (favorite: Favorite, removeFavorite: boolean) => void;
    favorites: Favorite[];
}

export default class ItemsList extends Component<IProps> {
    render() {
        const renderComponent:string = this.props.renderComponent || 'square';

        return (
            <div className="items-list">
                <p className="items-list__title">
                    {this.props.title}
                </p>
                <div className="items-list__items" style={renderComponent === 'square' ? {flexDirection: 'row'} : {flexDirection: 'column'}}>
                    {this.props.items.map((props:Album | Playlist | Category | Favorite, index:number) => {
                        return (
                            renderComponent === 'square' ? <ItemCardSquare
                                key={index}
                                id={props.id}
                                name={props.name}
                                url={props.spotify_url}
                                image_url={props.images[0]?.url}
                                type={props.type}
                                isFavorite={this.props.favorites.some((favorite:Favorite) => favorite.id === props.id)}
                                handleFavorite={this.props.handleFavorite}
                            /> : <ItemCardStrip
                                key={index}
                                id={props.id}
                                name={props.name}
                                url={props.spotify_url}
                                image_url={props.images[0]?.url}
                                type={props.type}
                                isFavorite={this.props.favorites.some((favorite:Favorite) => favorite.id === props.id)}
                                handleFavorite={this.props.handleFavorite}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}