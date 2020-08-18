import React, { Component } from 'react'
import { Ellipsis } from 'react-spinners-css';
import axios from 'axios'
import styles from './Search.module.css'
import { findCharacter } from '../api/marvelAPI'

class Search extends Component {
    state = {
        search: '',
        isLoading: false
    }

    onChange = async (event) => {
        const value = event.target.value;
        this.setState({search: value});
        if(value.length > 1) {
            this.setState({isLoading: true});
            const request = findCharacter(value)
            const response = await axios.get(request)
            this.setState({isLoading: false});
            this.props.getResults(response.data.data.results)
        }
    }

    render(){
        const { search, isLoading } = this.state;
        return(
            <div className={styles.bg}>
            <input className={styles.input} onChange={this.onChange} value={search} placeholder="chercher un super-héros"/>
            {isLoading && <Ellipsis />}
            </div>
        )
    }
}

export default Search
