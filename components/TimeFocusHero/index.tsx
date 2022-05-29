import React from 'react'
import Image from 'next/image'
import styles from './index.module.scss'
import PickUService from '../../public/pickuservice.svg'

const TimeFocusHero = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <PickUService />
        <div className={styles.content}>
          <h1>Focused on Time Saving</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was
          </p>
          <button>Download the mobile app</button>
        </div>
      </div>
    </div>
  )
}

export default TimeFocusHero
