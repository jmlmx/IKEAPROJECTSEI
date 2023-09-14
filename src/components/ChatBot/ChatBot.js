import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ChatBot.module.scss';

function Chatbot() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleChat = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className={styles.chatbotWrapper}>
			<div
				className={`${styles.chatbot} ${isOpen ? styles.open : styles.closed}`}
			>
				<div className={styles.chatboxContainer}>
					<div className={styles.chatHeader}>
						<p>How Can I Help You?:</p>
					</div>
					<div className="chatLinks">
						<ul>
							<li>
								<Link to="/ikea">Take me to IKEA</Link>
							</li>
							<li>
								<Link to="/shop">Take me to the Shop</Link>
							</li>
							<li>
								<Link to="/checkout">Take me to Checkout</Link>
							</li>
							<li>
								<Link to="/guestSignUp">I want to sign in</Link>
							</li>
							<li>
								<Link to="/cart">View My Cart</Link>
							</li>
							<li>
								<Link to="/AboutUs">Learn About Us</Link>
							</li>
							<li>
								<Link to="/orders">View Order History</Link>
							</li>
							<li>
								<Link to="/Jobs">Explore Job Opportunities</Link>
							</li>
							<li>
								<a href="https://www.youtube.com/watch?v=oHg5SJYRHA0">
									Get Rewards
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<button className={styles.toggleButton} onClick={toggleChat}>
				Need Help?
			</button>
		</div>
	);
}

export default Chatbot;
