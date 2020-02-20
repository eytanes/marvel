import React from 'react'
import styles from './Header.module.css'

import image from '../../image/marvel.png'

const Header = () => {
    return (
        <div className={styles.header}>
            <h1>Heros Marvel</h1>
            <img src={image} className={styles.image} alt="my logo" />
        </div>
    )
}

export default Header
