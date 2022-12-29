import React, {Component} from "react";
import {Navbar} from "react-bootstrap";

// Import react components
import SideNavbarMenu from "../SideNavbarMenu/SideNavbarMenu";
import PlaylistMenu from "../PlaylistMenu/PlaylistMenu";

// Import CSS files
import './SidebarMenu.css'; // SidebarMenu CSS

// Import utility functions
import { UserPlaylist } from "../../utils/types";

// Define type of props
interface IProps {
    handlePageChange: (page: string) => void;
    playlists: UserPlaylist[];
    handlePlaylist: (playlist: UserPlaylist) => void;
}

export default class SidebarMenu extends Component<IProps> {
    render() {
        return (
            <Navbar
				id='sidenav-1'
				className='sidenav'
				data-mdb-color='dark'
				role='navigation'
				data-mdb-hidden='false'
				data-mdb-accordion='true'
			>
                <div className='logo'>
                    <img
                        src={process.env.PUBLIC_URL + '/main-images/logo.png'}
                        alt='TunesOh'
                    />
                </div>
                <SideNavbarMenu handlePageChange={this.props.handlePageChange} handlePlaylist={this.props.handlePlaylist} />
                <hr className="sidenavDivider"/>
                <PlaylistMenu playlists={this.props.playlists} />
                <div className="copyright">
                    <p>All design and code copyright reserved</p>
                    <p>&copy; By Abhay Parihar, 2022</p>
                </div>
            </Navbar>
        );
    }
}