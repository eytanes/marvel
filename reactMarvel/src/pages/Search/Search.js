import React, { Component } from 'react'
import Header from '../../components/Header'
import CardList from '../../components/CardList'
import Search from '../../components/Search'

class SearchScreen extends Component {
    state = {
        data: []
    }

    onGetData = data => {
        this.setState({ data })
    }

    render() {
        const { data } = this.state
        return (
            <div style={{textAlign: 'center'}}>
                <Header />
                <Search getResults={this.onGetData} />
                <CardList data={data} />
            </div>
        )
    }
}

export default SearchScreen
