import React, { useState } from 'react'
import { StyledNavbar } from './style'
import Logo from '../../assets/logo.svg'
import X from '../../assets/x'
import Chevron from '../../assets/Chevron'
import metaMask from '../../assets/metamask.svg'
import wallet from '../../assets/wallet.svg'
// import X from '../../assets/x.svg'
const Navbar = () => {
  const [isClicked,setIsClicked] = useState(false)
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
                  <div>
                    <Chevron />
                  </div>
                </div>

                <div className="wallet">
                  <div className="text">
                    <img src={wallet} alt="wallet connect" />
                    <h4>WalletConnect</h4>
                  </div>
                  <div>
                    <Chevron />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
    </StyledNavbar>
  )
}

export default Navbar