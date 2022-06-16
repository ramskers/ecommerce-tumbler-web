import React from 'react'
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai'
import 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 Tumblers By Sam All Rights Reserved</p>
      <div className='footer-icons'>
        <a className='icons' href="https://www.instagram.com/glam.bysamx/" target="_blank">
          <AiFillInstagram />
        </a>
        <a className='icons' href="https://www.facebook.com/sammi.oneill.18" target="_blank">
          <AiFillFacebook />
        </a>
      </div>
    </div>
  )
}

export default Footer