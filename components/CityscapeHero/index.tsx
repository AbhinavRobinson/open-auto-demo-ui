import React from 'react'
import Image from 'next/image'
import styles from './index.module.scss'

const CityscapeHero = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.content}>
          <h1>Vechile Maintainance From The Comfort Of Your Home</h1>
          <p>
            Open Auto Soothes the hassle of maintaining your vehicle and helps
            you deal with unexpected repairs worry-free.
          </p>
        </div>
        <Image
          src='/Pickup_Illustration.png'
          alt='city scape pickup illustration'
          width={864}
          height={650}
        />
      </div>
      <div className={styles.submenu}></div>
    </div>
  )
}

export default CityscapeHero
