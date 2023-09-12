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
import * as ItemsAPI from '../../utilities/items-api';

import HomeScreen from '../HomeScreen/HomeScreen';
import Shop from '../Shopping/Shopping';
import Cart from '../Cart/Cart';

import Footer from '../../components/Footer/Footer';
import UserPortal from '../../components/UserPortal/UserPortal';
import NavBar from '../../components/NavBar/NavBar';
import AuthPage from '../../pages/AuthPage/AuthPage';
import Favorites from '../../pages/Favorites/Favorites';
<<<<<<< HEAD
=======
import Checkout from '../../pages/Checkout/Checkout';
import AboutUs from '../../pages/AboutUs/AboutUs'
>>>>>>> 5f3faf0bb66c163cbc58ff0423f2b6c9cb178b61

export default function App() {
	const [pexelsData, setPexelsData] = useState([]);
	const [user, setUser] = useState(getUser());
	const [cart, setCart] = useState(null);
	const [favorites, setFavorites] = useState(null);
	const navigate = useNavigate();
	let location = useLocation();

	useEffect(() => {
		if (!user) {
			createGuestUser();
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
		console.log('Guest user created', guestUser);
	}

	useEffect(() => {
		async function getCartItems() {
			const cart = await ordersAPI.getCart();
			setCart(cart);
		}
		getCartItems();
	}, []);

	async function handleChangeQty(itemId, newQty) {
		const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
		setCart(updatedCart);
	}
	async function removeFromFavorites(itemId) {
		const updatedFavorites = await ItemsAPI.removeFromFavorites(itemId);
		setFavorites(updatedFavorites);
	}
	async function addToFavorites(itemId) {
		const updatedFavorites = await ItemsAPI.addToFavorites(itemId);
		setFavorites(updatedFavorites);
	}
	
	async function handleLikeButton() {
		const currentURL = window.location.href;
		if (currentURL.includes('/favorites')) {
			const Item = await ItemsAPI.getById(Item._id)
			addToFavorites(Item);
		} else {
			if (currentURL.includes('/shop')) {
				const Item = await ItemsAPI.getById(Item._id)
				removeFromFavorites(Item);
			}
		}
	}

	return (
		<main>
			<NavBar />
			<UserPortal
				user={user}
				setUser={setUser}
<<<<<<< HEAD
=======
				setCart={setCart}
>>>>>>> 5f3faf0bb66c163cbc58ff0423f2b6c9cb178b61
				cart={cart}
				createGuestUser={createGuestUser}
			/>
			<Routes>
				<Route
					path="/ikea"
					element={
						<HomeScreen
							user={user}
							setUser={setUser}
							pexelsData={pexelsData}
							setPexelsData={setPexelsData}
						/>
					}
				/>
<<<<<<< HEAD
				<Route path="/shop" element={<Shop cart={cart} setCart={setCart} handleLikeButton={handleLikeButton} />} />
				<Route
					path="/favorites"
					element={
						<Favorites
							user={user}
							setUser={setUser}
							handleLikeButton={handleLikeButton}
						/>
					}
=======
				<Route path="/shop" element={<Shop cart={cart} setCart={setCart} />} />
				<Route
					path="/checkout"
					element={<Checkout user={user} cart={cart} order={cart} setCart={setCart}/>}
>>>>>>> 5f3faf0bb66c163cbc58ff0423f2b6c9cb178b61
				/>
				<Route
					path="/guestSignUp"
					element={
						<AuthPage
							user={user}
							setUser={setUser}
							cart={cart}
							setCart={setCart}
						/>
					}
				/>
				<Route
					path="/cart"
					element={
						<Cart
							handleChangeQty={handleChangeQty}
							user={user}
							setUser={setUser}
							cart={cart}
							setCart={setCart}
						/>
					}
				/>
				<Route
					path="/AboutUs" element={<AboutUs/>} />
				<Route path="/*" element={<Navigate to="/ikea" />} />
			</Routes>
			<Footer />
		</main>
	);
}
