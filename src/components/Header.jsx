import './Header.css'

import profileImage from '/profile.png'


function Header() {
  return (
    <header>
      <h1>
        NEURORUNNER
      </h1>
      <img src={profileImage} alt="User avatar" />
    </header>
  )
}

export default Header
