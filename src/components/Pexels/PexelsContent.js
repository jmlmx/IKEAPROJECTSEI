import React, { useState, useEffect } from 'react';

function PexelsContent({ mediaType, query, apiUrl }) {
	const [pexelData, setPexelData] = useState([]);

	useEffect(() => {
		const params = {
			per_page: 10,
			media_type: mediaType,
			query: query
		};

		const apiKey = process.env.PEXELSKEY;
		params.api_key = apiKey;

		const url = `${apiUrl}?${new URLSearchParams(params).toString()}`;

		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				setPexelData(mediaType === 'video' ? data.videos : data.photos);
			})
			.catch((error) => {
				console.error('Data not found', error);
			});
	}, [mediaType, query, apiUrl]);

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
