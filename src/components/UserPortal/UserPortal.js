import styles from './UserPortal.module.scss'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { logOut } from '../../utilities/users-services'
export default function UserPortal({ user, setUser }) {
    const [errorMessage, setErrorMessage] = useState('')

    function handleLogOut() {
        logOut()
        createGuestUser()
        // possibly take user back to homepage
    }

    return (
        <div className={styles.portalcontainer}>
            {user && user.isLoggedIn ? (
                <div className={styles.loggedin}>
                    <Link  to='/account' className='userlink'>Hey, {user.username}</Link>
                    <Link to='/favorites' className='favbtn'>likes</Link>
                    <Link to='/cart' className={styles.cartbtn}>cart</Link>
                    <button className='logout-btn' element={<Navigate to='/ikea' />} onClick={handleLogOut}>Log Out</button>
                </div>
                
            ) : (
                <div className={styles.notloggedin}>
                <Link to='/login' className='loginbtn'>Login/Signup</Link>
                <Link to='/cart' className={styles.cartbtn}>Cart</Link>
                </div>
            )}
        </div>
    )
}