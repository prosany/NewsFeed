import React from 'react';
import ProfileImage from '../../images/profile1.jpg';

const Profile = () => {
  return (
    <div className="sidebar__profile d-flex ">
      <div className="img">
        <img src={ProfileImage} alt="profile" />
      </div>
      <div className="profile-desc">
        <h3>Hi, Reader</h3>
        <span>Here's your news!</span>
      </div>
    </div>
  );
};

export default Profile;
