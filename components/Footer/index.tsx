import React from 'react'
import Navbar from '../Navbar'
import styles from './index.module.scss'
import Facebook from '../../public/facebook.svg'
import Twitter from '../../public/twitter.svg'
import Instagram from '../../public/instagram.svg'
import Youtube from '../../public/youtube.svg'
import LinkedIn from '../../public/linkedin.svg'

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <Navbar noCTA />
      <ul>
        <li>Open Auto @ All Rights Reserved {new Date().getFullYear()}</li>
        <li>
          <ul datatype='links'>
            <li>Privacy Policy</li>
            <li>Terms of use</li>
            <li>Cookie Policy</li>
          </ul>
        </li>
        <li datatype='media'>
          <Facebook />
          <Twitter />
          <Youtube />
          <LinkedIn />
          <Instagram />
        </li>
      </ul>
    </div>
  )
}

export default Footer
