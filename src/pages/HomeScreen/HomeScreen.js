import React, { useEffect, useState } from 'react';

export default function HomeScreen(props) {
	const [pexelsData, setPexelsData] = useState([]);

	useEffect(() => {
		fetch('/pexels')
			.then((response) => response.json())
			.then((data) => {
				setPexelsData(data);
			})
			.catch((error) => {
				console.error('Error fetching Pexels data:', error);
			});
	}, []);

	return (
		<div>
			<h1>What's Your Style?</h1>
			<div>
				{pexelsData.length === 0 ? (
					<p>Loading...</p>
				) : (
					pexelsData.map((item) => (
						<div key={item.id}>
							{item.duration ? ( 
								<video controls>
									<source src={item.url} type="video/mp4" />{' '}

									Your browser does not support the video tag.
								</video>
							) : (
								{/* <img src={item.src.medium} alt={item.alt} /> */}
							)}
						</div>
					))
				)}
			</div>
		</div>
	);
}

//==== NEEDED COMPONENTS FOR HOME SCREEN ====//
/*
    Logo
    USER PORTAL COMPONENT
    FOOTER COMPONENT
    NavBar

    - PICTURES & VIDEOS from Pexel's API
    
    */
