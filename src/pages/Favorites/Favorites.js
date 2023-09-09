import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MenuListItem from '../../components/MenuListItem/MenuListItem';
import * as ItemsAPI from '../../utilities/items-api'
export default function FavoritesPage({ user, setUser }) {
    /*--- State --- */
    const [favorites, setFavorites] = useState([]);
    /*--- Side Effects --- */
    useEffect(function () {
        // Load favorites (Boolean === true)
        async function fetchFavoriteItems() {
            const favorites = await ItemsAPI.getFavorites();
            setFavorites(favorites);
        }
        fetchFavoriteItems();
    }, []);
    console.log(favorites)
    /*--- Event Handlers --- */
    function handleSelectFavorite(favorite) {
        setActiveFavorites(favorite);
    }
    /*--- Rendered UI --- */
    return (
        <main>
            <aside>
                favorites
            </aside>
        </main>
    );
}








