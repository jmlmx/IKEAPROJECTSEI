import MenuListItem from '../MenuListItem/MenuListItem';
import styles from './FavoriteList.module.scss';
export default function FavoriteList({ favorites, handleLikeButton, user }) {
	// console.log(user);
	console.log(favorites);

	async function handleAddToOrder(itemId) {
		const updatedCart = await ordersAPI.addItemToCart(itemId);
		setCart(updatedCart);
	}
	
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
