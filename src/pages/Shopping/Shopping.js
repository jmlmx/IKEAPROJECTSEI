import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from '../../utilities/items-api';
import * as ordersAPI from '../../utilities/order-api';
import CategoryList from '../../components/CategoryList/CategoryList';
import MenuList from '../../components/MenuList/MenuList';

export default function Shop({ user, setUser, cart, setCart }) {
	const [menuItems, setMenuItems] = useState([]);
	const [activeCat, setActiveCat] = useState('');

	const categoriesRef = useRef([]);

	useEffect(function () {
		async function getItems() {
			const items = await itemsAPI.getAll();
			categoriesRef.current = items.reduce((cats, item) => {
				const cat = item.category.name;
				return cats.includes(cat) ? cats : [...cats, cat];
			}, []);
			categoriesRef.current.unshift('Show All');
			setMenuItems(items);
			setActiveCat(categoriesRef.current[0]);
		}
		getItems();
		async function getCart() {
			const cart = await ordersAPI.getCart();
			setCart(cart);
		}
		getCart();
	}, []);
	console.log(menuItems);

	return (
		<main>
			<div>
				<CategoryList
					categories={categoriesRef.current}
					activeCat={activeCat}
					setActiveCat={setActiveCat}
				/>
			</div>
			<MenuList
				menuItems={menuItems.filter((item) => item.category.name === activeCat)}
			/>
		</main>
	);
}

//==== NEEDED COMPONENTS FOR SHOPPING SCREEN ====//
/*
    Logo
    USER PORTAL COMPONENT
    FOOTER COMPONENT
    NavBar

    - MENULIST STYLED WITH WHAT IS IN THE CATEGORY LISTS AND ITEM LISTS. 
    - CHECKOUT FEATURE
    - CART FEATURE   
    
    */
