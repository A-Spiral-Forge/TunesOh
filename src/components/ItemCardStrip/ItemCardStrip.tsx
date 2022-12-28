import React, { Component } from "react";

// Import CSS file
import "./ItemCardStrip.css";

// Define types
interface IProps {
    id: string;
    url: string;
    name: string;
    image_url: string;
    type: string;
}

export default class ItemCardStrip extends Component<IProps> {
    render() {
        return (
            <a href={this.props.url} className='item-url-strip' target='_blank' rel="noreferrer noopener">
                <div className="item-card-strip">
                    <div className="item-card-strip__image">
                        <img src={this.props.image_url} alt=""/>
                    </div>
                    <div className="item-card-strip__text" title={this.props.name}>
                        <div className="item-card-strip__title">
                            {this.props.name}
                        </div>
                        <div className="item-card-strip__artist">
                            {this.props.type}
                        </div>
                    </div>
                </div>
            </a>
        );
    }
}