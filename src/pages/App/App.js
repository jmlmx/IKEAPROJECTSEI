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
	/*if (url = /favorites) {
		delete item from faves list
	} else {
		add item to faves list
	}
	*/
	async function handleLikeButton() {
		const currentURL = window.location.href;
		if (currentURL.includes('/favorites')) {
			async function addToFavorites(itemId) {
				const favorites = await ItemsAPI.getFavorites(itemId);
				setFavorites(favorites);
			}
			addToFavorites();
		} else {
			if (currentURL.includes('/shop')) {
				async function removeFromFavorites(itemId) {
					const favorites = await ItemsAPI.removeFromFavorites(itemId);
					setFavorites(favorites);
				}
				removeFromFavorites();
			}
		}
	}

	return (
		<main>
			<NavBar />
			<UserPortal
				user={user}
				setUser={setUser}
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
				<Route path="/*" element={<Navigate to="/ikea" />} />
			</Routes>
			<Footer />
		</main>
	);
}
