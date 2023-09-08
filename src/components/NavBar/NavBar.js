import { Link } from "react-router-dom";
import styles from './NavBar.module.scss'
import Logo from "../Logo/Logo";

export default function NavBar({ AboutUs, Shop, Jobs }) {

    return (

        <main className={styles.NavBar}>
            <Logo className={styles.Logo} />
            <div className={styles.Link}>
                <ul>
                    <li><Link to='/HomeScreen'>About Us</Link></li>
                    <li><Link to='/HomeScreen'>Shop</Link></li>
                    <li><Link to='/HomeScreen'>Jobs</Link></li>
                </ul>
            </div>
        </main>
    )
}
