import MenuListItem from '../MenuListItem/MenuListItem';
import styles from './FavoriteList.module.scss'
export default function FavoriteList({ favorites, handleAddToOrder, user, setUser }) {
  console.log(user)
    const favoriteItems = user.favorites.map(fave =>
      <MenuListItem
      key={fave._id}
      handleAddToOrder={handleAddToOrder}
      favoriteItem={fave}
      />
    );
    const isLoggedIn = user.isLoggedIn
    const hasFaves = user.favorites.length > 0
    // Link favorites to logged in user here?
    return (
      <main className={styles.FavoriteList}>
        {isLoggedIn ? (
          hasFaves ? (
            {favoriteItems}
        ):(
            <span className={styles.noFavorites}>You Have No Favorites</span>
        )
        ) : (
          <span className={styles.noUser}>Log In To See Or Add Favorites</span>
        )}
      </main>
    );
    }