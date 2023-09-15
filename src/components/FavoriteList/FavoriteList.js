import MenuListItem from '../MenuListItem/MenuListItem';
import * as ItemsAPI from '../../utilities/items-api'
import { useEffect } from 'react';
import styles from './FavoriteList.module.scss';
export default function FavoriteList({ favorites, handleLikeButton, user, setFavorites }) {
	// console.log(user);
	console.log(favorites);

	async function handleAddToOrder(itemId) {
		const updatedCart = await ordersAPI.addItemToCart(itemId);
		setCart(updatedCart);
	}
	useEffect(function () {
        // Load favorites (Boolean === true)
        async function fetchFavoriteItems() {
            const favorites = await ItemsAPI.getFavorites();
            setFavorites(favorites);
        }
        fetchFavoriteItems();
    }, [favorites])
	
	return (
		<main className={styles.FavoriteList}>
			{!user.favorites ? (
				<span className={styles.noFavorites}>You Have No Favorites</span>
			) : (
				favorites.items.map((fave) => (
					<MenuListItem
						key={fave._id}
						handleAddToOrder={handleAddToOrder}
						handleLikeButton={handleLikeButton}
						menuItem={fave}
					/>
				))
			)}
		</main>
	);
}
