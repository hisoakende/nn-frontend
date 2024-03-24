import './Header.css'

import profileImage from '/profile.png'


function Header() {
  return (
    <header>
      <h1 id="logo-text">
        NEURORUNNER
      </h1>
      <img id="profile-image" src={profileImage} alt="Profile picture" />
    </header>
  )
}

export default Header
