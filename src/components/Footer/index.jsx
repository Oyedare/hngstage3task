import React from 'react'
import { StyledFooter } from './style'
import logo from '../../assets/footer-logo.svg'
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import twitter from '../../assets/twitter.svg'
const index = () => {
  return (
    <StyledFooter>
        <div className='left'>
            <img src={logo} alt="logo" />
            <div className='socials'>
                <img src={facebook} alt="facebook" />
                <img src={instagram} alt="instagram" />
                <img src={twitter} alt="twitter" />
            </div>
            <p>&#169;2022 Metabnb</p>
        </div>
        <div className='right'>
            <div className="community">
                <h4>Community</h4>
                <p>NFT</p>
                <p>Tokens</p>
                <p>Landlords</p>
                <p>Discord</p>
            </div>
            <div className="places">
                <h4>Places</h4>
                <p>Castle</p>
                <p>Farms</p>
                <p>Beach</p>
                <p>Learn more</p>
            </div>
            <div className="about">
                <h4>About us</h4>
                <p>Road map</p>
                <p>Creators</p>
                <p>Career</p>
                <p>Contact us</p>
            </div>
        </div>
    </StyledFooter>
  )
}

export default index