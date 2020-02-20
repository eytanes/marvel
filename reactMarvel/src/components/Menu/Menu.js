import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Menu.module.css'

export const Menu = () => {
    return (
        <header>
            <div className={styles.menu}>
                <Link to="/" className={styles.link}>Home</Link>
                <Link to="/users" className={styles.link}>Users</Link>
            </div>
        </header>
    )
}