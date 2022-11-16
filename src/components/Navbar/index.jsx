import React, { useState } from 'react'
import { StyledNavbar } from './style'
import Logo from '../../assets/logo.svg'
import X from '../../assets/x'
import Chevron from '../../assets/Chevron'
import metaMask from '../../assets/metamask.svg'
import wallet from '../../assets/wallet.svg'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
// import X from '../../assets/x.svg'
const Navbar = () => {
  const [isClicked,setIsClicked] = useState(false)
  const [isMenuClicked,setIsMenuClicked] = useState(false)

  const handleClick = () =>{
    setIsClicked(!isClicked)
    setIsMenuClicked(!isMenuClicked)
  }
  return (
    <StyledNavbar>
        <div className='logo'>
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

        <div className="btn" onClick={()=> setIsClicked(!isClicked)}>Connect wallet</div>
        {isClicked && (
          <div className="modal-bg">
            <div className="modal">
              <div className="modal-head">
                <h4>Connect Wallet</h4>
                <div className='X' onClick={()=>setIsClicked(!isClicked)}>
                  <X />
                </div>
              </div>

              <div className="modal-body">
                <p>Choose your preferred wallet:</p>
                <div className="meta-mask">
                  <div className="text">
                    <img src={metaMask} alt="meta mask" />
                    <h4>Metamask</h4>
                  </div>
                  <div className='vector'>
                    <Chevron />
                  </div>
                </div>

                <div className="wallet">
                  <div className="text">
                    <img src={wallet} alt="wallet connect" />
                    <h4>WalletConnect</h4>
                  </div>
                  <div className='vector'>
                    <Chevron />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      <div className="menu" onClick={()=>{setIsMenuClicked(!isMenuClicked)}}>
        <AiOutlineMenu size={30} style={{color:'#A02279'}} />
      </div>
      {isMenuClicked && (
        <div className="menu-links">
          <div className='close' onClick={()=>setIsMenuClicked(!isMenuClicked)}>
            <AiOutlineClose size={30} style={{color:'white'}}/>
          </div>
          <div className="menu-link">
            <a href="/">Home</a>
            <a href="/placetostay">Place to stay</a>
            <a href="/">NFTs</a>
            <a href="/">Community</a>
            <div className="m-btn" onClick={handleClick}>Connect wallet</div>
          </div>
      </div>
      )}
    </StyledNavbar>
  )
}

export default Navbar