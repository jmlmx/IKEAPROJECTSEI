import React, { useState, useEffect } from 'react';
import {
	Routes,
	Route,
	Navigate,
	useNavigate,
	useLocation
} from 'react-router-dom';
import styles from './App.module.scss';
import { getUser, signUp } from '../../utilities/users-services';
import * as ordersAPI from '../../utilities/order-api';
import HomeScreen from '../HomeScreen/HomeScreen';
<<<<<<< HEAD
import UserPortal from '../../components/UserPortal/UserPortal'
=======
import NavBar from '../../components/NavBar/NavBar';
>>>>>>> 66f22c7f5e680ffd7118b69972384ea9cd753224

export default function App() {
<<<<<<< HEAD
	const [pexelsData, setPexelsData] = useState([]);


	return (
		<main>
		<div>IKEA Logo</div>
			<HomeScreen pexelsData={pexelsData} setPexelsData={setPexelsData}/>
=======
	const [user, setUser] = useState(getUser());
	const [showCart, setShowCart] = useState(false);
	const [showUserPanel, setShowUserPanel] = useState(false);
	const [cart, setCart] = useState(null);
	const navigate = useNavigate();

	let location = useLocation();

	useEffect(() => {
		if (!user) {
		  createGuestUser()
		}
	  }, [])

	  async function createGuestUser() {
		const guestUserData = {
			username: 'guestuser',
			email: Math.floor(Math.random() * 100000) + '@guest.com',
			password: 'guestpassword'
		} 
		localStorage.setItem('guestuser', guestUserData.email);
		const guestUser = await signUp(guestUserData)
		setUser(guestUser)
	  }

	  useEffect(() => {
		async function getCartItems() {
			const cart = await ordersAPI.getCart()
			setCart(cart)
		}
		getCartItems()
	  }, [])

	return (
		<main>
			<NavBar />
			<HomeScreen />
			<UserPortal />
>>>>>>> 4717f16e2b5e3c5ca606ff17d89fc2ce9a871e82
		</main>
	);
}
