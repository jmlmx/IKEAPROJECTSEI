import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as ItemsAPI from '../../utilities/items-api'
import FavoriteList from '../../components/FavoriteList/FavoriteList'
export default function Favorites({ user, handleLikeButton }) {
    console.log(user)
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
    }, [favorites]);
    console.log(favorites)
    /*--- Event Handlers --- */
    function handleSelectFavorite(favorite) {
        setActiveFavorites(favorite);
    }
    /*--- Rendered UI --- */
    return (
        <main>
            <div>
                <FavoriteList user={user} handleLikeButton={handleLikeButton} favorites={favorites}/>
            </div>
        </main>
    );
}