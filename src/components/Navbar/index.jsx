import React from 'react'
import { StyledNavbar } from './style'
import Logo from '../../assets/logo.svg'
const Navbar = () => {
  return (
    <StyledNavbar>
        <div>
            <a href="/">
                <img src={Logo} alt="metabnb" />
            </a>
        </div>

        <div className="nav-links">
            <a href="/">Home</a>
            <a href="/placetostay">Place to stay</a>
            <a href="/">NFTs</a>
            <a href="/">Community</a>
        </div>

        <div className="btn">Connect wallet</div>
    </StyledNavbar>
  )
}

export default Navbar