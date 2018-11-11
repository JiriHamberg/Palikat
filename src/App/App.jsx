import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { RotatingCube } from './Scenes'

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" component={ RotatingCube } />
                </Switch>
            </Router>
        )
    }
}

export default App
