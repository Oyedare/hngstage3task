import React from 'react'
import { StyledContainer } from '../styles/PTS.styled'
import setting from '../assets/setting.svg'
import img9 from '../assets/9.jpg'
import img10 from '../assets/10.jpg'
import img11 from '../assets/11.jpg'
import img12 from '../assets/12.jpg'
import img13 from '../assets/13.jpg'
import img14 from '../assets/14.jpg'
import img15 from '../assets/15.jpg'
import img16 from '../assets/16.jpg'
import img17 from '../assets/17.jpg'
import img18 from '../assets/18.jpg'
import img19 from '../assets/19.jpg'
import img20 from '../assets/20.jpg'
import img21 from '../assets/21.jpg'
import img22 from '../assets/22.jpg'
import img23 from '../assets/23.jpg'
import img24 from '../assets/24.jpg'
const PlaceToStay = () => {
  const images = [img9,img10,img11,img12,img13,img14,img15,img16,img17,img18,img19,img20,img21,img22,img23,img24]
  return (
    <StyledContainer>
      <div className='top'>
        <div className='list'>
          <p>Resturant</p>
          <p>Cottage</p>
          <p>Castle</p>
          <p>fantast city</p>
          <p>beach</p>
          <p>Carbins</p>
          <p>Off-grid</p>
          <p>Farm</p>
        </div>

        <select name="" id="">
          <option value="">Resturant</option>
          <option value="">Cottage</option>
          <option value="">Castle</option>
          <option value="">fantast city</option>
          <option value="">beach</option>
          <option value="">Carbins</option>
          <option value="">Off-grid</option>
          <option value="">Farm</option>
        </select>

        <div className='location'>
          <p>Location</p>
          <img src={setting} alt="" />
        </div>
      </div>
      <div className="images">
        {images.map((image)=>(
          <img src={image} alt="nft" />
        ))}
      </div>
    </StyledContainer>
  )
}

export default PlaceToStay