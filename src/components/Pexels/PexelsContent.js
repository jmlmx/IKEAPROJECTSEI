import React, { useState, useEffect } from 'react';

function PexelsContent({ mediaType, query }) {
	const [pexelData, setPexelData] = useState([]);

	useEffect(() => {
		const pexelApiUrl = 'https://api.pexels.com/videos/search';

		const params = {
			per_page: 10,
			media_type: mediaType,
			query: query
		};

		const apiKey = process.env.PEXELSKEY;
		params.api_key = apiKey;

		const url = `${pexelApiUrl}?${new URLSearchParams(params).toString()}`;

		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				setPexelData(data.videos);
			})
			.catch((error) => {
				console.error('Data not found', error);
			});
	}, [mediaType, query, pexelApiUrl]);

	return (
		<div>
           {pexelData.map((dataItem) => (
            <div key={dataItem.id}>
                {mediaType === 'video' ? (
                    <video controls>
                        <source src={dataItem.url} type={dataItem.mimeType} />
                        Your Browser does not support the video Tag.
                    </video>
                ) : (
                    <img src={dataItem.image_url} alt={dataItem.alt_text} />
                )}
            </div>
           ))}
        </div>
	);
}

export default PexelsContent
