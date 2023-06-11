import React from "react";

// Import CSS file
import "./ItemsList.css";

// Import components
import ItemCardSquare from "../ItemCardSquare/ItemCardSquare";
import ItemCardStrip from "../ItemCardStrip/ItemCardStrip";

export default function ItemsList(props: any) {
    const renderComponent:string = props.renderComponent || 'square';

    const getDetails = (element:any) => {
        switch (element.type) {
            case 'artist':
                return 'Artist';
            case 'album':
                return `${element.total_tracks} track${element.total_tracks > 1 ? 's' : ''} • ${element.release_date?.slice(0, 4)}`;
            case 'track':
                return `${element.artist_names.join(' • ')}`;
            case 'playlist':
                return `${element.tracks.total} track${element.tracks.total > 1 ? 's' : ''} • ${element.owner.display_name}`;
            default:
                return 'Category';
        }
    }

    return (
        <div className="items-list">
            <p className="items-list__title">
                {props.title}
            </p>
            <div className="items-list__items" style={renderComponent === 'square' ? {flexDirection: 'row'} : {flexDirection: 'column'}}>
                {props.items.map((element:any, index:number) => {
                    return (
                        renderComponent === 'square' ? <ItemCardSquare
                            key={index}
                            id={element.id}
                            name={element.name}
                            image_url={element.image.url}
                            details={getDetails(element)}
                        /> : <ItemCardStrip
                            key={index}
                            id={element.id}
                            name={element.name}
                            image_url={element.image.url}
                            details={getDetails(element)}
                        />
                    );
                })}
            </div>
        </div>
    );
}