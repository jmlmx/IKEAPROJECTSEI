import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as ItemsAPI from '../../utilities/items-api'
import FavoriteList from '../../components/FavoriteList/FavoriteList'
export default function Favorites({ user, handleLikeButton, favorites, setFavorites }) {
    console.log(user)
    console.log(favorites)
    /*--- Rendered UI --- */
    return (
        <main>
            <div>
                <FavoriteList user={user} handleLikeButton={handleLikeButton} favorites={favorites} setFavorites={setFavorites}/>
            </div>
        </main>
    );
}
