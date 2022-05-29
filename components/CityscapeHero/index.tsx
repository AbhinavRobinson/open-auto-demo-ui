import React from 'react'
import Image from 'next/image'
import styles from './index.module.scss'
import SubmitForm from '../SubmitForm'
import HoverLogo from '../../public/hoverlogo.svg'
import Facebook from '../../public/facebook.svg'
import Twitter from '../../public/twitter.svg'
import Instagram from '../../public/instagram.svg'
import Youtube from '../../public/youtube.svg'
import LinkedIn from '../../public/linkedin.svg'

const CityscapeHero = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.content}>
          <h1>Vehicle Maintainance From The Comfort Of Your Home</h1>
          <p>
            Open Auto Soothes the hassle of maintaining your vehicle and helps
            you deal with unexpected repairs worry-free.
          </p>
          <SubmitForm />
        </div>
        <Image
          src='/Pickup_Illustration.png'
          alt='city scape pickup illustration'
          width={800}
          height={600}
        />
      </div>
      <div className={styles.submenu}>
        <div className={styles.logo}>
          <HoverLogo />
        </div>
        <div className={styles.media}>
          <Facebook />
          <Twitter />
          <Youtube />
          <LinkedIn />
          <Instagram />
        </div>
      </div>
    </div>
  )
}

export default CityscapeHero
