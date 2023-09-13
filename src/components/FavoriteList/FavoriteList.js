import MenuListItem from '../MenuListItem/MenuListItem';
import styles from './FavoriteList.module.scss';
export default function FavoriteList({ favorites, handleLikeButton, user }) {
	console.log(user);
	console.log(favorites);

	async function handleAddToOrder(itemId) {
		const updatedCart = await ordersAPI.addItemToCart(itemId);
		setCart(updatedCart);
	}

	const isUserLoggedIn = user.isLoggedIn;

	//const userHasFaves = user.favorites.length > 0;
	let favoriteItems = null;

	// Link favorites to logged in user here?
	return (
		<main className={styles.FavoriteList}>
			{isUserLoggedIn ? (
				!user.favorites ? (
					<span className={styles.noFavorites}>You Have No Favorites</span>
				) : (
					(favoriteItems = user.favorites.items.map(fave => (
						<MenuListItem
							key={fave._id}
							handleAddToOrder={handleAddToOrder}
							handleLikeButton={handleLikeButton}
							favoriteItem={fave}
						/>
					)))
				)
			) : (
				<span className={styles.noUser}>Log In To See Or Add Favorites</span>
			)}
		</main>
	);
}
