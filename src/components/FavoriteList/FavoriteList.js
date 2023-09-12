import MenuListItem from '../MenuListItem/MenuListItem';
import styles from './FavoriteList.module.scss'
export default function FavoriteList({ favorites, handleAddToOrder, user, setUser }) {
  
  console.log(user)
  
  const isUserLoggedIn = user.isLoggedIn
  
  const userHasFaves = user.favorites.length > 0

    const favoriteItems = user.favorites.map((fave) =>
      <MenuListItem
      key={fave._id}
      handleAddToOrder={handleAddToOrder}
      favoriteItem={fave}
      />
    );
    // Link favorites to logged in user here?
    return (
      <main className={styles.FavoriteList}>
        {isUserLoggedIn ? (
          userHasFaves ? (
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