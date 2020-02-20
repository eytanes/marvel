import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './Card.module.css'
import BigCard from '../BigCard'
import { getImage } from '../api/marvelAPI'

const checkHero = hero => {
    if (hero) return 'blue'
    return 'red'
}

class Card extends Component {
    state = {
        isBigOpen: false,
    }

    onClick = () => {
        this.setState({ isBigOpen: true })
    }

    onBigCardCloseClick = () => {
        this.setState({ isBigOpen: false })
    }

    onGetDataFromChildren = data => {
        alert(data)
    }

    render() {
        const { id, title, description, isHero, thumbnail, comics } = this.props;
        const image = getImage(thumbnail)
        const { isBigOpen } = this.state
        return (
            <>
                <div className={styles.card} onClick={this.onClick}>
                    <img src={image} className={styles.image} style={{ backgroundColor: checkHero(isHero) }} alt="hero logo" />
                    <div className={styles.title}>{title}</div>
                    <div>{description}</div>
                </div>
                {isBigOpen && (
                    <BigCard
                        id={id}
                        title={title}
                        description={description}
                        thumbnail={image}
                        onCloseClick={this.onBigCardCloseClick}
                        onPassData={this.onGetDataFromChildren}
                        comics={comics}
                    />
                )}
            </>
        )
    }
}

Card.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    isHero: PropTypes.bool,
}

Card.defaultProps = {
    title: 'Pas de titre',
    description: 'Pas de description',
    isHero: false,
}

export default Card
