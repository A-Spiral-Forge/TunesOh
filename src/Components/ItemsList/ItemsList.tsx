import React from "react";

// Import CSS file
import "./ItemsList.css";

// Import components
import ItemCardSquare from "../ItemCardSquare/ItemCardSquare";
import ItemCardStrip from "../ItemCardStrip/ItemCardStrip";

export default function ItemsList(props: any) {
    const renderComponent:string = props.renderComponent || 'square';

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
                            type={element.type}
                        /> : <ItemCardStrip
                            key={index}
                            id={element.id}
                            name={element.name}
                            image_url={element.image.url}
                            type={element.type}
                        />
                    );
                })}
            </div>
        </div>
    );
}