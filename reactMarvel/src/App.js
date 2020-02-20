import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//npm i react-router-dom
import './App.css'
import { NotFound, Search } from './pages'
import Menu from './components/Menu'
import Footer from './components/Footer'

const Users = (props) => {
    console.log(props)
    if (props.match.params.id) {
        return (
            <div>
                <div>Users Screen Page for {props.match.params.id}!</div>
            </div>
        )
    }
    return (
        <div>
            <div>Users Screen Page!</div>
        </div>
    )
}

const App = () => {
    return (
        <Router>
            <Menu />
            <Switch>
                <Route exact path="/" component={Search} />
                <Route exact path="/users" component={Users} />
                <Route exact path="/users/:id" component={Users} />
                <Route component={NotFound} />
            </Switch>
            <Footer />
        </Router>
    )
}

export default App
