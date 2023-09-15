//import styles from the scss file
import styles from './MenuListItem.module.scss';

//write export function for menu list items
export default function MenuListItem({ menuItem, handleAddToOrder }) {
	console.log(menuItem);
	return (
		<div className={styles.MenuListItem}>
			{/* img src controls the size and appearance of pictures for items */}
			<img src={menuItem.emojiURL} className={styles.Image} width="200" height="200" />
			<div className={styles.Name}>{menuItem.name}</div>
			<div className={styles.Price}>
				<span>${menuItem.price.toFixed(2)}</span>
				<button
					className={styles.AddToCartBtn}
					onClick={() => handleAddToOrder(menuItem._id)}
				>
					ADD TO CART
				</button>
				<checkbox className={styles.HeartButton}>Like Box</checkbox>
			</div>
		</div>
	);
}
