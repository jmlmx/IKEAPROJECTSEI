//import styles from the scss file
import styles from './MenuListItem.module.scss';
import favoriteListItem from '../../components/FavoriteListItem/FavoriteListItem'

//write export function for menu list items
export default function MenuListItem({ menuItem, handleAddToOrder, handleLikeButton }) {
	console.log('MENUITEM', menuItem);
	return (
		<div className={styles.MenuListItem}>
			{/* img src controls the size and appearance of pictures for items */}
			<img src={menuItem.emojiURL} width="200" height="200" />
			<div className={styles.name}>{menuItem.name}</div>
			<div className={styles.buy}>
				<span>${menuItem.price.toFixed(2)}</span>
				<button
					className="btn-sm"
					onClick={() => handleAddToOrder(menuItem._id)}
				>
					ADD TO CART
				</button>
				<button onClick={() => handleLikeButton(menuItem._id)}>{"💛"}</button>
			</div>
		</div>
	);
}
