import React from 'react'
import {StyledHome} from '../styles/Home.styled'
import hero from '../assets/header-hero.jpg'
import mbToken from '../assets/mb-token.svg'
import metaMask from '../assets/meta-mask.svg'
import opensea from '../assets/opensea.svg'
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.jpg'
import img6 from '../assets/6.jpg'
import img7 from '../assets/7.jpg'
import img8 from '../assets/8.jpg'
import bannerHero from '../assets/banner-lg-hero.png'
const Home = () => {
  const images = [img1,img2,img3,img4,img5,img6,img7,img8]
  return (
    <StyledHome>
      <div className="header">
        <div className="header-text">
          <h3>Rent a <span>Place</span> away from <span>Home</span> in the <span>Metaverse</span></h3>
          <p>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
          <div className="search">
            <input type="text" placeholder='Search for location'/>
            <button>Search</button>
          </div>
        </div>

        <div className='img'>
          <img src={hero} alt="hero" />
        </div>
      </div>

      <div className="banner-sm">
        <img src={mbToken} alt="" />
        <img src={metaMask} alt="" />
        <img src={opensea} alt="" />
      </div>

      <div className="inspiration">
        <h2>Inspiration for your next adventure</h2>
        <div className="images">
          {images.map((image)=>(
            <img src={image} alt="nft" />
          ))}
        </div>
      </div>

      <div className="banner-lg">
        <div className='text'>
          <h3>Metabnb NFTs</h3>
          <p>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
          <div>Learn more</div>
        </div>

        <div className='img'>
          <img src={bannerHero} alt="" />
        </div>
      </div>
    </StyledHome>
  )
}

export default Home