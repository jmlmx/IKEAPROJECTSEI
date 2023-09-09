//==== NEEDED COMPONENTS FOR FAVORITES SCREEN ====//
    /*
    Logo
    USER PORTAL COMPONENT
    FOOTER COMPONENT
    NavBar

    -  Using same functionality as order history: Items will have "is liked boolean" defalted to false.
        Only becomes true when liked checkbox under item is clicked. (Checkbox created in MenuListItem)
        Ternary: If checkbox is checked, push top array of objects named favorites.
    
    */
import styles from './Favorites.module.scss'
import { useState } from 'react'
import Logo from '../../components/Logo/Logo'
import UserPortal from '../../components/UserPortal/UserPortal'
import NavBar from '../../components/NavBar/NavBar'

export default function Favorites({ user, setUser, handleAddToOrder, }) {
    const [favorites, setFavorites] = useState(null)

    
    return (

    )
}