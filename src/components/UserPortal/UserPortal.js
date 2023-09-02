import styles from './UserPortal.module.scss'
import { useState,  useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getUser } from '../../utilities/users-services'
import UserLogOut from '../../components/UserLogOut/UserLogOut'
// import * as ordersAPI from 
//import Logo from '../../components/Logo/Logo' 
// may need more imports

export default function UserPortal({ user, setUser }) {
    const [userInfo, setUserInfo] = useState(null)
    const [error, setError] = useState('')

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const userData = await getUser(user)
                setUserInfo(userData)
            } catch (error) {
                setError('Could Not Find Account Information')
            }
        }
        fetchUserInfo()
    },[])
    
    return (
        <div className='profile-container'>
            {userInfo.isLoggedIn ? (
                <div className='loggedin'>
                    <p className='user-link'>Hey, {user.name}</p>
                    <Link to='/favorites' className='fav-btn'>{/*heart icon*/}</Link>
                    <Link to='cart-btn'></Link>
                </div>
                
            ) : (
                <div className='notloggedin'>
                <p className='login-btn'>Login/Signup</p>
                </div>
            )}
        </div>
    )
}