import React from 'react';
import Link from 'next/link';
import styles from '../styles/navbar.module.css';


function Navbar() {
  return (
    <div className={styles.navbar}>
    <div className={styles.name}>
        <p>AQSA FAISAL</p>
    </div>
    <div className={styles.navlinks}>
        <ul>
        <Link href='#about'>  <li>About</li> </Link>
        <Link href='#services'> <li>Services</li> </Link>
        <Link href='#portfolio'> <li>Portfolio</li> </Link> 
        <Link href='#contact'>  <li>Contact</li> </Link>
        
        </ul>
    </div>
    <div className={styles.button}>
        <button className={styles.btn}>Let's Chat</button>
    </div>
    
    </div>
  )
}

export default Navbar;
