import React, { useEffect } from 'react';

function PexelsContent({ pexelsData, setPexelsData }) {
	console.log(pexelsData);


	useEffect(() => {
		fetch('/pexels')
			.then((response) => {
				console.log('API Response:', response);
				return response.json();
			})
			.then((data) => {
				setPexelsData(data);
				console.log('Pexels Data:', data);
			})
			.catch((error) => {
				console.error('Error fetching Pexels data:', error);
			});
	}, []);

	return (
		<div>
			{pexelsData.length === 0 ? (
				<p>Loading...</p>
			) : (
				pexelsData.map((item) => (
					<div key={item.id}>
						{item.duration ? (
							<video controls>
								<source src={item.url} type="video/mp4" /> Your browser does not
								support the video tag.
							</video>
						) : (
							{
								/* <img src={item.src.medium} alt={item.alt} /> */
							}
						)}
					</div>
				))
			)}
		</div>
	);
}

export default PexelsContent;
