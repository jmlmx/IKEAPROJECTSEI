import styles from './UserPortal.module.scss'
import { useState,  useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getUser } from '../../utilities/users-services'
//import Logo from '../../components/Logo/Logo' 

export default function UserPortal({ user, setUser }) {
    const [userInfo, setUserInfo] = useState(null)
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const userData = await getUser(user)
                setUserInfo(userData)
            } catch (error) {
                setErrorMessage('Could Not Find Account Information')
            }
        }
        fetchUserInfo()
    },[user])
    
    return (
        <div className={styles.portalcontainer}>
            {userInfo && userInfo.isLoggedIn ? (
                <span className={styles.loggedin}>
                    <Link  to='/account' className='userlink'>Hey, {userInfo.name}</Link>
                    <Link to='/favorites' className='favbtn'>likes</Link>
                    <Link to='/cart' className={styles.cart-btn}>cart</Link>
                </span>
                
            ) : (
                <span className={styles.notloggedin}>
                <Link className='loginbtn'>Login/Signup</Link>
                <Link to='/cart' className={styles.cart-btn}>cart</Link>
                </span>
            )}
        </div>
    )
}