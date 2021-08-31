import React from 'react';
import profileImage from 'assets/profile-image.png';

export default function Schedule() {
  return (
    <>
      <div id="schedule">
        <img src={profileImage} alt="Profile image" />
        <a href="" class="link">
          Sarah’s day care available now in North Sydney
        </a>
        <p>Wednesday, Thursday, Friday - 7:30 - 5:30</p>
      </div>
    </>
  );
}
