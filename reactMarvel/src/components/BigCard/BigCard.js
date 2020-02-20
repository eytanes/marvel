import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './BigCard.module.css'
import { getComments, saveComment } from '../utils/LocaleStorage'
import Comment from '../Comment'

class BigCard extends Component {
    state = {
        comment: '',
        allComments: []
    }

    onClose = () => {
        this.props.onCloseClick()
    }

    sendDataToParent = () => {
        this.props.onPassData('hello, I`m from your children. You clicked on the image!')
    }

    onCommentChange = event => {
        const value = event.target.value;
        if (!value.match(/[0-9]/g)) {
            this.setState({ comment: value });
        }
    }

    onSendClick = () => {
        const { comment, allComments } = this.state;
        if (comment.length > 0) {
            let comments = allComments;
            comments.push(comment);
            saveComment(this.props.id, comment);
            this.setState({ comment: '', allComments: comments });
        }
    }

    componentDidMount() {
        const comments = getComments(this.props.id);
        if (comments.length > 0)
            this.setState({ allComments: comments });
    }

    render() {
        const { title, description, thumbnail, comics } = this.props;
        const { allComments } = this.state;
        const { comment } = this.state;
        return (
            <div className={styles.card}>
                <div onClick={this.onClose} className={styles.close}>
                    X
                </div>
                <img src={thumbnail} onClick={this.sendDataToParent} className={styles.image} alt="hero logo" />
                <div className={styles.title}>{title}</div>
                <div>{description}</div>
                <h2>Comments</h2>
                <div>
                    {allComments.map((com, index) => {
                        return <Comment key={index} text={com} />
                    })}
                    {allComments.length === 0 && 'PAS DE COM'}
                </div>
                <div className={styles.textAreaComment}>
                    <textarea
                        className={styles.input}
                        onChange={this.onCommentChange}
                        value={comment.toUpperCase()}
                        placeholder="enter a comment"
                        type="text"
                    />
                    <button className={styles.button} onClick={this.onSendClick}>Send</button>
                </div>
                <div>
                    <ul>
                    {comics.items.map((com, index) => {
                    return <li key={index}>{com.name}</li>
                    })}
                    </ul>
                </div>
            </div>
        )
    }
}

BigCard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    onCloseClick: PropTypes.func,
}

BigCard.defaultProps = {
    title: 'Pas de titre',
    description: 'Pas de description',
}

export default BigCard
