import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as ItemsAPI from '../../utilities/items-api'
import FavoriteList from '../../components/FavoriteList/FavoriteList'
export default function Favorites({ user, handleLikeButton, favorites, setFavorites }) {
    console.log(user)
    console.log(favorites)
    useEffect(function () {
        // Load favorites (Boolean === true)
        async function fetchFavoriteItems() {
            const favorites = await ItemsAPI.getFavorites();
            setFavorites(favorites);
        }
        fetchFavoriteItems();
    }, [])

    return (
        <main>
            <div>
                <FavoriteList user={user} handleLikeButton={handleLikeButton} favorites={favorites} setFavorites={setFavorites}/>
            </div>
        </main>
    );
}
