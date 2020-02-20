import React from 'react'
import styles from './Comment.module.css';

const Comment = props => {
    return <div className={styles.com}>{props.text}</div>
}

export default Comment