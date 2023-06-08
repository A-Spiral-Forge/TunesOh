import React from "react";
import {Navbar} from "react-bootstrap";

// Import react components
import SideNavbarMenu from "../SideNavbarMenu/SideNavbarMenu";
import Logo from "./Logo";

// Import CSS files
import './SidebarMenu.css'; // SidebarMenu CSS

export default function SidebarMenu(props: any) {
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
            <SideNavbarMenu />
            <div className="copyright">
                <p>All design and code copyright reserved</p>
                <p>&copy; By Abhay Parihar, 2022</p>
            </div>
        </Navbar>
    );
}