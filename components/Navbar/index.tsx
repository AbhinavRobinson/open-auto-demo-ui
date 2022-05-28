import React from 'react'
import styles from './index.module.scss'
import Logo from '../../public/logo.svg'
import Call from '../../public/call.svg'
import Email from '../../public/email.svg'

const Navbar = () => {
  return (
    <nav className={styles.wrapper}>
      <ul>
        <li className={styles.logo}>
          <Logo />
        </li>
        <li>
          <ul>
            <li datatype='text'>
              <Call />
              +769 586 4558
            </li>
            <li datatype='text'>
              <Email />
              service@openauto.ca
            </li>
            <li>
              <button>Download the mobile app</button>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
