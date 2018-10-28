import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Example from './Example';

// normally the component assosiated to a route should be an independent container component
const renderExample = () => <Example text="This is an example." />;

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Route exact path="/" component={ renderExample } />
				</div>
			</Router>
    );
	}
}

export default App;
