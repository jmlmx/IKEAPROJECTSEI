import React, { useState } from 'react';
import styles from './profile.module.scss';

export default function Profile() {
    const [profile, setProfile] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        location: '',
        aboutYou: '',
    });

    // State to track whether the user is in edit mode or read mode
    const [isEditMode, setIsEditMode] = useState(false);

    // Define functions for handling user input and editing
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfile({
            ...profile,
            [name]: value,
        });
    };

    const toggleEditMode = () => {
        setIsEditMode(!isEditMode);
    };

    const saveChanges = () => {
           
         // saves what is in the profile in edit mode  
        const editedProfileData = {
          firstName: profile.firstName,
          lastName: profile.lastName,
          phoneNumber: profile.phoneNumber,
          location: profile.location,
          aboutYou: profile.aboutYou,
            };
          
            // Update the profile state with the edited data
            setProfile(editedProfileData);
          
            // Store the edited data in localStorage for a frontend-only solution
            localStorage.setItem('userData', JSON.stringify(editedProfileData));
            
            // when the save button is clicked it will switch the edit mode to off
            setIsEditMode(false)
    };

    return (
        <main className={styles.profile}>
            <div>
                <h1>Profile Page</h1>
                {/* Show user info in read mode */}
                {!isEditMode ? (
                    <div>
                        <p>
                            <strong>First Name:</strong> {profile.firstName}
                        </p>
                        <p>
                            <strong>Last Name:</strong> {profile.lastName}
                        </p>
                        <p>
                            <strong>Phone Number:</strong> {profile.phoneNumber}
                        </p>
                        <p>
                            <strong>Location:</strong> {profile.location}
                        </p>
                        <p>
                            <strong>About You:</strong> {profile.aboutYou}
                        </p>
                        <button onClick={toggleEditMode}>Edit</button>
                    </div>
                ) : (
                    /* Edit user info in edit mode */
                    <div>
                        <label>
                            First Name:
                            <input
                                type="text"
                                name="firstName"
                                value={profile.firstName}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            Last Name:
                            <input
                                type="text"
                                name="lastName"
                                value={profile.lastName}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            Phone Number:
                            <input
                                type="text"
                                name="phoneNumber"
                                value={profile.phoneNumber}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            Location:
                            <input
                                type="text"
                                name="location"
                                value={profile.location}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            About You:
                            <textarea
                                name="aboutYou"
                                value={profile.aboutYou}
                                onChange={handleInputChange}
                            />
                        </label>
                        <button onClick={toggleEditMode}>Cancel</button>
                        <button onClick={saveChanges}>Save</button>
                    </div>
                )}
            </div>
        </main>
    );
}
