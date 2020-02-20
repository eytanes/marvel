import React from 'react'
import styles from './CardList.module.css'
import Card from '../Card'

const CardList = (props) => {
    const marvel = props.data;
    return (
        <div className={styles.cardlist}>
            {marvel.map(element => {
                console.log(element)
                return (
                    <Card
                        key={element.id}
                        id={element.id}
                        title={element.name}
                        description={element.description}
                        isHero={false}
                        thumbnail={element.thumbnail}
                        comics={element.comics}
                    />
                )
            })}
        </div>
    )
}

export default CardList
