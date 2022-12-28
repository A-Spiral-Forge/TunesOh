import React, {Component} from "react";

// Import CSS file
import "./ItemCardSquare.css";

// Define types
interface IProps {
    id: string;
    url: string;
    name: string;
    image_url: string;
    type: string;
}

export default class ItemCardSquare extends Component<IProps> {
    render() {
        return (
            <a href={this.props.url} className='item-url-square' target='_blank' rel="noreferrer noopener">
                <div className="item-card-square">
                    <div className="item-card-square__image">
                        <img src={this.props.image_url} alt=""/>
                    </div>
                    <div className="item-card-square__title">
                        {this.props.name}
                    </div>
                    <div className="item-card-square__artist" title={this.props.type}>
                        {this.props.type}
                    </div>
                </div>
            </a>
        );
    }
}
