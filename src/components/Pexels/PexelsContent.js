import React, { useState, useEffect } from 'react';

function PexelsContent({ pexelData, setPexelData }) {
	console.log(pexelData);

	useEffect(() => {
		fetch('/pexels')
			.then((response) => response.json())
			.then((data) => {
				setPexelsData(data);
                console.log(pexelsData);
			})
			.catch((error) => {
				console.error('Error fetching Pexels data:', error);
			});
	}, []);

	return (
		<div>
			{pexelData.map((mediaItem) => (
				<div key={mediaItem.id}>
					{mediaType === 'video' ? (
						<video controls>
							<source src={mediaItem.url} type={mediaItem.mimeType} />
							Your browser does not support the video tag.
						</video>
					) : (
						<img src={mediaItem.src.medium} alt={mediaItem.photographer} />
					)}
				</div>
			))}
		</div>
	);
}

export default PexelsContent;

// {/* <h1>What's Your Style?</h1>
// 			<div>
// 				{pexelsData.length === 0 ? (
// 					<p>Loading...</p>
// 				) : (
// 					pexelsData.map((item) => (
// 						<div key={item.id}>
// 							{item.duration ? ( 
// 								<video controls>
// 									<source src={item.url} type="video/mp4" />{' '}

// 									Your browser does not support the video tag.
// 								</video>
// 							) : (
// 								{/* <img src={item.src.medium} alt={item.alt} /> */}
// 							)}
// 						</div>
// 					))
// 				)}
// 			</div> */}
