import React, { useEffect, useState } from 'react';
import PexelsContent from '../../components/Pexels/PexelsContent';
import { set } from 'mongoose';

export default function HomeScreen({ pexelsData, setPexelsData }) {
	return (
		<div>
			<h1>What's Your Style?</h1>
			<PexelsContent pexelsData={pexelsData} setPexelsData={setPexelsData} />
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
