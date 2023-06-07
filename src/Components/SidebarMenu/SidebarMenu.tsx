import React, {Component} from "react";
import {Navbar} from "react-bootstrap";

// Import react components
import PlaylistMenu from "../PlaylistMenu/PlaylistMenu";
import SideNavbarMenu from "../SideNavbarMenu/SideNavbarMenu";
import Logo from "./Logo";

// Import CSS files
import './SidebarMenu.css'; // SidebarMenu CSS

// Import utility functions
import { UserPlaylist } from "../../@types/user";

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
                    <Logo />
                </div>
                <SideNavbarMenu handlePageChange={this.props.handlePageChange} handlePlaylist={this.props.handlePlaylist} />
                <div className="copyright">
                    <p>All design and code copyright reserved</p>
                    <p>&copy; By Abhay Parihar, 2022</p>
                </div>
            </Navbar>
        );
    }
}