import React, {Component} from "react";

// Import css files
import './PlaylistMenu.css'; // PlaylistMenu CSS

export default class PlaylistMenu extends Component {
    render() {
        return (
            <ul className="playlistMenu">
                <li>Playlist #1</li>
                <li>Playlist #2</li>
                <li>Playlist #3</li>
                <li>Playlist #4</li>
                <li>Playlist #5</li>
                <li>Playlist #6</li>
            </ul>
        );
    }
}
