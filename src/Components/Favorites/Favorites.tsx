import React from 'react';
import { useUserData } from '../../Context/UserDataContext';

// Import Components
import ItemsList from '../ItemsList/ItemsList';

// Import CSS file
import './Favorites.css';

export default function Favorites() {
    const { favorites } = useUserData();

    return (
        <div className="favorites">
            <ItemsList
                title="Favorites"
                items={favorites}
                renderComponent="strip"
            />
        </div>
    );
}