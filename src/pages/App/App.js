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
import UserPortal from '../../components/UserPortal/UserPortal';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
	const [pexelsData, setPexelsData] = useState([]);
	const [user, setUser] = useState(getUser());
	const [cart, setCart] = useState(null);
	const navigate = useNavigate();
	let location = useLocation();

	useEffect(() => {
		if (!user) {
			createGuestUser();
			console.log('Guest user created', user)
		}
	}, []);

	async function createGuestUser() {
		const guestUserData = {
			username: 'guestuser',
			email: Math.round(Math.random() * 1000000000000) + '@guest.com',
			password: 'guestpassword'
		};
		localStorage.setItem('guestuser', guestUserData.email);
		const guestUser = await signUp(guestUserData);
		setUser(guestUser);
	}

	useEffect(() => {
		async function getCartItems() {
			const cart = await ordersAPI.getCart();
			setCart(cart);
		}
		getCartItems();
	}, []);

	return (
		<main>
			<NavBar />
			<UserPortal />
			<Routes>
			<Route path="/ikea" element={<HomeScreen pexelsData={pexelsData} setPexelsData={setPexelsData}/>} />
			<Route path="/*" element={<Navigate to="/ikea" />} />
			</Routes>
		</main>
	);
}
