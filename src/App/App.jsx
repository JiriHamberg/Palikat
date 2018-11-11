import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { RotatingCube } from './Scenes'


import { Blocks } from './Scenes';

class App extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path="/" component={ Blocks } />
				</Switch>
			</Router>
		);
	}
}

export default App
