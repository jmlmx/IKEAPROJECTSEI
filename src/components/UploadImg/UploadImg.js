import React, { useState } from 'react';

function ProfileImageUpload({ onImageUpload }) {
  const [imgfile, uploadimg] = useState([]);
  // stores the state of the user's image
  const [userProfileImage, setUserProfileImage] = useState(null);

  const imgFilehandler = (e) => {
    if (e.target.files.length !== 0) {
      const newImage = URL.createObjectURL(e.target.files[0]);
      uploadimg((prevImages) => [...prevImages, newImage]);
      setUserProfileImage(newImage);
      onImageUpload(newImage); // Pass the uploaded image to the parent component
    }
  };

  return (
    <div>
      <center>
        <h4>Upload Profile Picture</h4>
        <input type="file" onChange={imgFilehandler} />
        <hr />
        <h4>Preview</h4>
        {userProfileImage && (
          <img src={userProfileImage} alt="User Profile" width="200" height="200" />
        )}
      </center>
    </div>
  );
}
//I promise i will carry this team harder
export default ProfileImageUpload;
